import { apiSliceState } from "@store/apiServiceStore";
import { useRecoilState } from "recoil";
import { unknown } from "zod";

type EndpointCall = (...params: any[]) => Promise<any>;

type MutationEndpoint<ParamsType, Response = unknown> = (
  params?: ParamsType
) => Promise<Response>;

type UseMutationApiShape<Params, Response> = {
  mutate: MutationEndpoint<Params>;
  loading: boolean;
  error: string | null;
  data: Response | null;
};

type UseMutationApiType<ParamsType = any[], Response = unknown> = (
  endpointId: string,
  endpointCall: EndpointCall
) => UseMutationApiShape<ParamsType, Response>;

export const useMutationApi = <
  Params extends any[] = any[],
  Response extends unknown = unknown
>(
  endpointId: string,
  endpointCall: EndpointCall
): UseMutationApiShape<Params, Response> => {
  const [apiSlice, setApiSlice] = useRecoilState(apiSliceState(endpointId));

  const mutate: MutationEndpoint<Params> = async (params?: Params) => {
    try {
      setApiSlice((old) => ({ ...old, loading: true }));

      const data = await endpointCall(params);

      setApiSlice((old) => ({ ...old, data: data || null, error: null }));
    } catch (e) {
      setApiSlice((old) => ({ ...old, error: String(e) }));
    } finally {
      setApiSlice((old) => ({ ...old, loading: false }));
    }
  };

  return {
    data: null,
    error: null,
    mutate,
    loading: false,
  };
};
