import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
@Component({
  selector: 'app-administrador-delete',
  templateUrl: './administrador-delete.component.html',
  styleUrls: ['./administrador-delete.component.css']
})
export class AdministradorDeleteComponent implements OnInit {

  administrador: Administrador = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: ['0'],
    dataCriacao: ''
  }

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

  findById(): void {
    this.service.findById(this.administrador.id).subscribe(res => {
      res.perfis = ['0']
      this.administrador = res;
    })
  }

  delete(): void {
    this.service.delete(this.administrador.id).subscribe(() => {
      this.toast.success('Administrador apagado', 'DELETE');
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
