import translateCHT, { testCHS } from "./translateCHT.js";

export default function getBggName(name, isOriginName = true) {
	return isOriginName
		? name.length
			? name[0].value
			: name.value
		: (
				name.length &&
				translateCHT(
					name.find(({ value }) => {
						return (
							!value.match(/[\u3041-\u30FF]/) && //日文
							value.match(/[\u4E00-\u9FFF]/) && //中文（含簡體）
							!testCHS(value) // 不含簡體
						);
					})?.value,
				)
			)?.replace(/&#039;/g, "'"); // bgg weird not &#39;
}
