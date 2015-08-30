"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var TravisStatus = (function (_HTMLImageElement) {
	function TravisStatus() {
		_classCallCheck(this, TravisStatus);

		if (_HTMLImageElement != null) {
			_HTMLImageElement.apply(this, arguments);
		}
	}

	_inherits(TravisStatus, _HTMLImageElement);

	_createClass(TravisStatus, {
		username: {
			value: function username() {
				var usernameAttr = this.getAttribute("username");

				if (!usernameAttr) {
					throw new Error("A username is required");
				}

				return usernameAttr;
			}
		},
		repo: {
			value: function repo() {
				var repoAttr = this.getAttribute("repo");

				if (!repoAttr) {
					throw new Error("A repo is required");
				}

				return repoAttr;
			}
		},
		branch: {
			value: function branch() {
				return this.getAttribute("branch") || "master";
			}
		},
		imageURL: {
			value: function imageURL() {
				return "https://api.travis-ci.org/" + this.username() + "/" + this.repo() + ".svg?branch=" + this.branch();
			}
		},
		createdCallback: {
			value: function createdCallback() {
				this.setAttribute("src", this.imageURL());
			}
		},
		attributeChangedCallback: {
			value: function attributeChangedCallback() {
				this.setAttribute("src", this.imageURL());
			}
		}
	});

	return TravisStatus;
})(HTMLImageElement);

document.registerElement("travis-status", {
	prototype: TravisStatus.prototype,
	"extends": "img"
});