import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelOption = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedbeack = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    let positive =
      this.state.good / (this.state.good + this.state.neutral + this.state.bad);
    return positive ? positive * 100 : '';
  };

  render() {
    return (
      <div>
        <Section title="Please leave feadback">
          <div style={{ display: 'flex', gap: '10px', marginLeft: '15px' }}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onOptinClick={this.hendelOption}
            />
          </div>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedbeack() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedbeack()}
              positive={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
