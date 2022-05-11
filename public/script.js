(() => {
	const bodyBackup = document.body.cloneNode(true);
	const whitelist = {
		input,
		success,
		fail,
	};

	const generateWhitelist = () => {
		Object.keys(whitelist).forEach((key) => {
			whitelist[key] = document.querySelector(`#${key}`);
		});
	}

	const onSubmit = () => {
		const url = new URL(location.href);
		url.pathname = '/submit';
		url.searchParams.set("token", document.querySelector("#token").innerHTML);
		document.querySelector("#input").value = document.querySelector("#input").value.replace(/\s/g, "")
		url.searchParams.set("flag", document.querySelector("#input").value);
		fetch(url.href).then((res) => {
			if (res.ok) {
				document.querySelector("#success").classList.remove("hidden");
				document.querySelector("#fail").classList.add("hidden");
			} else {
				document.querySelector("#success").classList.add("hidden");
				document.querySelector("#fail").classList.remove("hidden");
			}
		});
	}

	const observer = new MutationObserver((mutations) => {
		for (let mutation of mutations) {
			if (!mutation.removedNodes.length && Object.values(whitelist).includes(mutation.target)) continue;

			observer.disconnect();
			document.body = bodyBackup.cloneNode(true);
			start();
			return;
		}
	});

	const observe = () => {
		observer.observe(document.body, { attributes: true, characterData: true, childList: true, subtree: true });
	}

	const start = () => {
		document.querySelector("#button").addEventListener("click", onSubmit);
		generateWhitelist();
		observe();
	}
	start();
})();
