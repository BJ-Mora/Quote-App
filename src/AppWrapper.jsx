import { useSelector } from 'react-redux';
import { selectCurrentColor } from './features/colors/colorsSlice';
import App from './App';

const AppWrapper = () => {
    const color = useSelector(selectCurrentColor);
    //console.log('Current background color:', color);

    const wrapperStyle = {
      backgroundColor: color
    };
  
    return (
      <div className='app-wrapper' style={wrapperStyle}>
        <App />
      </div>
    );
};

export default AppWrapper;