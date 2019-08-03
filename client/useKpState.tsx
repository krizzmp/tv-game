import { useCallback, useEffect, useRef, useState } from "react";
import { action, actionReducers, initialState, State } from "../common/state";
import io from "socket.io-client";

export function useKpState(): [State, (a: action) => SocketIOClient.Socket] {
  const [state, set_state] = useState<State>(initialState);
  const ref = useRef<SocketIOClient.Socket>();
  useEffect(() => {
    const socket = io("http://localhost:3000/");
    ref.current = socket;
    socket.on("res", set_state);
  });
  let emit = useCallback(a => ref.current!.emit("t", a), []);
  return [state, emit];
}
export function usePresentation(url: string): [boolean, PresentationRequest] {
  const [s, set_s] = useState<boolean>(false);
  const ref = useRef<PresentationRequest>();
  useEffect(() => {
    const handleAvailabilityChange = function(available: boolean) {
      set_s(available);
    };
    const request = new PresentationRequest(url);
    ref.current = request;
    request
      .getAvailability()
      .then(function(availability) {
        console.log(availability);
        handleAvailabilityChange(availability.value);
        availability.onchange = function() {
          handleAvailabilityChange(this.value);
        };
      })
      .catch(function() {
        handleAvailabilityChange(true);
      });
  }, []);
  return [s, ref.current!];
}
