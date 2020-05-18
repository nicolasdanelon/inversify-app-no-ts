import React, { useContext } from 'react';

const InversifyContext = React.createContext({ container: null });

const Provider = ({ container, children }) => {
    return (
        <InversifyContext.Provider value={{ container }}>
            {children}
        </InversifyContext.Provider>
    );
};

export const useInjection = (identifier) => {
    const { container } = useContext(InversifyContext);

    console.log({ container, identifier });

    if (!container) { throw new Error(); }
    return container.get(identifier);
};

export default Provider;
