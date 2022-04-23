import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

function scrollFunction() {
  // const [translation1, setTranslation1] = useState(0)

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById('sbnavbar').style.padding = '10px 0px';
    document.getElementById('navbar').style.padding = '30px 0px';
    document.getElementById('sbnavbar').style.marginBottom = '-30px';
    document.getElementById('navbar').style.backgroundColor =
      'rgba(0, 0, 0, 0.8)';
    // document.getElementById("navbar").style.back
    // document.getElementById("navbar").style.color = "white";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById('sbnavbar').style.padding = '20px 0px';
    document.getElementById('navbar').style.padding = '40px 0px';
    document.getElementById('navbar').style.marginBottom = '-80px';
    document.getElementById('navbar').style.backgroundColor = 'transparent';
    // document.getElementById("logo").style.fontSize = "35px";
  }

  if (document.documentElement.scrollTop > 1080) {
    document.getElementById('grid1').style.transform = `translate(0px,${(
      (1080 - document.documentElement.scrollTop) / 5 +
      100
    ).toString()}px)`;
    document.getElementById('grid3').style.transform = `translate(0px,${(
      (1080 - document.documentElement.scrollTop) / 5 +
      150
    ).toString()}px)`;
  }
}

window.onscroll = function scroll() {
  scrollFunction();
};

ReactDom.hydrate(<App />, document.getElementById('app'));
