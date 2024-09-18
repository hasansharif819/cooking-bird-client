import { Parallax } from 'react-parallax';
import './Cover.css'

const Cover = ({img,title }) => {
    return (
        <Parallax className='cover-container '
        blur={{ min: -50, max: 40 }}
        bgImage={img}

        bgImageAlt="the menu"
        strength={-200}
    >
          <div className="hero h-[400px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mt-[50px]">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase cover-title">{title}</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    </Parallax>
      
        

    );
};

export default Cover;