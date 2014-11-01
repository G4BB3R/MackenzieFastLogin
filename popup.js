$λ(document, 'DOMContentLoaded', function() {

				// Carregar o login e senha e colocá-los nos campos visíveis
				$('txtLogin', localStorage.getItem('login'))
				$('txtSenha', localStorage.getItem('password'))

				// Adicionar evento onClick ao botão do TIA
				$λ('btnTia', 'click', function(e) {
						$('alumat', $('txtLogin'))
						$('pass', $('txtSenha'))
						save($('txtLogin'), $('txtSenha'))
						document.forms.tia.submit()
				})

				// Adicionar evento onClick ao botão do Moodle
				$λ('btnMoodle', 'click', function(e) {
						$('username', $('txtLogin'))
						$('password', $('txtSenha'))
						save($('txtLogin'), $('txtSenha'))
						document.forms.moodle.submit()
				})

				$$('btnTia').focus()
		}
)
