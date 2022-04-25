import { Endpoints, API, mapEndpointToMethod } from "generated/spec"
import { configureTypeReduxApiCreator } from "@foronered/util/lib/redux/frr/rest"
import { createViewAction } from "@foronered/util/lib/redux/view.helpers"

// API Actions

const { createEndpoint } = configureTypeReduxApiCreator<
  API,
  Endpoints,
  typeof mapEndpointToMethod
>(mapEndpointToMethod)

export const ping = createEndpoint()(
  {
    request: "GET_PING_REQUEST",
    success: "GET_PING_SUCCESS",
    failure: "GET_PING_FAILURE",
  } as const,
  Endpoints.Ping
)

// View Actions

export enum ViewActionType {
  Click = "view/click",
}

export type Click = {
  type: ViewActionType.Click
  payload: number
}

export const click = createViewAction<Click>(ViewActionType.Click)
