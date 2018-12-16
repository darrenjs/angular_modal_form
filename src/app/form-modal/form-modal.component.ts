import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})


export class FormModalComponent {

  /* This is an example of receiving an input argument, sent from when
     the form is constructed.  */
  @Input() id: number;

  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }


  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }


  submitForm() {
    console.log('form has been submitted');
    this.activeModal.close(this.myForm.value);
  }

}
