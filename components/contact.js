Vue.component('contact-form', {
    data() {
        return {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        };
      },
    methods:{
        sendEmail(e) {
            emailjs.sendForm('default_service', 'template_uvinz95', e.target, 'user_1wflK7WkbyVGouoePZaLU', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                message: this.meessage
            }).then(res => {
                setTimeout(() => {  
                    Swal.fire({
                            icon: 'success',
                            title: 'Successfully sent!',
                            text: 'Message successfully sent, we will contact you shortly.',
                    });
                    // Reset form field
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                }, 1000);
            }).catch(err => {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    text: JSON.stringify(err.text),
                    icon: 'error',
                    showConfirmButton: false,
                    showCloseButton: true,
                    timerProgressBar: true,
                    timer: 5000
                });
            })
        },
    },
    template: `
    <form class="rd-mailform" @submit.prevent="sendEmail" novalidate="novalidate">
    <div class="row row-fix row-20">
        <div class="col-md-6">
            <div class="form-wrap form-wrap-validation"> <label class="form-label-outside" for="form-3-name">First name</label> <input v-model="firstName" class="form-input form-control-has-validation form-control-last-child" id="form-3-name" type="text" name="name" data-constraints="@Required"><span class="form-validation"></span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-wrap form-wrap-validation"> <label class="form-label-outside" for="form-3-last-name">Last name</label> <input v-model="lastName" class="form-input form-control-has-validation form-control-last-child" id="form-3-last-name" type="text" name="last-name" data-constraints="@Required"><span class="form-validation"></span> </div>
        </div>
        <div class="col-md-6">
            <div class="form-wrap form-wrap-validation"> <label class="form-label-outside" for="form-3-email">E-mail</label> <input v-model="email" class="form-input form-control-has-validation form-control-last-child" id="form-3-email" type="email" name="email" data-constraints="@Email @Required"><span class="form-validation"></span> </div>
        </div>
        <div class="col-md-6">
            <div class="form-wrap form-wrap-validation"> <label class="form-label-outside" for="form-3-phone">Phone</label> <input v-model="phone" class="form-input form-control-has-validation form-control-last-child" id="form-3-phone" type="text" name="phone" data-constraints="@Numeric @Required"><span class="form-validation"></span> </div>
        </div>
        <div class="col-sm-12">
            <div class="form-wrap form-wrap-validation"> <label class="form-label-outside" for="form-3-message">Message</label> <textarea v-model="message" class="form-input form-control-has-validation form-control-last-child" id="form-3-message" name="message" data-constraints="@Required"></textarea><span class="form-validation"></span> </div>
        </div>
        <div class="col-sm-12 offset-custom-4">
            <div class="form-button"> <button class="button button-secondary button-nina" type="submit"><span style="transition: opacity 0.22s ease 0s, transform 0.22s ease 0s, color 0.22s ease 0s;">s</span><span style="transition: opacity 0.22s ease 0.03s, transform 0.22s ease 0.03s, color 0.22s ease 0s;">e</span><span style="transition: opacity 0.22s ease 0.06s, transform 0.22s ease 0.06s, color 0.22s ease 0s;">n</span><span style="transition: opacity 0.22s ease 0.09s, transform 0.22s ease 0.09s, color 0.22s ease 0s;">d</span><span style="transition: opacity 0.22s ease 0.12s, transform 0.22s ease 0.12s, color 0.22s ease 0s;"></span><span style="transition: opacity 0.22s ease 0.15s, transform 0.22s ease 0.15s, color 0.22s ease 0s;">m</span><span style="transition: opacity 0.22s ease 0.18s, transform 0.22s ease 0.18s, color 0.22s ease 0s;">e</span><span style="transition: opacity 0.22s ease 0.21s, transform 0.22s ease 0.21s, color 0.22s ease 0s;">s</span><span style="transition: opacity 0.22s ease 0.24s, transform 0.22s ease 0.24s, color 0.22s ease 0s;">s</span><span style="transition: opacity 0.22s ease 0.27s, transform 0.22s ease 0.27s, color 0.22s ease 0s;">a</span><span style="transition: opacity 0.22s ease 0.3s, transform 0.22s ease 0.3s, color 0.22s ease 0s;">g</span><span style="transition: opacity 0.22s ease 0.33s, transform 0.22s ease 0.33s, color 0.22s ease 0s;">e</span><span class="button-original-content" style="transition: background 0.22s ease 0s, color 0.22s ease 0s, transform 0.22s ease 0.36s;">send message</span></button> </div>
        </div>
    </div>
</form>
    `
});
new Vue({el: "#contact-form"});