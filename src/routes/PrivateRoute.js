import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../store/user/selectors';
import { currentUser } from '../store/user/operations';

export const PrivateRoute = ({ element: Element, redirectTo = '/'}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(currentUser());
      setLoading(false);
    };

    if (!isLoggedIn) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [dispatch, isLoggedIn]);

  if (loading) {
    return <LoadingPlaceholder />;
  }

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  } else {
    return Element;
  }
};

const LoadingPlaceholder = () => (
  <div className="flex justify-center items-center sm:p-28 xl:p-[200px]">

    <span className="loader"></span>

  </div>
);
