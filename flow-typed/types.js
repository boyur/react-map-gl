// @flow
import type Map from 'mapbox-gl/src/ui/map';
import type { Map as ImmutableMap } from 'immutable';
import type { MapMouseEvent, MapTouchEvent } from 'mapbox-gl/src/ui/events';

import type {
  LayerSpecification,
  StyleSpecification,
  SourceSpecification
} from 'mapbox-gl/src/style-spec/types';

declare type MapboxMap = {
  getStyle: () => StyleSpecification,
  getLayer: (id: string) => LayerSpecification,
  getSource: (id: string) => SourceSpecification
} & Map;

declare type MapboxLayer = LayerSpecification;

declare type MapStyle = {
  toJS: () => StyleSpecification
} & ImmutableMap<string, any>;

declare type MapSource = {
  toJS: () => SourceSpecification
} & ImmutableMap<string, any>;

declare type MapLayer = {
  toJS: () => LayerSpecification
} & ImmutableMap<string, any>;

declare type Viewport = {
  latitude: number,
  longitude: number,
  zoom: number,
  pitch?: number,
  bearing?: number
};

declare type ViewportChangeEvent = MapMouseEvent | MapTouchEvent;
