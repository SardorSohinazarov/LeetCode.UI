import { Component, OnInit } from '@angular/core';
import { Code } from '../../../models/code';
import { SentCodeService } from '../../../services/sent-code.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  isSubmitted: boolean = false;

  resultData!: Code;

  setValue: Code = {
    code: `using System; 
public class HelloWorld
  {
    public static void Main(string[] args)
      {
        Console.WriteLine(11);
      }
  }`,
  };

  constructor(private crudService: SentCodeService) {}

  code(data: Code) {
    this.crudService.create(data).subscribe({
      next: (result) => {
        let a = document.querySelector('#code-return') as HTMLElement;
        a.innerHTML = result;
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(`Error ketti: ${err}`);
      },
    });
  }

  setCode() {
    this.code(this.setValue);
  }
}
