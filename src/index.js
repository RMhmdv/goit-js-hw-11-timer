import './styles.css';

class CountdownTimer{
    constructor({selector, targetDate}) {

        this._refs = this._getRefs(selector);
        this._targetDate = targetDate;

        this._remainingТime();
    }

    _getRefs(root) {
        const refs = {};

        refs.clockFace = document.querySelector(`${root}`);

        refs.d = document.querySelector(`${root} span[data-value="days"]`);
        refs.h = document.querySelector(`${root} span[data-value="hours"]`);
        refs.m = document.querySelector(`${root} span[data-value="mins"]`);
        refs.s = document.querySelector(`${root} span[data-value="secs"]`);

        return refs;
    }

    _remainingТime () {
        setInterval(this._updateTimer.bind(this), 1000);   
    };

    _deltaTime() {

        const msEnd = Date.parse( this._targetDate );
        const msNow = Date.now();

        return msEnd - msNow;
    };
    
    _updateTimer() {
      
    this._updateClockface(this._getTimeComponents(this._deltaTime()), this._refs);
    }
        
    


 _getTimeComponents(time) {
 


    const days = this._pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this._pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this._pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this._pad(Math.floor((time % (1000 * 60)) / 1000));

return { days, hours, mins, secs };
}


/*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
_pad(value) {
    return String(value).padStart(2, '0');
  }

_updateClockface({ days, hours, mins, secs }, { d, h, m, s }) {

    d.textContent =`${days}`;
    h.textContent = `${hours}`;
    m.textContent = `${mins}`;
    s.textContent = `${secs}`;
    }

    
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2021'),
});

console.log(timer1);

