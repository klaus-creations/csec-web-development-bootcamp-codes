'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState, useTransition } from 'react';

export function useMutation() {
  const router = useRouter();
  const [isPending, setPending] = useState(false);
  const [isMutating, setMutating] = useState(false);
  const [isTransitionStarted, startTransition] = useTransition();

  useLayoutEffect(() => {
    setMutating(isPending || isTransitionStarted);
  }, [isPending, isTransitionStarted]);

  async function startMutation(callBack: () => Promise<void> | void) {
    setPending(true);
    try {
      await callBack();
    } catch (error) { }
    setPending(false);
    startTransition(router.refresh);
  }

  return {
    startMutation,
    isMutating,
  };
}
