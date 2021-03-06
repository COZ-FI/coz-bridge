// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as react from "react";
import { Modal } from "@fluentui/react";
import { Label } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react/lib/Stack";
import { supply } from "../libs/utils";
import { SubstrateAccountInfo } from "../libs/type";
import { verticalGapStackTokens} from "../styles/common-styles";
import "../styles/modal.css";

interface IProps {
  l2Account: SubstrateAccountInfo;
  chainId0: string;
  token0: string;
  chainId1: string;
  token1: string;
  amount?: string;
  close: () => void;
}

export default function SupplyModal(props: IProps) {
  return (
    <Modal isOpen={true} onDismiss={props.close} isBlocking={true} className="delphinus-modal">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Confirm Supply Liquidity</a>
      </nav>
      <Stack
        verticalAlign={"start"}
        tokens={verticalGapStackTokens}
      >
        <Label>Amount for {props.chainId0} / 0x{props.token0}</Label>
        <TextField
          className="account" disabled
          defaultValue={props.amount}
        />
        <Label>Amount for {props.chainId1} / 0x{props.token1}</Label>
        <TextField
          className="account" disabled
          defaultValue={props.amount}
        />
        <div>
        <button type="button" className="btn btn-sm btn-primary"
          onClick={() => {
              (props.amount) &&
              supply(props.l2Account, props.chainId0, props.token0, props.chainId1, props.token1, props.amount, props.amount);
              props.close();
            }
          }
        >
          Ok
        </button>
        <button type="button" className="btn btn-sm btn-secondary"
          onClick={props.close}>
          Cancel
        </button>
        </div>
      </Stack>
    </Modal>
  );
}
