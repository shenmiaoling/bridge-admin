import React from 'react';
import ReactDOM from 'react-dom';
import Draft from 'draft-js';
import Immutable from 'immutable'
import EditorPlugin from 'draft-js-plugins-editor'
// import superagent from 'superagent'
import {API_URL} from '../../../constant'
require('./style.styl')
  const {
    CompositeDecorator,
    AtomicBlockUtils,
    ContentState,
    Editor,
    EditorState,
    Entity,
    RichUtils,
    DefaultDraftBlockRenderMap,
    convertToRaw,
  } = Draft;
  const {Map} = Immutable;
  class MyEditor extends React.Component {
    constructor(props) {
      super(props);
      const decorator = new CompositeDecorator([
        {
          strategy: findLinkEntities,
          component: Link,
        },
      ]);
      this.state = {
        editorState: EditorState.createEmpty(decorator),
        showURLInput: false,
        url: '',
        urlValue:'',
        urlType: '',
      };
      this.focus = () => this.refs.editor.focus();
      this.onChange = (editorState) => this.setState({editorState});
      this.promptForLink = this._promptForLink.bind(this);
      this.onURLChange = (e) => this.setState({urlValue: e.target.value});
      this.confirmLink = this._confirmLink.bind(this);
      this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
      this.addImage = this._addImage.bind(this);
      this.confirmMedia = this._confirmMedia.bind(this);
      this.handleKeyCommand = this._handleKeyCommand.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.toggleBlockType = (type) => this._toggleBlockType(type);
      this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    _promptForLink(e) {
      e.preventDefault();
      const {editorState} = this.state;
      const selection = editorState.getSelection();
      if (!selection.isCollapsed()) {
        this.setState({
          showURLInput: true,
          urlValue: '',
        }, () => {
          setTimeout(() => this.refs.url.focus(), 0);
        });
      }
    }
    _confirmLink(e) {
      e.preventDefault();
      const {editorState, urlValue} = this.state;
      const entityKey = Entity.create('LINK', 'MUTABLE', {url: urlValue});
      this.setState({
        editorState: RichUtils.toggleLink(
          editorState,
          editorState.getSelection(),
          entityKey
        ),
        showURLInput: false,
        urlValue: '',
      }, () => {
        setTimeout(() => this.refs.editor.focus(), 0);
      });
    }

    _onLinkInputKeyDown(e) {
      if (e.which === 13) {
        this._confirmLink(e);
      }
    }
    _handleKeyCommand(command) {
      const {editorState} = this.state;
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
    _toggleBlockType(blockType) {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    }
    _toggleInlineStyle(inlineStyle) {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }
    _confirmMedia(e) {
      this.refs.imageInput
      const {editorState, urlValue, urlType} = this.state;
      const entityKey = Entity.create(urlType, 'IMMUTABLE', {src: urlValue})
      this.setState({
        editorState: AtomicBlockUtils.insertAtomicBlock(
          editorState,
          entityKey,
          ' '
        ),
        showURLInput: false,
        urlValue: '',
      }, () => {
        setTimeout(() => this.focus(), 0);
      });
    }
    _promptForMedia(type,urlValue) {
      const {editorState} = this.state;
      this.setState({
        showURLInput: true,
        urlValue: urlValue,
        urlType: type,
      }, () => {
        this.confirmMedia()
      });
    }
    _addImage(event) {
      // superagent.post(`${API_URL}/addons/user_images?access_token=${this.props.accessToken}`).attach('upload',event.target.files[0]).end((error,response)=>{
      //   if (response.status==201) {
      //     // console.log(response.body.upload)
      //     this._promptForMedia('image',response.body.upload.url);
      //   }
      // })
    }
    handleClick(){
      console.log(this.state.editorState.getCurrentInlineStyle());
    }
    render() {
      const {editorState} = this.state;
      let urlInput
      if (this.state.showURLInput||this.props.active) {
        urlInput =
          <div style={styles.urlInputContainer}>
            <input
              onChange={this.onURLChange}
              ref="url"
              style={styles.urlInput}
              type="text"
              value={this.state.urlValue}
              onKeyDown={this.onLinkInputKeyDown}
            />
            <button onMouseDown={this.confirmLink} className="confirm">
              确认
            </button>
          </div>
      }
      let className = 'RichEditor-editor';
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' RichEditor-hidePlaceholder';
        }
      }
      return (
        <div className="container">
          <div className="project-detail">
            <div className="edit-title">编辑修改</div>
            <h3 className="basic-info">时间阶段</h3>
              <div style={styles.root}>
              <div className="RichEditor-root">
              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
              />
              <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />
              <div style={styles.buttons} className="add-image RichEditor-controls">
                <label
                  onClick={this.promptForLink}
                  className="RichEditor-styleButton iconfont icon-lianjie"></label>
              </div>
              <div className="RichEditor-controls">
                <label onClick={()=>{this.refs.imageInput.click()}} className="add-image iconfont icon-tupian"></label>
            </div>
            {urlInput}
              <div className={className} onClick={this.focus}>
                <Editor
                  blockRendererFn={mediaBlockRenderer}
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange}
                  // placeholder="Tell a story..."
                  ref="editor"
                  spellCheck={true}
                />
              </div>
            </div>
              <div style={styles.buttons}>
                <input onChange={this.addImage} ref="imageInput"type="file" style={{marginRight: 10,display: 'none'}}/>
              </div>
            </div>
            <div>
              <button className="login-btn" >上一步</button>
              <button className="login-btn" onClick={this.handleClick}>下一步</button>
            </div>
          </div>
        </div>

      );
    }
  }
  function findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          Entity.get(entityKey).getType() === 'LINK'
        );
      },
      callback
    );
  }

  const Link = (props) => {
    const {url} = Entity.get(props.entityKey).getData();
    return (
      <a href={url} style={styles.link}>
        {props.children}
      </a>
    );
  };

  const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };
  function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }
  class StyleButton extends React.Component {
    constructor() {
      super();
      this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }
    render() {
      let className = 'RichEditor-styleButton';
      className += ` ${this.props.className}`
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }
      return (
        <span className={className} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
  }
  const BLOCK_TYPES = [
    { style: 'ordered-list-item',class:"iconfont icon-listol"},
    { style: 'unordered-list-item',class:"iconfont icon-liebiao"},
    { style: 'blockquote',class:"iconfont icon-zuoyinhao"},
    { style: 'code-block',class:"iconfont icon-daima"},
  ];
  const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
    return (
      <div className="RichEditor-controls">
        {BLOCK_TYPES.map((type) =>
          <StyleButton
            key={type.class}
            active={type.style === blockType}
            onToggle={props.onToggle}
            style={type.style}
            className={type.class}
          />
        )}
      </div>
    );
  };
  var INLINE_STYLES = [
    { style: 'BOLD',class:"iconfont icon-jiacu"},
  ];
  const InlineStyleControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
      <div className="RichEditor-controls">
        {INLINE_STYLES.map(type =>
          <StyleButton
            key={type.class}
            active={currentStyle.has(type.style)}
            onToggle={props.onToggle}
            style={type.style}
            className={type.class}
          />
        )}
      </div>
    );
  };
  function mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  }
  const Image = (props) => {
    return <img src={props.src} style={styles.media}/>;
  };
  const Media = (props) => {
    const entity = Entity.get(props.block.getEntityAt(0));
    const {src} = entity.getData();
    const type = entity.getType();
    let media;
    if (type === 'image') {
      media = <Image src={src}/>;
    }
    return media;
  };
  const styles = {
    root: {
      fontFamily: '\'Georgia\', serif',
    },
    buttons: {
      marginBottom: 10,
    },
    urlInputContainer: {
      marginBottom: 10,
    },
    urlInput: {
      fontFamily: '\'Georgia\', serif',
      marginRight: 10,
      padding: 3,
    },
    editor: {
      border: '1px solid #ccc',
      cursor: 'text',
      minHeight: 80,
      padding: 10,
    },
    button: {
      marginTop: 10,
      textAlign: 'center',
    },
    link: {
      color: '#3b5998',
      textDecoration: 'underline',
    },
    media: {
      maxWidth: '100%',
    },
  };
module.exports = MyEditor
