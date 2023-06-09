import { ExtractedData } from "../../../common/types/rpc";

export const postExtractionResult = async (data: ExtractedData, callbackUrl: string) => {
	console.log("Contacting webhook", Date.now());
	await fetch(callbackUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
};