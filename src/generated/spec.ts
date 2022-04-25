import {
  GetRequest,
  RestMethod,
  // PostRequest,
} from '@foronered/util/lib/redux/frr/api.types'

export enum Endpoints {
  Ping = '/ping',
}

export type API = {
  [Endpoints.Ping]: GetRequest<{
    response: {}
  }>
}

export const mapEndpointToMethod: {
  [k in Endpoints]: API[k]['method']
} = {
  // [Endpoints.GetGames]: RestMethod.GET,
  [Endpoints.Ping]: RestMethod.GET,
}
