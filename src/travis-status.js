'use strict';

class TravisStatus extends HTMLImageElement {
	username() {
		var usernameAttr = this.getAttribute('username');

		if (!usernameAttr) {
			throw new Error('A username is required');
		}

		return usernameAttr;
	}

	repo() {
		var repoAttr = this.getAttribute('repo');

		if (!repoAttr) {
			throw new Error('A repo is required');
		}

		return repoAttr;
	}

	branch() {
		return this.getAttribute('branch') || 'master';
	}

	imageURL() {
		return `https://api.travis-ci.org/${this.username()}/${this.repo()}.svg?branch=${this.branch()}`;
	}

	createdCallback() {
		this.setAttribute('src', this.imageURL());
	}

	attributeChangedCallback() {
		this.setAttribute('src', this.imageURL());
	}
}

document.registerElement('travis-status', {
	prototype: TravisStatus.prototype,
	extends: 'img'
});
