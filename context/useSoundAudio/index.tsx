import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface MainResearchType {
  muteAudio: boolean;
  setMuteAudio: (value: boolean) => void;
  toggleMuteAudio: () => void;
}

const MainResearchValues: MainResearchType = {
  muteAudio: false,
  setMuteAudio: () => ({}),
  toggleMuteAudio: () => ({}),
};
const SoundAudioContext = createContext(MainResearchValues);

const SoundAudioProvider = ({ children }: { children: ReactNode }) => {
  const [muteAudio, setMuteAudio] = useState(true);

  const muteMe = useCallback((elem: any, status: boolean) => {
    elem.muted = status;
    if (status) {
      elem.pause();
    }
    elem.play();
  }, []);

  // Try to mute all video and audio elements on the page
  const mutePage = useCallback(() => {
    document
      .querySelectorAll("audio")
      .forEach((elem) => muteMe(elem, muteAudio));
  }, [muteAudio]);

  const toggleMuteAudio = () => {
    setMuteAudio((prevState) => !prevState);
    mutePage();
  };

  const value = {
    muteAudio,
    setMuteAudio,
    toggleMuteAudio,
  };

  return (
    <SoundAudioContext.Provider value={value}>
      {children}
    </SoundAudioContext.Provider>
  );
};

export { SoundAudioContext, SoundAudioProvider };
