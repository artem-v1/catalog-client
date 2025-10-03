import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CompanyInterface } from '../../interfaces/company/company.interface';
import { TestServiceService } from '../../services/test-service.service';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
  providers: [TestServiceService]
})
export class TestComponentComponent implements OnInit, AfterViewInit {

  company!: CompanyInterface;

  constructor(private testService: TestServiceService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.testService.getTestData().subscribe({
      next: (response) => {
        console.log('Response from API:', response);
        this.company = response; 
      },
      error: (error) => {
        console.error('Error fetching test data:', error); 
      }
    });
  }

}
