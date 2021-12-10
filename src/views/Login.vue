<template>
    <b-row class="vh-100 vw-100 row-login" >
        <b-col sm="5" class="d-flex justify-content-center align-items-center left-login">
            <div class="col-8">
                <h2 class="text-center mb-5 title-login" >Faça o Login</h2>
                <b-form>
                   <b-form-group
                   label="E-mail"
                   label-for="email">
                   <b-form-input
                   id="email"
                   type="email"
                   placeholder="teste@teste.com.br"
                   autocomplete="off"
                   v-model="form.email"
                   required>
                   </b-form-input>
                   </b-form-group>
                
                    <b-form-group
                    label-for="password">
                    <label class="d-flex justify-content-between">Senha
                       <small> <a href="#">Esqueceu sua senha?</a></small>
                    </label>
                    </b-form-group>

                    <b-form-group
                   label-for="password">
                   <b-form-input
                   id="password"
                   type="password"
                   placeholder="Digite Sua Senha"
                   autocomplete="off"
                   v-model="form.password">
                   </b-form-input>
                   </b-form-group>
                <b-button
                type="button"
                variant="primary"
                block
                @click="login">
                <i class="fas fa-sign-in-alt"></i> Entrar
                </b-button>
                <hr>
                <b-button
                type="button"
                variant="outline-secondary"
                block
                @click="register">
               <i class="fas fa-user-plus"></i>Não tenho conta
                </b-button>
                </b-form>
            </div>
        </b-col>
        <b-col style="background-color:#363535" sm="7" class="d-flex justify-content-center align-items-center">
            <img src="../assets/login.svg" class="img-login">
        </b-col>
    </b-row>
</template>

<script>
import {required, minLength, email} from "vuelidate/lib/validators";


export default {
    data(){
        return{
            form:{
                email: "",
                password: ""
            }
        }
    },
    validation:{
        form:{
            email:{
                required,
                email
            },
            password:{
                required,
                minLength: minLength(6)
            }
        }
    },
    methods:{
        login(){
            this.$v.$touch();
            if(this.$v.$error){
                return;
            }
        },

        register(){}
 
    }
}

</script>


<style>

*,
*::after,
*::before {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
}

.row-login{
    margin-left:0;
}
.left-login{
    background-color:#f2f2f2;
}

.title-login{
    font-weight: bold;
}

.img-login{
    width: 600px;
    height:600px
}

</style>