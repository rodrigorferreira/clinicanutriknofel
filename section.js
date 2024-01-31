
function showSection(sectionId) {
    // Oculta todas as seções
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('services').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // Mostra a seção desejada
    document.getElementById(sectionId).style.display = 'block';
}

function submitForm() {
    // Coleta dados do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Constrói a mensagem para o WhatsApp
    var whatsappMessage = "Nome: " + name + "%0AEmail: " + email + "%0AMensagem: " + message;

    // Monta o link do WhatsApp com a mensagem
    var whatsappLink = "https://wa.me/+5521972090925?text=" + whatsappMessage;

    // Abre uma nova guia com o link do WhatsApp
    window.open(whatsappLink, '_blank');

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    alert("Mensagem enviada! Em breve entraremos em contato com você.");
}       