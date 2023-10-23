import React from 'react';
import PropTypes from 'prop-types';
import {usePosts} from '../hooks/usePosts';

export const postContext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const [posts] = usePosts();
  return (
    <postContext.Provider value={[posts]}>
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
