import { Component, NgModule } from '@angular/core';
import { CompanyInterface } from '../../interfaces/company/company.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  
  company!: CompanyInterface; // Определите переменную для хранения данных компании

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  ngOnInit(): void {
    console.log('start ngOnInit()'); 


  }

  /*    this.route.paramMap.subscribe(params => {
      const companyId = params.get('id'); // Получите id компании из параметров
      if (companyId) {
        this.getCompanyData(companyId); // Вызовите метод для получения данных
      }
    });

    
  getCompanyData(id: string): void {
    this.companyService.getCompanyById(id).subscribe({
      next: (data) => {
        this.company = data; // Сохраняйте данные в переменной
      },
      error: (error) => {
        console.error('Error fetching data:', error); // Обработка ошибок
      }
    });
  }
    */
}
