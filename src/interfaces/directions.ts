export interface DirectionsResponse {
  routes: Route[];
  waypoints: Waypoint[];
  code: string;
  uuid: string;
}

export interface Route {
  weightName: string;
  weight: number;
  duration: number;
  distance: number;
  legs: Leg[];
  geometry: Geometry;
}

export interface Geometry {
  coordinates: Array<number[]>;
  type: GeometryType;
}

export enum GeometryType {
  LineString = 'LineString',
}

export interface Leg {
  viaWaypoints: any[];
  admins: Admin[];
  weight: number;
  duration: number;
  steps: Step[];
  distance: number;
  summary: string;
}

export interface Admin {
  iso3166_1_Alpha3: string;
  iso3166_1: string;
}

export interface Step {
  intersections: Intersection[];
  maneuver: Maneuver;
  name: string;
  duration: number;
  distance: number;
  drivingSide: DrivingSide;
  weight: number;
  mode: Mode;
  geometry: Geometry;
}

export enum DrivingSide {
  Left = 'left',
  Right = 'right',
  Straight = 'straight',
}

export interface Intersection {
  entry: boolean[];
  bearings: number[];
  duration?: number;
  mapboxStreetsV8?: MapboxStreetsV8;
  isUrban?: boolean;
  adminIndex: number;
  out?: number;
  weight?: number;
  geometryIndex: number;
  location: number[];
  in?: number;
  turnWeight?: number;
  turnDuration?: number;
  trafficSignal?: boolean;
  lanes?: Lane[];
}

export interface Lane {
  indications: DrivingSide[];
  validIndication?: DrivingSide;
  valid: boolean;
  active: boolean;
}

export interface MapboxStreetsV8 {
  class: Class;
}

export enum Class {
  Primary = 'primary',
  Secondary = 'secondary',
  Street = 'street',
}

export interface Maneuver {
  type: ManeuverType;
  instruction: string;
  bearingAfter: number;
  bearingBefore: number;
  location: number[];
  modifier?: DrivingSide;
}

export enum ManeuverType {
  Arrive = 'arrive',
  Depart = 'depart',
  Turn = 'turn',
}

export enum Mode {
  Driving = 'driving',
}

export interface Waypoint {
  distance: number;
  name: string;
  location: number[];
}
