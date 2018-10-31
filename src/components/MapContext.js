// @flow
import createContext from 'create-react-context';
import type { Context } from 'create-react-context';
import type { MapboxMap } from './MapGL';

const MapContext: Context<?MapboxMap> = createContext(null);

export default MapContext;
