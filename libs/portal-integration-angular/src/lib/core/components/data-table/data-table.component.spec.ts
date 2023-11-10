import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { DataTableComponent } from './data-table.component'
import { PrimeNgModule } from '../../primeng.module';

describe('DataTableComponent', () => {
  let fixture: ComponentFixture<DataTableComponent>
  let component: DataTableComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
      imports: [PrimeNgModule, BrowserAnimationsModule, TranslateModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(DataTableComponent)
    component = fixture.componentInstance
    TestBed.inject(TranslateService).use('en')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeDefined()
  })
})
