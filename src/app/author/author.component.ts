import { Component } from '@angular/core';
import AuthorModel from '../model/AuthorModel';
import { AuthorService } from '../services/author.service';
import ErrorModel from '../model/ErrorModel';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {


  constructor(private authorService: AuthorService) { }

  author: AuthorModel = {
    authorId: 0,
    authorName: ""
  }

  authors: AuthorModel[] = []

  

  errors :ErrorModel [] = [];
  errors2: { [key: string]: ErrorModel } = {};

  error3: { [key: string]: string } = {};


  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe((response) => {
      //alert(JSON.stringify(response));
      this.authors = response;
    });
  }


  SaveAuthor(): void {
    if (this.isValidate()){
      this.createAuthor(); 
    }
    
  }
  hasError(fieldName: string): boolean {
    return this.errors.some(error => error.name === fieldName);
  }

  getErrorMessage(fieldName: string): string | undefined {
    const error = this.errors.find(error => error.name === fieldName);
    return error ? error.message : undefined;
  }
  isValidate(): boolean {
    this.error3 = {}; // Reset errors

    alert(  JSON.stringify(this.error3));
    
    let is_valid = true;

    if (this.author.authorName == ""){
      //this.errors.push({name: "authorName", message : "Enter author name"})

     // this.errors2["authorName"] = {name: "authorName", message : "Enter author name"};

      this.error3["authorName"] = "Enter author name"
    }


    if (Object.keys(this.error3).length>0){
      is_valid =false;
    }
    //if (this.error3>0)
       // is_valid =false;

   // alert(JSON.stringify(this.error3))
    //alert(JSON.stringify(this.error3["authorName"]))
    //alert(is_valid);
    return is_valid;
    
  } 
  onFieldChange (fieldName:string){
    delete this.error3[fieldName];

  }
  createAuthor() {
    this.authorService.createAuthor(this.author).subscribe({
      next: (response) => {
        console.log('Author created successfully:', response);
      }, error: (error) => {
        console.error('Error creating author:', error);
      }, complete: () => {
        console.log('All authors have been fetched.');
      }

    })
  }


}
