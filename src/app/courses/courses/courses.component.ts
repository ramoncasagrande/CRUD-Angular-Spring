import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    //this.courses = []; forma opcional --> removido pois foi adicionado o parâmetro
    //this.coursesService = new CoursesService(); --> removido pois foi adicionado o parâmetro
    this.courses$ = this.coursesService.list(); //--> pode ser utilizado no ngOnInit
  }

  ngOnInit(): void {

  }

}
