import { useEffect } from 'react';
import data from './SoalTes';
import { mapDataArray } from './service';
import { connect, useDispatch } from 'react-redux';
import { setData } from './redux/DataAction';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    setData(dispatch, mapDataArray(data));
  }, []);
  console.log(props.dataRedux);
  return <>Halo</>;
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.data.data,
  };
};

export default connect(mapStateToProps, null)(App);
