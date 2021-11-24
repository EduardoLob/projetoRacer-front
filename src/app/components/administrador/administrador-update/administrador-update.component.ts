import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';


@Component({
  selector: 'app-administrador-update',
  templateUrl: './administrador-update.component.html',
  styleUrls: ['./administrador-update.component.css']
})
export class AdministradorUpdateComponent implements OnInit {

  administrador: Administrador = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: ['0'],
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.administrador.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
      && this.email.valid && this.senha.valid
  }

  addPerfil(perfil: any): void {
    if (this.administrador.perfis.includes(perfil)) {
      this.administrador.perfis.splice(this.administrador.perfis.indexOf(perfil), 1);
    } else {
      this.administrador.perfis.push(perfil);
    }
  }

  findById(): void {
    this.service.findById(this.administrador.id).subscribe(res => {
      res.perfis = ['0']
      this.administrador = res; 
    })
  }

  update(): void {
    this.service.update(this.administrador).subscribe(() => {
      this.toast.success('Administrador modificado', 'Modificação');  
      this.router.navigate(['adm'])
    }, ex => {
      console.log(ex);
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

}
