import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {

  administrador: Administrador = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3))

  constructor(
    private service: AdministradorService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
     && this.email.valid && this.senha.valid
  }

  addPerfil(perfil: any): void{
    if(this.administrador.perfis.includes(perfil)){
      this.administrador.perfis.splice(this.administrador.perfis.indexOf(perfil), 1); 
    } else{ 
      this.administrador.perfis.push(perfil);
    }
  } 

  create(): void{
    this.service.create(this.administrador).subscribe(() => {
    this.toast.success('Administrador cadastrado' , 'Cadastro');
    this.router.navigate(['adm'])
    }, ex =>{
      console.log(ex);
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      } 
    })
  }

}
