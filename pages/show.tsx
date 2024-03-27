import type { NextPage } from "next";
import CanvasLayout from "@components/dom/CanvasLayout";
import AtomInformationBox from "@components/dom/AtomInformationBox";
import HelperController from "@components/dom/HelperController";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomState, extraState } from "@components/states";
import Atom from "@components/canvas/Atom";
import AtomTypeBox from "@components/dom/AtomTypeBox";
import useKeyboard from "@components/dom/useKeyboard";
import { findAtomBy, IAtomData } from "@components/data/data";
import Links from "@components/dom/Links";
import { useEffect } from "react";

const Show: NextPage = () => {
  const [currentAtom, setCurrentAtom] = useRecoilState(atomState);
  let atom: IAtomData = currentAtom;
  const helper = useRecoilValue(extraState);

  useEffect(() => {
    setCurrentAtom(atom);
  }, [atom, setCurrentAtom]);

  useKeyboard([
    {
      key: "/",
      fn: () => {}
    },
    {
      key: ["ArrowRight", "d", "l"],
      fn: () => {
        atom = findAtomBy({
          by: "number",
          content: atom.atomicNumber + 1
        })[0];
        setCurrentAtom(
          findAtomBy({
            by: "number",
            content: atom.atomicNumber + 1
          })[0]
        );
      }
    },
    {
      key: ["ArrowLeft", "a", "j"],
      fn: () => {
        atom = findAtomBy({
          by: "number",
          content: atom.atomicNumber - 1
        })[0];
        setCurrentAtom(
          findAtomBy({
            by: "number",
            content: atom.atomicNumber - 1
          })[0]
        );
      }
    }
  ]);

  return (
    <div>
      {helper.informationHelper ? <AtomInformationBox /> : null}
      <HelperController />
      <AtomTypeBox />
      <Links />
      <CanvasLayout>
        <Atom />
      </CanvasLayout>
    </div>
  );
};

export default Show;
