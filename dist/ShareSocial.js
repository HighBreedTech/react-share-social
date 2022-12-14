"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FacebookShare = _interopRequireDefault(require("./ShareButtons/FacebookShare"));

var _TwitterShare = _interopRequireDefault(require("./ShareButtons/TwitterShare"));

var _RedditShare = _interopRequireDefault(require("./ShareButtons/RedditShare"));

var _HatenaShare = _interopRequireDefault(require("./ShareButtons/HatenaShare"));

var _InstapaperShare = _interopRequireDefault(require("./ShareButtons/InstapaperShare"));

var _LineShareButton = _interopRequireDefault(require("./ShareButtons/LineShareButton"));

var _LinkedinShareButton = _interopRequireDefault(require("./ShareButtons/LinkedinShareButton"));

var _LivejournalShareButton = _interopRequireDefault(require("./ShareButtons/LivejournalShareButton"));

var _MailruShareButton = _interopRequireDefault(require("./ShareButtons/MailruShareButton"));

var _EmailShareButton = _interopRequireDefault(require("./ShareButtons/EmailShareButton"));

var _WhatsappShareButton = _interopRequireDefault(require("./ShareButtons/WhatsappShareButton"));

var _TelegramShareButton = _interopRequireDefault(require("./ShareButtons/TelegramShareButton"));

var _OKShareButton = _interopRequireDefault(require("./ShareButtons/OKShareButton"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _styles.makeStyles)({
  container: {
    position: 'relative',
    background: 'white',
    color: '#000',

    /* width: 100%, */
    maxWidth: '568px',
    height: 'auto',
    padding: '30px',
    outline: 'none'
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Apple SD Gothic Neo',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '20px',
    lineHeight: '24px'
  },
  iconContainer: {
    /* width: 50%, */

    /* margin: auto, */

    /* margin-bottom: 1.5rem, */
    paddingTop: '20px',
    paddingBottom: '15px',
    textAlign: 'left',
    '& button': {
      flex: '1 1 auto',
      border: 'none',
      textAlign: 'center',
      margin: '5px'
    }
  },
  closeImg: {
    position: 'absolute',
    display: 'flex',
    top: '20px',
    right: '20px',
    height: '50px',
    width: '50px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    zIndex: 9,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  copyContainer: {
    position: 'relative',
    padding: '14px',
    border: '1px solid grey',
    color: '#263238',
    cursor: 'text',
    display: 'inline-flex',
    fontSize: '14px',
    boxSizing: 'border-box',
    alignItems: 'center',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '-0.05px',
    width: '100%',
    fontStyle: 'normal',
    fontWeight: 'normal',
    background: 'black',
    borderRadius: '4px'
    /* identical to box height, or 143% */

  },
  copyUrl: {
    color: 'white',
    maxWidth: 'calc(100% - 55px)',
    overflowX: 'auto',
    fontSize: '16px',
    lineHeight: '24px',
    whiteSpace: 'nowrap'
  },
  copyIcon: {
    width: 'auto',
    position: 'absolute',
    right: '0px',
    color: '#0C66FF',
    fontWeight: 'bold',
    '& p': {
      paddingRight: '15px',
      paddingLeft: '15px'
    },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  modalStyle: {
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      outline: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none'
    },
    '&:hover': {
      border: 'none',
      outline: 'none'
    }
  }
});

function ShareSocial(props) {
  const classes = useStyles();
  const [isCopied, setIsCopied] = (0, _react.useState)(false);
  const {
    title,
    socialTypes = ['facebook', 'twitter'],
    style
  } = props;

  const copyToClipboard = text => {
    if (navigator && navigator.clipboard) navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
    }).catch(error => {
      alert("Copy failed! ".concat(error));
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container,
    style: style
  }, title && /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.title
  }, " ", title, " "), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.iconContainer
  }, Array.isArray(socialTypes) && socialTypes.map((type, idx) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: "social_item_" + idx
  }, type === 'facebook' && /*#__PURE__*/_react.default.createElement(_FacebookShare.default, _extends({}, props, {
    socialType: type
  })), type === 'twitter' && /*#__PURE__*/_react.default.createElement(_TwitterShare.default, _extends({}, props, {
    socialType: type
  })), type === 'reddit' && /*#__PURE__*/_react.default.createElement(_RedditShare.default, _extends({}, props, {
    socialType: type
  })), type === 'hatena' && /*#__PURE__*/_react.default.createElement(_HatenaShare.default, _extends({}, props, {
    socialType: type
  })), type === 'instapaper' && /*#__PURE__*/_react.default.createElement(_InstapaperShare.default, _extends({}, props, {
    socialType: type
  })), type === 'line' && /*#__PURE__*/_react.default.createElement(_LineShareButton.default, _extends({}, props, {
    socialType: type
  })), type === 'linkedin' && /*#__PURE__*/_react.default.createElement(_LinkedinShareButton.default, _extends({}, props, {
    socialType: type
  })), type === 'livejournal' && /*#__PURE__*/_react.default.createElement(_LivejournalShareButton.default, _extends({}, props, {
    socialType: type
  })), type === 'mailru' && /*#__PURE__*/_react.default.createElement(_MailruShareButton.default, _extends({}, props, {
    socialType: type
  })), type === 'email' && /*#__PURE__*/_react.default.createElement(_EmailShareButton.default, _extends({}, props, {
    socialType: type
  })), type === 'whatsapp' && /*#__PURE__*/_react.default.createElement(_WhatsappShareButton.default, _extends({}, props, {
    socialType: type
  })), type === 'telegram' && /*#__PURE__*/_react.default.createElement(_TelegramShareButton.default, _extends({}, props, {
    socialType: type
  })), type === 'ok' && /*#__PURE__*/_react.default.createElement(_OKShareButton.default, _extends({}, props, {
    socialType: type
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.copyContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.copyUrl
  }, props.url), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.copyIcon,
    onClick: () => copyToClipboard(props.url)
  }, /*#__PURE__*/_react.default.createElement("p", null, " ", isCopied ? 'Copied' : 'Copy', " "))));
}

var _default = ShareSocial;
exports.default = _default;