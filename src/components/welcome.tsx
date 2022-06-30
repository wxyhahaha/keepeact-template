import { Component, ValueComponent } from 'keepeact';
import KButton from './button/button.component';

@Component()
export default class WelCome extends ValueComponent {
  max = 6;
  buttonDemo() {
    return (
      <KButton
        valueChange={(e) => {
          this.onChange(e);
        }}
        max={this.max}
      ></KButton>
    );
  }
  render() {
    const welcomeWrapper = (
      <div>
        <p>WelCome to Keepeact, I wish you like it.</p>
          <p>demo:  well stop, if count {'>'} {this.max}</p>
        <ul>
          <li>{this.buttonDemo()}</li>
        </ul>
      </div>
    );
    return welcomeWrapper;
  }
}
