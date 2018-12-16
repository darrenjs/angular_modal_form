import { Component } from '@angular/core';

/* Import the modal interface from bootstrap */
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/* Import our modal form component */
import { FormModalComponent } from './form-modal/form-modal.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngModalForm';


  constructor(
    private modalService: NgbModal
  ) { }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);


    /*
    We may want to pass an id to the modal-component. This is achieved by adding
    the following line inside the openFormModal method.
    */
    modalRef.componentInstance.id = 10; // should be the id

    /* Notice how we interact with the model via a promise.
    */
    modalRef.result.then((result) => {
      console.log('form result >>');
      console.log(result);
    }).catch((error) => {
      console.log('from error >>');
      console.log(error);
    });
  }

}
