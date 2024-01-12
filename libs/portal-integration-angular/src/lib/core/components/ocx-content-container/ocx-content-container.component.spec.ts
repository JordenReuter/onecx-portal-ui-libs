import { ComponentFixture, TestBed } from '@angular/core/testing'
import { OcxContentContainerComponent } from './ocx-content-container.component'
import { OcxContentContainerDirective } from '../../directives/ocx-content-container.directive'
import { Component } from '@angular/core'

// Mock host component that's used in all tests that require a dynamic layout change
// Using this mock host allows us to simulate Angular @Input mechanisms
@Component({
  template: `
    <ocx-content-container [layout]="layout" [breakpoint]="breakpoint"></ocx-content-container>
    `,
})
class TestHostComponent {
  layout: 'horizontal' | 'vertical' = 'horizontal';
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' = 'md'
}

describe('OcxContentContainerComponent', () => {
  let component: TestHostComponent | OcxContentContainerComponent
  let fixture: ComponentFixture<TestHostComponent | OcxContentContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OcxContentContainerComponent, OcxContentContainerDirective, TestHostComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(OcxContentContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render a horizontal layout container with all expected css classes', () => {
    // Check that layout is horizontal by default
    expect(component.layout).toEqual('horizontal')
    // Check that breakpoint is md by default
    expect(component.breakpoint).toEqual('md')
    fixture.detectChanges()
    
    // Check that the classList of the rendered element contains all expected classes
    const expectedClasses = ['flex', 'py-3', 'gap-3', 'flex-column', 'md:flex-row']
    expect(Object.keys(fixture.debugElement.children[0].classes)).toEqual(expectedClasses)
  })

  it('should render a horizontal layout container with all expected css classes and a specified breakpoint', () => {
        // Check that layout is horizontal by default
        expect(component.layout).toEqual('horizontal')
        // Check that breakpoint is md by default
        expect(component.breakpoint).toEqual('md')
        fixture.detectChanges()
        
        // Check that the classList of the rendered element contains all expected classes
        const expectedClassesMD = ['flex', 'py-3', 'gap-3', 'flex-column', 'md:flex-row']
        expect(Object.keys(fixture.debugElement.children[0].classes)).toEqual(expectedClassesMD)

        component.breakpoint = "lg"
        fixture.detectChanges()

        // Check that breakpoint is now lg and that classes have been updated accordingly
        expect(component.breakpoint).toEqual('lg')
        const expectedClassesLG = ['flex', 'py-3', 'gap-3', 'flex-column', 'lg:flex-row']
        expect(Object.keys(fixture.debugElement.children[0].classes)).toEqual(expectedClassesLG)
  })

  it('should render a vertical layout container with all expected css classes', () => {
    // Replace default component with custom host component to simulate input behavior
    fixture = TestBed.createComponent(TestHostComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    // Check that layout is horizontal by default
    expect(component.layout).toEqual('horizontal')
    
    // Set layout to 'vertical'
    component.layout = 'vertical'
    fixture.detectChanges()
    
    // Check that layout is now vertical
    expect(component.layout).toEqual('vertical')

    // Check that the classList of the rendered element contains all expected classes
    const expectedClasses = ["flex", "py-3", "gap-3", "flex-column"]
    expect(Object.keys(fixture.debugElement.children[0].children[0].classes)).toEqual(expectedClasses)
  })
})