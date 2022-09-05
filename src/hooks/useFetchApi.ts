import {
  apiSliceState,
  currentDataApiSlice,
  currentErrorApiSlice,
  currentLoadingApiSlice,
} from "@store/apiServiceStore";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

type EndpointCall<ResponseType = any> = (
  params?: any[]
) => Promise<ResponseType>;

export const useFetchApi = <ResponseType>(
  endpointCall: EndpointCall<ResponseType>,
  endpointId: string,
  params?: any[]
) => {
  const [endpointState, setApiSlice] = useRecoilState(
    apiSliceState(endpointId)
  );

  const loading = useRecoilValue(currentLoadingApiSlice(endpointId));
  const error = useRecoilValue(currentErrorApiSlice(endpointId));
  const data = useRecoilValue(currentDataApiSlice(endpointId)) as ResponseType;

  useEffect(() => {
    (async () => {
      try {
        setApiSlice((old) => ({ ...old, loading: true }));

        const responseData = await endpointCall(params);

        setApiSlice((old) => ({ ...old, data: responseData, error: null }));
      } catch (e) {
        console.log({ e });

        setApiSlice((old) => ({
          ...old,
          error: String(e),
        }));
      } finally {
        setApiSlice((old) => ({ ...old, loading: false }));
      }
    })();
  }, [endpointCall, params, setApiSlice]);

  return {
    data,
    loading,
    error,
  };
};
