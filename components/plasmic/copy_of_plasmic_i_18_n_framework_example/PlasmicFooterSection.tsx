// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gtteoYLA7Rg8Yjfa9QT5Hy
// Component: ilJy0VIfsOYQ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: MU3DMwx9AwSp/component
import TextInput from "../../TextInput"; // plasmic-import: l0ECaHCt1rWZ/component

import { useScreenVariants as useScreenVariantsc8Ti85WTvYmi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: c8ti85WTvYmi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: gtteoYLA7Rg8Yjfa9QT5Hy/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: ilJy0VIfsOYQ/css

import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: miChh0gVk4o4/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: KEpv7iVq3X6N/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: 6Msci9YN2ujW/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: pkQrduZ4RAJ6/icon
import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: Jjs7dzIZp7RH/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: E2ZD-Fu0gtFx/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: ZtYilcooq-8m/icon

createPlasmicElementProxy;

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  textInput?: Flex__<typeof TextInput>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $translator = usePlasmicTranslator?.();

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsc8Ti85WTvYmi()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___0Itej)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__p35U5)}>
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"35px"}
            displayMaxWidth={"229px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/copy_of_plasmic_i_18_n_framework_example/images/logoFooterpng.png",
              fullWidth: 458,
              fullHeight: 70,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xTe5
            )}
          >
            <Trans__>{"This is pretty sweet"}</Trans__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wmu4)}>
            <FacebooksvgIcon
              className={classNames(projectcss.all, sty.svg__lHl5F)}
              role={"img"}
            />

            <TwittersvgIcon
              className={classNames(projectcss.all, sty.svg___6K1Is)}
              role={"img"}
            />

            <InstagramsvgIcon
              className={classNames(projectcss.all, sty.svg__wwJh6)}
              role={"img"}
            />

            <LinkedinsvgIcon
              className={classNames(projectcss.all, sty.svg___1Adm5)}
              role={"img"}
            />
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___2Jx3)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__uBt5
            )}
          >
            <Trans__>{"Menu"}</Trans__>
          </h4>
          <Button
            className={classNames("__wab_instance", sty.button__a2MIg)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__hFuUv)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__ay70V)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__d89Q
              )}
            >
              <Trans__>{"How it work"}</Trans__>
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__aBtPb)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__xMlaX)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___0AtSl)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xYl8
              )}
            >
              <Trans__>{"Pricing"}</Trans__>
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__rnben)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__qiRx)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__l2Jb9)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rayi1
              )}
            >
              <Trans__>{"FAQs"}</Trans__>
            </div>
          </Button>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__nJpNd)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__bxW5
            )}
          >
            <Trans__>{"Help"}</Trans__>
          </h4>
          <Button
            className={classNames("__wab_instance", sty.button___0SFns)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__xvNnH)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__rtMqe)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fnAxs
              )}
            >
              <Trans__>{"Privacy and Policy"}</Trans__>
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__wqxX)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___6Zk6F)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___0QQd3)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__blHFa
              )}
            >
              <Trans__>{"Terms of Use"}</Trans__>
            </div>
          </Button>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__hevtM)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__m7P1R
            )}
          >
            <Trans__>{"Company"}</Trans__>
          </h4>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zhaaf
            )}
          >
            <Trans__>{"Lorem ipsum dolor sit amet, consectetur."}</Trans__>
          </div>
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            onChange={(...eventArgs) => {
              generateStateOnChangeProp($state, ["textInput", "value"])(
                (e => e.target?.value).apply(null, eventArgs)
              );
            }}
            value={generateStateValueProp($state, ["textInput", "value"]) ?? ""}
          />

          <Button
            className={classNames("__wab_instance", sty.button__bzDbS)}
            color={"white"}
            small={
              hasVariant(globalVariants, "screen", "mobile") ? true : undefined
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__u0PJs
              )}
            >
              <Trans__>
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Subscribe"
                  : "Subscribe"}
              </Trans__>
            </div>
          </Button>
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__sGay8)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mxzSu
          )}
        >
          <Trans__>
            {"Copyrights \u00a9 2022 All Rights Reserved by PlasmicApp"}
          </Trans__>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "textInput"],
  img: ["img"],
  textInput: ["textInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */