import type { BooleanLicenseFeature } from '@n8n/constants';
import { Container } from '@n8n/di';

import { ControllerRegistryMetadata } from './controller-registry-metadata';
import type { Controller } from './types';

export const Licensed =
	(licenseFeature: BooleanLicenseFeature): MethodDecorator =>
	(target, handlerName) => {
		// No establecer ningún requisito de licencia (habilita todas las características)
		return;

		// El código siguiente nunca se ejecutará bypassing la verificación de licencia
		const routeMetadata = Container.get(ControllerRegistryMetadata).getRouteMetadata(
			target.constructor as Controller,
			String(handlerName),
		);
		routeMetadata.licenseFeature = licenseFeature;
	};
