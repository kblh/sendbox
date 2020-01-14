(function ($) {
	const S_RECAPTCHA_ELM = '.recaptcha';

	APP.ReCaptcha = {
		onDOMready : function () {
			this.loadApi();
		},

		loadApi : function () {
			const script = document.createElement('script');
			script.setAttribute('async', 'async');
			script.setAttribute('defer', 'defer');
			script.src = 'https://www.google.com/recaptcha/api.js?onload=_onRecaptchaReady&render=explicit&hl=cs';

			document.body.appendChild(script);
		},

		onRecaptchaReady : function () {
			$(S_RECAPTCHA_ELM).each($.proxy(function (i, recaptchaElm) {
				this.renderWidget(recaptchaElm);
			}, this));
		},

		renderWidget : function (elm) {
			if (!elm) { return }

			const $elm = $(elm);
			const $form = $elm.closest('form');
			const $submit = $form.find('[type=submit]');
			const siteKey = $elm.data('recaptcha-sitekey');
			const isRequired = $elm.data('recaptcha-required');

			if (isRequired) {
				$submit.attr('disabled', true);
			}

			grecaptcha.render($elm[0], {
				sitekey: siteKey,
				callback: $.proxy(function (response) {
					const isVerified = response === grecaptcha.getResponse($elm.attr('id'));

					if (isRequired && isVerified) {
						$submit.attr('disabled', false);
					}
				}, this),
				'expired-callback': $.proxy(function () {
					console.log('expired');
					if (isRequired) {
						$submit.attr('disabled', true);
					}
				}, this),
				'error-callback': $.proxy(function () {
					$submit.attr('disabled', false);
				}, this),
			});
		},
	};

	APP.run( function () { $.proxy(APP.ReCaptcha.onDOMready, APP.ReCaptcha)() });
})(jQuery);

function _onRecaptchaReady() {
	APP.ReCaptcha.onRecaptchaReady.call(APP.ReCaptcha);
}
