import React from 'react';

function About() {
  return (
    <section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/pic/my_pic.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
        <p>
        An industrial and systems engineering graduate with excellent analytical, technical, and problem solving skills. Highly motivated and always eager to learn something new.
        </p>
        <p>
        I recently earned a certificate in full stack development from the George Washington University bootcamp, with newly developed skills in HTML, CSS, JavaScript, React.js, and responsive web design. I am known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development.
        </p>
      </div>
    </section>
  );
}

export default About;
