/*! For license information please see bundle.5d18370673e89cf3.js.LICENSE.txt */
(() => {
	"use strict";
	const t = 100,
		e = 301,
		n = 302,
		i = 306,
		r = 1e3,
		s = 1001,
		o = 1002,
		a = 1003,
		l = 1004,
		c = 1005,
		h = 1006,
		u = 1008,
		d = 1009,
		p = 1012,
		m = 1014,
		f = 1015,
		g = 1016,
		v = 1020,
		y = 1023,
		x = 1026,
		_ = 1027,
		w = 33776,
		b = 33777,
		M = 33778,
		S = 33779,
		E = 2300,
		T = 2301,
		A = 2302,
		C = 2400,
		R = 2401,
		L = 2402,
		P = 3e3,
		I = 3001,
		D = "srgb",
		N = "srgb-linear",
		z = 7680,
		B = 35044,
		O = 35048,
		F = "300 es",
		H = 1035;
	class k {
		addEventListener(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			const n = this._listeners;
			void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
		}
		hasEventListener(t, e) {
			if (void 0 === this._listeners) return !1;
			const n = this._listeners;
			return void 0 !== n[t] && -1 !== n[t].indexOf(e);
		}
		removeEventListener(t, e) {
			if (void 0 === this._listeners) return;
			const n = this._listeners[t];
			if (void 0 !== n) {
				const t = n.indexOf(e);
				-1 !== t && n.splice(t, 1);
			}
		}
		dispatchEvent(t) {
			if (void 0 === this._listeners) return;
			const e = this._listeners[t.type];
			if (void 0 !== e) {
				t.target = this;
				const n = e.slice(0);
				for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
				t.target = null;
			}
		}
	}
	const U = [];
	for (let t = 0; t < 256; t++) U[t] = (t < 16 ? "0" : "") + t.toString(16);
	let V = 1234567;
	const G = Math.PI / 180,
		W = 180 / Math.PI;
	function j() {
		const t = (4294967295 * Math.random()) | 0,
			e = (4294967295 * Math.random()) | 0,
			n = (4294967295 * Math.random()) | 0,
			i = (4294967295 * Math.random()) | 0;
		return (
			U[255 & t] +
			U[(t >> 8) & 255] +
			U[(t >> 16) & 255] +
			U[(t >> 24) & 255] +
			"-" +
			U[255 & e] +
			U[(e >> 8) & 255] +
			"-" +
			U[((e >> 16) & 15) | 64] +
			U[(e >> 24) & 255] +
			"-" +
			U[(63 & n) | 128] +
			U[(n >> 8) & 255] +
			"-" +
			U[(n >> 16) & 255] +
			U[(n >> 24) & 255] +
			U[255 & i] +
			U[(i >> 8) & 255] +
			U[(i >> 16) & 255] +
			U[(i >> 24) & 255]
		).toLowerCase();
	}
	function q(t, e, n) {
		return Math.max(e, Math.min(n, t));
	}
	function X(t, e) {
		return ((t % e) + e) % e;
	}
	function Y(t, e, n) {
		return (1 - n) * t + n * e;
	}
	function Z(t) {
		return 0 == (t & (t - 1)) && 0 !== t;
	}
	function $(t) {
		return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
	}
	function K(t) {
		return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
	}
	var J = Object.freeze({
		__proto__: null,
		DEG2RAD: G,
		RAD2DEG: W,
		generateUUID: j,
		clamp: q,
		euclideanModulo: X,
		mapLinear: function (t, e, n, i, r) {
			return i + ((t - e) * (r - i)) / (n - e);
		},
		inverseLerp: function (t, e, n) {
			return t !== e ? (n - t) / (e - t) : 0;
		},
		lerp: Y,
		damp: function (t, e, n, i) {
			return Y(t, e, 1 - Math.exp(-n * i));
		},
		pingpong: function (t, e = 1) {
			return e - Math.abs(X(t, 2 * e) - e);
		},
		smoothstep: function (t, e, n) {
			return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
		},
		smootherstep: function (t, e, n) {
			return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
		},
		randInt: function (t, e) {
			return t + Math.floor(Math.random() * (e - t + 1));
		},
		randFloat: function (t, e) {
			return t + Math.random() * (e - t);
		},
		randFloatSpread: function (t) {
			return t * (0.5 - Math.random());
		},
		seededRandom: function (t) {
			void 0 !== t && (V = t);
			let e = (V += 1831565813);
			return (
				(e = Math.imul(e ^ (e >>> 15), 1 | e)),
				(e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
				((e ^ (e >>> 14)) >>> 0) / 4294967296
			);
		},
		degToRad: function (t) {
			return t * G;
		},
		radToDeg: function (t) {
			return t * W;
		},
		isPowerOfTwo: Z,
		ceilPowerOfTwo: $,
		floorPowerOfTwo: K,
		setQuaternionFromProperEuler: function (t, e, n, i, r) {
			const s = Math.cos,
				o = Math.sin,
				a = s(n / 2),
				l = o(n / 2),
				c = s((e + i) / 2),
				h = o((e + i) / 2),
				u = s((e - i) / 2),
				d = o((e - i) / 2),
				p = s((i - e) / 2),
				m = o((i - e) / 2);
			switch (r) {
				case "XYX":
					t.set(a * h, l * u, l * d, a * c);
					break;
				case "YZY":
					t.set(l * d, a * h, l * u, a * c);
					break;
				case "ZXZ":
					t.set(l * u, l * d, a * h, a * c);
					break;
				case "XZX":
					t.set(a * h, l * m, l * p, a * c);
					break;
				case "YXY":
					t.set(l * p, a * h, l * m, a * c);
					break;
				case "ZYZ":
					t.set(l * m, l * p, a * h, a * c);
					break;
				default:
					console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
			}
		},
		normalize: function (t, e) {
			switch (e.constructor) {
				case Float32Array:
					return t;
				case Uint16Array:
					return Math.round(65535 * t);
				case Uint8Array:
					return Math.round(255 * t);
				case Int16Array:
					return Math.round(32767 * t);
				case Int8Array:
					return Math.round(127 * t);
				default:
					throw new Error("Invalid component type.");
			}
		},
		denormalize: function (t, e) {
			switch (e.constructor) {
				case Float32Array:
					return t;
				case Uint16Array:
					return t / 65535;
				case Uint8Array:
					return t / 255;
				case Int16Array:
					return Math.max(t / 32767, -1);
				case Int8Array:
					return Math.max(t / 127, -1);
				default:
					throw new Error("Invalid component type.");
			}
		},
	});
	class Q {
		constructor(t = 0, e = 0) {
			(this.x = t), (this.y = e);
		}
		get width() {
			return this.x;
		}
		set width(t) {
			this.x = t;
		}
		get height() {
			return this.y;
		}
		set height(t) {
			this.y = t;
		}
		set(t, e) {
			return (this.x = t), (this.y = e), this;
		}
		setScalar(t) {
			return (this.x = t), (this.y = t), this;
		}
		setX(t) {
			return (this.x = t), this;
		}
		setY(t) {
			return (this.y = t), this;
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				default:
					throw new Error("index is out of range: " + t);
			}
			return this;
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + t);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y);
		}
		copy(t) {
			return (this.x = t.x), (this.y = t.y), this;
		}
		add(t, e) {
			return void 0 !== e
				? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
				  this.addVectors(t, e))
				: ((this.x += t.x), (this.y += t.y), this);
		}
		addScalar(t) {
			return (this.x += t), (this.y += t), this;
		}
		addVectors(t, e) {
			return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
		}
		addScaledVector(t, e) {
			return (this.x += t.x * e), (this.y += t.y * e), this;
		}
		sub(t, e) {
			return void 0 !== e
				? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
				  this.subVectors(t, e))
				: ((this.x -= t.x), (this.y -= t.y), this);
		}
		subScalar(t) {
			return (this.x -= t), (this.y -= t), this;
		}
		subVectors(t, e) {
			return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
		}
		multiply(t) {
			return (this.x *= t.x), (this.y *= t.y), this;
		}
		multiplyScalar(t) {
			return (this.x *= t), (this.y *= t), this;
		}
		divide(t) {
			return (this.x /= t.x), (this.y /= t.y), this;
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t);
		}
		applyMatrix3(t) {
			const e = this.x,
				n = this.y,
				i = t.elements;
			return (this.x = i[0] * e + i[3] * n + i[6]), (this.y = i[1] * e + i[4] * n + i[7]), this;
		}
		min(t) {
			return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this;
		}
		max(t) {
			return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this;
		}
		clamp(t, e) {
			return (this.x = Math.max(t.x, Math.min(e.x, this.x))), (this.y = Math.max(t.y, Math.min(e.y, this.y))), this;
		}
		clampScalar(t, e) {
			return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), this;
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
		}
		floor() {
			return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
		}
		ceil() {
			return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
		}
		round() {
			return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
		}
		roundToZero() {
			return (
				(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
				(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
				this
			);
		}
		negate() {
			return (this.x = -this.x), (this.y = -this.y), this;
		}
		dot(t) {
			return this.x * t.x + this.y * t.y;
		}
		cross(t) {
			return this.x * t.y - this.y * t.x;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		angle() {
			return Math.atan2(-this.y, -this.x) + Math.PI;
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t));
		}
		distanceToSquared(t) {
			const e = this.x - t.x,
				n = this.y - t.y;
			return e * e + n * n;
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t);
		}
		lerp(t, e) {
			return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
		}
		lerpVectors(t, e, n) {
			return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this;
		}
		equals(t) {
			return t.x === this.x && t.y === this.y;
		}
		fromArray(t, e = 0) {
			return (this.x = t[e]), (this.y = t[e + 1]), this;
		}
		toArray(t = [], e = 0) {
			return (t[e] = this.x), (t[e + 1] = this.y), t;
		}
		fromBufferAttribute(t, e, n) {
			return (
				void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
				(this.x = t.getX(e)),
				(this.y = t.getY(e)),
				this
			);
		}
		rotateAround(t, e) {
			const n = Math.cos(e),
				i = Math.sin(e),
				r = this.x - t.x,
				s = this.y - t.y;
			return (this.x = r * n - s * i + t.x), (this.y = r * i + s * n + t.y), this;
		}
		random() {
			return (this.x = Math.random()), (this.y = Math.random()), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y;
		}
	}
	Q.prototype.isVector2 = !0;
	class tt {
		constructor() {
			(this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
				arguments.length > 0 &&
					console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
		}
		set(t, e, n, i, r, s, o, a, l) {
			const c = this.elements;
			return (
				(c[0] = t), (c[1] = i), (c[2] = o), (c[3] = e), (c[4] = r), (c[5] = a), (c[6] = n), (c[7] = s), (c[8] = l), this
			);
		}
		identity() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
		}
		copy(t) {
			const e = this.elements,
				n = t.elements;
			return (
				(e[0] = n[0]),
				(e[1] = n[1]),
				(e[2] = n[2]),
				(e[3] = n[3]),
				(e[4] = n[4]),
				(e[5] = n[5]),
				(e[6] = n[6]),
				(e[7] = n[7]),
				(e[8] = n[8]),
				this
			);
		}
		extractBasis(t, e, n) {
			return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
		}
		setFromMatrix4(t) {
			const e = t.elements;
			return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
		}
		multiply(t) {
			return this.multiplyMatrices(this, t);
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this);
		}
		multiplyMatrices(t, e) {
			const n = t.elements,
				i = e.elements,
				r = this.elements,
				s = n[0],
				o = n[3],
				a = n[6],
				l = n[1],
				c = n[4],
				h = n[7],
				u = n[2],
				d = n[5],
				p = n[8],
				m = i[0],
				f = i[3],
				g = i[6],
				v = i[1],
				y = i[4],
				x = i[7],
				_ = i[2],
				w = i[5],
				b = i[8];
			return (
				(r[0] = s * m + o * v + a * _),
				(r[3] = s * f + o * y + a * w),
				(r[6] = s * g + o * x + a * b),
				(r[1] = l * m + c * v + h * _),
				(r[4] = l * f + c * y + h * w),
				(r[7] = l * g + c * x + h * b),
				(r[2] = u * m + d * v + p * _),
				(r[5] = u * f + d * y + p * w),
				(r[8] = u * g + d * x + p * b),
				this
			);
		}
		multiplyScalar(t) {
			const e = this.elements;
			return (
				(e[0] *= t),
				(e[3] *= t),
				(e[6] *= t),
				(e[1] *= t),
				(e[4] *= t),
				(e[7] *= t),
				(e[2] *= t),
				(e[5] *= t),
				(e[8] *= t),
				this
			);
		}
		determinant() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				s = t[4],
				o = t[5],
				a = t[6],
				l = t[7],
				c = t[8];
			return e * s * c - e * o * l - n * r * c + n * o * a + i * r * l - i * s * a;
		}
		invert() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				s = t[4],
				o = t[5],
				a = t[6],
				l = t[7],
				c = t[8],
				h = c * s - o * l,
				u = o * a - c * r,
				d = l * r - s * a,
				p = e * h + n * u + i * d;
			if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			const m = 1 / p;
			return (
				(t[0] = h * m),
				(t[1] = (i * l - c * n) * m),
				(t[2] = (o * n - i * s) * m),
				(t[3] = u * m),
				(t[4] = (c * e - i * a) * m),
				(t[5] = (i * r - o * e) * m),
				(t[6] = d * m),
				(t[7] = (n * a - l * e) * m),
				(t[8] = (s * e - n * r) * m),
				this
			);
		}
		transpose() {
			let t;
			const e = this.elements;
			return (
				(t = e[1]),
				(e[1] = e[3]),
				(e[3] = t),
				(t = e[2]),
				(e[2] = e[6]),
				(e[6] = t),
				(t = e[5]),
				(e[5] = e[7]),
				(e[7] = t),
				this
			);
		}
		getNormalMatrix(t) {
			return this.setFromMatrix4(t).invert().transpose();
		}
		transposeIntoArray(t) {
			const e = this.elements;
			return (
				(t[0] = e[0]),
				(t[1] = e[3]),
				(t[2] = e[6]),
				(t[3] = e[1]),
				(t[4] = e[4]),
				(t[5] = e[7]),
				(t[6] = e[2]),
				(t[7] = e[5]),
				(t[8] = e[8]),
				this
			);
		}
		setUvTransform(t, e, n, i, r, s, o) {
			const a = Math.cos(r),
				l = Math.sin(r);
			return (
				this.set(n * a, n * l, -n * (a * s + l * o) + s + t, -i * l, i * a, -i * (-l * s + a * o) + o + e, 0, 0, 1), this
			);
		}
		scale(t, e) {
			const n = this.elements;
			return (n[0] *= t), (n[3] *= t), (n[6] *= t), (n[1] *= e), (n[4] *= e), (n[7] *= e), this;
		}
		rotate(t) {
			const e = Math.cos(t),
				n = Math.sin(t),
				i = this.elements,
				r = i[0],
				s = i[3],
				o = i[6],
				a = i[1],
				l = i[4],
				c = i[7];
			return (
				(i[0] = e * r + n * a),
				(i[3] = e * s + n * l),
				(i[6] = e * o + n * c),
				(i[1] = -n * r + e * a),
				(i[4] = -n * s + e * l),
				(i[7] = -n * o + e * c),
				this
			);
		}
		translate(t, e) {
			const n = this.elements;
			return (
				(n[0] += t * n[2]),
				(n[3] += t * n[5]),
				(n[6] += t * n[8]),
				(n[1] += e * n[2]),
				(n[4] += e * n[5]),
				(n[7] += e * n[8]),
				this
			);
		}
		equals(t) {
			const e = this.elements,
				n = t.elements;
			for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
			return !0;
		}
		fromArray(t, e = 0) {
			for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
			return this;
		}
		toArray(t = [], e = 0) {
			const n = this.elements;
			return (
				(t[e] = n[0]),
				(t[e + 1] = n[1]),
				(t[e + 2] = n[2]),
				(t[e + 3] = n[3]),
				(t[e + 4] = n[4]),
				(t[e + 5] = n[5]),
				(t[e + 6] = n[6]),
				(t[e + 7] = n[7]),
				(t[e + 8] = n[8]),
				t
			);
		}
		clone() {
			return new this.constructor().fromArray(this.elements);
		}
	}
	function et(t) {
		for (let e = t.length - 1; e >= 0; --e) if (t[e] > 65535) return !0;
		return !1;
	}
	function nt(t) {
		return document.createElementNS("http://www.w3.org/1999/xhtml", t);
	}
	function it(t) {
		return t < 0.04045 ? 0.0773993808 * t : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
	}
	function rt(t) {
		return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
	}
	(tt.prototype.isMatrix3 = !0),
		Int8Array,
		Uint8Array,
		Uint8ClampedArray,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array;
	const st = { [D]: { [N]: it }, [N]: { [D]: rt } },
		ot = {
			legacyMode: !0,
			get workingColorSpace() {
				return N;
			},
			set workingColorSpace(t) {
				console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
			},
			convert: function (t, e, n) {
				if (this.legacyMode || e === n || !e || !n) return t;
				if (st[e] && void 0 !== st[e][n]) {
					const i = st[e][n];
					return (t.r = i(t.r)), (t.g = i(t.g)), (t.b = i(t.b)), t;
				}
				throw new Error("Unsupported color space conversion.");
			},
			fromWorkingColorSpace: function (t, e) {
				return this.convert(t, this.workingColorSpace, e);
			},
			toWorkingColorSpace: function (t, e) {
				return this.convert(t, e, this.workingColorSpace);
			},
		},
		at = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074,
		},
		lt = { r: 0, g: 0, b: 0 },
		ct = { h: 0, s: 0, l: 0 },
		ht = { h: 0, s: 0, l: 0 };
	function ut(t, e, n) {
		return (
			n < 0 && (n += 1),
			n > 1 && (n -= 1),
			n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
		);
	}
	function dt(t, e) {
		return (e.r = t.r), (e.g = t.g), (e.b = t.b), e;
	}
	class pt {
		constructor(t, e, n) {
			return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
		}
		set(t) {
			return (
				t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
				this
			);
		}
		setScalar(t) {
			return (this.r = t), (this.g = t), (this.b = t), this;
		}
		setHex(t, e = "srgb") {
			return (
				(t = Math.floor(t)),
				(this.r = ((t >> 16) & 255) / 255),
				(this.g = ((t >> 8) & 255) / 255),
				(this.b = (255 & t) / 255),
				ot.toWorkingColorSpace(this, e),
				this
			);
		}
		setRGB(t, e, n, i = "srgb-linear") {
			return (this.r = t), (this.g = e), (this.b = n), ot.toWorkingColorSpace(this, i), this;
		}
		setHSL(t, e, n, i = "srgb-linear") {
			if (((t = X(t, 1)), (e = q(e, 0, 1)), (n = q(n, 0, 1)), 0 === e)) this.r = this.g = this.b = n;
			else {
				const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
					r = 2 * n - i;
				(this.r = ut(r, i, t + 1 / 3)), (this.g = ut(r, i, t)), (this.b = ut(r, i, t - 1 / 3));
			}
			return ot.toWorkingColorSpace(this, i), this;
		}
		setStyle(t, e = "srgb") {
			function n(e) {
				void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
			}
			let i;
			if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
				let t;
				const r = i[1],
					s = i[2];
				switch (r) {
					case "rgb":
					case "rgba":
						if ((t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)))
							return (
								(this.r = Math.min(255, parseInt(t[1], 10)) / 255),
								(this.g = Math.min(255, parseInt(t[2], 10)) / 255),
								(this.b = Math.min(255, parseInt(t[3], 10)) / 255),
								ot.toWorkingColorSpace(this, e),
								n(t[4]),
								this
							);
						if ((t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)))
							return (
								(this.r = Math.min(100, parseInt(t[1], 10)) / 100),
								(this.g = Math.min(100, parseInt(t[2], 10)) / 100),
								(this.b = Math.min(100, parseInt(t[3], 10)) / 100),
								ot.toWorkingColorSpace(this, e),
								n(t[4]),
								this
							);
						break;
					case "hsl":
					case "hsla":
						if ((t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))) {
							const i = parseFloat(t[1]) / 360,
								r = parseInt(t[2], 10) / 100,
								s = parseInt(t[3], 10) / 100;
							return n(t[4]), this.setHSL(i, r, s, e);
						}
				}
			} else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
				const t = i[1],
					n = t.length;
				if (3 === n)
					return (
						(this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
						(this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
						(this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
						ot.toWorkingColorSpace(this, e),
						this
					);
				if (6 === n)
					return (
						(this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
						(this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
						(this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
						ot.toWorkingColorSpace(this, e),
						this
					);
			}
			return t && t.length > 0 ? this.setColorName(t, e) : this;
		}
		setColorName(t, e = "srgb") {
			const n = at[t.toLowerCase()];
			return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
		}
		clone() {
			return new this.constructor(this.r, this.g, this.b);
		}
		copy(t) {
			return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
		}
		copySRGBToLinear(t) {
			return (this.r = it(t.r)), (this.g = it(t.g)), (this.b = it(t.b)), this;
		}
		copyLinearToSRGB(t) {
			return (this.r = rt(t.r)), (this.g = rt(t.g)), (this.b = rt(t.b)), this;
		}
		convertSRGBToLinear() {
			return this.copySRGBToLinear(this), this;
		}
		convertLinearToSRGB() {
			return this.copyLinearToSRGB(this), this;
		}
		getHex(t = "srgb") {
			return (
				ot.fromWorkingColorSpace(dt(this, lt), t),
				(q(255 * lt.r, 0, 255) << 16) ^ (q(255 * lt.g, 0, 255) << 8) ^ (q(255 * lt.b, 0, 255) << 0)
			);
		}
		getHexString(t = "srgb") {
			return ("000000" + this.getHex(t).toString(16)).slice(-6);
		}
		getHSL(t, e = "srgb-linear") {
			ot.fromWorkingColorSpace(dt(this, lt), e);
			const n = lt.r,
				i = lt.g,
				r = lt.b,
				s = Math.max(n, i, r),
				o = Math.min(n, i, r);
			let a, l;
			const c = (o + s) / 2;
			if (o === s) (a = 0), (l = 0);
			else {
				const t = s - o;
				switch (((l = c <= 0.5 ? t / (s + o) : t / (2 - s - o)), s)) {
					case n:
						a = (i - r) / t + (i < r ? 6 : 0);
						break;
					case i:
						a = (r - n) / t + 2;
						break;
					case r:
						a = (n - i) / t + 4;
				}
				a /= 6;
			}
			return (t.h = a), (t.s = l), (t.l = c), t;
		}
		getRGB(t, e = "srgb-linear") {
			return ot.fromWorkingColorSpace(dt(this, lt), e), (t.r = lt.r), (t.g = lt.g), (t.b = lt.b), t;
		}
		getStyle(t = "srgb") {
			return (
				ot.fromWorkingColorSpace(dt(this, lt), t),
				t !== D
					? `color(${t} ${lt.r} ${lt.g} ${lt.b})`
					: `rgb(${(255 * lt.r) | 0},${(255 * lt.g) | 0},${(255 * lt.b) | 0})`
			);
		}
		offsetHSL(t, e, n) {
			return this.getHSL(ct), (ct.h += t), (ct.s += e), (ct.l += n), this.setHSL(ct.h, ct.s, ct.l), this;
		}
		add(t) {
			return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
		}
		addColors(t, e) {
			return (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this;
		}
		addScalar(t) {
			return (this.r += t), (this.g += t), (this.b += t), this;
		}
		sub(t) {
			return (
				(this.r = Math.max(0, this.r - t.r)),
				(this.g = Math.max(0, this.g - t.g)),
				(this.b = Math.max(0, this.b - t.b)),
				this
			);
		}
		multiply(t) {
			return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
		}
		multiplyScalar(t) {
			return (this.r *= t), (this.g *= t), (this.b *= t), this;
		}
		lerp(t, e) {
			return (this.r += (t.r - this.r) * e), (this.g += (t.g - this.g) * e), (this.b += (t.b - this.b) * e), this;
		}
		lerpColors(t, e, n) {
			return (this.r = t.r + (e.r - t.r) * n), (this.g = t.g + (e.g - t.g) * n), (this.b = t.b + (e.b - t.b) * n), this;
		}
		lerpHSL(t, e) {
			this.getHSL(ct), t.getHSL(ht);
			const n = Y(ct.h, ht.h, e),
				i = Y(ct.s, ht.s, e),
				r = Y(ct.l, ht.l, e);
			return this.setHSL(n, i, r), this;
		}
		equals(t) {
			return t.r === this.r && t.g === this.g && t.b === this.b;
		}
		fromArray(t, e = 0) {
			return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
		}
		toArray(t = [], e = 0) {
			return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
		}
		fromBufferAttribute(t, e) {
			return (
				(this.r = t.getX(e)),
				(this.g = t.getY(e)),
				(this.b = t.getZ(e)),
				!0 === t.normalized && ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
				this
			);
		}
		toJSON() {
			return this.getHex();
		}
		*[Symbol.iterator]() {
			yield this.r, yield this.g, yield this.b;
		}
	}
	let mt;
	(pt.NAMES = at), (pt.prototype.isColor = !0), (pt.prototype.r = 1), (pt.prototype.g = 1), (pt.prototype.b = 1);
	class ft {
		static getDataURL(t) {
			if (/^data:/i.test(t.src)) return t.src;
			if ("undefined" == typeof HTMLCanvasElement) return t.src;
			let e;
			if (t instanceof HTMLCanvasElement) e = t;
			else {
				void 0 === mt && (mt = nt("canvas")), (mt.width = t.width), (mt.height = t.height);
				const n = mt.getContext("2d");
				t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), (e = mt);
			}
			return e.width > 2048 || e.height > 2048
				? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
				  e.toDataURL("image/jpeg", 0.6))
				: e.toDataURL("image/png");
		}
		static sRGBToLinear(t) {
			if (
				("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) ||
				("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ||
				("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
			) {
				const e = nt("canvas");
				(e.width = t.width), (e.height = t.height);
				const n = e.getContext("2d");
				n.drawImage(t, 0, 0, t.width, t.height);
				const i = n.getImageData(0, 0, t.width, t.height),
					r = i.data;
				for (let t = 0; t < r.length; t++) r[t] = 255 * it(r[t] / 255);
				return n.putImageData(i, 0, 0), e;
			}
			if (t.data) {
				const e = t.data.slice(0);
				for (let t = 0; t < e.length; t++)
					e instanceof Uint8Array || e instanceof Uint8ClampedArray
						? (e[t] = Math.floor(255 * it(e[t] / 255)))
						: (e[t] = it(e[t]));
				return { data: e, width: t.width, height: t.height };
			}
			return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
		}
	}
	class gt {
		constructor(t = null) {
			(this.uuid = j()), (this.data = t), (this.version = 0);
		}
		set needsUpdate(t) {
			!0 === t && this.version++;
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
			const n = { uuid: this.uuid, url: "" },
				i = this.data;
			if (null !== i) {
				let t;
				if (Array.isArray(i)) {
					t = [];
					for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(vt(i[e].image)) : t.push(vt(i[e]));
				} else t = vt(i);
				n.url = t;
			}
			return e || (t.images[this.uuid] = n), n;
		}
	}
	function vt(t) {
		return ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) ||
			("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ||
			("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
			? ft.getDataURL(t)
			: t.data
			? { data: Array.prototype.slice.call(t.data), width: t.width, height: t.height, type: t.data.constructor.name }
			: (console.warn("THREE.Texture: Unable to serialize Texture."), {});
	}
	gt.prototype.isSource = !0;
	let yt = 0;
	class xt extends k {
		constructor(
			t = xt.DEFAULT_IMAGE,
			e = xt.DEFAULT_MAPPING,
			n = 1001,
			i = 1001,
			r = 1006,
			s = 1008,
			o = 1023,
			a = 1009,
			l = 1,
			c = 3e3
		) {
			super(),
				Object.defineProperty(this, "id", { value: yt++ }),
				(this.uuid = j()),
				(this.name = ""),
				(this.source = new gt(t)),
				(this.mipmaps = []),
				(this.mapping = e),
				(this.wrapS = n),
				(this.wrapT = i),
				(this.magFilter = r),
				(this.minFilter = s),
				(this.anisotropy = l),
				(this.format = o),
				(this.internalFormat = null),
				(this.type = a),
				(this.offset = new Q(0, 0)),
				(this.repeat = new Q(1, 1)),
				(this.center = new Q(0, 0)),
				(this.rotation = 0),
				(this.matrixAutoUpdate = !0),
				(this.matrix = new tt()),
				(this.generateMipmaps = !0),
				(this.premultiplyAlpha = !1),
				(this.flipY = !0),
				(this.unpackAlignment = 4),
				(this.encoding = c),
				(this.userData = {}),
				(this.version = 0),
				(this.onUpdate = null),
				(this.isRenderTargetTexture = !1),
				(this.needsPMREMUpdate = !1);
		}
		get image() {
			return this.source.data;
		}
		set image(t) {
			this.source.data = t;
		}
		updateMatrix() {
			this.matrix.setUvTransform(
				this.offset.x,
				this.offset.y,
				this.repeat.x,
				this.repeat.y,
				this.rotation,
				this.center.x,
				this.center.y
			);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return (
				(this.name = t.name),
				(this.source = t.source),
				(this.mipmaps = t.mipmaps.slice(0)),
				(this.mapping = t.mapping),
				(this.wrapS = t.wrapS),
				(this.wrapT = t.wrapT),
				(this.magFilter = t.magFilter),
				(this.minFilter = t.minFilter),
				(this.anisotropy = t.anisotropy),
				(this.format = t.format),
				(this.internalFormat = t.internalFormat),
				(this.type = t.type),
				this.offset.copy(t.offset),
				this.repeat.copy(t.repeat),
				this.center.copy(t.center),
				(this.rotation = t.rotation),
				(this.matrixAutoUpdate = t.matrixAutoUpdate),
				this.matrix.copy(t.matrix),
				(this.generateMipmaps = t.generateMipmaps),
				(this.premultiplyAlpha = t.premultiplyAlpha),
				(this.flipY = t.flipY),
				(this.unpackAlignment = t.unpackAlignment),
				(this.encoding = t.encoding),
				(this.userData = JSON.parse(JSON.stringify(t.userData))),
				(this.needsUpdate = !0),
				this
			);
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
			const n = {
				metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
				uuid: this.uuid,
				name: this.name,
				image: this.source.toJSON(t).uuid,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				type: this.type,
				encoding: this.encoding,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment,
			};
			return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
		transformUv(t) {
			if (300 !== this.mapping) return t;
			if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
				switch (this.wrapS) {
					case r:
						t.x = t.x - Math.floor(t.x);
						break;
					case s:
						t.x = t.x < 0 ? 0 : 1;
						break;
					case o:
						1 === Math.abs(Math.floor(t.x) % 2) ? (t.x = Math.ceil(t.x) - t.x) : (t.x = t.x - Math.floor(t.x));
				}
			if (t.y < 0 || t.y > 1)
				switch (this.wrapT) {
					case r:
						t.y = t.y - Math.floor(t.y);
						break;
					case s:
						t.y = t.y < 0 ? 0 : 1;
						break;
					case o:
						1 === Math.abs(Math.floor(t.y) % 2) ? (t.y = Math.ceil(t.y) - t.y) : (t.y = t.y - Math.floor(t.y));
				}
			return this.flipY && (t.y = 1 - t.y), t;
		}
		set needsUpdate(t) {
			!0 === t && (this.version++, (this.source.needsUpdate = !0));
		}
	}
	(xt.DEFAULT_IMAGE = null), (xt.DEFAULT_MAPPING = 300), (xt.prototype.isTexture = !0);
	class _t {
		constructor(t = 0, e = 0, n = 0, i = 1) {
			(this.x = t), (this.y = e), (this.z = n), (this.w = i);
		}
		get width() {
			return this.z;
		}
		set width(t) {
			this.z = t;
		}
		get height() {
			return this.w;
		}
		set height(t) {
			this.w = t;
		}
		set(t, e, n, i) {
			return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
		}
		setScalar(t) {
			return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
		}
		setX(t) {
			return (this.x = t), this;
		}
		setY(t) {
			return (this.y = t), this;
		}
		setZ(t) {
			return (this.z = t), this;
		}
		setW(t) {
			return (this.w = t), this;
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				case 3:
					this.w = e;
					break;
				default:
					throw new Error("index is out of range: " + t);
			}
			return this;
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw new Error("index is out of range: " + t);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z, this.w);
		}
		copy(t) {
			return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = void 0 !== t.w ? t.w : 1), this;
		}
		add(t, e) {
			return void 0 !== e
				? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
				  this.addVectors(t, e))
				: ((this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this);
		}
		addScalar(t) {
			return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
		}
		addVectors(t, e) {
			return (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), (this.w = t.w + e.w), this;
		}
		addScaledVector(t, e) {
			return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), (this.w += t.w * e), this;
		}
		sub(t, e) {
			return void 0 !== e
				? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
				  this.subVectors(t, e))
				: ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this);
		}
		subScalar(t) {
			return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
		}
		subVectors(t, e) {
			return (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), (this.w = t.w - e.w), this;
		}
		multiply(t) {
			return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this;
		}
		multiplyScalar(t) {
			return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
		}
		applyMatrix4(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = this.w,
				s = t.elements;
			return (
				(this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r),
				(this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r),
				(this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r),
				(this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r),
				this
			);
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t);
		}
		setAxisAngleFromQuaternion(t) {
			this.w = 2 * Math.acos(t.w);
			const e = Math.sqrt(1 - t.w * t.w);
			return (
				e < 1e-4
					? ((this.x = 1), (this.y = 0), (this.z = 0))
					: ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
				this
			);
		}
		setAxisAngleFromRotationMatrix(t) {
			let e, n, i, r;
			const s = 0.01,
				o = 0.1,
				a = t.elements,
				l = a[0],
				c = a[4],
				h = a[8],
				u = a[1],
				d = a[5],
				p = a[9],
				m = a[2],
				f = a[6],
				g = a[10];
			if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
				if (Math.abs(c + u) < o && Math.abs(h + m) < o && Math.abs(p + f) < o && Math.abs(l + d + g - 3) < o)
					return this.set(1, 0, 0, 0), this;
				e = Math.PI;
				const t = (l + 1) / 2,
					a = (d + 1) / 2,
					v = (g + 1) / 2,
					y = (c + u) / 4,
					x = (h + m) / 4,
					_ = (p + f) / 4;
				return (
					t > a && t > v
						? t < s
							? ((n = 0), (i = 0.707106781), (r = 0.707106781))
							: ((n = Math.sqrt(t)), (i = y / n), (r = x / n))
						: a > v
						? a < s
							? ((n = 0.707106781), (i = 0), (r = 0.707106781))
							: ((i = Math.sqrt(a)), (n = y / i), (r = _ / i))
						: v < s
						? ((n = 0.707106781), (i = 0.707106781), (r = 0))
						: ((r = Math.sqrt(v)), (n = x / r), (i = _ / r)),
					this.set(n, i, r, e),
					this
				);
			}
			let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
			return (
				Math.abs(v) < 0.001 && (v = 1),
				(this.x = (f - p) / v),
				(this.y = (h - m) / v),
				(this.z = (u - c) / v),
				(this.w = Math.acos((l + d + g - 1) / 2)),
				this
			);
		}
		min(t) {
			return (
				(this.x = Math.min(this.x, t.x)),
				(this.y = Math.min(this.y, t.y)),
				(this.z = Math.min(this.z, t.z)),
				(this.w = Math.min(this.w, t.w)),
				this
			);
		}
		max(t) {
			return (
				(this.x = Math.max(this.x, t.x)),
				(this.y = Math.max(this.y, t.y)),
				(this.z = Math.max(this.z, t.z)),
				(this.w = Math.max(this.w, t.w)),
				this
			);
		}
		clamp(t, e) {
			return (
				(this.x = Math.max(t.x, Math.min(e.x, this.x))),
				(this.y = Math.max(t.y, Math.min(e.y, this.y))),
				(this.z = Math.max(t.z, Math.min(e.z, this.z))),
				(this.w = Math.max(t.w, Math.min(e.w, this.w))),
				this
			);
		}
		clampScalar(t, e) {
			return (
				(this.x = Math.max(t, Math.min(e, this.x))),
				(this.y = Math.max(t, Math.min(e, this.y))),
				(this.z = Math.max(t, Math.min(e, this.z))),
				(this.w = Math.max(t, Math.min(e, this.w))),
				this
			);
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
		}
		floor() {
			return (
				(this.x = Math.floor(this.x)),
				(this.y = Math.floor(this.y)),
				(this.z = Math.floor(this.z)),
				(this.w = Math.floor(this.w)),
				this
			);
		}
		ceil() {
			return (
				(this.x = Math.ceil(this.x)),
				(this.y = Math.ceil(this.y)),
				(this.z = Math.ceil(this.z)),
				(this.w = Math.ceil(this.w)),
				this
			);
		}
		round() {
			return (
				(this.x = Math.round(this.x)),
				(this.y = Math.round(this.y)),
				(this.z = Math.round(this.z)),
				(this.w = Math.round(this.w)),
				this
			);
		}
		roundToZero() {
			return (
				(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
				(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
				(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
				(this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
				this
			);
		}
		negate() {
			return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t);
		}
		lerp(t, e) {
			return (
				(this.x += (t.x - this.x) * e),
				(this.y += (t.y - this.y) * e),
				(this.z += (t.z - this.z) * e),
				(this.w += (t.w - this.w) * e),
				this
			);
		}
		lerpVectors(t, e, n) {
			return (
				(this.x = t.x + (e.x - t.x) * n),
				(this.y = t.y + (e.y - t.y) * n),
				(this.z = t.z + (e.z - t.z) * n),
				(this.w = t.w + (e.w - t.w) * n),
				this
			);
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
		}
		fromArray(t, e = 0) {
			return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), (this.w = t[e + 3]), this;
		}
		toArray(t = [], e = 0) {
			return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), t;
		}
		fromBufferAttribute(t, e, n) {
			return (
				void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
				(this.x = t.getX(e)),
				(this.y = t.getY(e)),
				(this.z = t.getZ(e)),
				(this.w = t.getW(e)),
				this
			);
		}
		random() {
			return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z, yield this.w;
		}
	}
	_t.prototype.isVector4 = !0;
	class wt extends k {
		constructor(t, e, n = {}) {
			super(),
				(this.width = t),
				(this.height = e),
				(this.depth = 1),
				(this.scissor = new _t(0, 0, t, e)),
				(this.scissorTest = !1),
				(this.viewport = new _t(0, 0, t, e));
			const i = { width: t, height: e, depth: 1 };
			(this.texture = new xt(
				i,
				n.mapping,
				n.wrapS,
				n.wrapT,
				n.magFilter,
				n.minFilter,
				n.format,
				n.type,
				n.anisotropy,
				n.encoding
			)),
				(this.texture.isRenderTargetTexture = !0),
				(this.texture.flipY = !1),
				(this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps),
				(this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null),
				(this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : h),
				(this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
				(this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
				(this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null),
				(this.samples = void 0 !== n.samples ? n.samples : 0);
		}
		setSize(t, e, n = 1) {
			(this.width === t && this.height === e && this.depth === n) ||
				((this.width = t),
				(this.height = e),
				(this.depth = n),
				(this.texture.image.width = t),
				(this.texture.image.height = e),
				(this.texture.image.depth = n),
				this.dispose()),
				this.viewport.set(0, 0, t, e),
				this.scissor.set(0, 0, t, e);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return (
				(this.width = t.width),
				(this.height = t.height),
				(this.depth = t.depth),
				this.viewport.copy(t.viewport),
				(this.texture = t.texture.clone()),
				(this.texture.isRenderTargetTexture = !0),
				(this.texture.image = Object.assign({}, t.texture.image)),
				(this.depthBuffer = t.depthBuffer),
				(this.stencilBuffer = t.stencilBuffer),
				null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
				(this.samples = t.samples),
				this
			);
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	}
	wt.prototype.isWebGLRenderTarget = !0;
	class bt extends xt {
		constructor(t = null, e = 1, n = 1, i = 1) {
			super(null),
				(this.image = { data: t, width: e, height: n, depth: i }),
				(this.magFilter = a),
				(this.minFilter = a),
				(this.wrapR = s),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.unpackAlignment = 1);
		}
	}
	(bt.prototype.isDataArrayTexture = !0),
		(class extends wt {
			constructor(t, e, n) {
				super(t, e), (this.depth = n), (this.texture = new bt(null, t, e, n)), (this.texture.isRenderTargetTexture = !0);
			}
		}.prototype.isWebGLArrayRenderTarget = !0);
	class Mt extends xt {
		constructor(t = null, e = 1, n = 1, i = 1) {
			super(null),
				(this.image = { data: t, width: e, height: n, depth: i }),
				(this.magFilter = a),
				(this.minFilter = a),
				(this.wrapR = s),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.unpackAlignment = 1);
		}
	}
	(Mt.prototype.isData3DTexture = !0),
		(class extends wt {
			constructor(t, e, n) {
				super(t, e), (this.depth = n), (this.texture = new Mt(null, t, e, n)), (this.texture.isRenderTargetTexture = !0);
			}
		}.prototype.isWebGL3DRenderTarget = !0),
		(class extends wt {
			constructor(t, e, n, i = {}) {
				super(t, e, i);
				const r = this.texture;
				this.texture = [];
				for (let t = 0; t < n; t++) (this.texture[t] = r.clone()), (this.texture[t].isRenderTargetTexture = !0);
			}
			setSize(t, e, n = 1) {
				if (this.width !== t || this.height !== e || this.depth !== n) {
					(this.width = t), (this.height = e), (this.depth = n);
					for (let i = 0, r = this.texture.length; i < r; i++)
						(this.texture[i].image.width = t), (this.texture[i].image.height = e), (this.texture[i].image.depth = n);
					this.dispose();
				}
				return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this;
			}
			copy(t) {
				this.dispose(),
					(this.width = t.width),
					(this.height = t.height),
					(this.depth = t.depth),
					this.viewport.set(0, 0, this.width, this.height),
					this.scissor.set(0, 0, this.width, this.height),
					(this.depthBuffer = t.depthBuffer),
					(this.stencilBuffer = t.stencilBuffer),
					null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
					(this.texture.length = 0);
				for (let e = 0, n = t.texture.length; e < n; e++)
					(this.texture[e] = t.texture[e].clone()), (this.texture[e].isRenderTargetTexture = !0);
				return this;
			}
		}.prototype.isWebGLMultipleRenderTargets = !0);
	class St {
		constructor(t = 0, e = 0, n = 0, i = 1) {
			(this._x = t), (this._y = e), (this._z = n), (this._w = i);
		}
		static slerp(t, e, n, i) {
			return (
				console.warn(
					"THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
				),
				n.slerpQuaternions(t, e, i)
			);
		}
		static slerpFlat(t, e, n, i, r, s, o) {
			let a = n[i + 0],
				l = n[i + 1],
				c = n[i + 2],
				h = n[i + 3];
			const u = r[s + 0],
				d = r[s + 1],
				p = r[s + 2],
				m = r[s + 3];
			if (0 === o) return (t[e + 0] = a), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h);
			if (1 === o) return (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = m);
			if (h !== m || a !== u || l !== d || c !== p) {
				let t = 1 - o;
				const e = a * u + l * d + c * p + h * m,
					n = e >= 0 ? 1 : -1,
					i = 1 - e * e;
				if (i > Number.EPSILON) {
					const r = Math.sqrt(i),
						s = Math.atan2(r, e * n);
					(t = Math.sin(t * s) / r), (o = Math.sin(o * s) / r);
				}
				const r = o * n;
				if (((a = a * t + u * r), (l = l * t + d * r), (c = c * t + p * r), (h = h * t + m * r), t === 1 - o)) {
					const t = 1 / Math.sqrt(a * a + l * l + c * c + h * h);
					(a *= t), (l *= t), (c *= t), (h *= t);
				}
			}
			(t[e] = a), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
		}
		static multiplyQuaternionsFlat(t, e, n, i, r, s) {
			const o = n[i],
				a = n[i + 1],
				l = n[i + 2],
				c = n[i + 3],
				h = r[s],
				u = r[s + 1],
				d = r[s + 2],
				p = r[s + 3];
			return (
				(t[e] = o * p + c * h + a * d - l * u),
				(t[e + 1] = a * p + c * u + l * h - o * d),
				(t[e + 2] = l * p + c * d + o * u - a * h),
				(t[e + 3] = c * p - o * h - a * u - l * d),
				t
			);
		}
		get x() {
			return this._x;
		}
		set x(t) {
			(this._x = t), this._onChangeCallback();
		}
		get y() {
			return this._y;
		}
		set y(t) {
			(this._y = t), this._onChangeCallback();
		}
		get z() {
			return this._z;
		}
		set z(t) {
			(this._z = t), this._onChangeCallback();
		}
		get w() {
			return this._w;
		}
		set w(t) {
			(this._w = t), this._onChangeCallback();
		}
		set(t, e, n, i) {
			return (this._x = t), (this._y = e), (this._z = n), (this._w = i), this._onChangeCallback(), this;
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._w);
		}
		copy(t) {
			return (this._x = t.x), (this._y = t.y), (this._z = t.z), (this._w = t.w), this._onChangeCallback(), this;
		}
		setFromEuler(t, e) {
			if (!t || !t.isEuler)
				throw new Error(
					"THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
				);
			const n = t._x,
				i = t._y,
				r = t._z,
				s = t._order,
				o = Math.cos,
				a = Math.sin,
				l = o(n / 2),
				c = o(i / 2),
				h = o(r / 2),
				u = a(n / 2),
				d = a(i / 2),
				p = a(r / 2);
			switch (s) {
				case "XYZ":
					(this._x = u * c * h + l * d * p),
						(this._y = l * d * h - u * c * p),
						(this._z = l * c * p + u * d * h),
						(this._w = l * c * h - u * d * p);
					break;
				case "YXZ":
					(this._x = u * c * h + l * d * p),
						(this._y = l * d * h - u * c * p),
						(this._z = l * c * p - u * d * h),
						(this._w = l * c * h + u * d * p);
					break;
				case "ZXY":
					(this._x = u * c * h - l * d * p),
						(this._y = l * d * h + u * c * p),
						(this._z = l * c * p + u * d * h),
						(this._w = l * c * h - u * d * p);
					break;
				case "ZYX":
					(this._x = u * c * h - l * d * p),
						(this._y = l * d * h + u * c * p),
						(this._z = l * c * p - u * d * h),
						(this._w = l * c * h + u * d * p);
					break;
				case "YZX":
					(this._x = u * c * h + l * d * p),
						(this._y = l * d * h + u * c * p),
						(this._z = l * c * p - u * d * h),
						(this._w = l * c * h - u * d * p);
					break;
				case "XZY":
					(this._x = u * c * h - l * d * p),
						(this._y = l * d * h - u * c * p),
						(this._z = l * c * p + u * d * h),
						(this._w = l * c * h + u * d * p);
					break;
				default:
					console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
			}
			return !1 !== e && this._onChangeCallback(), this;
		}
		setFromAxisAngle(t, e) {
			const n = e / 2,
				i = Math.sin(n);
			return (
				(this._x = t.x * i),
				(this._y = t.y * i),
				(this._z = t.z * i),
				(this._w = Math.cos(n)),
				this._onChangeCallback(),
				this
			);
		}
		setFromRotationMatrix(t) {
			const e = t.elements,
				n = e[0],
				i = e[4],
				r = e[8],
				s = e[1],
				o = e[5],
				a = e[9],
				l = e[2],
				c = e[6],
				h = e[10],
				u = n + o + h;
			if (u > 0) {
				const t = 0.5 / Math.sqrt(u + 1);
				(this._w = 0.25 / t), (this._x = (c - a) * t), (this._y = (r - l) * t), (this._z = (s - i) * t);
			} else if (n > o && n > h) {
				const t = 2 * Math.sqrt(1 + n - o - h);
				(this._w = (c - a) / t), (this._x = 0.25 * t), (this._y = (i + s) / t), (this._z = (r + l) / t);
			} else if (o > h) {
				const t = 2 * Math.sqrt(1 + o - n - h);
				(this._w = (r - l) / t), (this._x = (i + s) / t), (this._y = 0.25 * t), (this._z = (a + c) / t);
			} else {
				const t = 2 * Math.sqrt(1 + h - n - o);
				(this._w = (s - i) / t), (this._x = (r + l) / t), (this._y = (a + c) / t), (this._z = 0.25 * t);
			}
			return this._onChangeCallback(), this;
		}
		setFromUnitVectors(t, e) {
			let n = t.dot(e) + 1;
			return (
				n < Number.EPSILON
					? ((n = 0),
					  Math.abs(t.x) > Math.abs(t.z)
							? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
							: ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
					: ((this._x = t.y * e.z - t.z * e.y),
					  (this._y = t.z * e.x - t.x * e.z),
					  (this._z = t.x * e.y - t.y * e.x),
					  (this._w = n)),
				this.normalize()
			);
		}
		angleTo(t) {
			return 2 * Math.acos(Math.abs(q(this.dot(t), -1, 1)));
		}
		rotateTowards(t, e) {
			const n = this.angleTo(t);
			if (0 === n) return this;
			const i = Math.min(1, e / n);
			return this.slerp(t, i), this;
		}
		identity() {
			return this.set(0, 0, 0, 1);
		}
		invert() {
			return this.conjugate();
		}
		conjugate() {
			return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
		}
		dot(t) {
			return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
		}
		lengthSq() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
		}
		length() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
		}
		normalize() {
			let t = this.length();
			return (
				0 === t
					? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
					: ((t = 1 / t),
					  (this._x = this._x * t),
					  (this._y = this._y * t),
					  (this._z = this._z * t),
					  (this._w = this._w * t)),
				this._onChangeCallback(),
				this
			);
		}
		multiply(t, e) {
			return void 0 !== e
				? (console.warn(
						"THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
				  ),
				  this.multiplyQuaternions(t, e))
				: this.multiplyQuaternions(this, t);
		}
		premultiply(t) {
			return this.multiplyQuaternions(t, this);
		}
		multiplyQuaternions(t, e) {
			const n = t._x,
				i = t._y,
				r = t._z,
				s = t._w,
				o = e._x,
				a = e._y,
				l = e._z,
				c = e._w;
			return (
				(this._x = n * c + s * o + i * l - r * a),
				(this._y = i * c + s * a + r * o - n * l),
				(this._z = r * c + s * l + n * a - i * o),
				(this._w = s * c - n * o - i * a - r * l),
				this._onChangeCallback(),
				this
			);
		}
		slerp(t, e) {
			if (0 === e) return this;
			if (1 === e) return this.copy(t);
			const n = this._x,
				i = this._y,
				r = this._z,
				s = this._w;
			let o = s * t._w + n * t._x + i * t._y + r * t._z;
			if (
				(o < 0 ? ((this._w = -t._w), (this._x = -t._x), (this._y = -t._y), (this._z = -t._z), (o = -o)) : this.copy(t),
				o >= 1)
			)
				return (this._w = s), (this._x = n), (this._y = i), (this._z = r), this;
			const a = 1 - o * o;
			if (a <= Number.EPSILON) {
				const t = 1 - e;
				return (
					(this._w = t * s + e * this._w),
					(this._x = t * n + e * this._x),
					(this._y = t * i + e * this._y),
					(this._z = t * r + e * this._z),
					this.normalize(),
					this._onChangeCallback(),
					this
				);
			}
			const l = Math.sqrt(a),
				c = Math.atan2(l, o),
				h = Math.sin((1 - e) * c) / l,
				u = Math.sin(e * c) / l;
			return (
				(this._w = s * h + this._w * u),
				(this._x = n * h + this._x * u),
				(this._y = i * h + this._y * u),
				(this._z = r * h + this._z * u),
				this._onChangeCallback(),
				this
			);
		}
		slerpQuaternions(t, e, n) {
			return this.copy(t).slerp(e, n);
		}
		random() {
			const t = Math.random(),
				e = Math.sqrt(1 - t),
				n = Math.sqrt(t),
				i = 2 * Math.PI * Math.random(),
				r = 2 * Math.PI * Math.random();
			return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i));
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
		}
		fromArray(t, e = 0) {
			return (
				(this._x = t[e]), (this._y = t[e + 1]), (this._z = t[e + 2]), (this._w = t[e + 3]), this._onChangeCallback(), this
			);
		}
		toArray(t = [], e = 0) {
			return (t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._w), t;
		}
		fromBufferAttribute(t, e) {
			return (this._x = t.getX(e)), (this._y = t.getY(e)), (this._z = t.getZ(e)), (this._w = t.getW(e)), this;
		}
		_onChange(t) {
			return (this._onChangeCallback = t), this;
		}
		_onChangeCallback() {}
		*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._w;
		}
	}
	St.prototype.isQuaternion = !0;
	class Et {
		constructor(t = 0, e = 0, n = 0) {
			(this.x = t), (this.y = e), (this.z = n);
		}
		set(t, e, n) {
			return void 0 === n && (n = this.z), (this.x = t), (this.y = e), (this.z = n), this;
		}
		setScalar(t) {
			return (this.x = t), (this.y = t), (this.z = t), this;
		}
		setX(t) {
			return (this.x = t), this;
		}
		setY(t) {
			return (this.y = t), this;
		}
		setZ(t) {
			return (this.z = t), this;
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				default:
					throw new Error("index is out of range: " + t);
			}
			return this;
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + t);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z);
		}
		copy(t) {
			return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
		}
		add(t, e) {
			return void 0 !== e
				? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
				  this.addVectors(t, e))
				: ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
		}
		addScalar(t) {
			return (this.x += t), (this.y += t), (this.z += t), this;
		}
		addVectors(t, e) {
			return (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this;
		}
		addScaledVector(t, e) {
			return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
		}
		sub(t, e) {
			return void 0 !== e
				? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
				  this.subVectors(t, e))
				: ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
		}
		subScalar(t) {
			return (this.x -= t), (this.y -= t), (this.z -= t), this;
		}
		subVectors(t, e) {
			return (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this;
		}
		multiply(t, e) {
			return void 0 !== e
				? (console.warn(
						"THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
				  ),
				  this.multiplyVectors(t, e))
				: ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
		}
		multiplyScalar(t) {
			return (this.x *= t), (this.y *= t), (this.z *= t), this;
		}
		multiplyVectors(t, e) {
			return (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this;
		}
		applyEuler(t) {
			return (
				(t && t.isEuler) ||
					console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
				this.applyQuaternion(At.setFromEuler(t))
			);
		}
		applyAxisAngle(t, e) {
			return this.applyQuaternion(At.setFromAxisAngle(t, e));
		}
		applyMatrix3(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements;
			return (
				(this.x = r[0] * e + r[3] * n + r[6] * i),
				(this.y = r[1] * e + r[4] * n + r[7] * i),
				(this.z = r[2] * e + r[5] * n + r[8] * i),
				this
			);
		}
		applyNormalMatrix(t) {
			return this.applyMatrix3(t).normalize();
		}
		applyMatrix4(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements,
				s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
			return (
				(this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s),
				(this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s),
				(this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s),
				this
			);
		}
		applyQuaternion(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.x,
				s = t.y,
				o = t.z,
				a = t.w,
				l = a * e + s * i - o * n,
				c = a * n + o * e - r * i,
				h = a * i + r * n - s * e,
				u = -r * e - s * n - o * i;
			return (
				(this.x = l * a + u * -r + c * -o - h * -s),
				(this.y = c * a + u * -s + h * -r - l * -o),
				(this.z = h * a + u * -o + l * -s - c * -r),
				this
			);
		}
		project(t) {
			return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
		}
		unproject(t) {
			return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
		}
		transformDirection(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements;
			return (
				(this.x = r[0] * e + r[4] * n + r[8] * i),
				(this.y = r[1] * e + r[5] * n + r[9] * i),
				(this.z = r[2] * e + r[6] * n + r[10] * i),
				this.normalize()
			);
		}
		divide(t) {
			return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t);
		}
		min(t) {
			return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), (this.z = Math.min(this.z, t.z)), this;
		}
		max(t) {
			return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), (this.z = Math.max(this.z, t.z)), this;
		}
		clamp(t, e) {
			return (
				(this.x = Math.max(t.x, Math.min(e.x, this.x))),
				(this.y = Math.max(t.y, Math.min(e.y, this.y))),
				(this.z = Math.max(t.z, Math.min(e.z, this.z))),
				this
			);
		}
		clampScalar(t, e) {
			return (
				(this.x = Math.max(t, Math.min(e, this.x))),
				(this.y = Math.max(t, Math.min(e, this.y))),
				(this.z = Math.max(t, Math.min(e, this.z))),
				this
			);
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
		}
		floor() {
			return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
		}
		ceil() {
			return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
		}
		round() {
			return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
		}
		roundToZero() {
			return (
				(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
				(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
				(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
				this
			);
		}
		negate() {
			return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t);
		}
		lerp(t, e) {
			return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), (this.z += (t.z - this.z) * e), this;
		}
		lerpVectors(t, e, n) {
			return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), (this.z = t.z + (e.z - t.z) * n), this;
		}
		cross(t, e) {
			return void 0 !== e
				? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
				  this.crossVectors(t, e))
				: this.crossVectors(this, t);
		}
		crossVectors(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z,
				s = e.x,
				o = e.y,
				a = e.z;
			return (this.x = i * a - r * o), (this.y = r * s - n * a), (this.z = n * o - i * s), this;
		}
		projectOnVector(t) {
			const e = t.lengthSq();
			if (0 === e) return this.set(0, 0, 0);
			const n = t.dot(this) / e;
			return this.copy(t).multiplyScalar(n);
		}
		projectOnPlane(t) {
			return Tt.copy(this).projectOnVector(t), this.sub(Tt);
		}
		reflect(t) {
			return this.sub(Tt.copy(t).multiplyScalar(2 * this.dot(t)));
		}
		angleTo(t) {
			const e = Math.sqrt(this.lengthSq() * t.lengthSq());
			if (0 === e) return Math.PI / 2;
			const n = this.dot(t) / e;
			return Math.acos(q(n, -1, 1));
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t));
		}
		distanceToSquared(t) {
			const e = this.x - t.x,
				n = this.y - t.y,
				i = this.z - t.z;
			return e * e + n * n + i * i;
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
		}
		setFromSpherical(t) {
			return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
		}
		setFromSphericalCoords(t, e, n) {
			const i = Math.sin(e) * t;
			return (this.x = i * Math.sin(n)), (this.y = Math.cos(e) * t), (this.z = i * Math.cos(n)), this;
		}
		setFromCylindrical(t) {
			return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
		}
		setFromCylindricalCoords(t, e, n) {
			return (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this;
		}
		setFromMatrixPosition(t) {
			const e = t.elements;
			return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
		}
		setFromMatrixScale(t) {
			const e = this.setFromMatrixColumn(t, 0).length(),
				n = this.setFromMatrixColumn(t, 1).length(),
				i = this.setFromMatrixColumn(t, 2).length();
			return (this.x = e), (this.y = n), (this.z = i), this;
		}
		setFromMatrixColumn(t, e) {
			return this.fromArray(t.elements, 4 * e);
		}
		setFromMatrix3Column(t, e) {
			return this.fromArray(t.elements, 3 * e);
		}
		setFromEuler(t) {
			return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z;
		}
		fromArray(t, e = 0) {
			return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
		}
		toArray(t = [], e = 0) {
			return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
		}
		fromBufferAttribute(t, e, n) {
			return (
				void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
				(this.x = t.getX(e)),
				(this.y = t.getY(e)),
				(this.z = t.getZ(e)),
				this
			);
		}
		random() {
			return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
		}
		randomDirection() {
			const t = 2 * (Math.random() - 0.5),
				e = Math.random() * Math.PI * 2,
				n = Math.sqrt(1 - t ** 2);
			return (this.x = n * Math.cos(e)), (this.y = n * Math.sin(e)), (this.z = t), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z;
		}
	}
	Et.prototype.isVector3 = !0;
	const Tt = new Et(),
		At = new St();
	class Ct {
		constructor(t = new Et(1 / 0, 1 / 0, 1 / 0), e = new Et(-1 / 0, -1 / 0, -1 / 0)) {
			(this.min = t), (this.max = e);
		}
		set(t, e) {
			return this.min.copy(t), this.max.copy(e), this;
		}
		setFromArray(t) {
			let e = 1 / 0,
				n = 1 / 0,
				i = 1 / 0,
				r = -1 / 0,
				s = -1 / 0,
				o = -1 / 0;
			for (let a = 0, l = t.length; a < l; a += 3) {
				const l = t[a],
					c = t[a + 1],
					h = t[a + 2];
				l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > o && (o = h);
			}
			return this.min.set(e, n, i), this.max.set(r, s, o), this;
		}
		setFromBufferAttribute(t) {
			let e = 1 / 0,
				n = 1 / 0,
				i = 1 / 0,
				r = -1 / 0,
				s = -1 / 0,
				o = -1 / 0;
			for (let a = 0, l = t.count; a < l; a++) {
				const l = t.getX(a),
					c = t.getY(a),
					h = t.getZ(a);
				l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > o && (o = h);
			}
			return this.min.set(e, n, i), this.max.set(r, s, o), this;
		}
		setFromPoints(t) {
			this.makeEmpty();
			for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
			return this;
		}
		setFromCenterAndSize(t, e) {
			const n = Lt.copy(e).multiplyScalar(0.5);
			return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
		}
		setFromObject(t, e = !1) {
			return this.makeEmpty(), this.expandByObject(t, e);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this;
		}
		makeEmpty() {
			return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
		}
		isEmpty() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
		}
		getCenter(t) {
			return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
		}
		getSize(t) {
			return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
		}
		expandByPoint(t) {
			return this.min.min(t), this.max.max(t), this;
		}
		expandByVector(t) {
			return this.min.sub(t), this.max.add(t), this;
		}
		expandByScalar(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this;
		}
		expandByObject(t, e = !1) {
			t.updateWorldMatrix(!1, !1);
			const n = t.geometry;
			if (void 0 !== n)
				if (e && null != n.attributes && void 0 !== n.attributes.position) {
					const e = n.attributes.position;
					for (let n = 0, i = e.count; n < i; n++)
						Lt.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld), this.expandByPoint(Lt);
				} else
					null === n.boundingBox && n.computeBoundingBox(),
						Pt.copy(n.boundingBox),
						Pt.applyMatrix4(t.matrixWorld),
						this.union(Pt);
			const i = t.children;
			for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
			return this;
		}
		containsPoint(t) {
			return !(
				t.x < this.min.x ||
				t.x > this.max.x ||
				t.y < this.min.y ||
				t.y > this.max.y ||
				t.z < this.min.z ||
				t.z > this.max.z
			);
		}
		containsBox(t) {
			return (
				this.min.x <= t.min.x &&
				t.max.x <= this.max.x &&
				this.min.y <= t.min.y &&
				t.max.y <= this.max.y &&
				this.min.z <= t.min.z &&
				t.max.z <= this.max.z
			);
		}
		getParameter(t, e) {
			return e.set(
				(t.x - this.min.x) / (this.max.x - this.min.x),
				(t.y - this.min.y) / (this.max.y - this.min.y),
				(t.z - this.min.z) / (this.max.z - this.min.z)
			);
		}
		intersectsBox(t) {
			return !(
				t.max.x < this.min.x ||
				t.min.x > this.max.x ||
				t.max.y < this.min.y ||
				t.min.y > this.max.y ||
				t.max.z < this.min.z ||
				t.min.z > this.max.z
			);
		}
		intersectsSphere(t) {
			return this.clampPoint(t.center, Lt), Lt.distanceToSquared(t.center) <= t.radius * t.radius;
		}
		intersectsPlane(t) {
			let e, n;
			return (
				t.normal.x > 0
					? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
					: ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
				t.normal.y > 0
					? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
					: ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
				t.normal.z > 0
					? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
					: ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
				e <= -t.constant && n >= -t.constant
			);
		}
		intersectsTriangle(t) {
			if (this.isEmpty()) return !1;
			this.getCenter(Ft),
				Ht.subVectors(this.max, Ft),
				It.subVectors(t.a, Ft),
				Dt.subVectors(t.b, Ft),
				Nt.subVectors(t.c, Ft),
				zt.subVectors(Dt, It),
				Bt.subVectors(Nt, Dt),
				Ot.subVectors(It, Nt);
			let e = [
				0,
				-zt.z,
				zt.y,
				0,
				-Bt.z,
				Bt.y,
				0,
				-Ot.z,
				Ot.y,
				zt.z,
				0,
				-zt.x,
				Bt.z,
				0,
				-Bt.x,
				Ot.z,
				0,
				-Ot.x,
				-zt.y,
				zt.x,
				0,
				-Bt.y,
				Bt.x,
				0,
				-Ot.y,
				Ot.x,
				0,
			];
			return (
				!!Vt(e, It, Dt, Nt, Ht) &&
				((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
				!!Vt(e, It, Dt, Nt, Ht) && (kt.crossVectors(zt, Bt), (e = [kt.x, kt.y, kt.z]), Vt(e, It, Dt, Nt, Ht)))
			);
		}
		clampPoint(t, e) {
			return e.copy(t).clamp(this.min, this.max);
		}
		distanceToPoint(t) {
			return Lt.copy(t).clamp(this.min, this.max).sub(t).length();
		}
		getBoundingSphere(t) {
			return this.getCenter(t.center), (t.radius = 0.5 * this.getSize(Lt).length()), t;
		}
		intersect(t) {
			return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
		}
		union(t) {
			return this.min.min(t.min), this.max.max(t.max), this;
		}
		applyMatrix4(t) {
			return (
				this.isEmpty() ||
					(Rt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
					Rt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
					Rt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
					Rt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
					Rt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
					Rt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
					Rt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
					Rt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
					this.setFromPoints(Rt)),
				this
			);
		}
		translate(t) {
			return this.min.add(t), this.max.add(t), this;
		}
		equals(t) {
			return t.min.equals(this.min) && t.max.equals(this.max);
		}
	}
	Ct.prototype.isBox3 = !0;
	const Rt = [new Et(), new Et(), new Et(), new Et(), new Et(), new Et(), new Et(), new Et()],
		Lt = new Et(),
		Pt = new Ct(),
		It = new Et(),
		Dt = new Et(),
		Nt = new Et(),
		zt = new Et(),
		Bt = new Et(),
		Ot = new Et(),
		Ft = new Et(),
		Ht = new Et(),
		kt = new Et(),
		Ut = new Et();
	function Vt(t, e, n, i, r) {
		for (let s = 0, o = t.length - 3; s <= o; s += 3) {
			Ut.fromArray(t, s);
			const o = r.x * Math.abs(Ut.x) + r.y * Math.abs(Ut.y) + r.z * Math.abs(Ut.z),
				a = e.dot(Ut),
				l = n.dot(Ut),
				c = i.dot(Ut);
			if (Math.max(-Math.max(a, l, c), Math.min(a, l, c)) > o) return !1;
		}
		return !0;
	}
	const Gt = new Ct(),
		Wt = new Et(),
		jt = new Et(),
		qt = new Et();
	class Xt {
		constructor(t = new Et(), e = -1) {
			(this.center = t), (this.radius = e);
		}
		set(t, e) {
			return this.center.copy(t), (this.radius = e), this;
		}
		setFromPoints(t, e) {
			const n = this.center;
			void 0 !== e ? n.copy(e) : Gt.setFromPoints(t).getCenter(n);
			let i = 0;
			for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
			return (this.radius = Math.sqrt(i)), this;
		}
		copy(t) {
			return this.center.copy(t.center), (this.radius = t.radius), this;
		}
		isEmpty() {
			return this.radius < 0;
		}
		makeEmpty() {
			return this.center.set(0, 0, 0), (this.radius = -1), this;
		}
		containsPoint(t) {
			return t.distanceToSquared(this.center) <= this.radius * this.radius;
		}
		distanceToPoint(t) {
			return t.distanceTo(this.center) - this.radius;
		}
		intersectsSphere(t) {
			const e = this.radius + t.radius;
			return t.center.distanceToSquared(this.center) <= e * e;
		}
		intersectsBox(t) {
			return t.intersectsSphere(this);
		}
		intersectsPlane(t) {
			return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
		}
		clampPoint(t, e) {
			const n = this.center.distanceToSquared(t);
			return (
				e.copy(t),
				n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)),
				e
			);
		}
		getBoundingBox(t) {
			return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
		}
		applyMatrix4(t) {
			return this.center.applyMatrix4(t), (this.radius = this.radius * t.getMaxScaleOnAxis()), this;
		}
		translate(t) {
			return this.center.add(t), this;
		}
		expandByPoint(t) {
			qt.subVectors(t, this.center);
			const e = qt.lengthSq();
			if (e > this.radius * this.radius) {
				const t = Math.sqrt(e),
					n = 0.5 * (t - this.radius);
				this.center.add(qt.multiplyScalar(n / t)), (this.radius += n);
			}
			return this;
		}
		union(t) {
			return (
				!0 === this.center.equals(t.center)
					? jt.set(0, 0, 1).multiplyScalar(t.radius)
					: jt.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius),
				this.expandByPoint(Wt.copy(t.center).add(jt)),
				this.expandByPoint(Wt.copy(t.center).sub(jt)),
				this
			);
		}
		equals(t) {
			return t.center.equals(this.center) && t.radius === this.radius;
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}
	const Yt = new Et(),
		Zt = new Et(),
		$t = new Et(),
		Kt = new Et(),
		Jt = new Et(),
		Qt = new Et(),
		te = new Et();
	class ee {
		constructor(t = new Et(), e = new Et(0, 0, -1)) {
			(this.origin = t), (this.direction = e);
		}
		set(t, e) {
			return this.origin.copy(t), this.direction.copy(e), this;
		}
		copy(t) {
			return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
		}
		at(t, e) {
			return e.copy(this.direction).multiplyScalar(t).add(this.origin);
		}
		lookAt(t) {
			return this.direction.copy(t).sub(this.origin).normalize(), this;
		}
		recast(t) {
			return this.origin.copy(this.at(t, Yt)), this;
		}
		closestPointToPoint(t, e) {
			e.subVectors(t, this.origin);
			const n = e.dot(this.direction);
			return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
		}
		distanceToPoint(t) {
			return Math.sqrt(this.distanceSqToPoint(t));
		}
		distanceSqToPoint(t) {
			const e = Yt.subVectors(t, this.origin).dot(this.direction);
			return e < 0
				? this.origin.distanceToSquared(t)
				: (Yt.copy(this.direction).multiplyScalar(e).add(this.origin), Yt.distanceToSquared(t));
		}
		distanceSqToSegment(t, e, n, i) {
			Zt.copy(t).add(e).multiplyScalar(0.5), $t.copy(e).sub(t).normalize(), Kt.copy(this.origin).sub(Zt);
			const r = 0.5 * t.distanceTo(e),
				s = -this.direction.dot($t),
				o = Kt.dot(this.direction),
				a = -Kt.dot($t),
				l = Kt.lengthSq(),
				c = Math.abs(1 - s * s);
			let h, u, d, p;
			if (c > 0)
				if (((h = s * a - o), (u = s * o - a), (p = r * c), h >= 0))
					if (u >= -p)
						if (u <= p) {
							const t = 1 / c;
							(h *= t), (u *= t), (d = h * (h + s * u + 2 * o) + u * (s * h + u + 2 * a) + l);
						} else (u = r), (h = Math.max(0, -(s * u + o))), (d = -h * h + u * (u + 2 * a) + l);
					else (u = -r), (h = Math.max(0, -(s * u + o))), (d = -h * h + u * (u + 2 * a) + l);
				else
					u <= -p
						? ((h = Math.max(0, -(-s * r + o))),
						  (u = h > 0 ? -r : Math.min(Math.max(-r, -a), r)),
						  (d = -h * h + u * (u + 2 * a) + l))
						: u <= p
						? ((h = 0), (u = Math.min(Math.max(-r, -a), r)), (d = u * (u + 2 * a) + l))
						: ((h = Math.max(0, -(s * r + o))),
						  (u = h > 0 ? r : Math.min(Math.max(-r, -a), r)),
						  (d = -h * h + u * (u + 2 * a) + l));
			else (u = s > 0 ? -r : r), (h = Math.max(0, -(s * u + o))), (d = -h * h + u * (u + 2 * a) + l);
			return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy($t).multiplyScalar(u).add(Zt), d;
		}
		intersectSphere(t, e) {
			Yt.subVectors(t.center, this.origin);
			const n = Yt.dot(this.direction),
				i = Yt.dot(Yt) - n * n,
				r = t.radius * t.radius;
			if (i > r) return null;
			const s = Math.sqrt(r - i),
				o = n - s,
				a = n + s;
			return o < 0 && a < 0 ? null : o < 0 ? this.at(a, e) : this.at(o, e);
		}
		intersectsSphere(t) {
			return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
		}
		distanceToPlane(t) {
			const e = t.normal.dot(this.direction);
			if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
			const n = -(this.origin.dot(t.normal) + t.constant) / e;
			return n >= 0 ? n : null;
		}
		intersectPlane(t, e) {
			const n = this.distanceToPlane(t);
			return null === n ? null : this.at(n, e);
		}
		intersectsPlane(t) {
			const e = t.distanceToPoint(this.origin);
			return 0 === e || t.normal.dot(this.direction) * e < 0;
		}
		intersectBox(t, e) {
			let n, i, r, s, o, a;
			const l = 1 / this.direction.x,
				c = 1 / this.direction.y,
				h = 1 / this.direction.z,
				u = this.origin;
			return (
				l >= 0
					? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
					: ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
				c >= 0
					? ((r = (t.min.y - u.y) * c), (s = (t.max.y - u.y) * c))
					: ((r = (t.max.y - u.y) * c), (s = (t.min.y - u.y) * c)),
				n > s || r > i
					? null
					: ((r > n || n != n) && (n = r),
					  (s < i || i != i) && (i = s),
					  h >= 0
							? ((o = (t.min.z - u.z) * h), (a = (t.max.z - u.z) * h))
							: ((o = (t.max.z - u.z) * h), (a = (t.min.z - u.z) * h)),
					  n > a || o > i
							? null
							: ((o > n || n != n) && (n = o),
							  (a < i || i != i) && (i = a),
							  i < 0 ? null : this.at(n >= 0 ? n : i, e)))
			);
		}
		intersectsBox(t) {
			return null !== this.intersectBox(t, Yt);
		}
		intersectTriangle(t, e, n, i, r) {
			Jt.subVectors(e, t), Qt.subVectors(n, t), te.crossVectors(Jt, Qt);
			let s,
				o = this.direction.dot(te);
			if (o > 0) {
				if (i) return null;
				s = 1;
			} else {
				if (!(o < 0)) return null;
				(s = -1), (o = -o);
			}
			Kt.subVectors(this.origin, t);
			const a = s * this.direction.dot(Qt.crossVectors(Kt, Qt));
			if (a < 0) return null;
			const l = s * this.direction.dot(Jt.cross(Kt));
			if (l < 0) return null;
			if (a + l > o) return null;
			const c = -s * Kt.dot(te);
			return c < 0 ? null : this.at(c / o, r);
		}
		applyMatrix4(t) {
			return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
		}
		equals(t) {
			return t.origin.equals(this.origin) && t.direction.equals(this.direction);
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}
	class ne {
		constructor() {
			(this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
				arguments.length > 0 &&
					console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
		}
		set(t, e, n, i, r, s, o, a, l, c, h, u, d, p, m, f) {
			const g = this.elements;
			return (
				(g[0] = t),
				(g[4] = e),
				(g[8] = n),
				(g[12] = i),
				(g[1] = r),
				(g[5] = s),
				(g[9] = o),
				(g[13] = a),
				(g[2] = l),
				(g[6] = c),
				(g[10] = h),
				(g[14] = u),
				(g[3] = d),
				(g[7] = p),
				(g[11] = m),
				(g[15] = f),
				this
			);
		}
		identity() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
		}
		clone() {
			return new ne().fromArray(this.elements);
		}
		copy(t) {
			const e = this.elements,
				n = t.elements;
			return (
				(e[0] = n[0]),
				(e[1] = n[1]),
				(e[2] = n[2]),
				(e[3] = n[3]),
				(e[4] = n[4]),
				(e[5] = n[5]),
				(e[6] = n[6]),
				(e[7] = n[7]),
				(e[8] = n[8]),
				(e[9] = n[9]),
				(e[10] = n[10]),
				(e[11] = n[11]),
				(e[12] = n[12]),
				(e[13] = n[13]),
				(e[14] = n[14]),
				(e[15] = n[15]),
				this
			);
		}
		copyPosition(t) {
			const e = this.elements,
				n = t.elements;
			return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
		}
		setFromMatrix3(t) {
			const e = t.elements;
			return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
		}
		extractBasis(t, e, n) {
			return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
		}
		makeBasis(t, e, n) {
			return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
		}
		extractRotation(t) {
			const e = this.elements,
				n = t.elements,
				i = 1 / ie.setFromMatrixColumn(t, 0).length(),
				r = 1 / ie.setFromMatrixColumn(t, 1).length(),
				s = 1 / ie.setFromMatrixColumn(t, 2).length();
			return (
				(e[0] = n[0] * i),
				(e[1] = n[1] * i),
				(e[2] = n[2] * i),
				(e[3] = 0),
				(e[4] = n[4] * r),
				(e[5] = n[5] * r),
				(e[6] = n[6] * r),
				(e[7] = 0),
				(e[8] = n[8] * s),
				(e[9] = n[9] * s),
				(e[10] = n[10] * s),
				(e[11] = 0),
				(e[12] = 0),
				(e[13] = 0),
				(e[14] = 0),
				(e[15] = 1),
				this
			);
		}
		makeRotationFromEuler(t) {
			(t && t.isEuler) ||
				console.error(
					"THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
				);
			const e = this.elements,
				n = t.x,
				i = t.y,
				r = t.z,
				s = Math.cos(n),
				o = Math.sin(n),
				a = Math.cos(i),
				l = Math.sin(i),
				c = Math.cos(r),
				h = Math.sin(r);
			if ("XYZ" === t.order) {
				const t = s * c,
					n = s * h,
					i = o * c,
					r = o * h;
				(e[0] = a * c),
					(e[4] = -a * h),
					(e[8] = l),
					(e[1] = n + i * l),
					(e[5] = t - r * l),
					(e[9] = -o * a),
					(e[2] = r - t * l),
					(e[6] = i + n * l),
					(e[10] = s * a);
			} else if ("YXZ" === t.order) {
				const t = a * c,
					n = a * h,
					i = l * c,
					r = l * h;
				(e[0] = t + r * o),
					(e[4] = i * o - n),
					(e[8] = s * l),
					(e[1] = s * h),
					(e[5] = s * c),
					(e[9] = -o),
					(e[2] = n * o - i),
					(e[6] = r + t * o),
					(e[10] = s * a);
			} else if ("ZXY" === t.order) {
				const t = a * c,
					n = a * h,
					i = l * c,
					r = l * h;
				(e[0] = t - r * o),
					(e[4] = -s * h),
					(e[8] = i + n * o),
					(e[1] = n + i * o),
					(e[5] = s * c),
					(e[9] = r - t * o),
					(e[2] = -s * l),
					(e[6] = o),
					(e[10] = s * a);
			} else if ("ZYX" === t.order) {
				const t = s * c,
					n = s * h,
					i = o * c,
					r = o * h;
				(e[0] = a * c),
					(e[4] = i * l - n),
					(e[8] = t * l + r),
					(e[1] = a * h),
					(e[5] = r * l + t),
					(e[9] = n * l - i),
					(e[2] = -l),
					(e[6] = o * a),
					(e[10] = s * a);
			} else if ("YZX" === t.order) {
				const t = s * a,
					n = s * l,
					i = o * a,
					r = o * l;
				(e[0] = a * c),
					(e[4] = r - t * h),
					(e[8] = i * h + n),
					(e[1] = h),
					(e[5] = s * c),
					(e[9] = -o * c),
					(e[2] = -l * c),
					(e[6] = n * h + i),
					(e[10] = t - r * h);
			} else if ("XZY" === t.order) {
				const t = s * a,
					n = s * l,
					i = o * a,
					r = o * l;
				(e[0] = a * c),
					(e[4] = -h),
					(e[8] = l * c),
					(e[1] = t * h + r),
					(e[5] = s * c),
					(e[9] = n * h - i),
					(e[2] = i * h - n),
					(e[6] = o * c),
					(e[10] = r * h + t);
			}
			return (e[3] = 0), (e[7] = 0), (e[11] = 0), (e[12] = 0), (e[13] = 0), (e[14] = 0), (e[15] = 1), this;
		}
		makeRotationFromQuaternion(t) {
			return this.compose(se, t, oe);
		}
		lookAt(t, e, n) {
			const i = this.elements;
			return (
				ce.subVectors(t, e),
				0 === ce.lengthSq() && (ce.z = 1),
				ce.normalize(),
				ae.crossVectors(n, ce),
				0 === ae.lengthSq() &&
					(1 === Math.abs(n.z) ? (ce.x += 1e-4) : (ce.z += 1e-4), ce.normalize(), ae.crossVectors(n, ce)),
				ae.normalize(),
				le.crossVectors(ce, ae),
				(i[0] = ae.x),
				(i[4] = le.x),
				(i[8] = ce.x),
				(i[1] = ae.y),
				(i[5] = le.y),
				(i[9] = ce.y),
				(i[2] = ae.z),
				(i[6] = le.z),
				(i[10] = ce.z),
				this
			);
		}
		multiply(t, e) {
			return void 0 !== e
				? (console.warn(
						"THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
				  ),
				  this.multiplyMatrices(t, e))
				: this.multiplyMatrices(this, t);
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this);
		}
		multiplyMatrices(t, e) {
			const n = t.elements,
				i = e.elements,
				r = this.elements,
				s = n[0],
				o = n[4],
				a = n[8],
				l = n[12],
				c = n[1],
				h = n[5],
				u = n[9],
				d = n[13],
				p = n[2],
				m = n[6],
				f = n[10],
				g = n[14],
				v = n[3],
				y = n[7],
				x = n[11],
				_ = n[15],
				w = i[0],
				b = i[4],
				M = i[8],
				S = i[12],
				E = i[1],
				T = i[5],
				A = i[9],
				C = i[13],
				R = i[2],
				L = i[6],
				P = i[10],
				I = i[14],
				D = i[3],
				N = i[7],
				z = i[11],
				B = i[15];
			return (
				(r[0] = s * w + o * E + a * R + l * D),
				(r[4] = s * b + o * T + a * L + l * N),
				(r[8] = s * M + o * A + a * P + l * z),
				(r[12] = s * S + o * C + a * I + l * B),
				(r[1] = c * w + h * E + u * R + d * D),
				(r[5] = c * b + h * T + u * L + d * N),
				(r[9] = c * M + h * A + u * P + d * z),
				(r[13] = c * S + h * C + u * I + d * B),
				(r[2] = p * w + m * E + f * R + g * D),
				(r[6] = p * b + m * T + f * L + g * N),
				(r[10] = p * M + m * A + f * P + g * z),
				(r[14] = p * S + m * C + f * I + g * B),
				(r[3] = v * w + y * E + x * R + _ * D),
				(r[7] = v * b + y * T + x * L + _ * N),
				(r[11] = v * M + y * A + x * P + _ * z),
				(r[15] = v * S + y * C + x * I + _ * B),
				this
			);
		}
		multiplyScalar(t) {
			const e = this.elements;
			return (
				(e[0] *= t),
				(e[4] *= t),
				(e[8] *= t),
				(e[12] *= t),
				(e[1] *= t),
				(e[5] *= t),
				(e[9] *= t),
				(e[13] *= t),
				(e[2] *= t),
				(e[6] *= t),
				(e[10] *= t),
				(e[14] *= t),
				(e[3] *= t),
				(e[7] *= t),
				(e[11] *= t),
				(e[15] *= t),
				this
			);
		}
		determinant() {
			const t = this.elements,
				e = t[0],
				n = t[4],
				i = t[8],
				r = t[12],
				s = t[1],
				o = t[5],
				a = t[9],
				l = t[13],
				c = t[2],
				h = t[6],
				u = t[10],
				d = t[14];
			return (
				t[3] * (+r * a * h - i * l * h - r * o * u + n * l * u + i * o * d - n * a * d) +
				t[7] * (+e * a * d - e * l * u + r * s * u - i * s * d + i * l * c - r * a * c) +
				t[11] * (+e * l * h - e * o * d - r * s * h + n * s * d + r * o * c - n * l * c) +
				t[15] * (-i * o * c - e * a * h + e * o * u + i * s * h - n * s * u + n * a * c)
			);
		}
		transpose() {
			const t = this.elements;
			let e;
			return (
				(e = t[1]),
				(t[1] = t[4]),
				(t[4] = e),
				(e = t[2]),
				(t[2] = t[8]),
				(t[8] = e),
				(e = t[6]),
				(t[6] = t[9]),
				(t[9] = e),
				(e = t[3]),
				(t[3] = t[12]),
				(t[12] = e),
				(e = t[7]),
				(t[7] = t[13]),
				(t[13] = e),
				(e = t[11]),
				(t[11] = t[14]),
				(t[14] = e),
				this
			);
		}
		setPosition(t, e, n) {
			const i = this.elements;
			return t.isVector3 ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z)) : ((i[12] = t), (i[13] = e), (i[14] = n)), this;
		}
		invert() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				s = t[4],
				o = t[5],
				a = t[6],
				l = t[7],
				c = t[8],
				h = t[9],
				u = t[10],
				d = t[11],
				p = t[12],
				m = t[13],
				f = t[14],
				g = t[15],
				v = h * f * l - m * u * l + m * a * d - o * f * d - h * a * g + o * u * g,
				y = p * u * l - c * f * l - p * a * d + s * f * d + c * a * g - s * u * g,
				x = c * m * l - p * h * l + p * o * d - s * m * d - c * o * g + s * h * g,
				_ = p * h * a - c * m * a - p * o * u + s * m * u + c * o * f - s * h * f,
				w = e * v + n * y + i * x + r * _;
			if (0 === w) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			const b = 1 / w;
			return (
				(t[0] = v * b),
				(t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * b),
				(t[2] = (o * f * r - m * a * r + m * i * l - n * f * l - o * i * g + n * a * g) * b),
				(t[3] = (h * a * r - o * u * r - h * i * l + n * u * l + o * i * d - n * a * d) * b),
				(t[4] = y * b),
				(t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * b),
				(t[6] = (p * a * r - s * f * r - p * i * l + e * f * l + s * i * g - e * a * g) * b),
				(t[7] = (s * u * r - c * a * r + c * i * l - e * u * l - s * i * d + e * a * d) * b),
				(t[8] = x * b),
				(t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * b),
				(t[10] = (s * m * r - p * o * r + p * n * l - e * m * l - s * n * g + e * o * g) * b),
				(t[11] = (c * o * r - s * h * r - c * n * l + e * h * l + s * n * d - e * o * d) * b),
				(t[12] = _ * b),
				(t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * b),
				(t[14] = (p * o * i - s * m * i - p * n * a + e * m * a + s * n * f - e * o * f) * b),
				(t[15] = (s * h * i - c * o * i + c * n * a - e * h * a - s * n * u + e * o * u) * b),
				this
			);
		}
		scale(t) {
			const e = this.elements,
				n = t.x,
				i = t.y,
				r = t.z;
			return (
				(e[0] *= n),
				(e[4] *= i),
				(e[8] *= r),
				(e[1] *= n),
				(e[5] *= i),
				(e[9] *= r),
				(e[2] *= n),
				(e[6] *= i),
				(e[10] *= r),
				(e[3] *= n),
				(e[7] *= i),
				(e[11] *= r),
				this
			);
		}
		getMaxScaleOnAxis() {
			const t = this.elements,
				e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
				n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
				i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
			return Math.sqrt(Math.max(e, n, i));
		}
		makeTranslation(t, e, n) {
			return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
		}
		makeRotationX(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
		}
		makeRotationY(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
		}
		makeRotationZ(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
		}
		makeRotationAxis(t, e) {
			const n = Math.cos(e),
				i = Math.sin(e),
				r = 1 - n,
				s = t.x,
				o = t.y,
				a = t.z,
				l = r * s,
				c = r * o;
			return (
				this.set(
					l * s + n,
					l * o - i * a,
					l * a + i * o,
					0,
					l * o + i * a,
					c * o + n,
					c * a - i * s,
					0,
					l * a - i * o,
					c * a + i * s,
					r * a * a + n,
					0,
					0,
					0,
					0,
					1
				),
				this
			);
		}
		makeScale(t, e, n) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
		}
		makeShear(t, e, n, i, r, s) {
			return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
		}
		compose(t, e, n) {
			const i = this.elements,
				r = e._x,
				s = e._y,
				o = e._z,
				a = e._w,
				l = r + r,
				c = s + s,
				h = o + o,
				u = r * l,
				d = r * c,
				p = r * h,
				m = s * c,
				f = s * h,
				g = o * h,
				v = a * l,
				y = a * c,
				x = a * h,
				_ = n.x,
				w = n.y,
				b = n.z;
			return (
				(i[0] = (1 - (m + g)) * _),
				(i[1] = (d + x) * _),
				(i[2] = (p - y) * _),
				(i[3] = 0),
				(i[4] = (d - x) * w),
				(i[5] = (1 - (u + g)) * w),
				(i[6] = (f + v) * w),
				(i[7] = 0),
				(i[8] = (p + y) * b),
				(i[9] = (f - v) * b),
				(i[10] = (1 - (u + m)) * b),
				(i[11] = 0),
				(i[12] = t.x),
				(i[13] = t.y),
				(i[14] = t.z),
				(i[15] = 1),
				this
			);
		}
		decompose(t, e, n) {
			const i = this.elements;
			let r = ie.set(i[0], i[1], i[2]).length();
			const s = ie.set(i[4], i[5], i[6]).length(),
				o = ie.set(i[8], i[9], i[10]).length();
			this.determinant() < 0 && (r = -r), (t.x = i[12]), (t.y = i[13]), (t.z = i[14]), re.copy(this);
			const a = 1 / r,
				l = 1 / s,
				c = 1 / o;
			return (
				(re.elements[0] *= a),
				(re.elements[1] *= a),
				(re.elements[2] *= a),
				(re.elements[4] *= l),
				(re.elements[5] *= l),
				(re.elements[6] *= l),
				(re.elements[8] *= c),
				(re.elements[9] *= c),
				(re.elements[10] *= c),
				e.setFromRotationMatrix(re),
				(n.x = r),
				(n.y = s),
				(n.z = o),
				this
			);
		}
		makePerspective(t, e, n, i, r, s) {
			void 0 === s &&
				console.warn(
					"THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
				);
			const o = this.elements,
				a = (2 * r) / (e - t),
				l = (2 * r) / (n - i),
				c = (e + t) / (e - t),
				h = (n + i) / (n - i),
				u = -(s + r) / (s - r),
				d = (-2 * s * r) / (s - r);
			return (
				(o[0] = a),
				(o[4] = 0),
				(o[8] = c),
				(o[12] = 0),
				(o[1] = 0),
				(o[5] = l),
				(o[9] = h),
				(o[13] = 0),
				(o[2] = 0),
				(o[6] = 0),
				(o[10] = u),
				(o[14] = d),
				(o[3] = 0),
				(o[7] = 0),
				(o[11] = -1),
				(o[15] = 0),
				this
			);
		}
		makeOrthographic(t, e, n, i, r, s) {
			const o = this.elements,
				a = 1 / (e - t),
				l = 1 / (n - i),
				c = 1 / (s - r),
				h = (e + t) * a,
				u = (n + i) * l,
				d = (s + r) * c;
			return (
				(o[0] = 2 * a),
				(o[4] = 0),
				(o[8] = 0),
				(o[12] = -h),
				(o[1] = 0),
				(o[5] = 2 * l),
				(o[9] = 0),
				(o[13] = -u),
				(o[2] = 0),
				(o[6] = 0),
				(o[10] = -2 * c),
				(o[14] = -d),
				(o[3] = 0),
				(o[7] = 0),
				(o[11] = 0),
				(o[15] = 1),
				this
			);
		}
		equals(t) {
			const e = this.elements,
				n = t.elements;
			for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
			return !0;
		}
		fromArray(t, e = 0) {
			for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
			return this;
		}
		toArray(t = [], e = 0) {
			const n = this.elements;
			return (
				(t[e] = n[0]),
				(t[e + 1] = n[1]),
				(t[e + 2] = n[2]),
				(t[e + 3] = n[3]),
				(t[e + 4] = n[4]),
				(t[e + 5] = n[5]),
				(t[e + 6] = n[6]),
				(t[e + 7] = n[7]),
				(t[e + 8] = n[8]),
				(t[e + 9] = n[9]),
				(t[e + 10] = n[10]),
				(t[e + 11] = n[11]),
				(t[e + 12] = n[12]),
				(t[e + 13] = n[13]),
				(t[e + 14] = n[14]),
				(t[e + 15] = n[15]),
				t
			);
		}
	}
	ne.prototype.isMatrix4 = !0;
	const ie = new Et(),
		re = new ne(),
		se = new Et(0, 0, 0),
		oe = new Et(1, 1, 1),
		ae = new Et(),
		le = new Et(),
		ce = new Et(),
		he = new ne(),
		ue = new St();
	class de {
		constructor(t = 0, e = 0, n = 0, i = de.DefaultOrder) {
			(this._x = t), (this._y = e), (this._z = n), (this._order = i);
		}
		get x() {
			return this._x;
		}
		set x(t) {
			(this._x = t), this._onChangeCallback();
		}
		get y() {
			return this._y;
		}
		set y(t) {
			(this._y = t), this._onChangeCallback();
		}
		get z() {
			return this._z;
		}
		set z(t) {
			(this._z = t), this._onChangeCallback();
		}
		get order() {
			return this._order;
		}
		set order(t) {
			(this._order = t), this._onChangeCallback();
		}
		set(t, e, n, i = this._order) {
			return (this._x = t), (this._y = e), (this._z = n), (this._order = i), this._onChangeCallback(), this;
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._order);
		}
		copy(t) {
			return (this._x = t._x), (this._y = t._y), (this._z = t._z), (this._order = t._order), this._onChangeCallback(), this;
		}
		setFromRotationMatrix(t, e = this._order, n = !0) {
			const i = t.elements,
				r = i[0],
				s = i[4],
				o = i[8],
				a = i[1],
				l = i[5],
				c = i[9],
				h = i[2],
				u = i[6],
				d = i[10];
			switch (e) {
				case "XYZ":
					(this._y = Math.asin(q(o, -1, 1))),
						Math.abs(o) < 0.9999999
							? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r)))
							: ((this._x = Math.atan2(u, l)), (this._z = 0));
					break;
				case "YXZ":
					(this._x = Math.asin(-q(c, -1, 1))),
						Math.abs(c) < 0.9999999
							? ((this._y = Math.atan2(o, d)), (this._z = Math.atan2(a, l)))
							: ((this._y = Math.atan2(-h, r)), (this._z = 0));
					break;
				case "ZXY":
					(this._x = Math.asin(q(u, -1, 1))),
						Math.abs(u) < 0.9999999
							? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l)))
							: ((this._y = 0), (this._z = Math.atan2(a, r)));
					break;
				case "ZYX":
					(this._y = Math.asin(-q(h, -1, 1))),
						Math.abs(h) < 0.9999999
							? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(a, r)))
							: ((this._x = 0), (this._z = Math.atan2(-s, l)));
					break;
				case "YZX":
					(this._z = Math.asin(q(a, -1, 1))),
						Math.abs(a) < 0.9999999
							? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
							: ((this._x = 0), (this._y = Math.atan2(o, d)));
					break;
				case "XZY":
					(this._z = Math.asin(-q(s, -1, 1))),
						Math.abs(s) < 0.9999999
							? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(o, r)))
							: ((this._x = Math.atan2(-c, d)), (this._y = 0));
					break;
				default:
					console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
			}
			return (this._order = e), !0 === n && this._onChangeCallback(), this;
		}
		setFromQuaternion(t, e, n) {
			return he.makeRotationFromQuaternion(t), this.setFromRotationMatrix(he, e, n);
		}
		setFromVector3(t, e = this._order) {
			return this.set(t.x, t.y, t.z, e);
		}
		reorder(t) {
			return ue.setFromEuler(this), this.setFromQuaternion(ue, t);
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
		}
		fromArray(t) {
			return (
				(this._x = t[0]),
				(this._y = t[1]),
				(this._z = t[2]),
				void 0 !== t[3] && (this._order = t[3]),
				this._onChangeCallback(),
				this
			);
		}
		toArray(t = [], e = 0) {
			return (t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._order), t;
		}
		_onChange(t) {
			return (this._onChangeCallback = t), this;
		}
		_onChangeCallback() {}
		*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._order;
		}
	}
	(de.prototype.isEuler = !0), (de.DefaultOrder = "XYZ"), (de.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
	class pe {
		constructor() {
			this.mask = 1;
		}
		set(t) {
			this.mask = ((1 << t) | 0) >>> 0;
		}
		enable(t) {
			this.mask |= (1 << t) | 0;
		}
		enableAll() {
			this.mask = -1;
		}
		toggle(t) {
			this.mask ^= (1 << t) | 0;
		}
		disable(t) {
			this.mask &= ~((1 << t) | 0);
		}
		disableAll() {
			this.mask = 0;
		}
		test(t) {
			return 0 != (this.mask & t.mask);
		}
		isEnabled(t) {
			return 0 != (this.mask & ((1 << t) | 0));
		}
	}
	let me = 0;
	const fe = new Et(),
		ge = new St(),
		ve = new ne(),
		ye = new Et(),
		xe = new Et(),
		_e = new Et(),
		we = new St(),
		be = new Et(1, 0, 0),
		Me = new Et(0, 1, 0),
		Se = new Et(0, 0, 1),
		Ee = { type: "added" },
		Te = { type: "removed" };
	class Ae extends k {
		constructor() {
			super(),
				Object.defineProperty(this, "id", { value: me++ }),
				(this.uuid = j()),
				(this.name = ""),
				(this.type = "Object3D"),
				(this.parent = null),
				(this.children = []),
				(this.up = Ae.DefaultUp.clone());
			const t = new Et(),
				e = new de(),
				n = new St(),
				i = new Et(1, 1, 1);
			e._onChange(function () {
				n.setFromEuler(e, !1);
			}),
				n._onChange(function () {
					e.setFromQuaternion(n, void 0, !1);
				}),
				Object.defineProperties(this, {
					position: { configurable: !0, enumerable: !0, value: t },
					rotation: { configurable: !0, enumerable: !0, value: e },
					quaternion: { configurable: !0, enumerable: !0, value: n },
					scale: { configurable: !0, enumerable: !0, value: i },
					modelViewMatrix: { value: new ne() },
					normalMatrix: { value: new tt() },
				}),
				(this.matrix = new ne()),
				(this.matrixWorld = new ne()),
				(this.matrixAutoUpdate = Ae.DefaultMatrixAutoUpdate),
				(this.matrixWorldNeedsUpdate = !1),
				(this.layers = new pe()),
				(this.visible = !0),
				(this.castShadow = !1),
				(this.receiveShadow = !1),
				(this.frustumCulled = !0),
				(this.renderOrder = 0),
				(this.animations = []),
				(this.userData = {});
		}
		onBeforeRender() {}
		onAfterRender() {}
		applyMatrix4(t) {
			this.matrixAutoUpdate && this.updateMatrix(),
				this.matrix.premultiply(t),
				this.matrix.decompose(this.position, this.quaternion, this.scale);
		}
		applyQuaternion(t) {
			return this.quaternion.premultiply(t), this;
		}
		setRotationFromAxisAngle(t, e) {
			this.quaternion.setFromAxisAngle(t, e);
		}
		setRotationFromEuler(t) {
			this.quaternion.setFromEuler(t, !0);
		}
		setRotationFromMatrix(t) {
			this.quaternion.setFromRotationMatrix(t);
		}
		setRotationFromQuaternion(t) {
			this.quaternion.copy(t);
		}
		rotateOnAxis(t, e) {
			return ge.setFromAxisAngle(t, e), this.quaternion.multiply(ge), this;
		}
		rotateOnWorldAxis(t, e) {
			return ge.setFromAxisAngle(t, e), this.quaternion.premultiply(ge), this;
		}
		rotateX(t) {
			return this.rotateOnAxis(be, t);
		}
		rotateY(t) {
			return this.rotateOnAxis(Me, t);
		}
		rotateZ(t) {
			return this.rotateOnAxis(Se, t);
		}
		translateOnAxis(t, e) {
			return fe.copy(t).applyQuaternion(this.quaternion), this.position.add(fe.multiplyScalar(e)), this;
		}
		translateX(t) {
			return this.translateOnAxis(be, t);
		}
		translateY(t) {
			return this.translateOnAxis(Me, t);
		}
		translateZ(t) {
			return this.translateOnAxis(Se, t);
		}
		localToWorld(t) {
			return t.applyMatrix4(this.matrixWorld);
		}
		worldToLocal(t) {
			return t.applyMatrix4(ve.copy(this.matrixWorld).invert());
		}
		lookAt(t, e, n) {
			t.isVector3 ? ye.copy(t) : ye.set(t, e, n);
			const i = this.parent;
			this.updateWorldMatrix(!0, !1),
				xe.setFromMatrixPosition(this.matrixWorld),
				this.isCamera || this.isLight ? ve.lookAt(xe, ye, this.up) : ve.lookAt(ye, xe, this.up),
				this.quaternion.setFromRotationMatrix(ve),
				i && (ve.extractRotation(i.matrixWorld), ge.setFromRotationMatrix(ve), this.quaternion.premultiply(ge.invert()));
		}
		add(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this;
			}
			return t === this
				? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this)
				: (t && t.isObject3D
						? (null !== t.parent && t.parent.remove(t), (t.parent = this), this.children.push(t), t.dispatchEvent(Ee))
						: console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
				  this);
		}
		remove(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
				return this;
			}
			const e = this.children.indexOf(t);
			return -1 !== e && ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent(Te)), this;
		}
		removeFromParent() {
			const t = this.parent;
			return null !== t && t.remove(this), this;
		}
		clear() {
			for (let t = 0; t < this.children.length; t++) {
				const e = this.children[t];
				(e.parent = null), e.dispatchEvent(Te);
			}
			return (this.children.length = 0), this;
		}
		attach(t) {
			return (
				this.updateWorldMatrix(!0, !1),
				ve.copy(this.matrixWorld).invert(),
				null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), ve.multiply(t.parent.matrixWorld)),
				t.applyMatrix4(ve),
				this.add(t),
				t.updateWorldMatrix(!1, !0),
				this
			);
		}
		getObjectById(t) {
			return this.getObjectByProperty("id", t);
		}
		getObjectByName(t) {
			return this.getObjectByProperty("name", t);
		}
		getObjectByProperty(t, e) {
			if (this[t] === e) return this;
			for (let n = 0, i = this.children.length; n < i; n++) {
				const i = this.children[n].getObjectByProperty(t, e);
				if (void 0 !== i) return i;
			}
		}
		getWorldPosition(t) {
			return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
		}
		getWorldQuaternion(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xe, t, _e), t;
		}
		getWorldScale(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xe, we, t), t;
		}
		getWorldDirection(t) {
			this.updateWorldMatrix(!0, !1);
			const e = this.matrixWorld.elements;
			return t.set(e[8], e[9], e[10]).normalize();
		}
		raycast() {}
		traverse(t) {
			t(this);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
		}
		traverseVisible(t) {
			if (!1 === this.visible) return;
			t(this);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
		}
		traverseAncestors(t) {
			const e = this.parent;
			null !== e && (t(e), e.traverseAncestors(t));
		}
		updateMatrix() {
			this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
		}
		updateMatrixWorld(t) {
			this.matrixAutoUpdate && this.updateMatrix(),
				(this.matrixWorldNeedsUpdate || t) &&
					(null === this.parent
						? this.matrixWorld.copy(this.matrix)
						: this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
					(this.matrixWorldNeedsUpdate = !1),
					(t = !0));
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
		}
		updateWorldMatrix(t, e) {
			const n = this.parent;
			if (
				(!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
				this.matrixAutoUpdate && this.updateMatrix(),
				null === this.parent
					? this.matrixWorld.copy(this.matrix)
					: this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
				!0 === e)
			) {
				const t = this.children;
				for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0);
			}
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t,
				n = {};
			e &&
				((t = {
					geometries: {},
					materials: {},
					textures: {},
					images: {},
					shapes: {},
					skeletons: {},
					animations: {},
					nodes: {},
				}),
				(n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }));
			const i = {};
			function r(e, n) {
				return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
			}
			if (
				((i.uuid = this.uuid),
				(i.type = this.type),
				"" !== this.name && (i.name = this.name),
				!0 === this.castShadow && (i.castShadow = !0),
				!0 === this.receiveShadow && (i.receiveShadow = !0),
				!1 === this.visible && (i.visible = !1),
				!1 === this.frustumCulled && (i.frustumCulled = !1),
				0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
				"{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
				(i.layers = this.layers.mask),
				(i.matrix = this.matrix.toArray()),
				!1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
				this.isInstancedMesh &&
					((i.type = "InstancedMesh"),
					(i.count = this.count),
					(i.instanceMatrix = this.instanceMatrix.toJSON()),
					null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
				this.isScene)
			)
				this.background &&
					(this.background.isColor
						? (i.background = this.background.toJSON())
						: this.background.isTexture && (i.background = this.background.toJSON(t).uuid)),
					this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t).uuid);
			else if (this.isMesh || this.isLine || this.isPoints) {
				i.geometry = r(t.geometries, this.geometry);
				const e = this.geometry.parameters;
				if (void 0 !== e && void 0 !== e.shapes) {
					const n = e.shapes;
					if (Array.isArray(n))
						for (let e = 0, i = n.length; e < i; e++) {
							const i = n[e];
							r(t.shapes, i);
						}
					else r(t.shapes, n);
				}
			}
			if (
				(this.isSkinnedMesh &&
					((i.bindMode = this.bindMode),
					(i.bindMatrix = this.bindMatrix.toArray()),
					void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
				void 0 !== this.material)
			)
				if (Array.isArray(this.material)) {
					const e = [];
					for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
					i.material = e;
				} else i.material = r(t.materials, this.material);
			if (this.children.length > 0) {
				i.children = [];
				for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object);
			}
			if (this.animations.length > 0) {
				i.animations = [];
				for (let e = 0; e < this.animations.length; e++) {
					const n = this.animations[e];
					i.animations.push(r(t.animations, n));
				}
			}
			if (e) {
				const e = s(t.geometries),
					i = s(t.materials),
					r = s(t.textures),
					o = s(t.images),
					a = s(t.shapes),
					l = s(t.skeletons),
					c = s(t.animations),
					h = s(t.nodes);
				e.length > 0 && (n.geometries = e),
					i.length > 0 && (n.materials = i),
					r.length > 0 && (n.textures = r),
					o.length > 0 && (n.images = o),
					a.length > 0 && (n.shapes = a),
					l.length > 0 && (n.skeletons = l),
					c.length > 0 && (n.animations = c),
					h.length > 0 && (n.nodes = h);
			}
			return (n.object = i), n;
			function s(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					delete i.metadata, e.push(i);
				}
				return e;
			}
		}
		clone(t) {
			return new this.constructor().copy(this, t);
		}
		copy(t, e = !0) {
			if (
				((this.name = t.name),
				this.up.copy(t.up),
				this.position.copy(t.position),
				(this.rotation.order = t.rotation.order),
				this.quaternion.copy(t.quaternion),
				this.scale.copy(t.scale),
				this.matrix.copy(t.matrix),
				this.matrixWorld.copy(t.matrixWorld),
				(this.matrixAutoUpdate = t.matrixAutoUpdate),
				(this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
				(this.layers.mask = t.layers.mask),
				(this.visible = t.visible),
				(this.castShadow = t.castShadow),
				(this.receiveShadow = t.receiveShadow),
				(this.frustumCulled = t.frustumCulled),
				(this.renderOrder = t.renderOrder),
				(this.userData = JSON.parse(JSON.stringify(t.userData))),
				!0 === e)
			)
				for (let e = 0; e < t.children.length; e++) {
					const n = t.children[e];
					this.add(n.clone());
				}
			return this;
		}
	}
	(Ae.DefaultUp = new Et(0, 1, 0)), (Ae.DefaultMatrixAutoUpdate = !0), (Ae.prototype.isObject3D = !0);
	const Ce = new Et(),
		Re = new Et(),
		Le = new Et(),
		Pe = new Et(),
		Ie = new Et(),
		De = new Et(),
		Ne = new Et(),
		ze = new Et(),
		Be = new Et(),
		Oe = new Et();
	class Fe {
		constructor(t = new Et(), e = new Et(), n = new Et()) {
			(this.a = t), (this.b = e), (this.c = n);
		}
		static getNormal(t, e, n, i) {
			i.subVectors(n, e), Ce.subVectors(t, e), i.cross(Ce);
			const r = i.lengthSq();
			return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
		}
		static getBarycoord(t, e, n, i, r) {
			Ce.subVectors(i, e), Re.subVectors(n, e), Le.subVectors(t, e);
			const s = Ce.dot(Ce),
				o = Ce.dot(Re),
				a = Ce.dot(Le),
				l = Re.dot(Re),
				c = Re.dot(Le),
				h = s * l - o * o;
			if (0 === h) return r.set(-2, -1, -1);
			const u = 1 / h,
				d = (l * a - o * c) * u,
				p = (s * c - o * a) * u;
			return r.set(1 - d - p, p, d);
		}
		static containsPoint(t, e, n, i) {
			return this.getBarycoord(t, e, n, i, Pe), Pe.x >= 0 && Pe.y >= 0 && Pe.x + Pe.y <= 1;
		}
		static getUV(t, e, n, i, r, s, o, a) {
			return (
				this.getBarycoord(t, e, n, i, Pe),
				a.set(0, 0),
				a.addScaledVector(r, Pe.x),
				a.addScaledVector(s, Pe.y),
				a.addScaledVector(o, Pe.z),
				a
			);
		}
		static isFrontFacing(t, e, n, i) {
			return Ce.subVectors(n, e), Re.subVectors(t, e), Ce.cross(Re).dot(i) < 0;
		}
		set(t, e, n) {
			return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
		}
		setFromPointsAndIndices(t, e, n, i) {
			return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
		}
		setFromAttributeAndIndices(t, e, n, i) {
			return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
		}
		getArea() {
			return Ce.subVectors(this.c, this.b), Re.subVectors(this.a, this.b), 0.5 * Ce.cross(Re).length();
		}
		getMidpoint(t) {
			return t
				.addVectors(this.a, this.b)
				.add(this.c)
				.multiplyScalar(1 / 3);
		}
		getNormal(t) {
			return Fe.getNormal(this.a, this.b, this.c, t);
		}
		getPlane(t) {
			return t.setFromCoplanarPoints(this.a, this.b, this.c);
		}
		getBarycoord(t, e) {
			return Fe.getBarycoord(t, this.a, this.b, this.c, e);
		}
		getUV(t, e, n, i, r) {
			return Fe.getUV(t, this.a, this.b, this.c, e, n, i, r);
		}
		containsPoint(t) {
			return Fe.containsPoint(t, this.a, this.b, this.c);
		}
		isFrontFacing(t) {
			return Fe.isFrontFacing(this.a, this.b, this.c, t);
		}
		intersectsBox(t) {
			return t.intersectsTriangle(this);
		}
		closestPointToPoint(t, e) {
			const n = this.a,
				i = this.b,
				r = this.c;
			let s, o;
			Ie.subVectors(i, n), De.subVectors(r, n), ze.subVectors(t, n);
			const a = Ie.dot(ze),
				l = De.dot(ze);
			if (a <= 0 && l <= 0) return e.copy(n);
			Be.subVectors(t, i);
			const c = Ie.dot(Be),
				h = De.dot(Be);
			if (c >= 0 && h <= c) return e.copy(i);
			const u = a * h - c * l;
			if (u <= 0 && a >= 0 && c <= 0) return (s = a / (a - c)), e.copy(n).addScaledVector(Ie, s);
			Oe.subVectors(t, r);
			const d = Ie.dot(Oe),
				p = De.dot(Oe);
			if (p >= 0 && d <= p) return e.copy(r);
			const m = d * l - a * p;
			if (m <= 0 && l >= 0 && p <= 0) return (o = l / (l - p)), e.copy(n).addScaledVector(De, o);
			const f = c * p - d * h;
			if (f <= 0 && h - c >= 0 && d - p >= 0)
				return Ne.subVectors(r, i), (o = (h - c) / (h - c + (d - p))), e.copy(i).addScaledVector(Ne, o);
			const g = 1 / (f + m + u);
			return (s = m * g), (o = u * g), e.copy(n).addScaledVector(Ie, s).addScaledVector(De, o);
		}
		equals(t) {
			return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
		}
	}
	let He = 0;
	class ke extends k {
		constructor() {
			super(),
				Object.defineProperty(this, "id", { value: He++ }),
				(this.uuid = j()),
				(this.name = ""),
				(this.type = "Material"),
				(this.blending = 1),
				(this.side = 0),
				(this.vertexColors = !1),
				(this.opacity = 1),
				(this.transparent = !1),
				(this.blendSrc = 204),
				(this.blendDst = 205),
				(this.blendEquation = t),
				(this.blendSrcAlpha = null),
				(this.blendDstAlpha = null),
				(this.blendEquationAlpha = null),
				(this.depthFunc = 3),
				(this.depthTest = !0),
				(this.depthWrite = !0),
				(this.stencilWriteMask = 255),
				(this.stencilFunc = 519),
				(this.stencilRef = 0),
				(this.stencilFuncMask = 255),
				(this.stencilFail = z),
				(this.stencilZFail = z),
				(this.stencilZPass = z),
				(this.stencilWrite = !1),
				(this.clippingPlanes = null),
				(this.clipIntersection = !1),
				(this.clipShadows = !1),
				(this.shadowSide = null),
				(this.colorWrite = !0),
				(this.precision = null),
				(this.polygonOffset = !1),
				(this.polygonOffsetFactor = 0),
				(this.polygonOffsetUnits = 0),
				(this.dithering = !1),
				(this.alphaToCoverage = !1),
				(this.premultipliedAlpha = !1),
				(this.visible = !0),
				(this.toneMapped = !0),
				(this.userData = {}),
				(this.version = 0),
				(this._alphaTest = 0);
		}
		get alphaTest() {
			return this._alphaTest;
		}
		set alphaTest(t) {
			this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
		}
		onBuild() {}
		onBeforeRender() {}
		onBeforeCompile() {}
		customProgramCacheKey() {
			return this.onBeforeCompile.toString();
		}
		setValues(t) {
			if (void 0 !== t)
				for (const e in t) {
					const n = t[e];
					if (void 0 === n) {
						console.warn("THREE.Material: '" + e + "' parameter is undefined.");
						continue;
					}
					if ("shading" === e) {
						console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
							(this.flatShading = 1 === n);
						continue;
					}
					const i = this[e];
					void 0 !== i
						? i && i.isColor
							? i.set(n)
							: i && i.isVector3 && n && n.isVector3
							? i.copy(n)
							: (this[e] = n)
						: console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
				}
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			e && (t = { textures: {}, images: {} });
			const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
			function i(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					delete i.metadata, e.push(i);
				}
				return e;
			}
			if (
				((n.uuid = this.uuid),
				(n.type = this.type),
				"" !== this.name && (n.name = this.name),
				this.color && this.color.isColor && (n.color = this.color.getHex()),
				void 0 !== this.roughness && (n.roughness = this.roughness),
				void 0 !== this.metalness && (n.metalness = this.metalness),
				void 0 !== this.sheen && (n.sheen = this.sheen),
				this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
				void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness),
				this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
				this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
				this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
				void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity),
				this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
				void 0 !== this.shininess && (n.shininess = this.shininess),
				void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
				void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
				this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
				this.clearcoatRoughnessMap &&
					this.clearcoatRoughnessMap.isTexture &&
					(n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
				this.clearcoatNormalMap &&
					this.clearcoatNormalMap.isTexture &&
					((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
					(n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
				this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
				this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
				this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
				this.lightMap &&
					this.lightMap.isTexture &&
					((n.lightMap = this.lightMap.toJSON(t).uuid), (n.lightMapIntensity = this.lightMapIntensity)),
				this.aoMap &&
					this.aoMap.isTexture &&
					((n.aoMap = this.aoMap.toJSON(t).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
				this.bumpMap &&
					this.bumpMap.isTexture &&
					((n.bumpMap = this.bumpMap.toJSON(t).uuid), (n.bumpScale = this.bumpScale)),
				this.normalMap &&
					this.normalMap.isTexture &&
					((n.normalMap = this.normalMap.toJSON(t).uuid),
					(n.normalMapType = this.normalMapType),
					(n.normalScale = this.normalScale.toArray())),
				this.displacementMap &&
					this.displacementMap.isTexture &&
					((n.displacementMap = this.displacementMap.toJSON(t).uuid),
					(n.displacementScale = this.displacementScale),
					(n.displacementBias = this.displacementBias)),
				this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
				this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
				this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
				this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
				this.specularIntensityMap &&
					this.specularIntensityMap.isTexture &&
					(n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
				this.specularColorMap &&
					this.specularColorMap.isTexture &&
					(n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
				this.envMap &&
					this.envMap.isTexture &&
					((n.envMap = this.envMap.toJSON(t).uuid), void 0 !== this.combine && (n.combine = this.combine)),
				void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
				void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
				void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
				this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
				void 0 !== this.transmission && (n.transmission = this.transmission),
				this.transmissionMap &&
					this.transmissionMap.isTexture &&
					(n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
				void 0 !== this.thickness && (n.thickness = this.thickness),
				this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
				void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance),
				void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()),
				void 0 !== this.size && (n.size = this.size),
				null !== this.shadowSide && (n.shadowSide = this.shadowSide),
				void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
				1 !== this.blending && (n.blending = this.blending),
				0 !== this.side && (n.side = this.side),
				this.vertexColors && (n.vertexColors = !0),
				this.opacity < 1 && (n.opacity = this.opacity),
				!0 === this.transparent && (n.transparent = this.transparent),
				(n.depthFunc = this.depthFunc),
				(n.depthTest = this.depthTest),
				(n.depthWrite = this.depthWrite),
				(n.colorWrite = this.colorWrite),
				(n.stencilWrite = this.stencilWrite),
				(n.stencilWriteMask = this.stencilWriteMask),
				(n.stencilFunc = this.stencilFunc),
				(n.stencilRef = this.stencilRef),
				(n.stencilFuncMask = this.stencilFuncMask),
				(n.stencilFail = this.stencilFail),
				(n.stencilZFail = this.stencilZFail),
				(n.stencilZPass = this.stencilZPass),
				void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
				!0 === this.polygonOffset && (n.polygonOffset = !0),
				0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
				0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
				void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
				void 0 !== this.dashSize && (n.dashSize = this.dashSize),
				void 0 !== this.gapSize && (n.gapSize = this.gapSize),
				void 0 !== this.scale && (n.scale = this.scale),
				!0 === this.dithering && (n.dithering = !0),
				this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
				!0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
				!0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
				!0 === this.wireframe && (n.wireframe = this.wireframe),
				this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
				"round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
				"round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
				!0 === this.flatShading && (n.flatShading = this.flatShading),
				!1 === this.visible && (n.visible = !1),
				!1 === this.toneMapped && (n.toneMapped = !1),
				!1 === this.fog && (n.fog = !1),
				"{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
				e)
			) {
				const e = i(t.textures),
					r = i(t.images);
				e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
			}
			return n;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			(this.name = t.name),
				(this.blending = t.blending),
				(this.side = t.side),
				(this.vertexColors = t.vertexColors),
				(this.opacity = t.opacity),
				(this.transparent = t.transparent),
				(this.blendSrc = t.blendSrc),
				(this.blendDst = t.blendDst),
				(this.blendEquation = t.blendEquation),
				(this.blendSrcAlpha = t.blendSrcAlpha),
				(this.blendDstAlpha = t.blendDstAlpha),
				(this.blendEquationAlpha = t.blendEquationAlpha),
				(this.depthFunc = t.depthFunc),
				(this.depthTest = t.depthTest),
				(this.depthWrite = t.depthWrite),
				(this.stencilWriteMask = t.stencilWriteMask),
				(this.stencilFunc = t.stencilFunc),
				(this.stencilRef = t.stencilRef),
				(this.stencilFuncMask = t.stencilFuncMask),
				(this.stencilFail = t.stencilFail),
				(this.stencilZFail = t.stencilZFail),
				(this.stencilZPass = t.stencilZPass),
				(this.stencilWrite = t.stencilWrite);
			const e = t.clippingPlanes;
			let n = null;
			if (null !== e) {
				const t = e.length;
				n = new Array(t);
				for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
			}
			return (
				(this.clippingPlanes = n),
				(this.clipIntersection = t.clipIntersection),
				(this.clipShadows = t.clipShadows),
				(this.shadowSide = t.shadowSide),
				(this.colorWrite = t.colorWrite),
				(this.precision = t.precision),
				(this.polygonOffset = t.polygonOffset),
				(this.polygonOffsetFactor = t.polygonOffsetFactor),
				(this.polygonOffsetUnits = t.polygonOffsetUnits),
				(this.dithering = t.dithering),
				(this.alphaTest = t.alphaTest),
				(this.alphaToCoverage = t.alphaToCoverage),
				(this.premultipliedAlpha = t.premultipliedAlpha),
				(this.visible = t.visible),
				(this.toneMapped = t.toneMapped),
				(this.userData = JSON.parse(JSON.stringify(t.userData))),
				this
			);
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
		set needsUpdate(t) {
			!0 === t && this.version++;
		}
	}
	(ke.prototype.isMaterial = !0),
		(ke.fromType = function () {
			return null;
		});
	class Ue extends ke {
		constructor(t) {
			super(),
				(this.type = "MeshBasicMaterial"),
				(this.color = new pt(16777215)),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				(this.specularMap = t.specularMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.combine = t.combine),
				(this.reflectivity = t.reflectivity),
				(this.refractionRatio = t.refractionRatio),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.fog = t.fog),
				this
			);
		}
	}
	Ue.prototype.isMeshBasicMaterial = !0;
	const Ve = new Et(),
		Ge = new Q();
	class We {
		constructor(t, e, n) {
			if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			(this.name = ""),
				(this.array = t),
				(this.itemSize = e),
				(this.count = void 0 !== t ? t.length / e : 0),
				(this.normalized = !0 === n),
				(this.usage = B),
				(this.updateRange = { offset: 0, count: -1 }),
				(this.version = 0);
		}
		onUploadCallback() {}
		set needsUpdate(t) {
			!0 === t && this.version++;
		}
		setUsage(t) {
			return (this.usage = t), this;
		}
		copy(t) {
			return (
				(this.name = t.name),
				(this.array = new t.array.constructor(t.array)),
				(this.itemSize = t.itemSize),
				(this.count = t.count),
				(this.normalized = t.normalized),
				(this.usage = t.usage),
				this
			);
		}
		copyAt(t, e, n) {
			(t *= this.itemSize), (n *= e.itemSize);
			for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
			return this;
		}
		copyArray(t) {
			return this.array.set(t), this;
		}
		copyColorsArray(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), (r = new pt())),
					(e[n++] = r.r),
					(e[n++] = r.g),
					(e[n++] = r.b);
			}
			return this;
		}
		copyVector2sArray(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r &&
					(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), (r = new Q())),
					(e[n++] = r.x),
					(e[n++] = r.y);
			}
			return this;
		}
		copyVector3sArray(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r &&
					(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), (r = new Et())),
					(e[n++] = r.x),
					(e[n++] = r.y),
					(e[n++] = r.z);
			}
			return this;
		}
		copyVector4sArray(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r &&
					(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), (r = new _t())),
					(e[n++] = r.x),
					(e[n++] = r.y),
					(e[n++] = r.z),
					(e[n++] = r.w);
			}
			return this;
		}
		applyMatrix3(t) {
			if (2 === this.itemSize)
				for (let e = 0, n = this.count; e < n; e++)
					Ge.fromBufferAttribute(this, e), Ge.applyMatrix3(t), this.setXY(e, Ge.x, Ge.y);
			else if (3 === this.itemSize)
				for (let e = 0, n = this.count; e < n; e++)
					Ve.fromBufferAttribute(this, e), Ve.applyMatrix3(t), this.setXYZ(e, Ve.x, Ve.y, Ve.z);
			return this;
		}
		applyMatrix4(t) {
			for (let e = 0, n = this.count; e < n; e++)
				Ve.fromBufferAttribute(this, e), Ve.applyMatrix4(t), this.setXYZ(e, Ve.x, Ve.y, Ve.z);
			return this;
		}
		applyNormalMatrix(t) {
			for (let e = 0, n = this.count; e < n; e++)
				Ve.fromBufferAttribute(this, e), Ve.applyNormalMatrix(t), this.setXYZ(e, Ve.x, Ve.y, Ve.z);
			return this;
		}
		transformDirection(t) {
			for (let e = 0, n = this.count; e < n; e++)
				Ve.fromBufferAttribute(this, e), Ve.transformDirection(t), this.setXYZ(e, Ve.x, Ve.y, Ve.z);
			return this;
		}
		set(t, e = 0) {
			return this.array.set(t, e), this;
		}
		getX(t) {
			return this.array[t * this.itemSize];
		}
		setX(t, e) {
			return (this.array[t * this.itemSize] = e), this;
		}
		getY(t) {
			return this.array[t * this.itemSize + 1];
		}
		setY(t, e) {
			return (this.array[t * this.itemSize + 1] = e), this;
		}
		getZ(t) {
			return this.array[t * this.itemSize + 2];
		}
		setZ(t, e) {
			return (this.array[t * this.itemSize + 2] = e), this;
		}
		getW(t) {
			return this.array[t * this.itemSize + 3];
		}
		setW(t, e) {
			return (this.array[t * this.itemSize + 3] = e), this;
		}
		setXY(t, e, n) {
			return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), this;
		}
		setXYZ(t, e, n, i) {
			return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), (this.array[t + 2] = i), this;
		}
		setXYZW(t, e, n, i, r) {
			return (
				(t *= this.itemSize),
				(this.array[t + 0] = e),
				(this.array[t + 1] = n),
				(this.array[t + 2] = i),
				(this.array[t + 3] = r),
				this
			);
		}
		onUpload(t) {
			return (this.onUploadCallback = t), this;
		}
		clone() {
			return new this.constructor(this.array, this.itemSize).copy(this);
		}
		toJSON() {
			const t = {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: Array.prototype.slice.call(this.array),
				normalized: this.normalized,
			};
			return (
				"" !== this.name && (t.name = this.name),
				this.usage !== B && (t.usage = this.usage),
				(0 === this.updateRange.offset && -1 === this.updateRange.count) || (t.updateRange = this.updateRange),
				t
			);
		}
	}
	We.prototype.isBufferAttribute = !0;
	class je extends We {
		constructor(t, e, n) {
			super(new Uint16Array(t), e, n);
		}
	}
	class qe extends We {
		constructor(t, e, n) {
			super(new Uint32Array(t), e, n);
		}
	}
	(class extends We {
		constructor(t, e, n) {
			super(new Uint16Array(t), e, n);
		}
	}).prototype.isFloat16BufferAttribute = !0;
	class Xe extends We {
		constructor(t, e, n) {
			super(new Float32Array(t), e, n);
		}
	}
	let Ye = 0;
	const Ze = new ne(),
		$e = new Ae(),
		Ke = new Et(),
		Je = new Ct(),
		Qe = new Ct(),
		tn = new Et();
	class en extends k {
		constructor() {
			super(),
				Object.defineProperty(this, "id", { value: Ye++ }),
				(this.uuid = j()),
				(this.name = ""),
				(this.type = "BufferGeometry"),
				(this.index = null),
				(this.attributes = {}),
				(this.morphAttributes = {}),
				(this.morphTargetsRelative = !1),
				(this.groups = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.drawRange = { start: 0, count: 1 / 0 }),
				(this.userData = {});
		}
		getIndex() {
			return this.index;
		}
		setIndex(t) {
			return Array.isArray(t) ? (this.index = new (et(t) ? qe : je)(t, 1)) : (this.index = t), this;
		}
		getAttribute(t) {
			return this.attributes[t];
		}
		setAttribute(t, e) {
			return (this.attributes[t] = e), this;
		}
		deleteAttribute(t) {
			return delete this.attributes[t], this;
		}
		hasAttribute(t) {
			return void 0 !== this.attributes[t];
		}
		addGroup(t, e, n = 0) {
			this.groups.push({ start: t, count: e, materialIndex: n });
		}
		clearGroups() {
			this.groups = [];
		}
		setDrawRange(t, e) {
			(this.drawRange.start = t), (this.drawRange.count = e);
		}
		applyMatrix4(t) {
			const e = this.attributes.position;
			void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
			const n = this.attributes.normal;
			if (void 0 !== n) {
				const e = new tt().getNormalMatrix(t);
				n.applyNormalMatrix(e), (n.needsUpdate = !0);
			}
			const i = this.attributes.tangent;
			return (
				void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
				null !== this.boundingBox && this.computeBoundingBox(),
				null !== this.boundingSphere && this.computeBoundingSphere(),
				this
			);
		}
		applyQuaternion(t) {
			return Ze.makeRotationFromQuaternion(t), this.applyMatrix4(Ze), this;
		}
		rotateX(t) {
			return Ze.makeRotationX(t), this.applyMatrix4(Ze), this;
		}
		rotateY(t) {
			return Ze.makeRotationY(t), this.applyMatrix4(Ze), this;
		}
		rotateZ(t) {
			return Ze.makeRotationZ(t), this.applyMatrix4(Ze), this;
		}
		translate(t, e, n) {
			return Ze.makeTranslation(t, e, n), this.applyMatrix4(Ze), this;
		}
		scale(t, e, n) {
			return Ze.makeScale(t, e, n), this.applyMatrix4(Ze), this;
		}
		lookAt(t) {
			return $e.lookAt(t), $e.updateMatrix(), this.applyMatrix4($e.matrix), this;
		}
		center() {
			return this.computeBoundingBox(), this.boundingBox.getCenter(Ke).negate(), this.translate(Ke.x, Ke.y, Ke.z), this;
		}
		setFromPoints(t) {
			const e = [];
			for (let n = 0, i = t.length; n < i; n++) {
				const i = t[n];
				e.push(i.x, i.y, i.z || 0);
			}
			return this.setAttribute("position", new Xe(e, 3)), this;
		}
		computeBoundingBox() {
			null === this.boundingBox && (this.boundingBox = new Ct());
			const t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute)
				return (
					console.error(
						'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
						this
					),
					void this.boundingBox.set(new Et(-1 / 0, -1 / 0, -1 / 0), new Et(1 / 0, 1 / 0, 1 / 0))
				);
			if (void 0 !== t) {
				if ((this.boundingBox.setFromBufferAttribute(t), e))
					for (let t = 0, n = e.length; t < n; t++) {
						const n = e[t];
						Je.setFromBufferAttribute(n),
							this.morphTargetsRelative
								? (tn.addVectors(this.boundingBox.min, Je.min),
								  this.boundingBox.expandByPoint(tn),
								  tn.addVectors(this.boundingBox.max, Je.max),
								  this.boundingBox.expandByPoint(tn))
								: (this.boundingBox.expandByPoint(Je.min), this.boundingBox.expandByPoint(Je.max));
					}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
				console.error(
					'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
					this
				);
		}
		computeBoundingSphere() {
			null === this.boundingSphere && (this.boundingSphere = new Xt());
			const t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute)
				return (
					console.error(
						'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
						this
					),
					void this.boundingSphere.set(new Et(), 1 / 0)
				);
			if (t) {
				const n = this.boundingSphere.center;
				if ((Je.setFromBufferAttribute(t), e))
					for (let t = 0, n = e.length; t < n; t++) {
						const n = e[t];
						Qe.setFromBufferAttribute(n),
							this.morphTargetsRelative
								? (tn.addVectors(Je.min, Qe.min),
								  Je.expandByPoint(tn),
								  tn.addVectors(Je.max, Qe.max),
								  Je.expandByPoint(tn))
								: (Je.expandByPoint(Qe.min), Je.expandByPoint(Qe.max));
					}
				Je.getCenter(n);
				let i = 0;
				for (let e = 0, r = t.count; e < r; e++) tn.fromBufferAttribute(t, e), (i = Math.max(i, n.distanceToSquared(tn)));
				if (e)
					for (let r = 0, s = e.length; r < s; r++) {
						const s = e[r],
							o = this.morphTargetsRelative;
						for (let e = 0, r = s.count; e < r; e++)
							tn.fromBufferAttribute(s, e),
								o && (Ke.fromBufferAttribute(t, e), tn.add(Ke)),
								(i = Math.max(i, n.distanceToSquared(tn)));
					}
				(this.boundingSphere.radius = Math.sqrt(i)),
					isNaN(this.boundingSphere.radius) &&
						console.error(
							'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
							this
						);
			}
		}
		computeTangents() {
			const t = this.index,
				e = this.attributes;
			if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
				return void console.error(
					"THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
				);
			const n = t.array,
				i = e.position.array,
				r = e.normal.array,
				s = e.uv.array,
				o = i.length / 3;
			!1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new We(new Float32Array(4 * o), 4));
			const a = this.getAttribute("tangent").array,
				l = [],
				c = [];
			for (let t = 0; t < o; t++) (l[t] = new Et()), (c[t] = new Et());
			const h = new Et(),
				u = new Et(),
				d = new Et(),
				p = new Q(),
				m = new Q(),
				f = new Q(),
				g = new Et(),
				v = new Et();
			function y(t, e, n) {
				h.fromArray(i, 3 * t),
					u.fromArray(i, 3 * e),
					d.fromArray(i, 3 * n),
					p.fromArray(s, 2 * t),
					m.fromArray(s, 2 * e),
					f.fromArray(s, 2 * n),
					u.sub(h),
					d.sub(h),
					m.sub(p),
					f.sub(p);
				const r = 1 / (m.x * f.y - f.x * m.y);
				isFinite(r) &&
					(g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r),
					v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r),
					l[t].add(g),
					l[e].add(g),
					l[n].add(g),
					c[t].add(v),
					c[e].add(v),
					c[n].add(v));
			}
			let x = this.groups;
			0 === x.length && (x = [{ start: 0, count: n.length }]);
			for (let t = 0, e = x.length; t < e; ++t) {
				const e = x[t],
					i = e.start;
				for (let t = i, r = i + e.count; t < r; t += 3) y(n[t + 0], n[t + 1], n[t + 2]);
			}
			const _ = new Et(),
				w = new Et(),
				b = new Et(),
				M = new Et();
			function S(t) {
				b.fromArray(r, 3 * t), M.copy(b);
				const e = l[t];
				_.copy(e), _.sub(b.multiplyScalar(b.dot(e))).normalize(), w.crossVectors(M, e);
				const n = w.dot(c[t]) < 0 ? -1 : 1;
				(a[4 * t] = _.x), (a[4 * t + 1] = _.y), (a[4 * t + 2] = _.z), (a[4 * t + 3] = n);
			}
			for (let t = 0, e = x.length; t < e; ++t) {
				const e = x[t],
					i = e.start;
				for (let t = i, r = i + e.count; t < r; t += 3) S(n[t + 0]), S(n[t + 1]), S(n[t + 2]);
			}
		}
		computeVertexNormals() {
			const t = this.index,
				e = this.getAttribute("position");
			if (void 0 !== e) {
				let n = this.getAttribute("normal");
				if (void 0 === n) (n = new We(new Float32Array(3 * e.count), 3)), this.setAttribute("normal", n);
				else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
				const i = new Et(),
					r = new Et(),
					s = new Et(),
					o = new Et(),
					a = new Et(),
					l = new Et(),
					c = new Et(),
					h = new Et();
				if (t)
					for (let u = 0, d = t.count; u < d; u += 3) {
						const d = t.getX(u + 0),
							p = t.getX(u + 1),
							m = t.getX(u + 2);
						i.fromBufferAttribute(e, d),
							r.fromBufferAttribute(e, p),
							s.fromBufferAttribute(e, m),
							c.subVectors(s, r),
							h.subVectors(i, r),
							c.cross(h),
							o.fromBufferAttribute(n, d),
							a.fromBufferAttribute(n, p),
							l.fromBufferAttribute(n, m),
							o.add(c),
							a.add(c),
							l.add(c),
							n.setXYZ(d, o.x, o.y, o.z),
							n.setXYZ(p, a.x, a.y, a.z),
							n.setXYZ(m, l.x, l.y, l.z);
					}
				else
					for (let t = 0, o = e.count; t < o; t += 3)
						i.fromBufferAttribute(e, t + 0),
							r.fromBufferAttribute(e, t + 1),
							s.fromBufferAttribute(e, t + 2),
							c.subVectors(s, r),
							h.subVectors(i, r),
							c.cross(h),
							n.setXYZ(t + 0, c.x, c.y, c.z),
							n.setXYZ(t + 1, c.x, c.y, c.z),
							n.setXYZ(t + 2, c.x, c.y, c.z);
				this.normalizeNormals(), (n.needsUpdate = !0);
			}
		}
		merge(t, e) {
			if (!t || !t.isBufferGeometry)
				return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
			void 0 === e &&
				((e = 0),
				console.warn(
					"THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
				));
			const n = this.attributes;
			for (const i in n) {
				if (void 0 === t.attributes[i]) continue;
				const r = n[i].array,
					s = t.attributes[i],
					o = s.array,
					a = s.itemSize * e,
					l = Math.min(o.length, r.length - a);
				for (let t = 0, e = a; t < l; t++, e++) r[e] = o[t];
			}
			return this;
		}
		normalizeNormals() {
			const t = this.attributes.normal;
			for (let e = 0, n = t.count; e < n; e++) tn.fromBufferAttribute(t, e), tn.normalize(), t.setXYZ(e, tn.x, tn.y, tn.z);
		}
		toNonIndexed() {
			function t(t, e) {
				const n = t.array,
					i = t.itemSize,
					r = t.normalized,
					s = new n.constructor(e.length * i);
				let o = 0,
					a = 0;
				for (let r = 0, l = e.length; r < l; r++) {
					o = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
					for (let t = 0; t < i; t++) s[a++] = n[o++];
				}
				return new We(s, i, r);
			}
			if (null === this.index)
				return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
			const e = new en(),
				n = this.index.array,
				i = this.attributes;
			for (const r in i) {
				const s = t(i[r], n);
				e.setAttribute(r, s);
			}
			const r = this.morphAttributes;
			for (const i in r) {
				const s = [],
					o = r[i];
				for (let e = 0, i = o.length; e < i; e++) {
					const i = t(o[e], n);
					s.push(i);
				}
				e.morphAttributes[i] = s;
			}
			e.morphTargetsRelative = this.morphTargetsRelative;
			const s = this.groups;
			for (let t = 0, n = s.length; t < n; t++) {
				const n = s[t];
				e.addGroup(n.start, n.count, n.materialIndex);
			}
			return e;
		}
		toJSON() {
			const t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
			if (
				((t.uuid = this.uuid),
				(t.type = this.type),
				"" !== this.name && (t.name = this.name),
				Object.keys(this.userData).length > 0 && (t.userData = this.userData),
				void 0 !== this.parameters)
			) {
				const e = this.parameters;
				for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
				return t;
			}
			t.data = { attributes: {} };
			const e = this.index;
			null !== e && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
			const n = this.attributes;
			for (const e in n) {
				const i = n[e];
				t.data.attributes[e] = i.toJSON(t.data);
			}
			const i = {};
			let r = !1;
			for (const e in this.morphAttributes) {
				const n = this.morphAttributes[e],
					s = [];
				for (let e = 0, i = n.length; e < i; e++) {
					const i = n[e];
					s.push(i.toJSON(t.data));
				}
				s.length > 0 && ((i[e] = s), (r = !0));
			}
			r && ((t.data.morphAttributes = i), (t.data.morphTargetsRelative = this.morphTargetsRelative));
			const s = this.groups;
			s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
			const o = this.boundingSphere;
			return null !== o && (t.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), t;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			(this.index = null),
				(this.attributes = {}),
				(this.morphAttributes = {}),
				(this.groups = []),
				(this.boundingBox = null),
				(this.boundingSphere = null);
			const e = {};
			this.name = t.name;
			const n = t.index;
			null !== n && this.setIndex(n.clone(e));
			const i = t.attributes;
			for (const t in i) {
				const n = i[t];
				this.setAttribute(t, n.clone(e));
			}
			const r = t.morphAttributes;
			for (const t in r) {
				const n = [],
					i = r[t];
				for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
				this.morphAttributes[t] = n;
			}
			this.morphTargetsRelative = t.morphTargetsRelative;
			const s = t.groups;
			for (let t = 0, e = s.length; t < e; t++) {
				const e = s[t];
				this.addGroup(e.start, e.count, e.materialIndex);
			}
			const o = t.boundingBox;
			null !== o && (this.boundingBox = o.clone());
			const a = t.boundingSphere;
			return (
				null !== a && (this.boundingSphere = a.clone()),
				(this.drawRange.start = t.drawRange.start),
				(this.drawRange.count = t.drawRange.count),
				(this.userData = t.userData),
				void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)),
				this
			);
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	}
	en.prototype.isBufferGeometry = !0;
	const nn = new ne(),
		rn = new ee(),
		sn = new Xt(),
		on = new Et(),
		an = new Et(),
		ln = new Et(),
		cn = new Et(),
		hn = new Et(),
		un = new Et(),
		dn = new Et(),
		pn = new Et(),
		mn = new Et(),
		fn = new Q(),
		gn = new Q(),
		vn = new Q(),
		yn = new Et(),
		xn = new Et();
	class _n extends Ae {
		constructor(t = new en(), e = new Ue()) {
			super(), (this.type = "Mesh"), (this.geometry = t), (this.material = e), this.updateMorphTargets();
		}
		copy(t) {
			return (
				super.copy(t),
				void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
				void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
				(this.material = t.material),
				(this.geometry = t.geometry),
				this
			);
		}
		updateMorphTargets() {
			const t = this.geometry;
			if (t.isBufferGeometry) {
				const e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					const t = e[n[0]];
					if (void 0 !== t) {
						(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e].name || String(e);
							this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
						}
					}
				}
			} else {
				const e = t.morphTargets;
				void 0 !== e &&
					e.length > 0 &&
					console.error(
						"THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
					);
			}
		}
		raycast(t, e) {
			const n = this.geometry,
				i = this.material,
				r = this.matrixWorld;
			if (void 0 === i) return;
			if (
				(null === n.boundingSphere && n.computeBoundingSphere(),
				sn.copy(n.boundingSphere),
				sn.applyMatrix4(r),
				!1 === t.ray.intersectsSphere(sn))
			)
				return;
			if (
				(nn.copy(r).invert(),
				rn.copy(t.ray).applyMatrix4(nn),
				null !== n.boundingBox && !1 === rn.intersectsBox(n.boundingBox))
			)
				return;
			let s;
			if (n.isBufferGeometry) {
				const r = n.index,
					o = n.attributes.position,
					a = n.morphAttributes.position,
					l = n.morphTargetsRelative,
					c = n.attributes.uv,
					h = n.attributes.uv2,
					u = n.groups,
					d = n.drawRange;
				if (null !== r)
					if (Array.isArray(i))
						for (let n = 0, p = u.length; n < p; n++) {
							const p = u[n],
								m = i[p.materialIndex];
							for (
								let n = Math.max(p.start, d.start),
									i = Math.min(r.count, Math.min(p.start + p.count, d.start + d.count));
								n < i;
								n += 3
							) {
								const i = r.getX(n),
									u = r.getX(n + 1),
									d = r.getX(n + 2);
								(s = wn(this, m, t, rn, o, a, l, c, h, i, u, d)),
									s && ((s.faceIndex = Math.floor(n / 3)), (s.face.materialIndex = p.materialIndex), e.push(s));
							}
						}
					else
						for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
							const u = r.getX(n),
								d = r.getX(n + 1),
								p = r.getX(n + 2);
							(s = wn(this, i, t, rn, o, a, l, c, h, u, d, p)), s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
						}
				else if (void 0 !== o)
					if (Array.isArray(i))
						for (let n = 0, r = u.length; n < r; n++) {
							const r = u[n],
								p = i[r.materialIndex];
							for (
								let n = Math.max(r.start, d.start),
									i = Math.min(o.count, Math.min(r.start + r.count, d.start + d.count));
								n < i;
								n += 3
							)
								(s = wn(this, p, t, rn, o, a, l, c, h, n, n + 1, n + 2)),
									s && ((s.faceIndex = Math.floor(n / 3)), (s.face.materialIndex = r.materialIndex), e.push(s));
						}
					else
						for (let n = Math.max(0, d.start), r = Math.min(o.count, d.start + d.count); n < r; n += 3)
							(s = wn(this, i, t, rn, o, a, l, c, h, n, n + 1, n + 2)),
								s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
			} else
				n.isGeometry &&
					console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
		}
	}
	function wn(t, e, n, i, r, s, o, a, l, c, h, u) {
		on.fromBufferAttribute(r, c), an.fromBufferAttribute(r, h), ln.fromBufferAttribute(r, u);
		const d = t.morphTargetInfluences;
		if (s && d) {
			dn.set(0, 0, 0), pn.set(0, 0, 0), mn.set(0, 0, 0);
			for (let t = 0, e = s.length; t < e; t++) {
				const e = d[t],
					n = s[t];
				0 !== e &&
					(cn.fromBufferAttribute(n, c),
					hn.fromBufferAttribute(n, h),
					un.fromBufferAttribute(n, u),
					o
						? (dn.addScaledVector(cn, e), pn.addScaledVector(hn, e), mn.addScaledVector(un, e))
						: (dn.addScaledVector(cn.sub(on), e),
						  pn.addScaledVector(hn.sub(an), e),
						  mn.addScaledVector(un.sub(ln), e)));
			}
			on.add(dn), an.add(pn), ln.add(mn);
		}
		t.isSkinnedMesh && (t.boneTransform(c, on), t.boneTransform(h, an), t.boneTransform(u, ln));
		const p = (function (t, e, n, i, r, s, o, a) {
			let l;
			if (
				((l = 1 === e.side ? i.intersectTriangle(o, s, r, !0, a) : i.intersectTriangle(r, s, o, 2 !== e.side, a)),
				null === l)
			)
				return null;
			xn.copy(a), xn.applyMatrix4(t.matrixWorld);
			const c = n.ray.origin.distanceTo(xn);
			return c < n.near || c > n.far ? null : { distance: c, point: xn.clone(), object: t };
		})(t, e, n, i, on, an, ln, yn);
		if (p) {
			a &&
				(fn.fromBufferAttribute(a, c),
				gn.fromBufferAttribute(a, h),
				vn.fromBufferAttribute(a, u),
				(p.uv = Fe.getUV(yn, on, an, ln, fn, gn, vn, new Q()))),
				l &&
					(fn.fromBufferAttribute(l, c),
					gn.fromBufferAttribute(l, h),
					vn.fromBufferAttribute(l, u),
					(p.uv2 = Fe.getUV(yn, on, an, ln, fn, gn, vn, new Q())));
			const t = { a: c, b: h, c: u, normal: new Et(), materialIndex: 0 };
			Fe.getNormal(on, an, ln, t.normal), (p.face = t);
		}
		return p;
	}
	_n.prototype.isMesh = !0;
	class bn extends en {
		constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
			super(),
				(this.type = "BoxGeometry"),
				(this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: s });
			const o = this;
			(i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
			const a = [],
				l = [],
				c = [],
				h = [];
			let u = 0,
				d = 0;
			function p(t, e, n, i, r, s, p, m, f, g, v) {
				const y = s / f,
					x = p / g,
					_ = s / 2,
					w = p / 2,
					b = m / 2,
					M = f + 1,
					S = g + 1;
				let E = 0,
					T = 0;
				const A = new Et();
				for (let s = 0; s < S; s++) {
					const o = s * x - w;
					for (let a = 0; a < M; a++) {
						const u = a * y - _;
						(A[t] = u * i),
							(A[e] = o * r),
							(A[n] = b),
							l.push(A.x, A.y, A.z),
							(A[t] = 0),
							(A[e] = 0),
							(A[n] = m > 0 ? 1 : -1),
							c.push(A.x, A.y, A.z),
							h.push(a / f),
							h.push(1 - s / g),
							(E += 1);
					}
				}
				for (let t = 0; t < g; t++)
					for (let e = 0; e < f; e++) {
						const n = u + e + M * t,
							i = u + e + M * (t + 1),
							r = u + (e + 1) + M * (t + 1),
							s = u + (e + 1) + M * t;
						a.push(n, i, s), a.push(i, r, s), (T += 6);
					}
				o.addGroup(d, T, v), (d += T), (u += E);
			}
			p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
				p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
				p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
				p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
				p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
				p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
				this.setIndex(a),
				this.setAttribute("position", new Xe(l, 3)),
				this.setAttribute("normal", new Xe(c, 3)),
				this.setAttribute("uv", new Xe(h, 2));
		}
		static fromJSON(t) {
			return new bn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
		}
	}
	function Mn(t) {
		const e = {};
		for (const n in t) {
			e[n] = {};
			for (const i in t[n]) {
				const r = t[n][i];
				r &&
				(r.isColor ||
					r.isMatrix3 ||
					r.isMatrix4 ||
					r.isVector2 ||
					r.isVector3 ||
					r.isVector4 ||
					r.isTexture ||
					r.isQuaternion)
					? (e[n][i] = r.clone())
					: Array.isArray(r)
					? (e[n][i] = r.slice())
					: (e[n][i] = r);
			}
		}
		return e;
	}
	function Sn(t) {
		const e = {};
		for (let n = 0; n < t.length; n++) {
			const i = Mn(t[n]);
			for (const t in i) e[t] = i[t];
		}
		return e;
	}
	const En = { clone: Mn, merge: Sn };
	class Tn extends ke {
		constructor(t) {
			super(),
				(this.type = "ShaderMaterial"),
				(this.defines = {}),
				(this.uniforms = {}),
				(this.vertexShader =
					"void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
				(this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
				(this.linewidth = 1),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.fog = !1),
				(this.lights = !1),
				(this.clipping = !1),
				(this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }),
				(this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }),
				(this.index0AttributeName = void 0),
				(this.uniformsNeedUpdate = !1),
				(this.glslVersion = null),
				void 0 !== t &&
					(void 0 !== t.attributes &&
						console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
					this.setValues(t));
		}
		copy(t) {
			return (
				super.copy(t),
				(this.fragmentShader = t.fragmentShader),
				(this.vertexShader = t.vertexShader),
				(this.uniforms = Mn(t.uniforms)),
				(this.defines = Object.assign({}, t.defines)),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.fog = t.fog),
				(this.lights = t.lights),
				(this.clipping = t.clipping),
				(this.extensions = Object.assign({}, t.extensions)),
				(this.glslVersion = t.glslVersion),
				this
			);
		}
		toJSON(t) {
			const e = super.toJSON(t);
			(e.glslVersion = this.glslVersion), (e.uniforms = {});
			for (const n in this.uniforms) {
				const i = this.uniforms[n].value;
				i && i.isTexture
					? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
					: i && i.isColor
					? (e.uniforms[n] = { type: "c", value: i.getHex() })
					: i && i.isVector2
					? (e.uniforms[n] = { type: "v2", value: i.toArray() })
					: i && i.isVector3
					? (e.uniforms[n] = { type: "v3", value: i.toArray() })
					: i && i.isVector4
					? (e.uniforms[n] = { type: "v4", value: i.toArray() })
					: i && i.isMatrix3
					? (e.uniforms[n] = { type: "m3", value: i.toArray() })
					: i && i.isMatrix4
					? (e.uniforms[n] = { type: "m4", value: i.toArray() })
					: (e.uniforms[n] = { value: i });
			}
			Object.keys(this.defines).length > 0 && (e.defines = this.defines),
				(e.vertexShader = this.vertexShader),
				(e.fragmentShader = this.fragmentShader);
			const n = {};
			for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
			return Object.keys(n).length > 0 && (e.extensions = n), e;
		}
	}
	Tn.prototype.isShaderMaterial = !0;
	class An extends Ae {
		constructor() {
			super(),
				(this.type = "Camera"),
				(this.matrixWorldInverse = new ne()),
				(this.projectionMatrix = new ne()),
				(this.projectionMatrixInverse = new ne());
		}
		copy(t, e) {
			return (
				super.copy(t, e),
				this.matrixWorldInverse.copy(t.matrixWorldInverse),
				this.projectionMatrix.copy(t.projectionMatrix),
				this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
				this
			);
		}
		getWorldDirection(t) {
			this.updateWorldMatrix(!0, !1);
			const e = this.matrixWorld.elements;
			return t.set(-e[8], -e[9], -e[10]).normalize();
		}
		updateMatrixWorld(t) {
			super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
		}
		updateWorldMatrix(t, e) {
			super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}
	An.prototype.isCamera = !0;
	class Cn extends An {
		constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
			super(),
				(this.type = "PerspectiveCamera"),
				(this.fov = t),
				(this.zoom = 1),
				(this.near = n),
				(this.far = i),
				(this.focus = 10),
				(this.aspect = e),
				(this.view = null),
				(this.filmGauge = 35),
				(this.filmOffset = 0),
				this.updateProjectionMatrix();
		}
		copy(t, e) {
			return (
				super.copy(t, e),
				(this.fov = t.fov),
				(this.zoom = t.zoom),
				(this.near = t.near),
				(this.far = t.far),
				(this.focus = t.focus),
				(this.aspect = t.aspect),
				(this.view = null === t.view ? null : Object.assign({}, t.view)),
				(this.filmGauge = t.filmGauge),
				(this.filmOffset = t.filmOffset),
				this
			);
		}
		setFocalLength(t) {
			const e = (0.5 * this.getFilmHeight()) / t;
			(this.fov = 2 * W * Math.atan(e)), this.updateProjectionMatrix();
		}
		getFocalLength() {
			const t = Math.tan(0.5 * G * this.fov);
			return (0.5 * this.getFilmHeight()) / t;
		}
		getEffectiveFOV() {
			return 2 * W * Math.atan(Math.tan(0.5 * G * this.fov) / this.zoom);
		}
		getFilmWidth() {
			return this.filmGauge * Math.min(this.aspect, 1);
		}
		getFilmHeight() {
			return this.filmGauge / Math.max(this.aspect, 1);
		}
		setViewOffset(t, e, n, i, r, s) {
			(this.aspect = t / e),
				null === this.view &&
					(this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
				(this.view.enabled = !0),
				(this.view.fullWidth = t),
				(this.view.fullHeight = e),
				(this.view.offsetX = n),
				(this.view.offsetY = i),
				(this.view.width = r),
				(this.view.height = s),
				this.updateProjectionMatrix();
		}
		clearViewOffset() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
		}
		updateProjectionMatrix() {
			const t = this.near;
			let e = (t * Math.tan(0.5 * G * this.fov)) / this.zoom,
				n = 2 * e,
				i = this.aspect * n,
				r = -0.5 * i;
			const s = this.view;
			if (null !== this.view && this.view.enabled) {
				const t = s.fullWidth,
					o = s.fullHeight;
				(r += (s.offsetX * i) / t), (e -= (s.offsetY * n) / o), (i *= s.width / t), (n *= s.height / o);
			}
			const o = this.filmOffset;
			0 !== o && (r += (t * o) / this.getFilmWidth()),
				this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
				this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return (
				(e.object.fov = this.fov),
				(e.object.zoom = this.zoom),
				(e.object.near = this.near),
				(e.object.far = this.far),
				(e.object.focus = this.focus),
				(e.object.aspect = this.aspect),
				null !== this.view && (e.object.view = Object.assign({}, this.view)),
				(e.object.filmGauge = this.filmGauge),
				(e.object.filmOffset = this.filmOffset),
				e
			);
		}
	}
	Cn.prototype.isPerspectiveCamera = !0;
	const Rn = 90;
	class Ln extends Ae {
		constructor(t, e, n) {
			if ((super(), (this.type = "CubeCamera"), !0 !== n.isWebGLCubeRenderTarget))
				return void console.error(
					"THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
				);
			this.renderTarget = n;
			const i = new Cn(Rn, 1, t, e);
			(i.layers = this.layers), i.up.set(0, -1, 0), i.lookAt(new Et(1, 0, 0)), this.add(i);
			const r = new Cn(Rn, 1, t, e);
			(r.layers = this.layers), r.up.set(0, -1, 0), r.lookAt(new Et(-1, 0, 0)), this.add(r);
			const s = new Cn(Rn, 1, t, e);
			(s.layers = this.layers), s.up.set(0, 0, 1), s.lookAt(new Et(0, 1, 0)), this.add(s);
			const o = new Cn(Rn, 1, t, e);
			(o.layers = this.layers), o.up.set(0, 0, -1), o.lookAt(new Et(0, -1, 0)), this.add(o);
			const a = new Cn(Rn, 1, t, e);
			(a.layers = this.layers), a.up.set(0, -1, 0), a.lookAt(new Et(0, 0, 1)), this.add(a);
			const l = new Cn(Rn, 1, t, e);
			(l.layers = this.layers), l.up.set(0, -1, 0), l.lookAt(new Et(0, 0, -1)), this.add(l);
		}
		update(t, e) {
			null === this.parent && this.updateMatrixWorld();
			const n = this.renderTarget,
				[i, r, s, o, a, l] = this.children,
				c = t.getRenderTarget(),
				h = t.toneMapping,
				u = t.xr.enabled;
			(t.toneMapping = 0), (t.xr.enabled = !1);
			const d = n.texture.generateMipmaps;
			(n.texture.generateMipmaps = !1),
				t.setRenderTarget(n, 0),
				t.render(e, i),
				t.setRenderTarget(n, 1),
				t.render(e, r),
				t.setRenderTarget(n, 2),
				t.render(e, s),
				t.setRenderTarget(n, 3),
				t.render(e, o),
				t.setRenderTarget(n, 4),
				t.render(e, a),
				(n.texture.generateMipmaps = d),
				t.setRenderTarget(n, 5),
				t.render(e, l),
				t.setRenderTarget(c),
				(t.toneMapping = h),
				(t.xr.enabled = u),
				(n.texture.needsPMREMUpdate = !0);
		}
	}
	class Pn extends xt {
		constructor(t, n, i, r, s, o, a, l, c, h) {
			super((t = void 0 !== t ? t : []), (n = void 0 !== n ? n : e), i, r, s, o, a, l, c, h), (this.flipY = !1);
		}
		get images() {
			return this.image;
		}
		set images(t) {
			this.image = t;
		}
	}
	Pn.prototype.isCubeTexture = !0;
	class In extends wt {
		constructor(t, e = {}) {
			super(t, t, e);
			const n = { width: t, height: t, depth: 1 },
				i = [n, n, n, n, n, n];
			(this.texture = new Pn(
				i,
				e.mapping,
				e.wrapS,
				e.wrapT,
				e.magFilter,
				e.minFilter,
				e.format,
				e.type,
				e.anisotropy,
				e.encoding
			)),
				(this.texture.isRenderTargetTexture = !0),
				(this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps),
				(this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : h);
		}
		fromEquirectangularTexture(t, e) {
			(this.texture.type = e.type),
				(this.texture.encoding = e.encoding),
				(this.texture.generateMipmaps = e.generateMipmaps),
				(this.texture.minFilter = e.minFilter),
				(this.texture.magFilter = e.magFilter);
			const n = { tEquirect: { value: null } },
				i =
					"\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
				r =
					"\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
				s = new bn(5, 5, 5),
				o = new Tn({
					name: "CubemapFromEquirect",
					uniforms: Mn(n),
					vertexShader: i,
					fragmentShader: r,
					side: 1,
					blending: 0,
				});
			o.uniforms.tEquirect.value = e;
			const a = new _n(s, o),
				l = e.minFilter;
			return (
				e.minFilter === u && (e.minFilter = h),
				new Ln(1, 10, this).update(t, a),
				(e.minFilter = l),
				a.geometry.dispose(),
				a.material.dispose(),
				this
			);
		}
		clear(t, e, n, i) {
			const r = t.getRenderTarget();
			for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
			t.setRenderTarget(r);
		}
	}
	In.prototype.isWebGLCubeRenderTarget = !0;
	const Dn = new Et(),
		Nn = new Et(),
		zn = new tt();
	class Bn {
		constructor(t = new Et(1, 0, 0), e = 0) {
			(this.normal = t), (this.constant = e);
		}
		set(t, e) {
			return this.normal.copy(t), (this.constant = e), this;
		}
		setComponents(t, e, n, i) {
			return this.normal.set(t, e, n), (this.constant = i), this;
		}
		setFromNormalAndCoplanarPoint(t, e) {
			return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
		}
		setFromCoplanarPoints(t, e, n) {
			const i = Dn.subVectors(n, e).cross(Nn.subVectors(t, e)).normalize();
			return this.setFromNormalAndCoplanarPoint(i, t), this;
		}
		copy(t) {
			return this.normal.copy(t.normal), (this.constant = t.constant), this;
		}
		normalize() {
			const t = 1 / this.normal.length();
			return this.normal.multiplyScalar(t), (this.constant *= t), this;
		}
		negate() {
			return (this.constant *= -1), this.normal.negate(), this;
		}
		distanceToPoint(t) {
			return this.normal.dot(t) + this.constant;
		}
		distanceToSphere(t) {
			return this.distanceToPoint(t.center) - t.radius;
		}
		projectPoint(t, e) {
			return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
		}
		intersectLine(t, e) {
			const n = t.delta(Dn),
				i = this.normal.dot(n);
			if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
			const r = -(t.start.dot(this.normal) + this.constant) / i;
			return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
		}
		intersectsLine(t) {
			const e = this.distanceToPoint(t.start),
				n = this.distanceToPoint(t.end);
			return (e < 0 && n > 0) || (n < 0 && e > 0);
		}
		intersectsBox(t) {
			return t.intersectsPlane(this);
		}
		intersectsSphere(t) {
			return t.intersectsPlane(this);
		}
		coplanarPoint(t) {
			return t.copy(this.normal).multiplyScalar(-this.constant);
		}
		applyMatrix4(t, e) {
			const n = e || zn.getNormalMatrix(t),
				i = this.coplanarPoint(Dn).applyMatrix4(t),
				r = this.normal.applyMatrix3(n).normalize();
			return (this.constant = -i.dot(r)), this;
		}
		translate(t) {
			return (this.constant -= t.dot(this.normal)), this;
		}
		equals(t) {
			return t.normal.equals(this.normal) && t.constant === this.constant;
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}
	Bn.prototype.isPlane = !0;
	const On = new Xt(),
		Fn = new Et();
	class Hn {
		constructor(t = new Bn(), e = new Bn(), n = new Bn(), i = new Bn(), r = new Bn(), s = new Bn()) {
			this.planes = [t, e, n, i, r, s];
		}
		set(t, e, n, i, r, s) {
			const o = this.planes;
			return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(s), this;
		}
		copy(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
			return this;
		}
		setFromProjectionMatrix(t) {
			const e = this.planes,
				n = t.elements,
				i = n[0],
				r = n[1],
				s = n[2],
				o = n[3],
				a = n[4],
				l = n[5],
				c = n[6],
				h = n[7],
				u = n[8],
				d = n[9],
				p = n[10],
				m = n[11],
				f = n[12],
				g = n[13],
				v = n[14],
				y = n[15];
			return (
				e[0].setComponents(o - i, h - a, m - u, y - f).normalize(),
				e[1].setComponents(o + i, h + a, m + u, y + f).normalize(),
				e[2].setComponents(o + r, h + l, m + d, y + g).normalize(),
				e[3].setComponents(o - r, h - l, m - d, y - g).normalize(),
				e[4].setComponents(o - s, h - c, m - p, y - v).normalize(),
				e[5].setComponents(o + s, h + c, m + p, y + v).normalize(),
				this
			);
		}
		intersectsObject(t) {
			const e = t.geometry;
			return (
				null === e.boundingSphere && e.computeBoundingSphere(),
				On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
				this.intersectsSphere(On)
			);
		}
		intersectsSprite(t) {
			return (
				On.center.set(0, 0, 0),
				(On.radius = 0.7071067811865476),
				On.applyMatrix4(t.matrixWorld),
				this.intersectsSphere(On)
			);
		}
		intersectsSphere(t) {
			const e = this.planes,
				n = t.center,
				i = -t.radius;
			for (let t = 0; t < 6; t++) if (e[t].distanceToPoint(n) < i) return !1;
			return !0;
		}
		intersectsBox(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++) {
				const i = e[n];
				if (
					((Fn.x = i.normal.x > 0 ? t.max.x : t.min.x),
					(Fn.y = i.normal.y > 0 ? t.max.y : t.min.y),
					(Fn.z = i.normal.z > 0 ? t.max.z : t.min.z),
					i.distanceToPoint(Fn) < 0)
				)
					return !1;
			}
			return !0;
		}
		containsPoint(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
			return !0;
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}
	function kn() {
		let t = null,
			e = !1,
			n = null,
			i = null;
		function r(e, s) {
			n(e, s), (i = t.requestAnimationFrame(r));
		}
		return {
			start: function () {
				!0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
			},
			stop: function () {
				t.cancelAnimationFrame(i), (e = !1);
			},
			setAnimationLoop: function (t) {
				n = t;
			},
			setContext: function (e) {
				t = e;
			},
		};
	}
	function Un(t, e) {
		const n = e.isWebGL2,
			i = new WeakMap();
		return {
			get: function (t) {
				return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
			},
			remove: function (e) {
				e.isInterleavedBufferAttribute && (e = e.data);
				const n = i.get(e);
				n && (t.deleteBuffer(n.buffer), i.delete(e));
			},
			update: function (e, r) {
				if (e.isGLBufferAttribute) {
					const t = i.get(e);
					return void (
						(!t || t.version < e.version) &&
						i.set(e, { buffer: e.buffer, type: e.type, bytesPerElement: e.elementSize, version: e.version })
					);
				}
				e.isInterleavedBufferAttribute && (e = e.data);
				const s = i.get(e);
				void 0 === s
					? i.set(
							e,
							(function (e, i) {
								const r = e.array,
									s = e.usage,
									o = t.createBuffer();
								let a;
								if ((t.bindBuffer(i, o), t.bufferData(i, r, s), e.onUploadCallback(), r instanceof Float32Array))
									a = 5126;
								else if (r instanceof Uint16Array)
									if (e.isFloat16BufferAttribute) {
										if (!n)
											throw new Error(
												"THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
											);
										a = 5131;
									} else a = 5123;
								else if (r instanceof Int16Array) a = 5122;
								else if (r instanceof Uint32Array) a = 5125;
								else if (r instanceof Int32Array) a = 5124;
								else if (r instanceof Int8Array) a = 5120;
								else if (r instanceof Uint8Array) a = 5121;
								else {
									if (!(r instanceof Uint8ClampedArray))
										throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
									a = 5121;
								}
								return { buffer: o, type: a, bytesPerElement: r.BYTES_PER_ELEMENT, version: e.version };
							})(e, r)
					  )
					: s.version < e.version &&
					  ((function (e, i, r) {
							const s = i.array,
								o = i.updateRange;
							t.bindBuffer(r, e),
								-1 === o.count
									? t.bufferSubData(r, 0, s)
									: (n
											? t.bufferSubData(r, o.offset * s.BYTES_PER_ELEMENT, s, o.offset, o.count)
											: t.bufferSubData(
													r,
													o.offset * s.BYTES_PER_ELEMENT,
													s.subarray(o.offset, o.offset + o.count)
											  ),
									  (o.count = -1));
					  })(s.buffer, e, r),
					  (s.version = e.version));
			},
		};
	}
	class Vn extends en {
		constructor(t = 1, e = 1, n = 1, i = 1) {
			super(),
				(this.type = "PlaneGeometry"),
				(this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i });
			const r = t / 2,
				s = e / 2,
				o = Math.floor(n),
				a = Math.floor(i),
				l = o + 1,
				c = a + 1,
				h = t / o,
				u = e / a,
				d = [],
				p = [],
				m = [],
				f = [];
			for (let t = 0; t < c; t++) {
				const e = t * u - s;
				for (let n = 0; n < l; n++) {
					const i = n * h - r;
					p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / o), f.push(1 - t / a);
				}
			}
			for (let t = 0; t < a; t++)
				for (let e = 0; e < o; e++) {
					const n = e + l * t,
						i = e + l * (t + 1),
						r = e + 1 + l * (t + 1),
						s = e + 1 + l * t;
					d.push(n, i, s), d.push(i, r, s);
				}
			this.setIndex(d),
				this.setAttribute("position", new Xe(p, 3)),
				this.setAttribute("normal", new Xe(m, 3)),
				this.setAttribute("uv", new Xe(f, 2));
		}
		static fromJSON(t) {
			return new Vn(t.width, t.height, t.widthSegments, t.heightSegments);
		}
	}
	const Gn = {
			alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
			alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
			alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
			alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
			aomap_fragment:
				"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
			aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
			begin_vertex: "vec3 transformed = vec3( position );",
			beginnormal_vertex:
				"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
			bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
			bumpmap_pars_fragment:
				"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
			clipping_planes_fragment:
				"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
			clipping_planes_pars_fragment:
				"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
			clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
			clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
			color_fragment:
				"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
			color_pars_fragment:
				"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
			color_pars_vertex:
				"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
			color_vertex:
				"#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
			common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
			cube_uv_reflection_fragment:
				"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
			defaultnormal_vertex:
				"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
			displacementmap_pars_vertex:
				"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
			displacementmap_vertex:
				"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
			emissivemap_fragment:
				"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
			emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
			encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
			encodings_pars_fragment:
				"vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
			envmap_fragment:
				"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
			envmap_common_pars_fragment:
				"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
			envmap_pars_fragment:
				"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
			envmap_pars_vertex:
				"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
			envmap_physical_pars_fragment:
				"#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
			envmap_vertex:
				"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
			fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
			fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
			fog_fragment:
				"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
			fog_pars_fragment:
				"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
			gradientmap_pars_fragment:
				"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
			lightmap_fragment:
				"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
			lightmap_pars_fragment:
				"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
			lights_lambert_vertex:
				"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
			lights_pars_begin:
				"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
			lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
			lights_toon_pars_fragment:
				"varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
			lights_phong_fragment:
				"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
			lights_phong_pars_fragment:
				"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
			lights_physical_fragment:
				"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
			lights_physical_pars_fragment:
				"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
			lights_fragment_begin:
				"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
			lights_fragment_maps:
				"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
			lights_fragment_end:
				"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
			logdepthbuf_fragment:
				"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
			logdepthbuf_pars_fragment:
				"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
			logdepthbuf_pars_vertex:
				"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
			logdepthbuf_vertex:
				"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
			map_fragment:
				"#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
			map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
			map_particle_fragment:
				"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
			map_particle_pars_fragment:
				"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
			metalnessmap_fragment:
				"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
			metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
			morphcolor_vertex:
				"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
			morphnormal_vertex:
				"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
			morphtarget_pars_vertex:
				"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
			morphtarget_vertex:
				"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
			normal_fragment_begin:
				"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
			normal_fragment_maps:
				"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
			normal_pars_fragment:
				"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
			normal_pars_vertex:
				"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
			normal_vertex:
				"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
			normalmap_pars_fragment:
				"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
			clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
			clearcoat_normal_fragment_maps:
				"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
			clearcoat_pars_fragment:
				"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
			output_fragment:
				"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
			packing:
				"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
			premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
			project_vertex:
				"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
			dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
			dithering_pars_fragment:
				"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
			roughnessmap_fragment:
				"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
			roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
			shadowmap_pars_fragment:
				"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
			shadowmap_pars_vertex:
				"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
			shadowmap_vertex:
				"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
			shadowmask_pars_fragment:
				"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
			skinbase_vertex:
				"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
			skinning_pars_vertex:
				"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
			skinning_vertex:
				"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
			skinnormal_vertex:
				"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
			specularmap_fragment:
				"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
			specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
			tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
			tonemapping_pars_fragment:
				"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
			transmission_fragment:
				"#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
			transmission_pars_fragment:
				"#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
			uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
			uv_pars_vertex:
				"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
			uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
			uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
			uv2_pars_vertex:
				"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
			uv2_vertex:
				"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
			worldpos_vertex:
				"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
			background_vert:
				"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
			background_frag:
				"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			cube_vert:
				"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
			cube_frag:
				"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			depth_vert:
				"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
			depth_frag:
				"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
			distanceRGBA_vert:
				"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
			distanceRGBA_frag:
				"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
			equirect_vert:
				"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
			equirect_frag:
				"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			linedashed_vert:
				"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
			linedashed_frag:
				"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
			meshbasic_vert:
				"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
			meshbasic_frag:
				"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshlambert_vert:
				"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshlambert_frag:
				"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshmatcap_vert:
				"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
			meshmatcap_frag:
				"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshnormal_vert:
				"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
			meshnormal_frag:
				"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
			meshphong_vert:
				"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshphong_frag:
				"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshphysical_vert:
				"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
			meshphysical_frag:
				"#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshtoon_vert:
				"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshtoon_frag:
				"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			points_vert:
				"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
			points_frag:
				"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
			shadow_vert:
				"#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			shadow_frag:
				"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			sprite_vert:
				"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
			sprite_frag:
				"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
		},
		Wn = {
			common: {
				diffuse: { value: new pt(16777215) },
				opacity: { value: 1 },
				map: { value: null },
				uvTransform: { value: new tt() },
				uv2Transform: { value: new tt() },
				alphaMap: { value: null },
				alphaTest: { value: 0 },
			},
			specularmap: { specularMap: { value: null } },
			envmap: {
				envMap: { value: null },
				flipEnvMap: { value: -1 },
				reflectivity: { value: 1 },
				ior: { value: 1.5 },
				refractionRatio: { value: 0.98 },
			},
			aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
			lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
			emissivemap: { emissiveMap: { value: null } },
			bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
			normalmap: { normalMap: { value: null }, normalScale: { value: new Q(1, 1) } },
			displacementmap: {
				displacementMap: { value: null },
				displacementScale: { value: 1 },
				displacementBias: { value: 0 },
			},
			roughnessmap: { roughnessMap: { value: null } },
			metalnessmap: { metalnessMap: { value: null } },
			gradientmap: { gradientMap: { value: null } },
			fog: {
				fogDensity: { value: 25e-5 },
				fogNear: { value: 1 },
				fogFar: { value: 2e3 },
				fogColor: { value: new pt(16777215) },
			},
			lights: {
				ambientLightColor: { value: [] },
				lightProbe: { value: [] },
				directionalLights: { value: [], properties: { direction: {}, color: {} } },
				directionalLightShadows: {
					value: [],
					properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
				},
				directionalShadowMap: { value: [] },
				directionalShadowMatrix: { value: [] },
				spotLights: {
					value: [],
					properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} },
				},
				spotLightShadows: {
					value: [],
					properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
				},
				spotShadowMap: { value: [] },
				spotShadowMatrix: { value: [] },
				pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
				pointLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {},
					},
				},
				pointShadowMap: { value: [] },
				pointShadowMatrix: { value: [] },
				hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
				rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
				ltc_1: { value: null },
				ltc_2: { value: null },
			},
			points: {
				diffuse: { value: new pt(16777215) },
				opacity: { value: 1 },
				size: { value: 1 },
				scale: { value: 1 },
				map: { value: null },
				alphaMap: { value: null },
				alphaTest: { value: 0 },
				uvTransform: { value: new tt() },
			},
			sprite: {
				diffuse: { value: new pt(16777215) },
				opacity: { value: 1 },
				center: { value: new Q(0.5, 0.5) },
				rotation: { value: 0 },
				map: { value: null },
				alphaMap: { value: null },
				alphaTest: { value: 0 },
				uvTransform: { value: new tt() },
			},
		},
		jn = {
			basic: {
				uniforms: Sn([Wn.common, Wn.specularmap, Wn.envmap, Wn.aomap, Wn.lightmap, Wn.fog]),
				vertexShader: Gn.meshbasic_vert,
				fragmentShader: Gn.meshbasic_frag,
			},
			lambert: {
				uniforms: Sn([
					Wn.common,
					Wn.specularmap,
					Wn.envmap,
					Wn.aomap,
					Wn.lightmap,
					Wn.emissivemap,
					Wn.fog,
					Wn.lights,
					{ emissive: { value: new pt(0) } },
				]),
				vertexShader: Gn.meshlambert_vert,
				fragmentShader: Gn.meshlambert_frag,
			},
			phong: {
				uniforms: Sn([
					Wn.common,
					Wn.specularmap,
					Wn.envmap,
					Wn.aomap,
					Wn.lightmap,
					Wn.emissivemap,
					Wn.bumpmap,
					Wn.normalmap,
					Wn.displacementmap,
					Wn.fog,
					Wn.lights,
					{ emissive: { value: new pt(0) }, specular: { value: new pt(1118481) }, shininess: { value: 30 } },
				]),
				vertexShader: Gn.meshphong_vert,
				fragmentShader: Gn.meshphong_frag,
			},
			standard: {
				uniforms: Sn([
					Wn.common,
					Wn.envmap,
					Wn.aomap,
					Wn.lightmap,
					Wn.emissivemap,
					Wn.bumpmap,
					Wn.normalmap,
					Wn.displacementmap,
					Wn.roughnessmap,
					Wn.metalnessmap,
					Wn.fog,
					Wn.lights,
					{
						emissive: { value: new pt(0) },
						roughness: { value: 1 },
						metalness: { value: 0 },
						envMapIntensity: { value: 1 },
					},
				]),
				vertexShader: Gn.meshphysical_vert,
				fragmentShader: Gn.meshphysical_frag,
			},
			toon: {
				uniforms: Sn([
					Wn.common,
					Wn.aomap,
					Wn.lightmap,
					Wn.emissivemap,
					Wn.bumpmap,
					Wn.normalmap,
					Wn.displacementmap,
					Wn.gradientmap,
					Wn.fog,
					Wn.lights,
					{ emissive: { value: new pt(0) } },
				]),
				vertexShader: Gn.meshtoon_vert,
				fragmentShader: Gn.meshtoon_frag,
			},
			matcap: {
				uniforms: Sn([Wn.common, Wn.bumpmap, Wn.normalmap, Wn.displacementmap, Wn.fog, { matcap: { value: null } }]),
				vertexShader: Gn.meshmatcap_vert,
				fragmentShader: Gn.meshmatcap_frag,
			},
			points: { uniforms: Sn([Wn.points, Wn.fog]), vertexShader: Gn.points_vert, fragmentShader: Gn.points_frag },
			dashed: {
				uniforms: Sn([Wn.common, Wn.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]),
				vertexShader: Gn.linedashed_vert,
				fragmentShader: Gn.linedashed_frag,
			},
			depth: { uniforms: Sn([Wn.common, Wn.displacementmap]), vertexShader: Gn.depth_vert, fragmentShader: Gn.depth_frag },
			normal: {
				uniforms: Sn([Wn.common, Wn.bumpmap, Wn.normalmap, Wn.displacementmap, { opacity: { value: 1 } }]),
				vertexShader: Gn.meshnormal_vert,
				fragmentShader: Gn.meshnormal_frag,
			},
			sprite: { uniforms: Sn([Wn.sprite, Wn.fog]), vertexShader: Gn.sprite_vert, fragmentShader: Gn.sprite_frag },
			background: {
				uniforms: { uvTransform: { value: new tt() }, t2D: { value: null } },
				vertexShader: Gn.background_vert,
				fragmentShader: Gn.background_frag,
			},
			cube: {
				uniforms: Sn([Wn.envmap, { opacity: { value: 1 } }]),
				vertexShader: Gn.cube_vert,
				fragmentShader: Gn.cube_frag,
			},
			equirect: {
				uniforms: { tEquirect: { value: null } },
				vertexShader: Gn.equirect_vert,
				fragmentShader: Gn.equirect_frag,
			},
			distanceRGBA: {
				uniforms: Sn([
					Wn.common,
					Wn.displacementmap,
					{ referencePosition: { value: new Et() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } },
				]),
				vertexShader: Gn.distanceRGBA_vert,
				fragmentShader: Gn.distanceRGBA_frag,
			},
			shadow: {
				uniforms: Sn([Wn.lights, Wn.fog, { color: { value: new pt(0) }, opacity: { value: 1 } }]),
				vertexShader: Gn.shadow_vert,
				fragmentShader: Gn.shadow_frag,
			},
		};
	function qn(t, e, n, r, s, o) {
		const a = new pt(0);
		let l,
			c,
			h = !0 === s ? 0 : 1,
			u = null,
			d = 0,
			p = null;
		function m(t, e) {
			n.buffers.color.setClear(t.r, t.g, t.b, e, o);
		}
		return {
			getClearColor: function () {
				return a;
			},
			setClearColor: function (t, e = 1) {
				a.set(t), (h = e), m(a, h);
			},
			getClearAlpha: function () {
				return h;
			},
			setClearAlpha: function (t) {
				(h = t), m(a, h);
			},
			render: function (n, s) {
				let o = !1,
					f = !0 === s.isScene ? s.background : null;
				f && f.isTexture && (f = e.get(f));
				const g = t.xr,
					v = g.getSession && g.getSession();
				v && "additive" === v.environmentBlendMode && (f = null),
					null === f ? m(a, h) : f && f.isColor && (m(f, 1), (o = !0)),
					(t.autoClear || o) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
					f && (f.isCubeTexture || f.mapping === i)
						? (void 0 === c &&
								((c = new _n(
									new bn(1, 1, 1),
									new Tn({
										name: "BackgroundCubeMaterial",
										uniforms: Mn(jn.cube.uniforms),
										vertexShader: jn.cube.vertexShader,
										fragmentShader: jn.cube.fragmentShader,
										side: 1,
										depthTest: !1,
										depthWrite: !1,
										fog: !1,
									})
								)),
								c.geometry.deleteAttribute("normal"),
								c.geometry.deleteAttribute("uv"),
								(c.onBeforeRender = function (t, e, n) {
									this.matrixWorld.copyPosition(n.matrixWorld);
								}),
								Object.defineProperty(c.material, "envMap", {
									get: function () {
										return this.uniforms.envMap.value;
									},
								}),
								r.update(c)),
						  (c.material.uniforms.envMap.value = f),
						  (c.material.uniforms.flipEnvMap.value = f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1),
						  (u === f && d === f.version && p === t.toneMapping) ||
								((c.material.needsUpdate = !0), (u = f), (d = f.version), (p = t.toneMapping)),
						  c.layers.enableAll(),
						  n.unshift(c, c.geometry, c.material, 0, 0, null))
						: f &&
						  f.isTexture &&
						  (void 0 === l &&
								((l = new _n(
									new Vn(2, 2),
									new Tn({
										name: "BackgroundMaterial",
										uniforms: Mn(jn.background.uniforms),
										vertexShader: jn.background.vertexShader,
										fragmentShader: jn.background.fragmentShader,
										side: 0,
										depthTest: !1,
										depthWrite: !1,
										fog: !1,
									})
								)),
								l.geometry.deleteAttribute("normal"),
								Object.defineProperty(l.material, "map", {
									get: function () {
										return this.uniforms.t2D.value;
									},
								}),
								r.update(l)),
						  (l.material.uniforms.t2D.value = f),
						  !0 === f.matrixAutoUpdate && f.updateMatrix(),
						  l.material.uniforms.uvTransform.value.copy(f.matrix),
						  (u === f && d === f.version && p === t.toneMapping) ||
								((l.material.needsUpdate = !0), (u = f), (d = f.version), (p = t.toneMapping)),
						  l.layers.enableAll(),
						  n.unshift(l, l.geometry, l.material, 0, 0, null));
			},
		};
	}
	function Xn(t, e, n, i) {
		const r = t.getParameter(34921),
			s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
			o = i.isWebGL2 || null !== s,
			a = {},
			l = p(null);
		let c = l,
			h = !1;
		function u(e) {
			return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
		}
		function d(e) {
			return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
		}
		function p(t) {
			const e = [],
				n = [],
				i = [];
			for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
			return {
				geometry: null,
				program: null,
				wireframe: !1,
				newAttributes: e,
				enabledAttributes: n,
				attributeDivisors: i,
				object: t,
				attributes: {},
				index: null,
			};
		}
		function m() {
			const t = c.newAttributes;
			for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
		}
		function f(t) {
			g(t, 0);
		}
		function g(n, r) {
			const s = c.newAttributes,
				o = c.enabledAttributes,
				a = c.attributeDivisors;
			(s[n] = 1),
				0 === o[n] && (t.enableVertexAttribArray(n), (o[n] = 1)),
				a[n] !== r &&
					((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
						i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
					](n, r),
					(a[n] = r));
		}
		function v() {
			const e = c.newAttributes,
				n = c.enabledAttributes;
			for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
		}
		function y(e, n, r, s, o, a) {
			!0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
				? t.vertexAttribPointer(e, n, r, s, o, a)
				: t.vertexAttribIPointer(e, n, r, o, a);
		}
		function x() {
			_(), (h = !0), c !== l && ((c = l), u(c.object));
		}
		function _() {
			(l.geometry = null), (l.program = null), (l.wireframe = !1);
		}
		return {
			setup: function (r, l, d, x, _) {
				let w = !1;
				if (o) {
					const e = (function (e, n, r) {
						const o = !0 === r.wireframe;
						let l = a[e.id];
						void 0 === l && ((l = {}), (a[e.id] = l));
						let c = l[n.id];
						void 0 === c && ((c = {}), (l[n.id] = c));
						let h = c[o];
						return (
							void 0 === h && ((h = p(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES())), (c[o] = h)),
							h
						);
					})(x, d, l);
					c !== e && ((c = e), u(c.object)),
						(w = (function (t, e, n, i) {
							const r = c.attributes,
								s = e.attributes;
							let o = 0;
							const a = n.getAttributes();
							for (const e in a)
								if (a[e].location >= 0) {
									const n = r[e];
									let i = s[e];
									if (
										(void 0 === i &&
											("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix),
											"instanceColor" === e && t.instanceColor && (i = t.instanceColor)),
										void 0 === n)
									)
										return !0;
									if (n.attribute !== i) return !0;
									if (i && n.data !== i.data) return !0;
									o++;
								}
							return c.attributesNum !== o || c.index !== i;
						})(r, x, d, _)),
						w &&
							(function (t, e, n, i) {
								const r = {},
									s = e.attributes;
								let o = 0;
								const a = n.getAttributes();
								for (const e in a)
									if (a[e].location >= 0) {
										let n = s[e];
										void 0 === n &&
											("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix),
											"instanceColor" === e && t.instanceColor && (n = t.instanceColor));
										const i = {};
										(i.attribute = n), n && n.data && (i.data = n.data), (r[e] = i), o++;
									}
								(c.attributes = r), (c.attributesNum = o), (c.index = i);
							})(r, x, d, _);
				} else {
					const t = !0 === l.wireframe;
					(c.geometry === x.id && c.program === d.id && c.wireframe === t) ||
						((c.geometry = x.id), (c.program = d.id), (c.wireframe = t), (w = !0));
				}
				null !== _ && n.update(_, 34963),
					(w || h) &&
						((h = !1),
						(function (r, s, o, a) {
							if (
								!1 === i.isWebGL2 &&
								(r.isInstancedMesh || a.isInstancedBufferGeometry) &&
								null === e.get("ANGLE_instanced_arrays")
							)
								return;
							m();
							const l = a.attributes,
								c = o.getAttributes(),
								h = s.defaultAttributeValues;
							for (const e in c) {
								const i = c[e];
								if (i.location >= 0) {
									let s = l[e];
									if (
										(void 0 === s &&
											("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix),
											"instanceColor" === e && r.instanceColor && (s = r.instanceColor)),
										void 0 !== s)
									) {
										const e = s.normalized,
											o = s.itemSize,
											l = n.get(s);
										if (void 0 === l) continue;
										const c = l.buffer,
											h = l.type,
											u = l.bytesPerElement;
										if (s.isInterleavedBufferAttribute) {
											const n = s.data,
												l = n.stride,
												d = s.offset;
											if (n.isInstancedInterleavedBuffer) {
												for (let t = 0; t < i.locationSize; t++) g(i.location + t, n.meshPerAttribute);
												!0 !== r.isInstancedMesh &&
													void 0 === a._maxInstanceCount &&
													(a._maxInstanceCount = n.meshPerAttribute * n.count);
											} else for (let t = 0; t < i.locationSize; t++) f(i.location + t);
											t.bindBuffer(34962, c);
											for (let t = 0; t < i.locationSize; t++)
												y(
													i.location + t,
													o / i.locationSize,
													h,
													e,
													l * u,
													(d + (o / i.locationSize) * t) * u
												);
										} else {
											if (s.isInstancedBufferAttribute) {
												for (let t = 0; t < i.locationSize; t++) g(i.location + t, s.meshPerAttribute);
												!0 !== r.isInstancedMesh &&
													void 0 === a._maxInstanceCount &&
													(a._maxInstanceCount = s.meshPerAttribute * s.count);
											} else for (let t = 0; t < i.locationSize; t++) f(i.location + t);
											t.bindBuffer(34962, c);
											for (let t = 0; t < i.locationSize; t++)
												y(i.location + t, o / i.locationSize, h, e, o * u, (o / i.locationSize) * t * u);
										}
									} else if (void 0 !== h) {
										const n = h[e];
										if (void 0 !== n)
											switch (n.length) {
												case 2:
													t.vertexAttrib2fv(i.location, n);
													break;
												case 3:
													t.vertexAttrib3fv(i.location, n);
													break;
												case 4:
													t.vertexAttrib4fv(i.location, n);
													break;
												default:
													t.vertexAttrib1fv(i.location, n);
											}
									}
								}
							}
							v();
						})(r, l, d, x),
						null !== _ && t.bindBuffer(34963, n.get(_).buffer));
			},
			reset: x,
			resetDefaultState: _,
			dispose: function () {
				x();
				for (const t in a) {
					const e = a[t];
					for (const t in e) {
						const n = e[t];
						for (const t in n) d(n[t].object), delete n[t];
						delete e[t];
					}
					delete a[t];
				}
			},
			releaseStatesOfGeometry: function (t) {
				if (void 0 === a[t.id]) return;
				const e = a[t.id];
				for (const t in e) {
					const n = e[t];
					for (const t in n) d(n[t].object), delete n[t];
					delete e[t];
				}
				delete a[t.id];
			},
			releaseStatesOfProgram: function (t) {
				for (const e in a) {
					const n = a[e];
					if (void 0 === n[t.id]) continue;
					const i = n[t.id];
					for (const t in i) d(i[t].object), delete i[t];
					delete n[t.id];
				}
			},
			initAttributes: m,
			enableAttribute: f,
			disableUnusedAttributes: v,
		};
	}
	function Yn(t, e, n, i) {
		const r = i.isWebGL2;
		let s;
		(this.setMode = function (t) {
			s = t;
		}),
			(this.render = function (e, i) {
				t.drawArrays(s, e, i), n.update(i, s, 1);
			}),
			(this.renderInstances = function (i, o, a) {
				if (0 === a) return;
				let l, c;
				if (r) (l = t), (c = "drawArraysInstanced");
				else if (((l = e.get("ANGLE_instanced_arrays")), (c = "drawArraysInstancedANGLE"), null === l))
					return void console.error(
						"THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
					);
				l[c](s, i, o, a), n.update(o, s, a);
			});
	}
	function Zn(t, e, n) {
		let i;
		function r(e) {
			if ("highp" === e) {
				if (
					t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
					t.getShaderPrecisionFormat(35632, 36338).precision > 0
				)
					return "highp";
				e = "mediump";
			}
			return "mediump" === e &&
				t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
				t.getShaderPrecisionFormat(35632, 36337).precision > 0
				? "mediump"
				: "lowp";
		}
		const s =
			("undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext) ||
			("undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext);
		let o = void 0 !== n.precision ? n.precision : "highp";
		const a = r(o);
		a !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", a, "instead."), (o = a));
		const l = s || e.has("WEBGL_draw_buffers"),
			c = !0 === n.logarithmicDepthBuffer,
			h = t.getParameter(34930),
			u = t.getParameter(35660),
			d = t.getParameter(3379),
			p = t.getParameter(34076),
			m = t.getParameter(34921),
			f = t.getParameter(36347),
			g = t.getParameter(36348),
			v = t.getParameter(36349),
			y = u > 0,
			x = s || e.has("OES_texture_float");
		return {
			isWebGL2: s,
			drawBuffers: l,
			getMaxAnisotropy: function () {
				if (void 0 !== i) return i;
				if (!0 === e.has("EXT_texture_filter_anisotropic")) {
					const n = e.get("EXT_texture_filter_anisotropic");
					i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
				} else i = 0;
				return i;
			},
			getMaxPrecision: r,
			precision: o,
			logarithmicDepthBuffer: c,
			maxTextures: h,
			maxVertexTextures: u,
			maxTextureSize: d,
			maxCubemapSize: p,
			maxAttributes: m,
			maxVertexUniforms: f,
			maxVaryings: g,
			maxFragmentUniforms: v,
			vertexTextures: y,
			floatFragmentTextures: x,
			floatVertexTextures: y && x,
			maxSamples: s ? t.getParameter(36183) : 0,
		};
	}
	function $n(t) {
		const e = this;
		let n = null,
			i = 0,
			r = !1,
			s = !1;
		const o = new Bn(),
			a = new tt(),
			l = { value: null, needsUpdate: !1 };
		function c() {
			l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)), (e.numPlanes = i), (e.numIntersection = 0);
		}
		function h(t, n, i, r) {
			const s = null !== t ? t.length : 0;
			let c = null;
			if (0 !== s) {
				if (((c = l.value), !0 !== r || null === c)) {
					const e = i + 4 * s,
						r = n.matrixWorldInverse;
					a.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
					for (let e = 0, n = i; e !== s; ++e, n += 4)
						o.copy(t[e]).applyMatrix4(r, a), o.normal.toArray(c, n), (c[n + 3] = o.constant);
				}
				(l.value = c), (l.needsUpdate = !0);
			}
			return (e.numPlanes = s), (e.numIntersection = 0), c;
		}
		(this.uniform = l),
			(this.numPlanes = 0),
			(this.numIntersection = 0),
			(this.init = function (t, e, s) {
				const o = 0 !== t.length || e || 0 !== i || r;
				return (r = e), (n = h(t, s, 0)), (i = t.length), o;
			}),
			(this.beginShadows = function () {
				(s = !0), h(null);
			}),
			(this.endShadows = function () {
				(s = !1), c();
			}),
			(this.setState = function (e, o, a) {
				const u = e.clippingPlanes,
					d = e.clipIntersection,
					p = e.clipShadows,
					m = t.get(e);
				if (!r || null === u || 0 === u.length || (s && !p)) s ? h(null) : c();
				else {
					const t = s ? 0 : i,
						e = 4 * t;
					let r = m.clippingState || null;
					(l.value = r), (r = h(u, o, e, a));
					for (let t = 0; t !== e; ++t) r[t] = n[t];
					(m.clippingState = r), (this.numIntersection = d ? this.numPlanes : 0), (this.numPlanes += t);
				}
			});
	}
	function Kn(t) {
		let i = new WeakMap();
		function r(t, i) {
			return 303 === i ? (t.mapping = e) : 304 === i && (t.mapping = n), t;
		}
		function s(t) {
			const e = t.target;
			e.removeEventListener("dispose", s);
			const n = i.get(e);
			void 0 !== n && (i.delete(e), n.dispose());
		}
		return {
			get: function (e) {
				if (e && e.isTexture && !1 === e.isRenderTargetTexture) {
					const n = e.mapping;
					if (303 === n || 304 === n) {
						if (i.has(e)) return r(i.get(e).texture, e.mapping);
						{
							const n = e.image;
							if (n && n.height > 0) {
								const o = new In(n.height / 2);
								return (
									o.fromEquirectangularTexture(t, e),
									i.set(e, o),
									e.addEventListener("dispose", s),
									r(o.texture, e.mapping)
								);
							}
							return null;
						}
					}
				}
				return e;
			},
			dispose: function () {
				i = new WeakMap();
			},
		};
	}
	jn.physical = {
		uniforms: Sn([
			jn.standard.uniforms,
			{
				clearcoat: { value: 0 },
				clearcoatMap: { value: null },
				clearcoatRoughness: { value: 0 },
				clearcoatRoughnessMap: { value: null },
				clearcoatNormalScale: { value: new Q(1, 1) },
				clearcoatNormalMap: { value: null },
				sheen: { value: 0 },
				sheenColor: { value: new pt(0) },
				sheenColorMap: { value: null },
				sheenRoughness: { value: 1 },
				sheenRoughnessMap: { value: null },
				transmission: { value: 0 },
				transmissionMap: { value: null },
				transmissionSamplerSize: { value: new Q() },
				transmissionSamplerMap: { value: null },
				thickness: { value: 0 },
				thicknessMap: { value: null },
				attenuationDistance: { value: 0 },
				attenuationColor: { value: new pt(0) },
				specularIntensity: { value: 1 },
				specularIntensityMap: { value: null },
				specularColor: { value: new pt(1, 1, 1) },
				specularColorMap: { value: null },
			},
		]),
		vertexShader: Gn.meshphysical_vert,
		fragmentShader: Gn.meshphysical_frag,
	};
	class Jn extends An {
		constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
			super(),
				(this.type = "OrthographicCamera"),
				(this.zoom = 1),
				(this.view = null),
				(this.left = t),
				(this.right = e),
				(this.top = n),
				(this.bottom = i),
				(this.near = r),
				(this.far = s),
				this.updateProjectionMatrix();
		}
		copy(t, e) {
			return (
				super.copy(t, e),
				(this.left = t.left),
				(this.right = t.right),
				(this.top = t.top),
				(this.bottom = t.bottom),
				(this.near = t.near),
				(this.far = t.far),
				(this.zoom = t.zoom),
				(this.view = null === t.view ? null : Object.assign({}, t.view)),
				this
			);
		}
		setViewOffset(t, e, n, i, r, s) {
			null === this.view &&
				(this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
				(this.view.enabled = !0),
				(this.view.fullWidth = t),
				(this.view.fullHeight = e),
				(this.view.offsetX = n),
				(this.view.offsetY = i),
				(this.view.width = r),
				(this.view.height = s),
				this.updateProjectionMatrix();
		}
		clearViewOffset() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
		}
		updateProjectionMatrix() {
			const t = (this.right - this.left) / (2 * this.zoom),
				e = (this.top - this.bottom) / (2 * this.zoom),
				n = (this.right + this.left) / 2,
				i = (this.top + this.bottom) / 2;
			let r = n - t,
				s = n + t,
				o = i + e,
				a = i - e;
			if (null !== this.view && this.view.enabled) {
				const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
					e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
				(r += t * this.view.offsetX),
					(s = r + t * this.view.width),
					(o -= e * this.view.offsetY),
					(a = o - e * this.view.height);
			}
			this.projectionMatrix.makeOrthographic(r, s, o, a, this.near, this.far),
				this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return (
				(e.object.zoom = this.zoom),
				(e.object.left = this.left),
				(e.object.right = this.right),
				(e.object.top = this.top),
				(e.object.bottom = this.bottom),
				(e.object.near = this.near),
				(e.object.far = this.far),
				null !== this.view && (e.object.view = Object.assign({}, this.view)),
				e
			);
		}
	}
	Jn.prototype.isOrthographicCamera = !0;
	const Qn = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
		ti = new Jn(),
		ei = new pt();
	let ni = null;
	const ii = (1 + Math.sqrt(5)) / 2,
		ri = 1 / ii,
		si = [
			new Et(1, 1, 1),
			new Et(-1, 1, 1),
			new Et(1, 1, -1),
			new Et(-1, 1, -1),
			new Et(0, ii, ri),
			new Et(0, ii, -ri),
			new Et(ri, 0, ii),
			new Et(-ri, 0, ii),
			new Et(ii, ri, 0),
			new Et(-ii, ri, 0),
		];
	class oi {
		constructor(t) {
			(this._renderer = t),
				(this._pingPongRenderTarget = null),
				(this._lodMax = 0),
				(this._cubeSize = 0),
				(this._lodPlanes = []),
				(this._sizeLods = []),
				(this._sigmas = []),
				(this._blurMaterial = null),
				(this._cubemapMaterial = null),
				(this._equirectMaterial = null),
				this._compileMaterial(this._blurMaterial);
		}
		fromScene(t, e = 0, n = 0.1, i = 100) {
			(ni = this._renderer.getRenderTarget()), this._setSize(256);
			const r = this._allocateTargets();
			return (
				(r.depthBuffer = !0),
				this._sceneToCubeUV(t, n, i, r),
				e > 0 && this._blur(r, 0, 0, e),
				this._applyPMREM(r),
				this._cleanup(r),
				r
			);
		}
		fromEquirectangular(t, e = null) {
			return this._fromTexture(t, e);
		}
		fromCubemap(t, e = null) {
			return this._fromTexture(t, e);
		}
		compileCubemapShader() {
			null === this._cubemapMaterial && ((this._cubemapMaterial = hi()), this._compileMaterial(this._cubemapMaterial));
		}
		compileEquirectangularShader() {
			null === this._equirectMaterial && ((this._equirectMaterial = ci()), this._compileMaterial(this._equirectMaterial));
		}
		dispose() {
			this._dispose(),
				null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
				null !== this._equirectMaterial && this._equirectMaterial.dispose();
		}
		_setSize(t) {
			(this._lodMax = Math.floor(Math.log2(t))), (this._cubeSize = Math.pow(2, this._lodMax));
		}
		_dispose() {
			null !== this._blurMaterial && this._blurMaterial.dispose(),
				null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
			for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose();
		}
		_cleanup(t) {
			this._renderer.setRenderTarget(ni), (t.scissorTest = !1), li(t, 0, 0, t.width, t.height);
		}
		_fromTexture(t, i) {
			t.mapping === e || t.mapping === n
				? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width)
				: this._setSize(t.image.width / 4),
				(ni = this._renderer.getRenderTarget());
			const r = i || this._allocateTargets();
			return this._textureToCubeUV(t, r), this._applyPMREM(r), this._cleanup(r), r;
		}
		_allocateTargets() {
			const t = 3 * Math.max(this._cubeSize, 112),
				e = 4 * this._cubeSize,
				n = { magFilter: h, minFilter: h, generateMipmaps: !1, type: g, format: y, encoding: P, depthBuffer: !1 },
				i = ai(t, e, n);
			if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) {
				null !== this._pingPongRenderTarget && this._dispose(), (this._pingPongRenderTarget = ai(t, e, n));
				const { _lodMax: i } = this;
				({
					sizeLods: this._sizeLods,
					lodPlanes: this._lodPlanes,
					sigmas: this._sigmas,
				} = (function (t) {
					const e = [],
						n = [],
						i = [];
					let r = t;
					const s = t - 4 + 1 + Qn.length;
					for (let o = 0; o < s; o++) {
						const s = Math.pow(2, r);
						n.push(s);
						let a = 1 / s;
						o > t - 4 ? (a = Qn[o - t + 4 - 1]) : 0 === o && (a = 0), i.push(a);
						const l = 1 / (s - 2),
							c = -l,
							h = 1 + l,
							u = [c, c, h, c, h, h, c, c, h, h, c, h],
							d = 6,
							p = 6,
							m = 3,
							f = 2,
							g = 1,
							v = new Float32Array(m * p * d),
							y = new Float32Array(f * p * d),
							x = new Float32Array(g * p * d);
						for (let t = 0; t < d; t++) {
							const e = ((t % 3) * 2) / 3 - 1,
								n = t > 2 ? 0 : -1,
								i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
							v.set(i, m * p * t), y.set(u, f * p * t);
							const r = [t, t, t, t, t, t];
							x.set(r, g * p * t);
						}
						const _ = new en();
						_.setAttribute("position", new We(v, m)),
							_.setAttribute("uv", new We(y, f)),
							_.setAttribute("faceIndex", new We(x, g)),
							e.push(_),
							r > 4 && r--;
					}
					return { lodPlanes: e, sizeLods: n, sigmas: i };
				})(i)),
					(this._blurMaterial = (function (t, e, n) {
						const i = new Float32Array(20),
							r = new Et(0, 1, 0);
						return new Tn({
							name: "SphericalGaussianBlur",
							defines: { n: 20, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / n, CUBEUV_MAX_MIP: `${t}.0` },
							uniforms: {
								envMap: { value: null },
								samples: { value: 1 },
								weights: { value: i },
								latitudinal: { value: !1 },
								dTheta: { value: 0 },
								mipInt: { value: 0 },
								poleAxis: { value: r },
							},
							vertexShader:
								"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
							fragmentShader:
								"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
							blending: 0,
							depthTest: !1,
							depthWrite: !1,
						});
					})(i, t, e));
			}
			return i;
		}
		_compileMaterial(t) {
			const e = new _n(this._lodPlanes[0], t);
			this._renderer.compile(e, ti);
		}
		_sceneToCubeUV(t, e, n, i) {
			const r = new Cn(90, 1, e, n),
				s = [1, -1, 1, 1, 1, 1],
				o = [1, 1, 1, -1, -1, -1],
				a = this._renderer,
				l = a.autoClear,
				c = a.toneMapping;
			a.getClearColor(ei), (a.toneMapping = 0), (a.autoClear = !1);
			const h = new Ue({ name: "PMREM.Background", side: 1, depthWrite: !1, depthTest: !1 }),
				u = new _n(new bn(), h);
			let d = !1;
			const p = t.background;
			p ? p.isColor && (h.color.copy(p), (t.background = null), (d = !0)) : (h.color.copy(ei), (d = !0));
			for (let e = 0; e < 6; e++) {
				const n = e % 3;
				0 === n
					? (r.up.set(0, s[e], 0), r.lookAt(o[e], 0, 0))
					: 1 === n
					? (r.up.set(0, 0, s[e]), r.lookAt(0, o[e], 0))
					: (r.up.set(0, s[e], 0), r.lookAt(0, 0, o[e]));
				const l = this._cubeSize;
				li(i, n * l, e > 2 ? l : 0, l, l), a.setRenderTarget(i), d && a.render(u, r), a.render(t, r);
			}
			u.geometry.dispose(), u.material.dispose(), (a.toneMapping = c), (a.autoClear = l), (t.background = p);
		}
		_textureToCubeUV(t, i) {
			const r = this._renderer,
				s = t.mapping === e || t.mapping === n;
			s
				? (null === this._cubemapMaterial && (this._cubemapMaterial = hi()),
				  (this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1))
				: null === this._equirectMaterial && (this._equirectMaterial = ci());
			const o = s ? this._cubemapMaterial : this._equirectMaterial,
				a = new _n(this._lodPlanes[0], o);
			o.uniforms.envMap.value = t;
			const l = this._cubeSize;
			li(i, 0, 0, 3 * l, 2 * l), r.setRenderTarget(i), r.render(a, ti);
		}
		_applyPMREM(t) {
			const e = this._renderer,
				n = e.autoClear;
			e.autoClear = !1;
			for (let e = 1; e < this._lodPlanes.length; e++) {
				const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
					i = si[(e - 1) % si.length];
				this._blur(t, e - 1, e, n, i);
			}
			e.autoClear = n;
		}
		_blur(t, e, n, i, r) {
			const s = this._pingPongRenderTarget;
			this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r);
		}
		_halfBlur(t, e, n, i, r, s, o) {
			const a = this._renderer,
				l = this._blurMaterial;
			"latitudinal" !== s &&
				"longitudinal" !== s &&
				console.error("blur direction must be either latitudinal or longitudinal!");
			const c = new _n(this._lodPlanes[i], l),
				h = l.uniforms,
				u = this._sizeLods[n] - 1,
				d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
				p = r / d,
				m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
			m > 20 &&
				console.warn(
					`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`
				);
			const f = [];
			let g = 0;
			for (let t = 0; t < 20; ++t) {
				const e = t / p,
					n = Math.exp((-e * e) / 2);
				f.push(n), 0 === t ? (g += n) : t < m && (g += 2 * n);
			}
			for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
			(h.envMap.value = t.texture),
				(h.samples.value = m),
				(h.weights.value = f),
				(h.latitudinal.value = "latitudinal" === s),
				o && (h.poleAxis.value = o);
			const { _lodMax: v } = this;
			(h.dTheta.value = d), (h.mipInt.value = v - n);
			const y = this._sizeLods[i];
			li(e, 3 * y * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - y), 3 * y, 2 * y),
				a.setRenderTarget(e),
				a.render(c, ti);
		}
	}
	function ai(t, e, n) {
		const r = new wt(t, e, n);
		return (r.texture.mapping = i), (r.texture.name = "PMREM.cubeUv"), (r.scissorTest = !0), r;
	}
	function li(t, e, n, i, r) {
		t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
	}
	function ci() {
		return new Tn({
			name: "EquirectangularToCubeUV",
			uniforms: { envMap: { value: null } },
			vertexShader:
				"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
			fragmentShader:
				"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
			blending: 0,
			depthTest: !1,
			depthWrite: !1,
		});
	}
	function hi() {
		return new Tn({
			name: "CubemapToCubeUV",
			uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
			vertexShader:
				"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
			fragmentShader:
				"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
			blending: 0,
			depthTest: !1,
			depthWrite: !1,
		});
	}
	function ui(t) {
		let i = new WeakMap(),
			r = null;
		function s(t) {
			const e = t.target;
			e.removeEventListener("dispose", s);
			const n = i.get(e);
			void 0 !== n && (i.delete(e), n.dispose());
		}
		return {
			get: function (o) {
				if (o && o.isTexture) {
					const a = o.mapping,
						l = 303 === a || 304 === a,
						c = a === e || a === n;
					if (l || c) {
						if (o.isRenderTargetTexture && !0 === o.needsPMREMUpdate) {
							o.needsPMREMUpdate = !1;
							let e = i.get(o);
							return (
								null === r && (r = new oi(t)),
								(e = l ? r.fromEquirectangular(o, e) : r.fromCubemap(o, e)),
								i.set(o, e),
								e.texture
							);
						}
						if (i.has(o)) return i.get(o).texture;
						{
							const e = o.image;
							if (
								(l && e && e.height > 0) ||
								(c &&
									e &&
									(function (t) {
										let e = 0;
										for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
										return 6 === e;
									})(e))
							) {
								null === r && (r = new oi(t));
								const e = l ? r.fromEquirectangular(o) : r.fromCubemap(o);
								return i.set(o, e), o.addEventListener("dispose", s), e.texture;
							}
							return null;
						}
					}
				}
				return o;
			},
			dispose: function () {
				(i = new WeakMap()), null !== r && (r.dispose(), (r = null));
			},
		};
	}
	function di(t) {
		const e = {};
		function n(n) {
			if (void 0 !== e[n]) return e[n];
			let i;
			switch (n) {
				case "WEBGL_depth_texture":
					i =
						t.getExtension("WEBGL_depth_texture") ||
						t.getExtension("MOZ_WEBGL_depth_texture") ||
						t.getExtension("WEBKIT_WEBGL_depth_texture");
					break;
				case "EXT_texture_filter_anisotropic":
					i =
						t.getExtension("EXT_texture_filter_anisotropic") ||
						t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
						t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
					break;
				case "WEBGL_compressed_texture_s3tc":
					i =
						t.getExtension("WEBGL_compressed_texture_s3tc") ||
						t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
						t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
					break;
				case "WEBGL_compressed_texture_pvrtc":
					i =
						t.getExtension("WEBGL_compressed_texture_pvrtc") ||
						t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
					break;
				default:
					i = t.getExtension(n);
			}
			return (e[n] = i), i;
		}
		return {
			has: function (t) {
				return null !== n(t);
			},
			init: function (t) {
				t.isWebGL2
					? n("EXT_color_buffer_float")
					: (n("WEBGL_depth_texture"),
					  n("OES_texture_float"),
					  n("OES_texture_half_float"),
					  n("OES_texture_half_float_linear"),
					  n("OES_standard_derivatives"),
					  n("OES_element_index_uint"),
					  n("OES_vertex_array_object"),
					  n("ANGLE_instanced_arrays")),
					n("OES_texture_float_linear"),
					n("EXT_color_buffer_half_float"),
					n("WEBGL_multisampled_render_to_texture");
			},
			get: function (t) {
				const e = n(t);
				return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
			},
		};
	}
	function pi(t, e, n, i) {
		const r = {},
			s = new WeakMap();
		function o(t) {
			const a = t.target;
			null !== a.index && e.remove(a.index);
			for (const t in a.attributes) e.remove(a.attributes[t]);
			a.removeEventListener("dispose", o), delete r[a.id];
			const l = s.get(a);
			l && (e.remove(l), s.delete(a)),
				i.releaseStatesOfGeometry(a),
				!0 === a.isInstancedBufferGeometry && delete a._maxInstanceCount,
				n.memory.geometries--;
		}
		function a(t) {
			const n = [],
				i = t.index,
				r = t.attributes.position;
			let o = 0;
			if (null !== i) {
				const t = i.array;
				o = i.version;
				for (let e = 0, i = t.length; e < i; e += 3) {
					const i = t[e + 0],
						r = t[e + 1],
						s = t[e + 2];
					n.push(i, r, r, s, s, i);
				}
			} else {
				const t = r.array;
				o = r.version;
				for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
					const t = e + 0,
						i = e + 1,
						r = e + 2;
					n.push(t, i, i, r, r, t);
				}
			}
			const a = new (et(n) ? qe : je)(n, 1);
			a.version = o;
			const l = s.get(t);
			l && e.remove(l), s.set(t, a);
		}
		return {
			get: function (t, e) {
				return !0 === r[e.id] || (e.addEventListener("dispose", o), (r[e.id] = !0), n.memory.geometries++), e;
			},
			update: function (t) {
				const n = t.attributes;
				for (const t in n) e.update(n[t], 34962);
				const i = t.morphAttributes;
				for (const t in i) {
					const n = i[t];
					for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
				}
			},
			getWireframeAttribute: function (t) {
				const e = s.get(t);
				if (e) {
					const n = t.index;
					null !== n && e.version < n.version && a(t);
				} else a(t);
				return s.get(t);
			},
		};
	}
	function mi(t, e, n, i) {
		const r = i.isWebGL2;
		let s, o, a;
		(this.setMode = function (t) {
			s = t;
		}),
			(this.setIndex = function (t) {
				(o = t.type), (a = t.bytesPerElement);
			}),
			(this.render = function (e, i) {
				t.drawElements(s, i, o, e * a), n.update(i, s, 1);
			}),
			(this.renderInstances = function (i, l, c) {
				if (0 === c) return;
				let h, u;
				if (r) (h = t), (u = "drawElementsInstanced");
				else if (((h = e.get("ANGLE_instanced_arrays")), (u = "drawElementsInstancedANGLE"), null === h))
					return void console.error(
						"THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
					);
				h[u](s, l, o, i * a, c), n.update(l, s, c);
			});
	}
	function fi(t) {
		const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
		return {
			memory: { geometries: 0, textures: 0 },
			render: e,
			programs: null,
			autoReset: !0,
			reset: function () {
				e.frame++, (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
			},
			update: function (t, n, i) {
				switch ((e.calls++, n)) {
					case 4:
						e.triangles += i * (t / 3);
						break;
					case 1:
						e.lines += i * (t / 2);
						break;
					case 3:
						e.lines += i * (t - 1);
						break;
					case 2:
						e.lines += i * t;
						break;
					case 0:
						e.points += i * t;
						break;
					default:
						console.error("THREE.WebGLInfo: Unknown draw mode:", n);
				}
			},
		};
	}
	function gi(t, e) {
		return t[0] - e[0];
	}
	function vi(t, e) {
		return Math.abs(e[1]) - Math.abs(t[1]);
	}
	function yi(t, e) {
		let n = 1;
		const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
		i instanceof Int8Array
			? (n = 127)
			: i instanceof Int16Array
			? (n = 32767)
			: i instanceof Int32Array
			? (n = 2147483647)
			: console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i),
			t.divideScalar(n);
	}
	function xi(t, e, n) {
		const i = {},
			r = new Float32Array(8),
			s = new WeakMap(),
			o = new _t(),
			a = [];
		for (let t = 0; t < 8; t++) a[t] = [t, 0];
		return {
			update: function (l, c, h, u) {
				const d = l.morphTargetInfluences;
				if (!0 === e.isWebGL2) {
					const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
						m = void 0 !== p ? p.length : 0;
					let g = s.get(c);
					if (void 0 === g || g.count !== m) {
						void 0 !== g && g.texture.dispose();
						const x = void 0 !== c.morphAttributes.position,
							_ = void 0 !== c.morphAttributes.normal,
							w = void 0 !== c.morphAttributes.color,
							b = c.morphAttributes.position || [],
							M = c.morphAttributes.normal || [],
							S = c.morphAttributes.color || [];
						let E = 0;
						!0 === x && (E = 1), !0 === _ && (E = 2), !0 === w && (E = 3);
						let T = c.attributes.position.count * E,
							A = 1;
						T > e.maxTextureSize && ((A = Math.ceil(T / e.maxTextureSize)), (T = e.maxTextureSize));
						const C = new Float32Array(T * A * 4 * m),
							R = new bt(C, T, A, m);
						(R.type = f), (R.needsUpdate = !0);
						const L = 4 * E;
						for (let I = 0; I < m; I++) {
							const D = b[I],
								N = M[I],
								z = S[I],
								B = T * A * 4 * I;
							for (let O = 0; O < D.count; O++) {
								const F = O * L;
								!0 === x &&
									(o.fromBufferAttribute(D, O),
									!0 === D.normalized && yi(o, D),
									(C[B + F + 0] = o.x),
									(C[B + F + 1] = o.y),
									(C[B + F + 2] = o.z),
									(C[B + F + 3] = 0)),
									!0 === _ &&
										(o.fromBufferAttribute(N, O),
										!0 === N.normalized && yi(o, N),
										(C[B + F + 4] = o.x),
										(C[B + F + 5] = o.y),
										(C[B + F + 6] = o.z),
										(C[B + F + 7] = 0)),
									!0 === w &&
										(o.fromBufferAttribute(z, O),
										!0 === z.normalized && yi(o, z),
										(C[B + F + 8] = o.x),
										(C[B + F + 9] = o.y),
										(C[B + F + 10] = o.z),
										(C[B + F + 11] = 4 === z.itemSize ? o.w : 1));
							}
						}
						function P() {
							R.dispose(), s.delete(c), c.removeEventListener("dispose", P);
						}
						(g = { count: m, texture: R, size: new Q(T, A) }), s.set(c, g), c.addEventListener("dispose", P);
					}
					let v = 0;
					for (let H = 0; H < d.length; H++) v += d[H];
					const y = c.morphTargetsRelative ? 1 : 1 - v;
					u.getUniforms().setValue(t, "morphTargetBaseInfluence", y),
						u.getUniforms().setValue(t, "morphTargetInfluences", d),
						u.getUniforms().setValue(t, "morphTargetsTexture", g.texture, n),
						u.getUniforms().setValue(t, "morphTargetsTextureSize", g.size);
				} else {
					const k = void 0 === d ? 0 : d.length;
					let U = i[c.id];
					if (void 0 === U || U.length !== k) {
						U = [];
						for (let q = 0; q < k; q++) U[q] = [q, 0];
						i[c.id] = U;
					}
					for (let X = 0; X < k; X++) {
						const Y = U[X];
						(Y[0] = X), (Y[1] = d[X]);
					}
					U.sort(vi);
					for (let Z = 0; Z < 8; Z++)
						Z < k && U[Z][1]
							? ((a[Z][0] = U[Z][0]), (a[Z][1] = U[Z][1]))
							: ((a[Z][0] = Number.MAX_SAFE_INTEGER), (a[Z][1] = 0));
					a.sort(gi);
					const V = c.morphAttributes.position,
						G = c.morphAttributes.normal;
					let W = 0;
					for (let $ = 0; $ < 8; $++) {
						const K = a[$],
							J = K[0],
							tt = K[1];
						J !== Number.MAX_SAFE_INTEGER && tt
							? (V && c.getAttribute("morphTarget" + $) !== V[J] && c.setAttribute("morphTarget" + $, V[J]),
							  G && c.getAttribute("morphNormal" + $) !== G[J] && c.setAttribute("morphNormal" + $, G[J]),
							  (r[$] = tt),
							  (W += tt))
							: (V && !0 === c.hasAttribute("morphTarget" + $) && c.deleteAttribute("morphTarget" + $),
							  G && !0 === c.hasAttribute("morphNormal" + $) && c.deleteAttribute("morphNormal" + $),
							  (r[$] = 0));
					}
					const j = c.morphTargetsRelative ? 1 : 1 - W;
					u.getUniforms().setValue(t, "morphTargetBaseInfluence", j),
						u.getUniforms().setValue(t, "morphTargetInfluences", r);
				}
			},
		};
	}
	function _i(t, e, n, i) {
		let r = new WeakMap();
		function s(t) {
			const e = t.target;
			e.removeEventListener("dispose", s),
				n.remove(e.instanceMatrix),
				null !== e.instanceColor && n.remove(e.instanceColor);
		}
		return {
			update: function (t) {
				const o = i.render.frame,
					a = t.geometry,
					l = e.get(t, a);
				return (
					r.get(l) !== o && (e.update(l), r.set(l, o)),
					t.isInstancedMesh &&
						(!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s),
						n.update(t.instanceMatrix, 34962),
						null !== t.instanceColor && n.update(t.instanceColor, 34962)),
					l
				);
			},
			dispose: function () {
				r = new WeakMap();
			},
		};
	}
	const wi = new xt(),
		bi = new bt(),
		Mi = new Mt(),
		Si = new Pn(),
		Ei = [],
		Ti = [],
		Ai = new Float32Array(16),
		Ci = new Float32Array(9),
		Ri = new Float32Array(4);
	function Li(t, e, n) {
		const i = t[0];
		if (i <= 0 || i > 0) return t;
		const r = e * n;
		let s = Ei[r];
		if ((void 0 === s && ((s = new Float32Array(r)), (Ei[r] = s)), 0 !== e)) {
			i.toArray(s, 0);
			for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(s, r);
		}
		return s;
	}
	function Pi(t, e) {
		if (t.length !== e.length) return !1;
		for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
		return !0;
	}
	function Ii(t, e) {
		for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
	}
	function Di(t, e) {
		let n = Ti[e];
		void 0 === n && ((n = new Int32Array(e)), (Ti[e] = n));
		for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
		return n;
	}
	function Ni(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
	}
	function zi(t, e) {
		const n = this.cache;
		if (void 0 !== e.x) (n[0] === e.x && n[1] === e.y) || (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
		else {
			if (Pi(n, e)) return;
			t.uniform2fv(this.addr, e), Ii(n, e);
		}
	}
	function Bi(t, e) {
		const n = this.cache;
		if (void 0 !== e.x)
			(n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
				(t.uniform3f(this.addr, e.x, e.y, e.z), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z));
		else if (void 0 !== e.r)
			(n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
				(t.uniform3f(this.addr, e.r, e.g, e.b), (n[0] = e.r), (n[1] = e.g), (n[2] = e.b));
		else {
			if (Pi(n, e)) return;
			t.uniform3fv(this.addr, e), Ii(n, e);
		}
	}
	function Oi(t, e) {
		const n = this.cache;
		if (void 0 !== e.x)
			(n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
				(t.uniform4f(this.addr, e.x, e.y, e.z, e.w), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z), (n[3] = e.w));
		else {
			if (Pi(n, e)) return;
			t.uniform4fv(this.addr, e), Ii(n, e);
		}
	}
	function Fi(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (Pi(n, e)) return;
			t.uniformMatrix2fv(this.addr, !1, e), Ii(n, e);
		} else {
			if (Pi(n, i)) return;
			Ri.set(i), t.uniformMatrix2fv(this.addr, !1, Ri), Ii(n, i);
		}
	}
	function Hi(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (Pi(n, e)) return;
			t.uniformMatrix3fv(this.addr, !1, e), Ii(n, e);
		} else {
			if (Pi(n, i)) return;
			Ci.set(i), t.uniformMatrix3fv(this.addr, !1, Ci), Ii(n, i);
		}
	}
	function ki(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (Pi(n, e)) return;
			t.uniformMatrix4fv(this.addr, !1, e), Ii(n, e);
		} else {
			if (Pi(n, i)) return;
			Ai.set(i), t.uniformMatrix4fv(this.addr, !1, Ai), Ii(n, i);
		}
	}
	function Ui(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
	}
	function Vi(t, e) {
		const n = this.cache;
		Pi(n, e) || (t.uniform2iv(this.addr, e), Ii(n, e));
	}
	function Gi(t, e) {
		const n = this.cache;
		Pi(n, e) || (t.uniform3iv(this.addr, e), Ii(n, e));
	}
	function Wi(t, e) {
		const n = this.cache;
		Pi(n, e) || (t.uniform4iv(this.addr, e), Ii(n, e));
	}
	function ji(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
	}
	function qi(t, e) {
		const n = this.cache;
		Pi(n, e) || (t.uniform2uiv(this.addr, e), Ii(n, e));
	}
	function Xi(t, e) {
		const n = this.cache;
		Pi(n, e) || (t.uniform3uiv(this.addr, e), Ii(n, e));
	}
	function Yi(t, e) {
		const n = this.cache;
		Pi(n, e) || (t.uniform4uiv(this.addr, e), Ii(n, e));
	}
	function Zi(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture2D(e || wi, r);
	}
	function $i(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture3D(e || Mi, r);
	}
	function Ki(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTextureCube(e || Si, r);
	}
	function Ji(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture2DArray(e || bi, r);
	}
	function Qi(t, e) {
		t.uniform1fv(this.addr, e);
	}
	function tr(t, e) {
		const n = Li(e, this.size, 2);
		t.uniform2fv(this.addr, n);
	}
	function er(t, e) {
		const n = Li(e, this.size, 3);
		t.uniform3fv(this.addr, n);
	}
	function nr(t, e) {
		const n = Li(e, this.size, 4);
		t.uniform4fv(this.addr, n);
	}
	function ir(t, e) {
		const n = Li(e, this.size, 4);
		t.uniformMatrix2fv(this.addr, !1, n);
	}
	function rr(t, e) {
		const n = Li(e, this.size, 9);
		t.uniformMatrix3fv(this.addr, !1, n);
	}
	function sr(t, e) {
		const n = Li(e, this.size, 16);
		t.uniformMatrix4fv(this.addr, !1, n);
	}
	function or(t, e) {
		t.uniform1iv(this.addr, e);
	}
	function ar(t, e) {
		t.uniform2iv(this.addr, e);
	}
	function lr(t, e) {
		t.uniform3iv(this.addr, e);
	}
	function cr(t, e) {
		t.uniform4iv(this.addr, e);
	}
	function hr(t, e) {
		t.uniform1uiv(this.addr, e);
	}
	function ur(t, e) {
		t.uniform2uiv(this.addr, e);
	}
	function dr(t, e) {
		t.uniform3uiv(this.addr, e);
	}
	function pr(t, e) {
		t.uniform4uiv(this.addr, e);
	}
	function mr(t, e, n) {
		const i = e.length,
			r = Di(n, i);
		t.uniform1iv(this.addr, r);
		for (let t = 0; t !== i; ++t) n.setTexture2D(e[t] || wi, r[t]);
	}
	function fr(t, e, n) {
		const i = e.length,
			r = Di(n, i);
		t.uniform1iv(this.addr, r);
		for (let t = 0; t !== i; ++t) n.setTexture3D(e[t] || Mi, r[t]);
	}
	function gr(t, e, n) {
		const i = e.length,
			r = Di(n, i);
		t.uniform1iv(this.addr, r);
		for (let t = 0; t !== i; ++t) n.setTextureCube(e[t] || Si, r[t]);
	}
	function vr(t, e, n) {
		const i = e.length,
			r = Di(n, i);
		t.uniform1iv(this.addr, r);
		for (let t = 0; t !== i; ++t) n.setTexture2DArray(e[t] || bi, r[t]);
	}
	function yr(t, e, n) {
		(this.id = t),
			(this.addr = n),
			(this.cache = []),
			(this.setValue = (function (t) {
				switch (t) {
					case 5126:
						return Ni;
					case 35664:
						return zi;
					case 35665:
						return Bi;
					case 35666:
						return Oi;
					case 35674:
						return Fi;
					case 35675:
						return Hi;
					case 35676:
						return ki;
					case 5124:
					case 35670:
						return Ui;
					case 35667:
					case 35671:
						return Vi;
					case 35668:
					case 35672:
						return Gi;
					case 35669:
					case 35673:
						return Wi;
					case 5125:
						return ji;
					case 36294:
						return qi;
					case 36295:
						return Xi;
					case 36296:
						return Yi;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return Zi;
					case 35679:
					case 36299:
					case 36307:
						return $i;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return Ki;
					case 36289:
					case 36303:
					case 36311:
					case 36292:
						return Ji;
				}
			})(e.type));
	}
	function xr(t, e, n) {
		(this.id = t),
			(this.addr = n),
			(this.cache = []),
			(this.size = e.size),
			(this.setValue = (function (t) {
				switch (t) {
					case 5126:
						return Qi;
					case 35664:
						return tr;
					case 35665:
						return er;
					case 35666:
						return nr;
					case 35674:
						return ir;
					case 35675:
						return rr;
					case 35676:
						return sr;
					case 5124:
					case 35670:
						return or;
					case 35667:
					case 35671:
						return ar;
					case 35668:
					case 35672:
						return lr;
					case 35669:
					case 35673:
						return cr;
					case 5125:
						return hr;
					case 36294:
						return ur;
					case 36295:
						return dr;
					case 36296:
						return pr;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return mr;
					case 35679:
					case 36299:
					case 36307:
						return fr;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return gr;
					case 36289:
					case 36303:
					case 36311:
					case 36292:
						return vr;
				}
			})(e.type));
	}
	function _r(t) {
		(this.id = t), (this.seq = []), (this.map = {});
	}
	_r.prototype.setValue = function (t, e, n) {
		const i = this.seq;
		for (let r = 0, s = i.length; r !== s; ++r) {
			const s = i[r];
			s.setValue(t, e[s.id], n);
		}
	};
	const wr = /(\w+)(\])?(\[|\.)?/g;
	function br(t, e) {
		t.seq.push(e), (t.map[e.id] = e);
	}
	function Mr(t, e, n) {
		const i = t.name,
			r = i.length;
		for (wr.lastIndex = 0; ; ) {
			const s = wr.exec(i),
				o = wr.lastIndex;
			let a = s[1];
			const l = "]" === s[2],
				c = s[3];
			if ((l && (a |= 0), void 0 === c || ("[" === c && o + 2 === r))) {
				br(n, void 0 === c ? new yr(a, t, e) : new xr(a, t, e));
				break;
			}
			{
				let t = n.map[a];
				void 0 === t && ((t = new _r(a)), br(n, t)), (n = t);
			}
		}
	}
	function Sr(t, e) {
		(this.seq = []), (this.map = {});
		const n = t.getProgramParameter(e, 35718);
		for (let i = 0; i < n; ++i) {
			const n = t.getActiveUniform(e, i);
			Mr(n, t.getUniformLocation(e, n.name), this);
		}
	}
	function Er(t, e, n) {
		const i = t.createShader(e);
		return t.shaderSource(i, n), t.compileShader(i), i;
	}
	(Sr.prototype.setValue = function (t, e, n, i) {
		const r = this.map[e];
		void 0 !== r && r.setValue(t, n, i);
	}),
		(Sr.prototype.setOptional = function (t, e, n) {
			const i = e[n];
			void 0 !== i && this.setValue(t, n, i);
		}),
		(Sr.upload = function (t, e, n, i) {
			for (let r = 0, s = e.length; r !== s; ++r) {
				const s = e[r],
					o = n[s.id];
				!1 !== o.needsUpdate && s.setValue(t, o.value, i);
			}
		}),
		(Sr.seqWithValue = function (t, e) {
			const n = [];
			for (let i = 0, r = t.length; i !== r; ++i) {
				const r = t[i];
				r.id in e && n.push(r);
			}
			return n;
		});
	let Tr = 0;
	function Ar(t, e, n) {
		const i = t.getShaderParameter(e, 35713),
			r = t.getShaderInfoLog(e).trim();
		if (i && "" === r) return "";
		const s = /ERROR: 0:(\d+)/.exec(r);
		if (s) {
			const i = parseInt(s[0]);
			return (
				n.toUpperCase() +
				"\n\n" +
				r +
				"\n\n" +
				(function (t, e) {
					const n = t.split("\n"),
						i = [],
						r = Math.max(e - 6, 0),
						s = Math.min(e + 6, n.length);
					for (let t = r; t < s; t++) i.push(t + 1 + ": " + n[t]);
					return i.join("\n");
				})(t.getShaderSource(e), i)
			);
		}
		return r;
	}
	function Cr(t, e) {
		const n = (function (t) {
			switch (t) {
				case P:
					return ["Linear", "( value )"];
				case I:
					return ["sRGB", "( value )"];
				default:
					return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
			}
		})(e);
		return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
	}
	function Rr(t, e) {
		let n;
		switch (e) {
			case 1:
				n = "Linear";
				break;
			case 2:
				n = "Reinhard";
				break;
			case 3:
				n = "OptimizedCineon";
				break;
			case 4:
				n = "ACESFilmic";
				break;
			case 5:
				n = "Custom";
				break;
			default:
				console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), (n = "Linear");
		}
		return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
	}
	function Lr(t) {
		return "" !== t;
	}
	function Pr(t, e) {
		return t
			.replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
			.replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
			.replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
			.replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
			.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
			.replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
			.replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
			.replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
	}
	function Ir(t, e) {
		return t
			.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
			.replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
	}
	const Dr = /^[ \t]*#include +<([\w\d./]+)>/gm;
	function Nr(t) {
		return t.replace(Dr, zr);
	}
	function zr(t, e) {
		const n = Gn[e];
		if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
		return Nr(n);
	}
	const Br = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
		Or =
			/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
	function Fr(t) {
		return t.replace(Or, kr).replace(Br, Hr);
	}
	function Hr(t, e, n, i) {
		return (
			console.warn(
				"WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
			),
			kr(0, e, n, i)
		);
	}
	function kr(t, e, n, i) {
		let r = "";
		for (let t = parseInt(e); t < parseInt(n); t++)
			r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
		return r;
	}
	function Ur(t) {
		let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
		return (
			"highp" === t.precision
				? (e += "\n#define HIGH_PRECISION")
				: "mediump" === t.precision
				? (e += "\n#define MEDIUM_PRECISION")
				: "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
			e
		);
	}
	function Vr(t, r, s, o) {
		const a = t.getContext(),
			l = s.defines;
		let c = s.vertexShader,
			h = s.fragmentShader;
		const u = (function (t) {
				let e = "SHADOWMAP_TYPE_BASIC";
				return (
					1 === t.shadowMapType
						? (e = "SHADOWMAP_TYPE_PCF")
						: 2 === t.shadowMapType
						? (e = "SHADOWMAP_TYPE_PCF_SOFT")
						: 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
					e
				);
			})(s),
			d = (function (t) {
				let r = "ENVMAP_TYPE_CUBE";
				if (t.envMap)
					switch (t.envMapMode) {
						case e:
						case n:
							r = "ENVMAP_TYPE_CUBE";
							break;
						case i:
							r = "ENVMAP_TYPE_CUBE_UV";
					}
				return r;
			})(s),
			p = (function (t) {
				let e = "ENVMAP_MODE_REFLECTION";
				return t.envMap && t.envMapMode === n && (e = "ENVMAP_MODE_REFRACTION"), e;
			})(s),
			m = (function (t) {
				let e = "ENVMAP_BLENDING_NONE";
				if (t.envMap)
					switch (t.combine) {
						case 0:
							e = "ENVMAP_BLENDING_MULTIPLY";
							break;
						case 1:
							e = "ENVMAP_BLENDING_MIX";
							break;
						case 2:
							e = "ENVMAP_BLENDING_ADD";
					}
				return e;
			})(s),
			f = (function (t) {
				const e = t.envMapCubeUVHeight;
				if (null === e) return null;
				const n = Math.log2(e) - 2,
					i = 1 / e;
				return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)), texelHeight: i, maxMip: n };
			})(s),
			g = s.isWebGL2
				? ""
				: (function (t) {
						return [
							t.extensionDerivatives ||
							t.envMapCubeUVHeight ||
							t.bumpMap ||
							t.tangentSpaceNormalMap ||
							t.clearcoatNormalMap ||
							t.flatShading ||
							"physical" === t.shaderID
								? "#extension GL_OES_standard_derivatives : enable"
								: "",
							(t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth
								? "#extension GL_EXT_frag_depth : enable"
								: "",
							t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
								? "#extension GL_EXT_draw_buffers : require"
								: "",
							(t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod
								? "#extension GL_EXT_shader_texture_lod : enable"
								: "",
						]
							.filter(Lr)
							.join("\n");
				  })(s),
			v = (function (t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					!1 !== i && e.push("#define " + n + " " + i);
				}
				return e.join("\n");
			})(l),
			y = a.createProgram();
		let x,
			_,
			w = s.glslVersion ? "#version " + s.glslVersion + "\n" : "";
		s.isRawShaderMaterial
			? ((x = [v].filter(Lr).join("\n")),
			  x.length > 0 && (x += "\n"),
			  (_ = [g, v].filter(Lr).join("\n")),
			  _.length > 0 && (_ += "\n"))
			: ((x = [
					Ur(s),
					"#define SHADER_NAME " + s.shaderName,
					v,
					s.instancing ? "#define USE_INSTANCING" : "",
					s.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
					s.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
					s.useFog && s.fog ? "#define USE_FOG" : "",
					s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "",
					s.map ? "#define USE_MAP" : "",
					s.envMap ? "#define USE_ENVMAP" : "",
					s.envMap ? "#define " + p : "",
					s.lightMap ? "#define USE_LIGHTMAP" : "",
					s.aoMap ? "#define USE_AOMAP" : "",
					s.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
					s.bumpMap ? "#define USE_BUMPMAP" : "",
					s.normalMap ? "#define USE_NORMALMAP" : "",
					s.normalMap && s.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
					s.normalMap && s.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
					s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
					s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
					s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
					s.displacementMap && s.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
					s.specularMap ? "#define USE_SPECULARMAP" : "",
					s.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
					s.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
					s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
					s.metalnessMap ? "#define USE_METALNESSMAP" : "",
					s.alphaMap ? "#define USE_ALPHAMAP" : "",
					s.transmission ? "#define USE_TRANSMISSION" : "",
					s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
					s.thicknessMap ? "#define USE_THICKNESSMAP" : "",
					s.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
					s.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
					s.vertexTangents ? "#define USE_TANGENT" : "",
					s.vertexColors ? "#define USE_COLOR" : "",
					s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
					s.vertexUvs ? "#define USE_UV" : "",
					s.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
					s.flatShading ? "#define FLAT_SHADED" : "",
					s.skinning ? "#define USE_SKINNING" : "",
					s.morphTargets ? "#define USE_MORPHTARGETS" : "",
					s.morphNormals && !1 === s.flatShading ? "#define USE_MORPHNORMALS" : "",
					s.morphColors && s.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
					s.morphTargetsCount > 0 && s.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
					s.morphTargetsCount > 0 && s.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + s.morphTextureStride : "",
					s.morphTargetsCount > 0 && s.isWebGL2 ? "#define MORPHTARGETS_COUNT " + s.morphTargetsCount : "",
					s.doubleSided ? "#define DOUBLE_SIDED" : "",
					s.flipSided ? "#define FLIP_SIDED" : "",
					s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
					s.shadowMapEnabled ? "#define " + u : "",
					s.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
					s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
					s.logarithmicDepthBuffer && s.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
					"uniform mat4 modelMatrix;",
					"uniform mat4 modelViewMatrix;",
					"uniform mat4 projectionMatrix;",
					"uniform mat4 viewMatrix;",
					"uniform mat3 normalMatrix;",
					"uniform vec3 cameraPosition;",
					"uniform bool isOrthographic;",
					"#ifdef USE_INSTANCING",
					"\tattribute mat4 instanceMatrix;",
					"#endif",
					"#ifdef USE_INSTANCING_COLOR",
					"\tattribute vec3 instanceColor;",
					"#endif",
					"attribute vec3 position;",
					"attribute vec3 normal;",
					"attribute vec2 uv;",
					"#ifdef USE_TANGENT",
					"\tattribute vec4 tangent;",
					"#endif",
					"#if defined( USE_COLOR_ALPHA )",
					"\tattribute vec4 color;",
					"#elif defined( USE_COLOR )",
					"\tattribute vec3 color;",
					"#endif",
					"#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
					"\tattribute vec3 morphTarget0;",
					"\tattribute vec3 morphTarget1;",
					"\tattribute vec3 morphTarget2;",
					"\tattribute vec3 morphTarget3;",
					"\t#ifdef USE_MORPHNORMALS",
					"\t\tattribute vec3 morphNormal0;",
					"\t\tattribute vec3 morphNormal1;",
					"\t\tattribute vec3 morphNormal2;",
					"\t\tattribute vec3 morphNormal3;",
					"\t#else",
					"\t\tattribute vec3 morphTarget4;",
					"\t\tattribute vec3 morphTarget5;",
					"\t\tattribute vec3 morphTarget6;",
					"\t\tattribute vec3 morphTarget7;",
					"\t#endif",
					"#endif",
					"#ifdef USE_SKINNING",
					"\tattribute vec4 skinIndex;",
					"\tattribute vec4 skinWeight;",
					"#endif",
					"\n",
			  ]
					.filter(Lr)
					.join("\n")),
			  (_ = [
					g,
					Ur(s),
					"#define SHADER_NAME " + s.shaderName,
					v,
					s.useFog && s.fog ? "#define USE_FOG" : "",
					s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "",
					s.map ? "#define USE_MAP" : "",
					s.matcap ? "#define USE_MATCAP" : "",
					s.envMap ? "#define USE_ENVMAP" : "",
					s.envMap ? "#define " + d : "",
					s.envMap ? "#define " + p : "",
					s.envMap ? "#define " + m : "",
					f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
					f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
					f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
					s.lightMap ? "#define USE_LIGHTMAP" : "",
					s.aoMap ? "#define USE_AOMAP" : "",
					s.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
					s.bumpMap ? "#define USE_BUMPMAP" : "",
					s.normalMap ? "#define USE_NORMALMAP" : "",
					s.normalMap && s.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
					s.normalMap && s.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
					s.clearcoat ? "#define USE_CLEARCOAT" : "",
					s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
					s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
					s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
					s.specularMap ? "#define USE_SPECULARMAP" : "",
					s.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
					s.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
					s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
					s.metalnessMap ? "#define USE_METALNESSMAP" : "",
					s.alphaMap ? "#define USE_ALPHAMAP" : "",
					s.alphaTest ? "#define USE_ALPHATEST" : "",
					s.sheen ? "#define USE_SHEEN" : "",
					s.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
					s.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
					s.transmission ? "#define USE_TRANSMISSION" : "",
					s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
					s.thicknessMap ? "#define USE_THICKNESSMAP" : "",
					s.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
					s.vertexTangents ? "#define USE_TANGENT" : "",
					s.vertexColors || s.instancingColor ? "#define USE_COLOR" : "",
					s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
					s.vertexUvs ? "#define USE_UV" : "",
					s.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
					s.gradientMap ? "#define USE_GRADIENTMAP" : "",
					s.flatShading ? "#define FLAT_SHADED" : "",
					s.doubleSided ? "#define DOUBLE_SIDED" : "",
					s.flipSided ? "#define FLIP_SIDED" : "",
					s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
					s.shadowMapEnabled ? "#define " + u : "",
					s.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
					s.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
					s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
					s.logarithmicDepthBuffer && s.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
					"uniform mat4 viewMatrix;",
					"uniform vec3 cameraPosition;",
					"uniform bool isOrthographic;",
					0 !== s.toneMapping ? "#define TONE_MAPPING" : "",
					0 !== s.toneMapping ? Gn.tonemapping_pars_fragment : "",
					0 !== s.toneMapping ? Rr("toneMapping", s.toneMapping) : "",
					s.dithering ? "#define DITHERING" : "",
					s.opaque ? "#define OPAQUE" : "",
					Gn.encodings_pars_fragment,
					Cr("linearToOutputTexel", s.outputEncoding),
					s.useDepthPacking ? "#define DEPTH_PACKING " + s.depthPacking : "",
					"\n",
			  ]
					.filter(Lr)
					.join("\n"))),
			(c = Nr(c)),
			(c = Pr(c, s)),
			(c = Ir(c, s)),
			(h = Nr(h)),
			(h = Pr(h, s)),
			(h = Ir(h, s)),
			(c = Fr(c)),
			(h = Fr(h)),
			s.isWebGL2 &&
				!0 !== s.isRawShaderMaterial &&
				((w = "#version 300 es\n"),
				(x =
					[
						"precision mediump sampler2DArray;",
						"#define attribute in",
						"#define varying out",
						"#define texture2D texture",
					].join("\n") +
					"\n" +
					x),
				(_ =
					[
						"#define varying in",
						s.glslVersion === F ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
						s.glslVersion === F ? "" : "#define gl_FragColor pc_fragColor",
						"#define gl_FragDepthEXT gl_FragDepth",
						"#define texture2D texture",
						"#define textureCube texture",
						"#define texture2DProj textureProj",
						"#define texture2DLodEXT textureLod",
						"#define texture2DProjLodEXT textureProjLod",
						"#define textureCubeLodEXT textureLod",
						"#define texture2DGradEXT textureGrad",
						"#define texture2DProjGradEXT textureProjGrad",
						"#define textureCubeGradEXT textureGrad",
					].join("\n") +
					"\n" +
					_));
		const b = w + _ + h,
			M = Er(a, 35633, w + x + c),
			S = Er(a, 35632, b);
		if (
			(a.attachShader(y, M),
			a.attachShader(y, S),
			void 0 !== s.index0AttributeName
				? a.bindAttribLocation(y, 0, s.index0AttributeName)
				: !0 === s.morphTargets && a.bindAttribLocation(y, 0, "position"),
			a.linkProgram(y),
			t.debug.checkShaderErrors)
		) {
			const t = a.getProgramInfoLog(y).trim(),
				e = a.getShaderInfoLog(M).trim(),
				n = a.getShaderInfoLog(S).trim();
			let i = !0,
				r = !0;
			if (!1 === a.getProgramParameter(y, 35714)) {
				i = !1;
				const e = Ar(a, M, "vertex"),
					n = Ar(a, S, "fragment");
				console.error(
					"THREE.WebGLProgram: Shader Error " +
						a.getError() +
						" - VALIDATE_STATUS " +
						a.getProgramParameter(y, 35715) +
						"\n\nProgram Info Log: " +
						t +
						"\n" +
						e +
						"\n" +
						n
				);
			} else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : ("" !== e && "" !== n) || (r = !1);
			r &&
				(this.diagnostics = {
					runnable: i,
					programLog: t,
					vertexShader: { log: e, prefix: x },
					fragmentShader: { log: n, prefix: _ },
				});
		}
		let E, T;
		return (
			a.deleteShader(M),
			a.deleteShader(S),
			(this.getUniforms = function () {
				return void 0 === E && (E = new Sr(a, y)), E;
			}),
			(this.getAttributes = function () {
				return (
					void 0 === T &&
						(T = (function (t, e) {
							const n = {},
								i = t.getProgramParameter(e, 35721);
							for (let r = 0; r < i; r++) {
								const i = t.getActiveAttrib(e, r),
									s = i.name;
								let o = 1;
								35674 === i.type && (o = 2),
									35675 === i.type && (o = 3),
									35676 === i.type && (o = 4),
									(n[s] = { type: i.type, location: t.getAttribLocation(e, s), locationSize: o });
							}
							return n;
						})(a, y)),
					T
				);
			}),
			(this.destroy = function () {
				o.releaseStatesOfProgram(this), a.deleteProgram(y), (this.program = void 0);
			}),
			(this.name = s.shaderName),
			(this.id = Tr++),
			(this.cacheKey = r),
			(this.usedTimes = 1),
			(this.program = y),
			(this.vertexShader = M),
			(this.fragmentShader = S),
			this
		);
	}
	let Gr = 0;
	class Wr {
		constructor() {
			(this.shaderCache = new Map()), (this.materialCache = new Map());
		}
		update(t) {
			const e = t.vertexShader,
				n = t.fragmentShader,
				i = this._getShaderStage(e),
				r = this._getShaderStage(n),
				s = this._getShaderCacheForMaterial(t);
			return !1 === s.has(i) && (s.add(i), i.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this;
		}
		remove(t) {
			const e = this.materialCache.get(t);
			for (const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
			return this.materialCache.delete(t), this;
		}
		getVertexShaderID(t) {
			return this._getShaderStage(t.vertexShader).id;
		}
		getFragmentShaderID(t) {
			return this._getShaderStage(t.fragmentShader).id;
		}
		dispose() {
			this.shaderCache.clear(), this.materialCache.clear();
		}
		_getShaderCacheForMaterial(t) {
			const e = this.materialCache;
			return !1 === e.has(t) && e.set(t, new Set()), e.get(t);
		}
		_getShaderStage(t) {
			const e = this.shaderCache;
			if (!1 === e.has(t)) {
				const n = new jr(t);
				e.set(t, n);
			}
			return e.get(t);
		}
	}
	class jr {
		constructor(t) {
			(this.id = Gr++), (this.code = t), (this.usedTimes = 0);
		}
	}
	function qr(t, e, n, r, s, o, a) {
		const l = new pe(),
			c = new Wr(),
			h = [],
			u = s.isWebGL2,
			d = s.logarithmicDepthBuffer,
			p = s.vertexTextures;
		let m = s.precision;
		const f = {
			MeshDepthMaterial: "depth",
			MeshDistanceMaterial: "distanceRGBA",
			MeshNormalMaterial: "normal",
			MeshBasicMaterial: "basic",
			MeshLambertMaterial: "lambert",
			MeshPhongMaterial: "phong",
			MeshToonMaterial: "toon",
			MeshStandardMaterial: "physical",
			MeshPhysicalMaterial: "physical",
			MeshMatcapMaterial: "matcap",
			LineBasicMaterial: "basic",
			LineDashedMaterial: "dashed",
			PointsMaterial: "points",
			ShadowMaterial: "shadow",
			SpriteMaterial: "sprite",
		};
		return {
			getParameters: function (o, l, h, g, v) {
				const y = g.fog,
					x = v.geometry,
					_ = o.isMeshStandardMaterial ? g.environment : null,
					w = (o.isMeshStandardMaterial ? n : e).get(o.envMap || _),
					b = w && w.mapping === i ? w.image.height : null,
					M = f[o.type];
				null !== o.precision &&
					((m = s.getMaxPrecision(o.precision)),
					m !== o.precision &&
						console.warn("THREE.WebGLProgram.getParameters:", o.precision, "not supported, using", m, "instead."));
				const S = x.morphAttributes.position || x.morphAttributes.normal || x.morphAttributes.color,
					E = void 0 !== S ? S.length : 0;
				let T,
					A,
					C,
					R,
					L = 0;
				if (
					(void 0 !== x.morphAttributes.position && (L = 1),
					void 0 !== x.morphAttributes.normal && (L = 2),
					void 0 !== x.morphAttributes.color && (L = 3),
					M)
				) {
					const t = jn[M];
					(T = t.vertexShader), (A = t.fragmentShader);
				} else
					(T = o.vertexShader),
						(A = o.fragmentShader),
						c.update(o),
						(C = c.getVertexShaderID(o)),
						(R = c.getFragmentShaderID(o));
				const D = t.getRenderTarget(),
					N = o.alphaTest > 0,
					z = o.clearcoat > 0;
				return {
					isWebGL2: u,
					shaderID: M,
					shaderName: o.type,
					vertexShader: T,
					fragmentShader: A,
					defines: o.defines,
					customVertexShaderID: C,
					customFragmentShaderID: R,
					isRawShaderMaterial: !0 === o.isRawShaderMaterial,
					glslVersion: o.glslVersion,
					precision: m,
					instancing: !0 === v.isInstancedMesh,
					instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
					supportsVertexTextures: p,
					outputEncoding: null === D ? t.outputEncoding : !0 === D.isXRRenderTarget ? D.texture.encoding : P,
					map: !!o.map,
					matcap: !!o.matcap,
					envMap: !!w,
					envMapMode: w && w.mapping,
					envMapCubeUVHeight: b,
					lightMap: !!o.lightMap,
					aoMap: !!o.aoMap,
					emissiveMap: !!o.emissiveMap,
					bumpMap: !!o.bumpMap,
					normalMap: !!o.normalMap,
					objectSpaceNormalMap: 1 === o.normalMapType,
					tangentSpaceNormalMap: 0 === o.normalMapType,
					decodeVideoTexture: !!o.map && !0 === o.map.isVideoTexture && o.map.encoding === I,
					clearcoat: z,
					clearcoatMap: z && !!o.clearcoatMap,
					clearcoatRoughnessMap: z && !!o.clearcoatRoughnessMap,
					clearcoatNormalMap: z && !!o.clearcoatNormalMap,
					displacementMap: !!o.displacementMap,
					roughnessMap: !!o.roughnessMap,
					metalnessMap: !!o.metalnessMap,
					specularMap: !!o.specularMap,
					specularIntensityMap: !!o.specularIntensityMap,
					specularColorMap: !!o.specularColorMap,
					opaque: !1 === o.transparent && 1 === o.blending,
					alphaMap: !!o.alphaMap,
					alphaTest: N,
					gradientMap: !!o.gradientMap,
					sheen: o.sheen > 0,
					sheenColorMap: !!o.sheenColorMap,
					sheenRoughnessMap: !!o.sheenRoughnessMap,
					transmission: o.transmission > 0,
					transmissionMap: !!o.transmissionMap,
					thicknessMap: !!o.thicknessMap,
					combine: o.combine,
					vertexTangents: !!o.normalMap && !!x.attributes.tangent,
					vertexColors: o.vertexColors,
					vertexAlphas: !0 === o.vertexColors && !!x.attributes.color && 4 === x.attributes.color.itemSize,
					vertexUvs: !!(
						o.map ||
						o.bumpMap ||
						o.normalMap ||
						o.specularMap ||
						o.alphaMap ||
						o.emissiveMap ||
						o.roughnessMap ||
						o.metalnessMap ||
						o.clearcoatMap ||
						o.clearcoatRoughnessMap ||
						o.clearcoatNormalMap ||
						o.displacementMap ||
						o.transmissionMap ||
						o.thicknessMap ||
						o.specularIntensityMap ||
						o.specularColorMap ||
						o.sheenColorMap ||
						o.sheenRoughnessMap
					),
					uvsVertexOnly: !(
						o.map ||
						o.bumpMap ||
						o.normalMap ||
						o.specularMap ||
						o.alphaMap ||
						o.emissiveMap ||
						o.roughnessMap ||
						o.metalnessMap ||
						o.clearcoatNormalMap ||
						o.transmission > 0 ||
						o.transmissionMap ||
						o.thicknessMap ||
						o.specularIntensityMap ||
						o.specularColorMap ||
						o.sheen > 0 ||
						o.sheenColorMap ||
						o.sheenRoughnessMap ||
						!o.displacementMap
					),
					fog: !!y,
					useFog: !0 === o.fog,
					fogExp2: y && y.isFogExp2,
					flatShading: !!o.flatShading,
					sizeAttenuation: o.sizeAttenuation,
					logarithmicDepthBuffer: d,
					skinning: !0 === v.isSkinnedMesh,
					morphTargets: void 0 !== x.morphAttributes.position,
					morphNormals: void 0 !== x.morphAttributes.normal,
					morphColors: void 0 !== x.morphAttributes.color,
					morphTargetsCount: E,
					morphTextureStride: L,
					numDirLights: l.directional.length,
					numPointLights: l.point.length,
					numSpotLights: l.spot.length,
					numRectAreaLights: l.rectArea.length,
					numHemiLights: l.hemi.length,
					numDirLightShadows: l.directionalShadowMap.length,
					numPointLightShadows: l.pointShadowMap.length,
					numSpotLightShadows: l.spotShadowMap.length,
					numClippingPlanes: a.numPlanes,
					numClipIntersection: a.numIntersection,
					dithering: o.dithering,
					shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
					shadowMapType: t.shadowMap.type,
					toneMapping: o.toneMapped ? t.toneMapping : 0,
					physicallyCorrectLights: t.physicallyCorrectLights,
					premultipliedAlpha: o.premultipliedAlpha,
					doubleSided: 2 === o.side,
					flipSided: 1 === o.side,
					useDepthPacking: !!o.depthPacking,
					depthPacking: o.depthPacking || 0,
					index0AttributeName: o.index0AttributeName,
					extensionDerivatives: o.extensions && o.extensions.derivatives,
					extensionFragDepth: o.extensions && o.extensions.fragDepth,
					extensionDrawBuffers: o.extensions && o.extensions.drawBuffers,
					extensionShaderTextureLOD: o.extensions && o.extensions.shaderTextureLOD,
					rendererExtensionFragDepth: u || r.has("EXT_frag_depth"),
					rendererExtensionDrawBuffers: u || r.has("WEBGL_draw_buffers"),
					rendererExtensionShaderTextureLod: u || r.has("EXT_shader_texture_lod"),
					customProgramCacheKey: o.customProgramCacheKey(),
				};
			},
			getProgramCacheKey: function (e) {
				const n = [];
				if (
					(e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)),
					void 0 !== e.defines)
				)
					for (const t in e.defines) n.push(t), n.push(e.defines[t]);
				return (
					!1 === e.isRawShaderMaterial &&
						((function (t, e) {
							t.push(e.precision),
								t.push(e.outputEncoding),
								t.push(e.envMapMode),
								t.push(e.envMapCubeUVHeight),
								t.push(e.combine),
								t.push(e.vertexUvs),
								t.push(e.fogExp2),
								t.push(e.sizeAttenuation),
								t.push(e.morphTargetsCount),
								t.push(e.morphAttributeCount),
								t.push(e.numDirLights),
								t.push(e.numPointLights),
								t.push(e.numSpotLights),
								t.push(e.numHemiLights),
								t.push(e.numRectAreaLights),
								t.push(e.numDirLightShadows),
								t.push(e.numPointLightShadows),
								t.push(e.numSpotLightShadows),
								t.push(e.shadowMapType),
								t.push(e.toneMapping),
								t.push(e.numClippingPlanes),
								t.push(e.numClipIntersection),
								t.push(e.depthPacking);
						})(n, e),
						(function (t, e) {
							l.disableAll(),
								e.isWebGL2 && l.enable(0),
								e.supportsVertexTextures && l.enable(1),
								e.instancing && l.enable(2),
								e.instancingColor && l.enable(3),
								e.map && l.enable(4),
								e.matcap && l.enable(5),
								e.envMap && l.enable(6),
								e.lightMap && l.enable(7),
								e.aoMap && l.enable(8),
								e.emissiveMap && l.enable(9),
								e.bumpMap && l.enable(10),
								e.normalMap && l.enable(11),
								e.objectSpaceNormalMap && l.enable(12),
								e.tangentSpaceNormalMap && l.enable(13),
								e.clearcoat && l.enable(14),
								e.clearcoatMap && l.enable(15),
								e.clearcoatRoughnessMap && l.enable(16),
								e.clearcoatNormalMap && l.enable(17),
								e.displacementMap && l.enable(18),
								e.specularMap && l.enable(19),
								e.roughnessMap && l.enable(20),
								e.metalnessMap && l.enable(21),
								e.gradientMap && l.enable(22),
								e.alphaMap && l.enable(23),
								e.alphaTest && l.enable(24),
								e.vertexColors && l.enable(25),
								e.vertexAlphas && l.enable(26),
								e.vertexUvs && l.enable(27),
								e.vertexTangents && l.enable(28),
								e.uvsVertexOnly && l.enable(29),
								e.fog && l.enable(30),
								t.push(l.mask),
								l.disableAll(),
								e.useFog && l.enable(0),
								e.flatShading && l.enable(1),
								e.logarithmicDepthBuffer && l.enable(2),
								e.skinning && l.enable(3),
								e.morphTargets && l.enable(4),
								e.morphNormals && l.enable(5),
								e.morphColors && l.enable(6),
								e.premultipliedAlpha && l.enable(7),
								e.shadowMapEnabled && l.enable(8),
								e.physicallyCorrectLights && l.enable(9),
								e.doubleSided && l.enable(10),
								e.flipSided && l.enable(11),
								e.useDepthPacking && l.enable(12),
								e.dithering && l.enable(13),
								e.specularIntensityMap && l.enable(14),
								e.specularColorMap && l.enable(15),
								e.transmission && l.enable(16),
								e.transmissionMap && l.enable(17),
								e.thicknessMap && l.enable(18),
								e.sheen && l.enable(19),
								e.sheenColorMap && l.enable(20),
								e.sheenRoughnessMap && l.enable(21),
								e.decodeVideoTexture && l.enable(22),
								e.opaque && l.enable(23),
								t.push(l.mask);
						})(n, e),
						n.push(t.outputEncoding)),
					n.push(e.customProgramCacheKey),
					n.join()
				);
			},
			getUniforms: function (t) {
				const e = f[t.type];
				let n;
				if (e) {
					const t = jn[e];
					n = En.clone(t.uniforms);
				} else n = t.uniforms;
				return n;
			},
			acquireProgram: function (e, n) {
				let i;
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					if (e.cacheKey === n) {
						(i = e), ++i.usedTimes;
						break;
					}
				}
				return void 0 === i && ((i = new Vr(t, n, e, o)), h.push(i)), i;
			},
			releaseProgram: function (t) {
				if (0 == --t.usedTimes) {
					const e = h.indexOf(t);
					(h[e] = h[h.length - 1]), h.pop(), t.destroy();
				}
			},
			releaseShaderCache: function (t) {
				c.remove(t);
			},
			programs: h,
			dispose: function () {
				c.dispose();
			},
		};
	}
	function Xr() {
		let t = new WeakMap();
		return {
			get: function (e) {
				let n = t.get(e);
				return void 0 === n && ((n = {}), t.set(e, n)), n;
			},
			remove: function (e) {
				t.delete(e);
			},
			update: function (e, n, i) {
				t.get(e)[n] = i;
			},
			dispose: function () {
				t = new WeakMap();
			},
		};
	}
	function Yr(t, e) {
		return t.groupOrder !== e.groupOrder
			? t.groupOrder - e.groupOrder
			: t.renderOrder !== e.renderOrder
			? t.renderOrder - e.renderOrder
			: t.material.id !== e.material.id
			? t.material.id - e.material.id
			: t.z !== e.z
			? t.z - e.z
			: t.id - e.id;
	}
	function Zr(t, e) {
		return t.groupOrder !== e.groupOrder
			? t.groupOrder - e.groupOrder
			: t.renderOrder !== e.renderOrder
			? t.renderOrder - e.renderOrder
			: t.z !== e.z
			? e.z - t.z
			: t.id - e.id;
	}
	function $r() {
		const t = [];
		let e = 0;
		const n = [],
			i = [],
			r = [];
		function s(n, i, r, s, o, a) {
			let l = t[e];
			return (
				void 0 === l
					? ((l = {
							id: n.id,
							object: n,
							geometry: i,
							material: r,
							groupOrder: s,
							renderOrder: n.renderOrder,
							z: o,
							group: a,
					  }),
					  (t[e] = l))
					: ((l.id = n.id),
					  (l.object = n),
					  (l.geometry = i),
					  (l.material = r),
					  (l.groupOrder = s),
					  (l.renderOrder = n.renderOrder),
					  (l.z = o),
					  (l.group = a)),
				e++,
				l
			);
		}
		return {
			opaque: n,
			transmissive: i,
			transparent: r,
			init: function () {
				(e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
			},
			push: function (t, e, o, a, l, c) {
				const h = s(t, e, o, a, l, c);
				o.transmission > 0 ? i.push(h) : !0 === o.transparent ? r.push(h) : n.push(h);
			},
			unshift: function (t, e, o, a, l, c) {
				const h = s(t, e, o, a, l, c);
				o.transmission > 0 ? i.unshift(h) : !0 === o.transparent ? r.unshift(h) : n.unshift(h);
			},
			finish: function () {
				for (let n = e, i = t.length; n < i; n++) {
					const e = t[n];
					if (null === e.id) break;
					(e.id = null), (e.object = null), (e.geometry = null), (e.material = null), (e.group = null);
				}
			},
			sort: function (t, e) {
				n.length > 1 && n.sort(t || Yr), i.length > 1 && i.sort(e || Zr), r.length > 1 && r.sort(e || Zr);
			},
		};
	}
	function Kr() {
		let t = new WeakMap();
		return {
			get: function (e, n) {
				let i;
				return (
					!1 === t.has(e)
						? ((i = new $r()), t.set(e, [i]))
						: n >= t.get(e).length
						? ((i = new $r()), t.get(e).push(i))
						: (i = t.get(e)[n]),
					i
				);
			},
			dispose: function () {
				t = new WeakMap();
			},
		};
	}
	function Jr() {
		const t = {};
		return {
			get: function (e) {
				if (void 0 !== t[e.id]) return t[e.id];
				let n;
				switch (e.type) {
					case "DirectionalLight":
						n = { direction: new Et(), color: new pt() };
						break;
					case "SpotLight":
						n = {
							position: new Et(),
							direction: new Et(),
							color: new pt(),
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0,
						};
						break;
					case "PointLight":
						n = { position: new Et(), color: new pt(), distance: 0, decay: 0 };
						break;
					case "HemisphereLight":
						n = { direction: new Et(), skyColor: new pt(), groundColor: new pt() };
						break;
					case "RectAreaLight":
						n = { color: new pt(), position: new Et(), halfWidth: new Et(), halfHeight: new Et() };
				}
				return (t[e.id] = n), n;
			},
		};
	}
	let Qr = 0;
	function ts(t, e) {
		return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
	}
	function es(t, e) {
		const n = new Jr(),
			i = (function () {
				const t = {};
				return {
					get: function (e) {
						if (void 0 !== t[e.id]) return t[e.id];
						let n;
						switch (e.type) {
							case "DirectionalLight":
							case "SpotLight":
								n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q() };
								break;
							case "PointLight":
								n = {
									shadowBias: 0,
									shadowNormalBias: 0,
									shadowRadius: 1,
									shadowMapSize: new Q(),
									shadowCameraNear: 1,
									shadowCameraFar: 1e3,
								};
						}
						return (t[e.id] = n), n;
					},
				};
			})(),
			r = {
				version: 0,
				hash: {
					directionalLength: -1,
					pointLength: -1,
					spotLength: -1,
					rectAreaLength: -1,
					hemiLength: -1,
					numDirectionalShadows: -1,
					numPointShadows: -1,
					numSpotShadows: -1,
				},
				ambient: [0, 0, 0],
				probe: [],
				directional: [],
				directionalShadow: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadow: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				rectAreaLTC1: null,
				rectAreaLTC2: null,
				point: [],
				pointShadow: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: [],
			};
		for (let t = 0; t < 9; t++) r.probe.push(new Et());
		const s = new Et(),
			o = new ne(),
			a = new ne();
		return {
			setup: function (s, o) {
				let a = 0,
					l = 0,
					c = 0;
				for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
				let h = 0,
					u = 0,
					d = 0,
					p = 0,
					m = 0,
					f = 0,
					g = 0,
					v = 0;
				s.sort(ts);
				const y = !0 !== o ? Math.PI : 1;
				for (let t = 0, e = s.length; t < e; t++) {
					const e = s[t],
						o = e.color,
						x = e.intensity,
						_ = e.distance,
						w = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
					if (e.isAmbientLight) (a += o.r * x * y), (l += o.g * x * y), (c += o.b * x * y);
					else if (e.isLightProbe) for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], x);
					else if (e.isDirectionalLight) {
						const t = n.get(e);
						if ((t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow)) {
							const t = e.shadow,
								n = i.get(e);
							(n.shadowBias = t.bias),
								(n.shadowNormalBias = t.normalBias),
								(n.shadowRadius = t.radius),
								(n.shadowMapSize = t.mapSize),
								(r.directionalShadow[h] = n),
								(r.directionalShadowMap[h] = w),
								(r.directionalShadowMatrix[h] = e.shadow.matrix),
								f++;
						}
						(r.directional[h] = t), h++;
					} else if (e.isSpotLight) {
						const t = n.get(e);
						if (
							(t.position.setFromMatrixPosition(e.matrixWorld),
							t.color.copy(o).multiplyScalar(x * y),
							(t.distance = _),
							(t.coneCos = Math.cos(e.angle)),
							(t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
							(t.decay = e.decay),
							e.castShadow)
						) {
							const t = e.shadow,
								n = i.get(e);
							(n.shadowBias = t.bias),
								(n.shadowNormalBias = t.normalBias),
								(n.shadowRadius = t.radius),
								(n.shadowMapSize = t.mapSize),
								(r.spotShadow[d] = n),
								(r.spotShadowMap[d] = w),
								(r.spotShadowMatrix[d] = e.shadow.matrix),
								v++;
						}
						(r.spot[d] = t), d++;
					} else if (e.isRectAreaLight) {
						const t = n.get(e);
						t.color.copy(o).multiplyScalar(x),
							t.halfWidth.set(0.5 * e.width, 0, 0),
							t.halfHeight.set(0, 0.5 * e.height, 0),
							(r.rectArea[p] = t),
							p++;
					} else if (e.isPointLight) {
						const t = n.get(e);
						if (
							(t.color.copy(e.color).multiplyScalar(e.intensity * y),
							(t.distance = e.distance),
							(t.decay = e.decay),
							e.castShadow)
						) {
							const t = e.shadow,
								n = i.get(e);
							(n.shadowBias = t.bias),
								(n.shadowNormalBias = t.normalBias),
								(n.shadowRadius = t.radius),
								(n.shadowMapSize = t.mapSize),
								(n.shadowCameraNear = t.camera.near),
								(n.shadowCameraFar = t.camera.far),
								(r.pointShadow[u] = n),
								(r.pointShadowMap[u] = w),
								(r.pointShadowMatrix[u] = e.shadow.matrix),
								g++;
						}
						(r.point[u] = t), u++;
					} else if (e.isHemisphereLight) {
						const t = n.get(e);
						t.skyColor.copy(e.color).multiplyScalar(x * y),
							t.groundColor.copy(e.groundColor).multiplyScalar(x * y),
							(r.hemi[m] = t),
							m++;
					}
				}
				p > 0 &&
					(e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
						? ((r.rectAreaLTC1 = Wn.LTC_FLOAT_1), (r.rectAreaLTC2 = Wn.LTC_FLOAT_2))
						: !0 === t.has("OES_texture_half_float_linear")
						? ((r.rectAreaLTC1 = Wn.LTC_HALF_1), (r.rectAreaLTC2 = Wn.LTC_HALF_2))
						: console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
					(r.ambient[0] = a),
					(r.ambient[1] = l),
					(r.ambient[2] = c);
				const x = r.hash;
				(x.directionalLength === h &&
					x.pointLength === u &&
					x.spotLength === d &&
					x.rectAreaLength === p &&
					x.hemiLength === m &&
					x.numDirectionalShadows === f &&
					x.numPointShadows === g &&
					x.numSpotShadows === v) ||
					((r.directional.length = h),
					(r.spot.length = d),
					(r.rectArea.length = p),
					(r.point.length = u),
					(r.hemi.length = m),
					(r.directionalShadow.length = f),
					(r.directionalShadowMap.length = f),
					(r.pointShadow.length = g),
					(r.pointShadowMap.length = g),
					(r.spotShadow.length = v),
					(r.spotShadowMap.length = v),
					(r.directionalShadowMatrix.length = f),
					(r.pointShadowMatrix.length = g),
					(r.spotShadowMatrix.length = v),
					(x.directionalLength = h),
					(x.pointLength = u),
					(x.spotLength = d),
					(x.rectAreaLength = p),
					(x.hemiLength = m),
					(x.numDirectionalShadows = f),
					(x.numPointShadows = g),
					(x.numSpotShadows = v),
					(r.version = Qr++));
			},
			setupView: function (t, e) {
				let n = 0,
					i = 0,
					l = 0,
					c = 0,
					h = 0;
				const u = e.matrixWorldInverse;
				for (let e = 0, d = t.length; e < d; e++) {
					const d = t[e];
					if (d.isDirectionalLight) {
						const t = r.directional[n];
						t.direction.setFromMatrixPosition(d.matrixWorld),
							s.setFromMatrixPosition(d.target.matrixWorld),
							t.direction.sub(s),
							t.direction.transformDirection(u),
							n++;
					} else if (d.isSpotLight) {
						const t = r.spot[l];
						t.position.setFromMatrixPosition(d.matrixWorld),
							t.position.applyMatrix4(u),
							t.direction.setFromMatrixPosition(d.matrixWorld),
							s.setFromMatrixPosition(d.target.matrixWorld),
							t.direction.sub(s),
							t.direction.transformDirection(u),
							l++;
					} else if (d.isRectAreaLight) {
						const t = r.rectArea[c];
						t.position.setFromMatrixPosition(d.matrixWorld),
							t.position.applyMatrix4(u),
							a.identity(),
							o.copy(d.matrixWorld),
							o.premultiply(u),
							a.extractRotation(o),
							t.halfWidth.set(0.5 * d.width, 0, 0),
							t.halfHeight.set(0, 0.5 * d.height, 0),
							t.halfWidth.applyMatrix4(a),
							t.halfHeight.applyMatrix4(a),
							c++;
					} else if (d.isPointLight) {
						const t = r.point[i];
						t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++;
					} else if (d.isHemisphereLight) {
						const t = r.hemi[h];
						t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), h++;
					}
				}
			},
			state: r,
		};
	}
	function ns(t, e) {
		const n = new es(t, e),
			i = [],
			r = [];
		return {
			init: function () {
				(i.length = 0), (r.length = 0);
			},
			state: { lightsArray: i, shadowsArray: r, lights: n },
			setupLights: function (t) {
				n.setup(i, t);
			},
			setupLightsView: function (t) {
				n.setupView(i, t);
			},
			pushLight: function (t) {
				i.push(t);
			},
			pushShadow: function (t) {
				r.push(t);
			},
		};
	}
	function is(t, e) {
		let n = new WeakMap();
		return {
			get: function (i, r = 0) {
				let s;
				return (
					!1 === n.has(i)
						? ((s = new ns(t, e)), n.set(i, [s]))
						: r >= n.get(i).length
						? ((s = new ns(t, e)), n.get(i).push(s))
						: (s = n.get(i)[r]),
					s
				);
			},
			dispose: function () {
				n = new WeakMap();
			},
		};
	}
	class rs extends ke {
		constructor(t) {
			super(),
				(this.type = "MeshDepthMaterial"),
				(this.depthPacking = 3200),
				(this.map = null),
				(this.alphaMap = null),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				(this.depthPacking = t.depthPacking),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				this
			);
		}
	}
	rs.prototype.isMeshDepthMaterial = !0;
	class ss extends ke {
		constructor(t) {
			super(),
				(this.type = "MeshDistanceMaterial"),
				(this.referencePosition = new Et()),
				(this.nearDistance = 1),
				(this.farDistance = 1e3),
				(this.map = null),
				(this.alphaMap = null),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.referencePosition.copy(t.referencePosition),
				(this.nearDistance = t.nearDistance),
				(this.farDistance = t.farDistance),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				this
			);
		}
	}
	function os(t, e, n) {
		let i = new Hn();
		const r = new Q(),
			s = new Q(),
			o = new _t(),
			l = new rs({ depthPacking: 3201 }),
			c = new ss(),
			h = {},
			u = n.maxTextureSize,
			d = { 0: 1, 1: 0, 2: 2 },
			p = new Tn({
				defines: { VSM_SAMPLES: 8 },
				uniforms: { shadow_pass: { value: null }, resolution: { value: new Q() }, radius: { value: 4 } },
				vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
				fragmentShader:
					"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
			}),
			m = p.clone();
		m.defines.HORIZONTAL_PASS = 1;
		const f = new en();
		f.setAttribute("position", new We(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
		const g = new _n(f, p),
			v = this;
		function x(n, i) {
			const r = e.update(g);
			p.defines.VSM_SAMPLES !== n.blurSamples &&
				((p.defines.VSM_SAMPLES = n.blurSamples),
				(m.defines.VSM_SAMPLES = n.blurSamples),
				(p.needsUpdate = !0),
				(m.needsUpdate = !0)),
				(p.uniforms.shadow_pass.value = n.map.texture),
				(p.uniforms.resolution.value = n.mapSize),
				(p.uniforms.radius.value = n.radius),
				t.setRenderTarget(n.mapPass),
				t.clear(),
				t.renderBufferDirect(i, null, r, p, g, null),
				(m.uniforms.shadow_pass.value = n.mapPass.texture),
				(m.uniforms.resolution.value = n.mapSize),
				(m.uniforms.radius.value = n.radius),
				t.setRenderTarget(n.map),
				t.clear(),
				t.renderBufferDirect(i, null, r, m, g, null);
		}
		function _(e, n, i, r, s, o) {
			let a = null;
			const u = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
			if (
				((a = void 0 !== u ? u : !0 === i.isPointLight ? c : l),
				(t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) ||
					(n.displacementMap && 0 !== n.displacementScale) ||
					(n.alphaMap && n.alphaTest > 0))
			) {
				const t = a.uuid,
					e = n.uuid;
				let i = h[t];
				void 0 === i && ((i = {}), (h[t] = i));
				let r = i[e];
				void 0 === r && ((r = a.clone()), (i[e] = r)), (a = r);
			}
			return (
				(a.visible = n.visible),
				(a.wireframe = n.wireframe),
				(a.side =
					3 === o ? (null !== n.shadowSide ? n.shadowSide : n.side) : null !== n.shadowSide ? n.shadowSide : d[n.side]),
				(a.alphaMap = n.alphaMap),
				(a.alphaTest = n.alphaTest),
				(a.clipShadows = n.clipShadows),
				(a.clippingPlanes = n.clippingPlanes),
				(a.clipIntersection = n.clipIntersection),
				(a.displacementMap = n.displacementMap),
				(a.displacementScale = n.displacementScale),
				(a.displacementBias = n.displacementBias),
				(a.wireframeLinewidth = n.wireframeLinewidth),
				(a.linewidth = n.linewidth),
				!0 === i.isPointLight &&
					!0 === a.isMeshDistanceMaterial &&
					(a.referencePosition.setFromMatrixPosition(i.matrixWorld), (a.nearDistance = r), (a.farDistance = s)),
				a
			);
		}
		function w(n, r, s, o, a) {
			if (!1 === n.visible) return;
			if (
				n.layers.test(r.layers) &&
				(n.isMesh || n.isLine || n.isPoints) &&
				(n.castShadow || (n.receiveShadow && 3 === a)) &&
				(!n.frustumCulled || i.intersectsObject(n))
			) {
				n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
				const i = e.update(n),
					r = n.material;
				if (Array.isArray(r)) {
					const e = i.groups;
					for (let l = 0, c = e.length; l < c; l++) {
						const c = e[l],
							h = r[c.materialIndex];
						if (h && h.visible) {
							const e = _(n, h, o, s.near, s.far, a);
							t.renderBufferDirect(s, null, i, e, n, c);
						}
					}
				} else if (r.visible) {
					const e = _(n, r, o, s.near, s.far, a);
					t.renderBufferDirect(s, null, i, e, n, null);
				}
			}
			const l = n.children;
			for (let t = 0, e = l.length; t < e; t++) w(l[t], r, s, o, a);
		}
		(this.enabled = !1),
			(this.autoUpdate = !0),
			(this.needsUpdate = !1),
			(this.type = 1),
			(this.render = function (e, n, l) {
				if (!1 === v.enabled) return;
				if (!1 === v.autoUpdate && !1 === v.needsUpdate) return;
				if (0 === e.length) return;
				const c = t.getRenderTarget(),
					h = t.getActiveCubeFace(),
					d = t.getActiveMipmapLevel(),
					p = t.state;
				p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
				for (let c = 0, h = e.length; c < h; c++) {
					const h = e[c],
						d = h.shadow;
					if (void 0 === d) {
						console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
						continue;
					}
					if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
					r.copy(d.mapSize);
					const m = d.getFrameExtents();
					if (
						(r.multiply(m),
						s.copy(d.mapSize),
						(r.x > u || r.y > u) &&
							(r.x > u && ((s.x = Math.floor(u / m.x)), (r.x = s.x * m.x), (d.mapSize.x = s.x)),
							r.y > u && ((s.y = Math.floor(u / m.y)), (r.y = s.y * m.y), (d.mapSize.y = s.y))),
						null !== d.map ||
							d.isPointLightShadow ||
							3 !== this.type ||
							((d.map = new wt(r.x, r.y)),
							(d.map.texture.name = h.name + ".shadowMap"),
							(d.mapPass = new wt(r.x, r.y)),
							d.camera.updateProjectionMatrix()),
						null === d.map)
					) {
						const t = { minFilter: a, magFilter: a, format: y };
						(d.map = new wt(r.x, r.y, t)),
							(d.map.texture.name = h.name + ".shadowMap"),
							d.camera.updateProjectionMatrix();
					}
					t.setRenderTarget(d.map), t.clear();
					const f = d.getViewportCount();
					for (let t = 0; t < f; t++) {
						const e = d.getViewport(t);
						o.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
							p.viewport(o),
							d.updateMatrices(h, t),
							(i = d.getFrustum()),
							w(n, l, d.camera, h, this.type);
					}
					d.isPointLightShadow || 3 !== this.type || x(d, l), (d.needsUpdate = !1);
				}
				(v.needsUpdate = !1), t.setRenderTarget(c, h, d);
			});
	}
	function as(e, n, i) {
		const r = i.isWebGL2,
			s = new (function () {
				let t = !1;
				const n = new _t();
				let i = null;
				const r = new _t(0, 0, 0, 0);
				return {
					setMask: function (n) {
						i === n || t || (e.colorMask(n, n, n, n), (i = n));
					},
					setLocked: function (e) {
						t = e;
					},
					setClear: function (t, i, s, o, a) {
						!0 === a && ((t *= o), (i *= o), (s *= o)),
							n.set(t, i, s, o),
							!1 === r.equals(n) && (e.clearColor(t, i, s, o), r.copy(n));
					},
					reset: function () {
						(t = !1), (i = null), r.set(-1, 0, 0, 0);
					},
				};
			})(),
			o = new (function () {
				let t = !1,
					n = null,
					i = null,
					r = null;
				return {
					setTest: function (t) {
						t ? H(2929) : k(2929);
					},
					setMask: function (i) {
						n === i || t || (e.depthMask(i), (n = i));
					},
					setFunc: function (t) {
						if (i !== t) {
							if (t)
								switch (t) {
									case 0:
										e.depthFunc(512);
										break;
									case 1:
										e.depthFunc(519);
										break;
									case 2:
										e.depthFunc(513);
										break;
									case 3:
									default:
										e.depthFunc(515);
										break;
									case 4:
										e.depthFunc(514);
										break;
									case 5:
										e.depthFunc(518);
										break;
									case 6:
										e.depthFunc(516);
										break;
									case 7:
										e.depthFunc(517);
								}
							else e.depthFunc(515);
							i = t;
						}
					},
					setLocked: function (e) {
						t = e;
					},
					setClear: function (t) {
						r !== t && (e.clearDepth(t), (r = t));
					},
					reset: function () {
						(t = !1), (n = null), (i = null), (r = null);
					},
				};
			})(),
			a = new (function () {
				let t = !1,
					n = null,
					i = null,
					r = null,
					s = null,
					o = null,
					a = null,
					l = null,
					c = null;
				return {
					setTest: function (e) {
						t || (e ? H(2960) : k(2960));
					},
					setMask: function (i) {
						n === i || t || (e.stencilMask(i), (n = i));
					},
					setFunc: function (t, n, o) {
						(i === t && r === n && s === o) || (e.stencilFunc(t, n, o), (i = t), (r = n), (s = o));
					},
					setOp: function (t, n, i) {
						(o === t && a === n && l === i) || (e.stencilOp(t, n, i), (o = t), (a = n), (l = i));
					},
					setLocked: function (e) {
						t = e;
					},
					setClear: function (t) {
						c !== t && (e.clearStencil(t), (c = t));
					},
					reset: function () {
						(t = !1), (n = null), (i = null), (r = null), (s = null), (o = null), (a = null), (l = null), (c = null);
					},
				};
			})();
		let l = {},
			c = {},
			h = new WeakMap(),
			u = [],
			d = null,
			p = !1,
			m = null,
			f = null,
			g = null,
			v = null,
			y = null,
			x = null,
			_ = null,
			w = !1,
			b = null,
			M = null,
			S = null,
			E = null,
			T = null;
		const A = e.getParameter(35661);
		let C = !1,
			R = 0;
		const L = e.getParameter(7938);
		-1 !== L.indexOf("WebGL")
			? ((R = parseFloat(/^WebGL (\d)/.exec(L)[1])), (C = R >= 1))
			: -1 !== L.indexOf("OpenGL ES") && ((R = parseFloat(/^OpenGL ES (\d)/.exec(L)[1])), (C = R >= 2));
		let P = null,
			I = {};
		const D = e.getParameter(3088),
			N = e.getParameter(2978),
			z = new _t().fromArray(D),
			B = new _t().fromArray(N);
		function O(t, n, i) {
			const r = new Uint8Array(4),
				s = e.createTexture();
			e.bindTexture(t, s), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
			for (let t = 0; t < i; t++) e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
			return s;
		}
		const F = {};
		function H(t) {
			!0 !== l[t] && (e.enable(t), (l[t] = !0));
		}
		function k(t) {
			!1 !== l[t] && (e.disable(t), (l[t] = !1));
		}
		(F[3553] = O(3553, 3553, 1)),
			(F[34067] = O(34067, 34069, 6)),
			s.setClear(0, 0, 0, 1),
			o.setClear(1),
			a.setClear(0),
			H(2929),
			o.setFunc(3),
			W(!1),
			j(1),
			H(2884),
			G(0);
		const U = { [t]: 32774, 101: 32778, 102: 32779 };
		if (r) (U[103] = 32775), (U[104] = 32776);
		else {
			const t = n.get("EXT_blend_minmax");
			null !== t && ((U[103] = t.MIN_EXT), (U[104] = t.MAX_EXT));
		}
		const V = { 200: 0, 201: 1, 202: 768, 204: 770, 210: 776, 208: 774, 206: 772, 203: 769, 205: 771, 209: 775, 207: 773 };
		function G(n, i, r, s, o, a, l, c) {
			if (0 !== n) {
				if ((!1 === p && (H(3042), (p = !0)), 5 === n))
					(o = o || i),
						(a = a || r),
						(l = l || s),
						(i === f && o === y) || (e.blendEquationSeparate(U[i], U[o]), (f = i), (y = o)),
						(r === g && s === v && a === x && l === _) ||
							(e.blendFuncSeparate(V[r], V[s], V[a], V[l]), (g = r), (v = s), (x = a), (_ = l)),
						(m = n),
						(w = null);
				else if (n !== m || c !== w) {
					if (((f === t && y === t) || (e.blendEquation(32774), (f = t), (y = t)), c))
						switch (n) {
							case 1:
								e.blendFuncSeparate(1, 771, 1, 771);
								break;
							case 2:
								e.blendFunc(1, 1);
								break;
							case 3:
								e.blendFuncSeparate(0, 769, 0, 1);
								break;
							case 4:
								e.blendFuncSeparate(0, 768, 0, 770);
								break;
							default:
								console.error("THREE.WebGLState: Invalid blending: ", n);
						}
					else
						switch (n) {
							case 1:
								e.blendFuncSeparate(770, 771, 1, 771);
								break;
							case 2:
								e.blendFunc(770, 1);
								break;
							case 3:
								e.blendFuncSeparate(0, 769, 0, 1);
								break;
							case 4:
								e.blendFunc(0, 768);
								break;
							default:
								console.error("THREE.WebGLState: Invalid blending: ", n);
						}
					(g = null), (v = null), (x = null), (_ = null), (m = n), (w = c);
				}
			} else !0 === p && (k(3042), (p = !1));
		}
		function W(t) {
			b !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (b = t));
		}
		function j(t) {
			0 !== t
				? (H(2884), t !== M && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032)))
				: k(2884),
				(M = t);
		}
		function q(t, n, i) {
			t ? (H(32823), (E === n && T === i) || (e.polygonOffset(n, i), (E = n), (T = i))) : k(32823);
		}
		function X(t) {
			void 0 === t && (t = 33984 + A - 1), P !== t && (e.activeTexture(t), (P = t));
		}
		return {
			buffers: { color: s, depth: o, stencil: a },
			enable: H,
			disable: k,
			bindFramebuffer: function (t, n) {
				return (
					c[t] !== n &&
					(e.bindFramebuffer(t, n), (c[t] = n), r && (36009 === t && (c[36160] = n), 36160 === t && (c[36009] = n)), !0)
				);
			},
			drawBuffers: function (t, r) {
				let s = u,
					o = !1;
				if (t)
					if (((s = h.get(r)), void 0 === s && ((s = []), h.set(r, s)), t.isWebGLMultipleRenderTargets)) {
						const e = t.texture;
						if (s.length !== e.length || 36064 !== s[0]) {
							for (let t = 0, n = e.length; t < n; t++) s[t] = 36064 + t;
							(s.length = e.length), (o = !0);
						}
					} else 36064 !== s[0] && ((s[0] = 36064), (o = !0));
				else 1029 !== s[0] && ((s[0] = 1029), (o = !0));
				o && (i.isWebGL2 ? e.drawBuffers(s) : n.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
			},
			useProgram: function (t) {
				return d !== t && (e.useProgram(t), (d = t), !0);
			},
			setBlending: G,
			setMaterial: function (t, e) {
				2 === t.side ? k(2884) : H(2884);
				let n = 1 === t.side;
				e && (n = !n),
					W(n),
					1 === t.blending && !1 === t.transparent
						? G(0)
						: G(
								t.blending,
								t.blendEquation,
								t.blendSrc,
								t.blendDst,
								t.blendEquationAlpha,
								t.blendSrcAlpha,
								t.blendDstAlpha,
								t.premultipliedAlpha
						  ),
					o.setFunc(t.depthFunc),
					o.setTest(t.depthTest),
					o.setMask(t.depthWrite),
					s.setMask(t.colorWrite);
				const i = t.stencilWrite;
				a.setTest(i),
					i &&
						(a.setMask(t.stencilWriteMask),
						a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
						a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
					q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
					!0 === t.alphaToCoverage ? H(32926) : k(32926);
			},
			setFlipSided: W,
			setCullFace: j,
			setLineWidth: function (t) {
				t !== S && (C && e.lineWidth(t), (S = t));
			},
			setPolygonOffset: q,
			setScissorTest: function (t) {
				t ? H(3089) : k(3089);
			},
			activeTexture: X,
			bindTexture: function (t, n) {
				null === P && X();
				let i = I[P];
				void 0 === i && ((i = { type: void 0, texture: void 0 }), (I[P] = i)),
					(i.type === t && i.texture === n) || (e.bindTexture(t, n || F[t]), (i.type = t), (i.texture = n));
			},
			unbindTexture: function () {
				const t = I[P];
				void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
			},
			compressedTexImage2D: function () {
				try {
					e.compressedTexImage2D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			texImage2D: function () {
				try {
					e.texImage2D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			texImage3D: function () {
				try {
					e.texImage3D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			texStorage2D: function () {
				try {
					e.texStorage2D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			texStorage3D: function () {
				try {
					e.texStorage3D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			texSubImage2D: function () {
				try {
					e.texSubImage2D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			texSubImage3D: function () {
				try {
					e.texSubImage3D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			compressedTexSubImage2D: function () {
				try {
					e.compressedTexSubImage2D.apply(e, arguments);
				} catch (t) {
					console.error("THREE.WebGLState:", t);
				}
			},
			scissor: function (t) {
				!1 === z.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), z.copy(t));
			},
			viewport: function (t) {
				!1 === B.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), B.copy(t));
			},
			reset: function () {
				e.disable(3042),
					e.disable(2884),
					e.disable(2929),
					e.disable(32823),
					e.disable(3089),
					e.disable(2960),
					e.disable(32926),
					e.blendEquation(32774),
					e.blendFunc(1, 0),
					e.blendFuncSeparate(1, 0, 1, 0),
					e.colorMask(!0, !0, !0, !0),
					e.clearColor(0, 0, 0, 0),
					e.depthMask(!0),
					e.depthFunc(513),
					e.clearDepth(1),
					e.stencilMask(4294967295),
					e.stencilFunc(519, 0, 4294967295),
					e.stencilOp(7680, 7680, 7680),
					e.clearStencil(0),
					e.cullFace(1029),
					e.frontFace(2305),
					e.polygonOffset(0, 0),
					e.activeTexture(33984),
					e.bindFramebuffer(36160, null),
					!0 === r && (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
					e.useProgram(null),
					e.lineWidth(1),
					e.scissor(0, 0, e.canvas.width, e.canvas.height),
					e.viewport(0, 0, e.canvas.width, e.canvas.height),
					(l = {}),
					(P = null),
					(I = {}),
					(c = {}),
					(h = new WeakMap()),
					(u = []),
					(d = null),
					(p = !1),
					(m = null),
					(f = null),
					(g = null),
					(v = null),
					(y = null),
					(x = null),
					(_ = null),
					(w = !1),
					(b = null),
					(M = null),
					(S = null),
					(E = null),
					(T = null),
					z.set(0, 0, e.canvas.width, e.canvas.height),
					B.set(0, 0, e.canvas.width, e.canvas.height),
					s.reset(),
					o.reset(),
					a.reset();
			},
		};
	}
	function ls(t, e, n, i, w, b, M) {
		const S = w.isWebGL2,
			E = w.maxTextures,
			T = w.maxCubemapSize,
			A = w.maxTextureSize,
			C = w.maxSamples,
			R = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
			L = /OculusBrowser/g.test(navigator.userAgent),
			D = new WeakMap();
		let N;
		const z = new WeakMap();
		let B = !1;
		try {
			B = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
		} catch (t) {}
		function O(t, e) {
			return B ? new OffscreenCanvas(t, e) : nt("canvas");
		}
		function F(t, e, n, i) {
			let r = 1;
			if (((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e)) {
				if (
					("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) ||
					("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ||
					("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
				) {
					const i = e ? K : Math.floor,
						s = i(r * t.width),
						o = i(r * t.height);
					void 0 === N && (N = O(s, o));
					const a = n ? O(s, o) : N;
					return (
						(a.width = s),
						(a.height = o),
						a.getContext("2d").drawImage(t, 0, 0, s, o),
						console.warn(
							"THREE.WebGLRenderer: Texture has been resized from (" +
								t.width +
								"x" +
								t.height +
								") to (" +
								s +
								"x" +
								o +
								")."
						),
						a
					);
				}
				return (
					"data" in t &&
						console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
					t
				);
			}
			return t;
		}
		function k(t) {
			return Z(t.width) && Z(t.height);
		}
		function U(t, e) {
			return t.generateMipmaps && e && t.minFilter !== a && t.minFilter !== h;
		}
		function V(e) {
			t.generateMipmap(e);
		}
		function G(n, i, r, s, o = !1) {
			if (!1 === S) return i;
			if (null !== n) {
				if (void 0 !== t[n]) return t[n];
				console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
			}
			let a = i;
			return (
				6403 === i && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)),
				33319 === i && (5126 === r && (a = 33328), 5131 === r && (a = 33327), 5121 === r && (a = 33323)),
				6408 === i &&
					(5126 === r && (a = 34836),
					5131 === r && (a = 34842),
					5121 === r && (a = s === I && !1 === o ? 35907 : 32856),
					32819 === r && (a = 32854),
					32820 === r && (a = 32855)),
				(33325 !== a && 33326 !== a && 33327 !== a && 33328 !== a && 34842 !== a && 34836 !== a) ||
					e.get("EXT_color_buffer_float"),
				a
			);
		}
		function W(t, e, n) {
			return !0 === U(t, n) || (t.isFramebufferTexture && t.minFilter !== a && t.minFilter !== h)
				? Math.log2(Math.max(e.width, e.height)) + 1
				: void 0 !== t.mipmaps && t.mipmaps.length > 0
				? t.mipmaps.length
				: t.isCompressedTexture && Array.isArray(t.image)
				? e.mipmaps.length
				: 1;
		}
		function j(t) {
			return t === a || t === l || t === c ? 9728 : 9729;
		}
		function q(t) {
			const e = t.target;
			e.removeEventListener("dispose", q),
				(function (t) {
					const e = i.get(t);
					if (void 0 === e.__webglInit) return;
					const n = t.source,
						r = z.get(n);
					if (r) {
						const i = r[e.__cacheKey];
						i.usedTimes--, 0 === i.usedTimes && Y(t), 0 === Object.keys(r).length && z.delete(n);
					}
					i.remove(t);
				})(e),
				e.isVideoTexture && D.delete(e);
		}
		function X(e) {
			const n = e.target;
			n.removeEventListener("dispose", X),
				(function (e) {
					const n = e.texture,
						r = i.get(e),
						s = i.get(n);
					if (
						(void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), M.memory.textures--),
						e.depthTexture && e.depthTexture.dispose(),
						e.isWebGLCubeRenderTarget)
					)
						for (let e = 0; e < 6; e++)
							t.deleteFramebuffer(r.__webglFramebuffer[e]),
								r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
					else
						t.deleteFramebuffer(r.__webglFramebuffer),
							r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer),
							r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
							r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer),
							r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
					if (e.isWebGLMultipleRenderTargets)
						for (let e = 0, r = n.length; e < r; e++) {
							const r = i.get(n[e]);
							r.__webglTexture && (t.deleteTexture(r.__webglTexture), M.memory.textures--), i.remove(n[e]);
						}
					i.remove(n), i.remove(e);
				})(n);
		}
		function Y(e) {
			const n = i.get(e);
			t.deleteTexture(n.__webglTexture);
			const r = e.source;
			delete z.get(r)[n.__cacheKey], M.memory.textures--;
		}
		let $ = 0;
		function J(t, e) {
			const r = i.get(t);
			if (
				(t.isVideoTexture &&
					(function (t) {
						const e = M.render.frame;
						D.get(t) !== e && (D.set(t, e), t.update());
					})(t),
				!1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version)
			) {
				const n = t.image;
				if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
				else {
					if (!1 !== n.complete) return void rt(r, t, e);
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
				}
			}
			n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
		}
		const Q = { [r]: 10497, [s]: 33071, [o]: 33648 },
			tt = { [a]: 9728, [l]: 9984, [c]: 9986, [h]: 9729, 1007: 9985, [u]: 9987 };
		function et(n, r, o) {
			if (
				(o
					? (t.texParameteri(n, 10242, Q[r.wrapS]),
					  t.texParameteri(n, 10243, Q[r.wrapT]),
					  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, Q[r.wrapR]),
					  t.texParameteri(n, 10240, tt[r.magFilter]),
					  t.texParameteri(n, 10241, tt[r.minFilter]))
					: (t.texParameteri(n, 10242, 33071),
					  t.texParameteri(n, 10243, 33071),
					  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
					  (r.wrapS === s && r.wrapT === s) ||
							console.warn(
								"THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
							),
					  t.texParameteri(n, 10240, j(r.magFilter)),
					  t.texParameteri(n, 10241, j(r.minFilter)),
					  r.minFilter !== a &&
							r.minFilter !== h &&
							console.warn(
								"THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
							)),
				!0 === e.has("EXT_texture_filter_anisotropic"))
			) {
				const s = e.get("EXT_texture_filter_anisotropic");
				if (r.type === f && !1 === e.has("OES_texture_float_linear")) return;
				if (!1 === S && r.type === g && !1 === e.has("OES_texture_half_float_linear")) return;
				(r.anisotropy > 1 || i.get(r).__currentAnisotropy) &&
					(t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, w.getMaxAnisotropy())),
					(i.get(r).__currentAnisotropy = r.anisotropy));
			}
		}
		function it(e, n) {
			let i = !1;
			void 0 === e.__webglInit && ((e.__webglInit = !0), n.addEventListener("dispose", q));
			const r = n.source;
			let s = z.get(r);
			void 0 === s && ((s = {}), z.set(r, s));
			const o = (function (t) {
				const e = [];
				return (
					e.push(t.wrapS),
					e.push(t.wrapT),
					e.push(t.magFilter),
					e.push(t.minFilter),
					e.push(t.anisotropy),
					e.push(t.internalFormat),
					e.push(t.format),
					e.push(t.type),
					e.push(t.generateMipmaps),
					e.push(t.premultiplyAlpha),
					e.push(t.flipY),
					e.push(t.unpackAlignment),
					e.push(t.encoding),
					e.join()
				);
			})(n);
			if (o !== e.__cacheKey) {
				void 0 === s[o] && ((s[o] = { texture: t.createTexture(), usedTimes: 0 }), M.memory.textures++, (i = !0)),
					s[o].usedTimes++;
				const r = s[e.__cacheKey];
				void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && Y(n)),
					(e.__cacheKey = o),
					(e.__webglTexture = s[o].texture);
			}
			return i;
		}
		function rt(e, i, r) {
			let o = 3553;
			i.isDataArrayTexture && (o = 35866), i.isData3DTexture && (o = 32879);
			const l = it(e, i),
				c = i.source;
			if ((n.activeTexture(33984 + r), n.bindTexture(o, e.__webglTexture), c.version !== c.__currentVersion || !0 === l)) {
				t.pixelStorei(37440, i.flipY),
					t.pixelStorei(37441, i.premultiplyAlpha),
					t.pixelStorei(3317, i.unpackAlignment),
					t.pixelStorei(37443, 0);
				const r =
					(function (t) {
						return !S && (t.wrapS !== s || t.wrapT !== s || (t.minFilter !== a && t.minFilter !== h));
					})(i) && !1 === k(i.image);
				let u = F(i.image, r, !1, A);
				u = ht(i, u);
				const d = k(u) || S,
					g = b.convert(i.format, i.encoding);
				let w,
					M = b.convert(i.type),
					E = G(i.internalFormat, g, M, i.encoding, i.isVideoTexture);
				et(o, i, d);
				const T = i.mipmaps,
					C = S && !0 !== i.isVideoTexture,
					R = void 0 === e.__version || !0 === l,
					L = W(i, u, d);
				if (i.isDepthTexture)
					(E = 6402),
						S
							? (E = i.type === f ? 36012 : i.type === m ? 33190 : i.type === v ? 35056 : 33189)
							: i.type === f && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
						i.format === x &&
							6402 === E &&
							i.type !== p &&
							i.type !== m &&
							(console.warn(
								"THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
							),
							(i.type = p),
							(M = b.convert(i.type))),
						i.format === _ &&
							6402 === E &&
							((E = 34041),
							i.type !== v &&
								(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
								(i.type = v),
								(M = b.convert(i.type)))),
						R &&
							(C
								? n.texStorage2D(3553, 1, E, u.width, u.height)
								: n.texImage2D(3553, 0, E, u.width, u.height, 0, g, M, null));
				else if (i.isDataTexture)
					if (T.length > 0 && d) {
						C && R && n.texStorage2D(3553, L, E, T[0].width, T[0].height);
						for (let t = 0, e = T.length; t < e; t++)
							(w = T[t]),
								C
									? n.texSubImage2D(3553, t, 0, 0, w.width, w.height, g, M, w.data)
									: n.texImage2D(3553, t, E, w.width, w.height, 0, g, M, w.data);
						i.generateMipmaps = !1;
					} else
						C
							? (R && n.texStorage2D(3553, L, E, u.width, u.height),
							  n.texSubImage2D(3553, 0, 0, 0, u.width, u.height, g, M, u.data))
							: n.texImage2D(3553, 0, E, u.width, u.height, 0, g, M, u.data);
				else if (i.isCompressedTexture) {
					C && R && n.texStorage2D(3553, L, E, T[0].width, T[0].height);
					for (let t = 0, e = T.length; t < e; t++)
						(w = T[t]),
							i.format !== y
								? null !== g
									? C
										? n.compressedTexSubImage2D(3553, t, 0, 0, w.width, w.height, g, w.data)
										: n.compressedTexImage2D(3553, t, E, w.width, w.height, 0, w.data)
									: console.warn(
											"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
									  )
								: C
								? n.texSubImage2D(3553, t, 0, 0, w.width, w.height, g, M, w.data)
								: n.texImage2D(3553, t, E, w.width, w.height, 0, g, M, w.data);
				} else if (i.isDataArrayTexture)
					C
						? (R && n.texStorage3D(35866, L, E, u.width, u.height, u.depth),
						  n.texSubImage3D(35866, 0, 0, 0, 0, u.width, u.height, u.depth, g, M, u.data))
						: n.texImage3D(35866, 0, E, u.width, u.height, u.depth, 0, g, M, u.data);
				else if (i.isData3DTexture)
					C
						? (R && n.texStorage3D(32879, L, E, u.width, u.height, u.depth),
						  n.texSubImage3D(32879, 0, 0, 0, 0, u.width, u.height, u.depth, g, M, u.data))
						: n.texImage3D(32879, 0, E, u.width, u.height, u.depth, 0, g, M, u.data);
				else if (i.isFramebufferTexture) {
					if (R)
						if (C) n.texStorage2D(3553, L, E, u.width, u.height);
						else {
							let t = u.width,
								e = u.height;
							for (let i = 0; i < L; i++) n.texImage2D(3553, i, E, t, e, 0, g, M, null), (t >>= 1), (e >>= 1);
						}
				} else if (T.length > 0 && d) {
					C && R && n.texStorage2D(3553, L, E, T[0].width, T[0].height);
					for (let t = 0, e = T.length; t < e; t++)
						(w = T[t]), C ? n.texSubImage2D(3553, t, 0, 0, g, M, w) : n.texImage2D(3553, t, E, g, M, w);
					i.generateMipmaps = !1;
				} else
					C
						? (R && n.texStorage2D(3553, L, E, u.width, u.height), n.texSubImage2D(3553, 0, 0, 0, g, M, u))
						: n.texImage2D(3553, 0, E, g, M, u);
				U(i, d) && V(o), (c.__currentVersion = c.version), i.onUpdate && i.onUpdate(i);
			}
			e.__version = i.version;
		}
		function st(e, r, s, o, a) {
			const l = b.convert(s.format, s.encoding),
				c = b.convert(s.type),
				h = G(s.internalFormat, l, c, s.encoding);
			i.get(r).__hasExternalTextures ||
				(32879 === a || 35866 === a
					? n.texImage3D(a, 0, h, r.width, r.height, r.depth, 0, l, c, null)
					: n.texImage2D(a, 0, h, r.width, r.height, 0, l, c, null)),
				n.bindFramebuffer(36160, e),
				ct(r)
					? R.framebufferTexture2DMultisampleEXT(36160, o, a, i.get(s).__webglTexture, 0, lt(r))
					: t.framebufferTexture2D(36160, o, a, i.get(s).__webglTexture, 0),
				n.bindFramebuffer(36160, null);
		}
		function ot(e, n, i) {
			if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
				let r = 33189;
				if (i || ct(n)) {
					const e = n.depthTexture;
					e && e.isDepthTexture && (e.type === f ? (r = 36012) : e.type === m && (r = 33190));
					const i = lt(n);
					ct(n)
						? R.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height)
						: t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
				} else t.renderbufferStorage(36161, r, n.width, n.height);
				t.framebufferRenderbuffer(36160, 36096, 36161, e);
			} else if (n.depthBuffer && n.stencilBuffer) {
				const r = lt(n);
				i && !1 === ct(n)
					? t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height)
					: ct(n)
					? R.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height)
					: t.renderbufferStorage(36161, 34041, n.width, n.height),
					t.framebufferRenderbuffer(36160, 33306, 36161, e);
			} else {
				const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture,
					r = b.convert(e.format, e.encoding),
					s = b.convert(e.type),
					o = G(e.internalFormat, r, s, e.encoding),
					a = lt(n);
				i && !1 === ct(n)
					? t.renderbufferStorageMultisample(36161, a, o, n.width, n.height)
					: ct(n)
					? R.renderbufferStorageMultisampleEXT(36161, a, o, n.width, n.height)
					: t.renderbufferStorage(36161, o, n.width, n.height);
			}
			t.bindRenderbuffer(36161, null);
		}
		function at(e) {
			const r = i.get(e),
				s = !0 === e.isWebGLCubeRenderTarget;
			if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
				if (s) throw new Error("target.depthTexture not supported in Cube render targets");
				!(function (e, r) {
					if (r && r.isWebGLCubeRenderTarget)
						throw new Error("Depth Texture with cube render targets is not supported");
					if ((n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture))
						throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
					(i.get(r.depthTexture).__webglTexture &&
						r.depthTexture.image.width === r.width &&
						r.depthTexture.image.height === r.height) ||
						((r.depthTexture.image.width = r.width),
						(r.depthTexture.image.height = r.height),
						(r.depthTexture.needsUpdate = !0)),
						J(r.depthTexture, 0);
					const s = i.get(r.depthTexture).__webglTexture,
						o = lt(r);
					if (r.depthTexture.format === x)
						ct(r)
							? R.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, o)
							: t.framebufferTexture2D(36160, 36096, 3553, s, 0);
					else {
						if (r.depthTexture.format !== _) throw new Error("Unknown depthTexture format");
						ct(r)
							? R.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, o)
							: t.framebufferTexture2D(36160, 33306, 3553, s, 0);
					}
				})(r.__webglFramebuffer, e);
			} else if (s) {
				r.__webglDepthbuffer = [];
				for (let i = 0; i < 6; i++)
					n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
						(r.__webglDepthbuffer[i] = t.createRenderbuffer()),
						ot(r.__webglDepthbuffer[i], e, !1);
			} else
				n.bindFramebuffer(36160, r.__webglFramebuffer),
					(r.__webglDepthbuffer = t.createRenderbuffer()),
					ot(r.__webglDepthbuffer, e, !1);
			n.bindFramebuffer(36160, null);
		}
		function lt(t) {
			return Math.min(C, t.samples);
		}
		function ct(t) {
			const n = i.get(t);
			return S && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture;
		}
		function ht(t, n) {
			const i = t.encoding,
				r = t.format,
				s = t.type;
			return (
				!0 === t.isCompressedTexture ||
					!0 === t.isVideoTexture ||
					t.format === H ||
					(i !== P &&
						(i === I
							? !1 === S
								? !0 === e.has("EXT_sRGB") && r === y
									? ((t.format = H), (t.minFilter = h), (t.generateMipmaps = !1))
									: (n = ft.sRGBToLinear(n))
								: (r === y && s === d) ||
								  console.warn(
										"THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
								  )
							: console.error("THREE.WebGLTextures: Unsupported texture encoding:", i))),
				n
			);
		}
		(this.allocateTextureUnit = function () {
			const t = $;
			return (
				t >= E &&
					console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + E),
				($ += 1),
				t
			);
		}),
			(this.resetTextureUnits = function () {
				$ = 0;
			}),
			(this.setTexture2D = J),
			(this.setTexture2DArray = function (t, e) {
				const r = i.get(t);
				t.version > 0 && r.__version !== t.version
					? rt(r, t, e)
					: (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
			}),
			(this.setTexture3D = function (t, e) {
				const r = i.get(t);
				t.version > 0 && r.__version !== t.version
					? rt(r, t, e)
					: (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
			}),
			(this.setTextureCube = function (e, r) {
				const s = i.get(e);
				e.version > 0 && s.__version !== e.version
					? (function (e, i, r) {
							if (6 !== i.image.length) return;
							const s = it(e, i),
								o = i.source;
							if (
								(n.activeTexture(33984 + r),
								n.bindTexture(34067, e.__webglTexture),
								o.version !== o.__currentVersion || !0 === s)
							) {
								t.pixelStorei(37440, i.flipY),
									t.pixelStorei(37441, i.premultiplyAlpha),
									t.pixelStorei(3317, i.unpackAlignment),
									t.pixelStorei(37443, 0);
								const r = i.isCompressedTexture || i.image[0].isCompressedTexture,
									s = i.image[0] && i.image[0].isDataTexture,
									a = [];
								for (let t = 0; t < 6; t++)
									(a[t] = r || s ? (s ? i.image[t].image : i.image[t]) : F(i.image[t], !1, !0, T)),
										(a[t] = ht(i, a[t]));
								const l = a[0],
									c = k(l) || S,
									h = b.convert(i.format, i.encoding),
									u = b.convert(i.type),
									d = G(i.internalFormat, h, u, i.encoding),
									p = S && !0 !== i.isVideoTexture,
									m = void 0 === e.__version;
								let f,
									g = W(i, l, c);
								if ((et(34067, i, c), r)) {
									p && m && n.texStorage2D(34067, g, d, l.width, l.height);
									for (let t = 0; t < 6; t++) {
										f = a[t].mipmaps;
										for (let e = 0; e < f.length; e++) {
											const r = f[e];
											i.format !== y
												? null !== h
													? p
														? n.compressedTexSubImage2D(
																34069 + t,
																e,
																0,
																0,
																r.width,
																r.height,
																h,
																r.data
														  )
														: n.compressedTexImage2D(34069 + t, e, d, r.width, r.height, 0, r.data)
													: console.warn(
															"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
													  )
												: p
												? n.texSubImage2D(34069 + t, e, 0, 0, r.width, r.height, h, u, r.data)
												: n.texImage2D(34069 + t, e, d, r.width, r.height, 0, h, u, r.data);
										}
									}
								} else {
									(f = i.mipmaps),
										p && m && (f.length > 0 && g++, n.texStorage2D(34067, g, d, a[0].width, a[0].height));
									for (let t = 0; t < 6; t++)
										if (s) {
											p
												? n.texSubImage2D(34069 + t, 0, 0, 0, a[t].width, a[t].height, h, u, a[t].data)
												: n.texImage2D(34069 + t, 0, d, a[t].width, a[t].height, 0, h, u, a[t].data);
											for (let e = 0; e < f.length; e++) {
												const i = f[e].image[t].image;
												p
													? n.texSubImage2D(34069 + t, e + 1, 0, 0, i.width, i.height, h, u, i.data)
													: n.texImage2D(34069 + t, e + 1, d, i.width, i.height, 0, h, u, i.data);
											}
										} else {
											p
												? n.texSubImage2D(34069 + t, 0, 0, 0, h, u, a[t])
												: n.texImage2D(34069 + t, 0, d, h, u, a[t]);
											for (let e = 0; e < f.length; e++) {
												const i = f[e];
												p
													? n.texSubImage2D(34069 + t, e + 1, 0, 0, h, u, i.image[t])
													: n.texImage2D(34069 + t, e + 1, d, h, u, i.image[t]);
											}
										}
								}
								U(i, c) && V(34067), (o.__currentVersion = o.version), i.onUpdate && i.onUpdate(i);
							}
							e.__version = i.version;
					  })(s, e, r)
					: (n.activeTexture(33984 + r), n.bindTexture(34067, s.__webglTexture));
			}),
			(this.rebindTextures = function (t, e, n) {
				const r = i.get(t);
				void 0 !== e && st(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== n && at(t);
			}),
			(this.setupRenderTarget = function (e) {
				const r = e.texture,
					s = i.get(e),
					o = i.get(r);
				e.addEventListener("dispose", X),
					!0 !== e.isWebGLMultipleRenderTargets &&
						(void 0 === o.__webglTexture && (o.__webglTexture = t.createTexture()),
						(o.__version = r.version),
						M.memory.textures++);
				const a = !0 === e.isWebGLCubeRenderTarget,
					l = !0 === e.isWebGLMultipleRenderTargets,
					c = k(e) || S;
				if (a) {
					s.__webglFramebuffer = [];
					for (let e = 0; e < 6; e++) s.__webglFramebuffer[e] = t.createFramebuffer();
				} else if (((s.__webglFramebuffer = t.createFramebuffer()), l))
					if (w.drawBuffers) {
						const n = e.texture;
						for (let e = 0, r = n.length; e < r; e++) {
							const r = i.get(n[e]);
							void 0 === r.__webglTexture && ((r.__webglTexture = t.createTexture()), M.memory.textures++);
						}
					} else
						console.warn(
							"THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
						);
				else if (S && e.samples > 0 && !1 === ct(e)) {
					(s.__webglMultisampledFramebuffer = t.createFramebuffer()),
						(s.__webglColorRenderbuffer = t.createRenderbuffer()),
						t.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
					const i = b.convert(r.format, r.encoding),
						o = b.convert(r.type),
						a = G(r.internalFormat, i, o, r.encoding),
						l = lt(e);
					t.renderbufferStorageMultisample(36161, l, a, e.width, e.height),
						n.bindFramebuffer(36160, s.__webglMultisampledFramebuffer),
						t.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer),
						t.bindRenderbuffer(36161, null),
						e.depthBuffer &&
							((s.__webglDepthRenderbuffer = t.createRenderbuffer()), ot(s.__webglDepthRenderbuffer, e, !0)),
						n.bindFramebuffer(36160, null);
				}
				if (a) {
					n.bindTexture(34067, o.__webglTexture), et(34067, r, c);
					for (let t = 0; t < 6; t++) st(s.__webglFramebuffer[t], e, r, 36064, 34069 + t);
					U(r, c) && V(34067), n.unbindTexture();
				} else if (l) {
					const t = e.texture;
					for (let r = 0, o = t.length; r < o; r++) {
						const o = t[r],
							a = i.get(o);
						n.bindTexture(3553, a.__webglTexture),
							et(3553, o, c),
							st(s.__webglFramebuffer, e, o, 36064 + r, 3553),
							U(o, c) && V(3553);
					}
					n.unbindTexture();
				} else {
					let t = 3553;
					(e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
						(S
							? (t = e.isWebGL3DRenderTarget ? 32879 : 35866)
							: console.error(
									"THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
							  )),
						n.bindTexture(t, o.__webglTexture),
						et(t, r, c),
						st(s.__webglFramebuffer, e, r, 36064, t),
						U(r, c) && V(t),
						n.unbindTexture();
				}
				e.depthBuffer && at(e);
			}),
			(this.updateRenderTargetMipmap = function (t) {
				const e = k(t) || S,
					r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
				for (let s = 0, o = r.length; s < o; s++) {
					const o = r[s];
					if (U(o, e)) {
						const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
							r = i.get(o).__webglTexture;
						n.bindTexture(e, r), V(e), n.unbindTexture();
					}
				}
			}),
			(this.updateMultisampleRenderTarget = function (e) {
				if (S && e.samples > 0 && !1 === ct(e)) {
					const r = e.width,
						s = e.height;
					let o = 16384;
					const a = [36064],
						l = e.stencilBuffer ? 33306 : 36096;
					e.depthBuffer && a.push(l);
					const c = i.get(e),
						h = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
					!1 === h && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)),
						n.bindFramebuffer(36008, c.__webglMultisampledFramebuffer),
						n.bindFramebuffer(36009, c.__webglFramebuffer),
						!0 === h && (t.invalidateFramebuffer(36008, [l]), t.invalidateFramebuffer(36009, [l])),
						t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, o, 9728),
						L && t.invalidateFramebuffer(36008, a),
						n.bindFramebuffer(36008, null),
						n.bindFramebuffer(36009, c.__webglMultisampledFramebuffer);
				}
			}),
			(this.setupDepthRenderbuffer = at),
			(this.setupFrameBufferTexture = st),
			(this.useMultisampledRTT = ct);
	}
	function cs(t, e, n) {
		const i = n.isWebGL2;
		return {
			convert: function (n, r = null) {
				let s;
				if (n === d) return 5121;
				if (1017 === n) return 32819;
				if (1018 === n) return 32820;
				if (1010 === n) return 5120;
				if (1011 === n) return 5122;
				if (n === p) return 5123;
				if (1013 === n) return 5124;
				if (n === m) return 5125;
				if (n === f) return 5126;
				if (n === g) return i ? 5131 : ((s = e.get("OES_texture_half_float")), null !== s ? s.HALF_FLOAT_OES : null);
				if (1021 === n) return 6406;
				if (n === y) return 6408;
				if (1024 === n) return 6409;
				if (1025 === n) return 6410;
				if (n === x) return 6402;
				if (n === _) return 34041;
				if (1028 === n) return 6403;
				if (1022 === n)
					return (
						console.warn(
							"THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
						),
						6408
					);
				if (n === H) return (s = e.get("EXT_sRGB")), null !== s ? s.SRGB_ALPHA_EXT : null;
				if (1029 === n) return 36244;
				if (1030 === n) return 33319;
				if (1031 === n) return 33320;
				if (1033 === n) return 36249;
				if (n === w || n === b || n === M || n === S)
					if (r === I) {
						if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === s)) return null;
						if (n === w) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
						if (n === b) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
						if (n === M) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
						if (n === S) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
					} else {
						if (((s = e.get("WEBGL_compressed_texture_s3tc")), null === s)) return null;
						if (n === w) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
						if (n === b) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
						if (n === M) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
						if (n === S) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
					}
				if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
					if (((s = e.get("WEBGL_compressed_texture_pvrtc")), null === s)) return null;
					if (35840 === n) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
					if (35841 === n) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
					if (35842 === n) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
					if (35843 === n) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
				}
				if (36196 === n)
					return (s = e.get("WEBGL_compressed_texture_etc1")), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
				if (37492 === n || 37496 === n) {
					if (((s = e.get("WEBGL_compressed_texture_etc")), null === s)) return null;
					if (37492 === n) return r === I ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
					if (37496 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
				}
				if (
					37808 === n ||
					37809 === n ||
					37810 === n ||
					37811 === n ||
					37812 === n ||
					37813 === n ||
					37814 === n ||
					37815 === n ||
					37816 === n ||
					37817 === n ||
					37818 === n ||
					37819 === n ||
					37820 === n ||
					37821 === n
				) {
					if (((s = e.get("WEBGL_compressed_texture_astc")), null === s)) return null;
					if (37808 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
					if (37809 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
					if (37810 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
					if (37811 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
					if (37812 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
					if (37813 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
					if (37814 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
					if (37815 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
					if (37816 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
					if (37817 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
					if (37818 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
					if (37819 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
					if (37820 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
					if (37821 === n) return r === I ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
				}
				if (36492 === n) {
					if (((s = e.get("EXT_texture_compression_bptc")), null === s)) return null;
					if (36492 === n) return r === I ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				}
				return n === v
					? i
						? 34042
						: ((s = e.get("WEBGL_depth_texture")), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null)
					: void 0 !== t[n]
					? t[n]
					: null;
			},
		};
	}
	ss.prototype.isMeshDistanceMaterial = !0;
	class hs extends Cn {
		constructor(t = []) {
			super(), (this.cameras = t);
		}
	}
	hs.prototype.isArrayCamera = !0;
	class us extends Ae {
		constructor() {
			super(), (this.type = "Group");
		}
	}
	us.prototype.isGroup = !0;
	const ds = { type: "move" };
	class ps {
		constructor() {
			(this._targetRay = null), (this._grip = null), (this._hand = null);
		}
		getHandSpace() {
			return (
				null === this._hand &&
					((this._hand = new us()),
					(this._hand.matrixAutoUpdate = !1),
					(this._hand.visible = !1),
					(this._hand.joints = {}),
					(this._hand.inputState = { pinching: !1 })),
				this._hand
			);
		}
		getTargetRaySpace() {
			return (
				null === this._targetRay &&
					((this._targetRay = new us()),
					(this._targetRay.matrixAutoUpdate = !1),
					(this._targetRay.visible = !1),
					(this._targetRay.hasLinearVelocity = !1),
					(this._targetRay.linearVelocity = new Et()),
					(this._targetRay.hasAngularVelocity = !1),
					(this._targetRay.angularVelocity = new Et())),
				this._targetRay
			);
		}
		getGripSpace() {
			return (
				null === this._grip &&
					((this._grip = new us()),
					(this._grip.matrixAutoUpdate = !1),
					(this._grip.visible = !1),
					(this._grip.hasLinearVelocity = !1),
					(this._grip.linearVelocity = new Et()),
					(this._grip.hasAngularVelocity = !1),
					(this._grip.angularVelocity = new Et())),
				this._grip
			);
		}
		dispatchEvent(t) {
			return (
				null !== this._targetRay && this._targetRay.dispatchEvent(t),
				null !== this._grip && this._grip.dispatchEvent(t),
				null !== this._hand && this._hand.dispatchEvent(t),
				this
			);
		}
		disconnect(t) {
			return (
				this.dispatchEvent({ type: "disconnected", data: t }),
				null !== this._targetRay && (this._targetRay.visible = !1),
				null !== this._grip && (this._grip.visible = !1),
				null !== this._hand && (this._hand.visible = !1),
				this
			);
		}
		update(t, e, n) {
			let i = null,
				r = null,
				s = null;
			const o = this._targetRay,
				a = this._grip,
				l = this._hand;
			if (t && "visible-blurred" !== e.session.visibilityState)
				if (
					(null !== o &&
						((i = e.getPose(t.targetRaySpace, n)),
						null !== i &&
							(o.matrix.fromArray(i.transform.matrix),
							o.matrix.decompose(o.position, o.rotation, o.scale),
							i.linearVelocity
								? ((o.hasLinearVelocity = !0), o.linearVelocity.copy(i.linearVelocity))
								: (o.hasLinearVelocity = !1),
							i.angularVelocity
								? ((o.hasAngularVelocity = !0), o.angularVelocity.copy(i.angularVelocity))
								: (o.hasAngularVelocity = !1),
							this.dispatchEvent(ds))),
					l && t.hand)
				) {
					s = !0;
					for (const i of t.hand.values()) {
						const t = e.getJointPose(i, n);
						if (void 0 === l.joints[i.jointName]) {
							const t = new us();
							(t.matrixAutoUpdate = !1), (t.visible = !1), (l.joints[i.jointName] = t), l.add(t);
						}
						const r = l.joints[i.jointName];
						null !== t &&
							(r.matrix.fromArray(t.transform.matrix),
							r.matrix.decompose(r.position, r.rotation, r.scale),
							(r.jointRadius = t.radius)),
							(r.visible = null !== t);
					}
					const i = l.joints["index-finger-tip"],
						r = l.joints["thumb-tip"],
						o = i.position.distanceTo(r.position),
						a = 0.02,
						c = 0.005;
					l.inputState.pinching && o > a + c
						? ((l.inputState.pinching = !1),
						  this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this }))
						: !l.inputState.pinching &&
						  o <= a - c &&
						  ((l.inputState.pinching = !0),
						  this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
				} else
					null !== a &&
						t.gripSpace &&
						((r = e.getPose(t.gripSpace, n)),
						null !== r &&
							(a.matrix.fromArray(r.transform.matrix),
							a.matrix.decompose(a.position, a.rotation, a.scale),
							r.linearVelocity
								? ((a.hasLinearVelocity = !0), a.linearVelocity.copy(r.linearVelocity))
								: (a.hasLinearVelocity = !1),
							r.angularVelocity
								? ((a.hasAngularVelocity = !0), a.angularVelocity.copy(r.angularVelocity))
								: (a.hasAngularVelocity = !1)));
			return (
				null !== o && (o.visible = null !== i),
				null !== a && (a.visible = null !== r),
				null !== l && (l.visible = null !== s),
				this
			);
		}
	}
	class ms extends xt {
		constructor(t, e, n, i, r, s, o, l, c, h) {
			if ((h = void 0 !== h ? h : x) !== x && h !== _)
				throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
			void 0 === n && h === x && (n = p),
				void 0 === n && h === _ && (n = v),
				super(null, i, r, s, o, l, h, n, c),
				(this.image = { width: t, height: e }),
				(this.magFilter = void 0 !== o ? o : a),
				(this.minFilter = void 0 !== l ? l : a),
				(this.flipY = !1),
				(this.generateMipmaps = !1);
		}
	}
	ms.prototype.isDepthTexture = !0;
	class fs extends k {
		constructor(t, e) {
			super();
			const n = this;
			let i = null,
				r = 1,
				s = null,
				o = "local-floor",
				a = null,
				l = null,
				c = null,
				h = null,
				u = null,
				m = null;
			const f = e.getContextAttributes();
			let g = null,
				w = null;
			const b = [],
				M = new Map(),
				S = new Cn();
			S.layers.enable(1), (S.viewport = new _t());
			const E = new Cn();
			E.layers.enable(2), (E.viewport = new _t());
			const T = [S, E],
				A = new hs();
			A.layers.enable(1), A.layers.enable(2);
			let C = null,
				R = null;
			function L(t) {
				const e = M.get(t.inputSource);
				e && e.dispatchEvent({ type: t.type, data: t.inputSource });
			}
			function P() {
				M.forEach(function (t, e) {
					t.disconnect(e);
				}),
					M.clear(),
					(C = null),
					(R = null),
					t.setRenderTarget(g),
					(u = null),
					(h = null),
					(c = null),
					(i = null),
					(w = null),
					F.stop(),
					(n.isPresenting = !1),
					n.dispatchEvent({ type: "sessionend" });
			}
			function D(t) {
				const e = i.inputSources;
				for (let t = 0; t < e.length; t++) {
					const n = "right" === e[t].handedness ? 1 : 0;
					M.set(e[t], b[n]);
				}
				for (let e = 0; e < t.removed.length; e++) {
					const n = t.removed[e],
						i = M.get(n);
					i && (i.dispatchEvent({ type: "disconnected", data: n }), M.delete(n));
				}
				for (let e = 0; e < t.added.length; e++) {
					const n = t.added[e],
						i = M.get(n);
					i && i.dispatchEvent({ type: "connected", data: n });
				}
			}
			(this.cameraAutoUpdate = !0),
				(this.enabled = !1),
				(this.isPresenting = !1),
				(this.getController = function (t) {
					let e = b[t];
					return void 0 === e && ((e = new ps()), (b[t] = e)), e.getTargetRaySpace();
				}),
				(this.getControllerGrip = function (t) {
					let e = b[t];
					return void 0 === e && ((e = new ps()), (b[t] = e)), e.getGripSpace();
				}),
				(this.getHand = function (t) {
					let e = b[t];
					return void 0 === e && ((e = new ps()), (b[t] = e)), e.getHandSpace();
				}),
				(this.setFramebufferScaleFactor = function (t) {
					(r = t),
						!0 === n.isPresenting &&
							console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
				}),
				(this.setReferenceSpaceType = function (t) {
					(o = t),
						!0 === n.isPresenting &&
							console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
				}),
				(this.getReferenceSpace = function () {
					return a || s;
				}),
				(this.setReferenceSpace = function (t) {
					a = t;
				}),
				(this.getBaseLayer = function () {
					return null !== h ? h : u;
				}),
				(this.getBinding = function () {
					return c;
				}),
				(this.getFrame = function () {
					return m;
				}),
				(this.getSession = function () {
					return i;
				}),
				(this.setSession = async function (a) {
					if (((i = a), null !== i)) {
						if (
							((g = t.getRenderTarget()),
							i.addEventListener("select", L),
							i.addEventListener("selectstart", L),
							i.addEventListener("selectend", L),
							i.addEventListener("squeeze", L),
							i.addEventListener("squeezestart", L),
							i.addEventListener("squeezeend", L),
							i.addEventListener("end", P),
							i.addEventListener("inputsourceschange", D),
							!0 !== f.xrCompatible && (await e.makeXRCompatible()),
							void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2)
						) {
							const n = {
								antialias: void 0 !== i.renderState.layers || f.antialias,
								alpha: f.alpha,
								depth: f.depth,
								stencil: f.stencil,
								framebufferScaleFactor: r,
							};
							(u = new XRWebGLLayer(i, e, n)),
								i.updateRenderState({ baseLayer: u }),
								(w = new wt(u.framebufferWidth, u.framebufferHeight, {
									format: y,
									type: d,
									encoding: t.outputEncoding,
								}));
						} else {
							let n = null,
								s = null,
								o = null;
							f.depth && ((o = f.stencil ? 35056 : 33190), (n = f.stencil ? _ : x), (s = f.stencil ? v : p));
							const a = { colorFormat: t.outputEncoding === I ? 35907 : 32856, depthFormat: o, scaleFactor: r };
							(c = new XRWebGLBinding(i, e)),
								(h = c.createProjectionLayer(a)),
								i.updateRenderState({ layers: [h] }),
								(w = new wt(h.textureWidth, h.textureHeight, {
									format: y,
									type: d,
									depthTexture: new ms(
										h.textureWidth,
										h.textureHeight,
										s,
										void 0,
										void 0,
										void 0,
										void 0,
										void 0,
										void 0,
										n
									),
									stencilBuffer: f.stencil,
									encoding: t.outputEncoding,
									samples: f.antialias ? 4 : 0,
								})),
								(t.properties.get(w).__ignoreDepthValues = h.ignoreDepthValues);
						}
						(w.isXRRenderTarget = !0),
							this.setFoveation(1),
							(s = await i.requestReferenceSpace(o)),
							F.setContext(i),
							F.start(),
							(n.isPresenting = !0),
							n.dispatchEvent({ type: "sessionstart" });
					}
				});
			const N = new Et(),
				z = new Et();
			function B(t, e) {
				null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
					t.matrixWorldInverse.copy(t.matrixWorld).invert();
			}
			(this.updateCamera = function (t) {
				if (null === i) return;
				(A.near = E.near = S.near = t.near),
					(A.far = E.far = S.far = t.far),
					(C === A.near && R === A.far) ||
						(i.updateRenderState({ depthNear: A.near, depthFar: A.far }), (C = A.near), (R = A.far));
				const e = t.parent,
					n = A.cameras;
				B(A, e);
				for (let t = 0; t < n.length; t++) B(n[t], e);
				A.matrixWorld.decompose(A.position, A.quaternion, A.scale),
					t.position.copy(A.position),
					t.quaternion.copy(A.quaternion),
					t.scale.copy(A.scale),
					t.matrix.copy(A.matrix),
					t.matrixWorld.copy(A.matrixWorld);
				const r = t.children;
				for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
				2 === n.length
					? (function (t, e, n) {
							N.setFromMatrixPosition(e.matrixWorld), z.setFromMatrixPosition(n.matrixWorld);
							const i = N.distanceTo(z),
								r = e.projectionMatrix.elements,
								s = n.projectionMatrix.elements,
								o = r[14] / (r[10] - 1),
								a = r[14] / (r[10] + 1),
								l = (r[9] + 1) / r[5],
								c = (r[9] - 1) / r[5],
								h = (r[8] - 1) / r[0],
								u = (s[8] + 1) / s[0],
								d = o * h,
								p = o * u,
								m = i / (-h + u),
								f = m * -h;
							e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
								t.translateX(f),
								t.translateZ(m),
								t.matrixWorld.compose(t.position, t.quaternion, t.scale),
								t.matrixWorldInverse.copy(t.matrixWorld).invert();
							const g = o + m,
								v = a + m,
								y = d - f,
								x = p + (i - f),
								_ = ((l * a) / v) * g,
								w = ((c * a) / v) * g;
							t.projectionMatrix.makePerspective(y, x, _, w, g, v);
					  })(A, S, E)
					: A.projectionMatrix.copy(S.projectionMatrix);
			}),
				(this.getCamera = function () {
					return A;
				}),
				(this.getFoveation = function () {
					return null !== h ? h.fixedFoveation : null !== u ? u.fixedFoveation : void 0;
				}),
				(this.setFoveation = function (t) {
					null !== h && (h.fixedFoveation = t), null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = t);
				});
			let O = null;
			const F = new kn();
			F.setAnimationLoop(function (e, n) {
				if (((l = n.getViewerPose(a || s)), (m = n), null !== l)) {
					const e = l.views;
					null !== u && (t.setRenderTargetFramebuffer(w, u.framebuffer), t.setRenderTarget(w));
					let n = !1;
					e.length !== A.cameras.length && ((A.cameras.length = 0), (n = !0));
					for (let i = 0; i < e.length; i++) {
						const r = e[i];
						let s = null;
						if (null !== u) s = u.getViewport(r);
						else {
							const e = c.getViewSubImage(h, r);
							(s = e.viewport),
								0 === i &&
									(t.setRenderTargetTextures(
										w,
										e.colorTexture,
										h.ignoreDepthValues ? void 0 : e.depthStencilTexture
									),
									t.setRenderTarget(w));
						}
						const o = T[i];
						o.matrix.fromArray(r.transform.matrix),
							o.projectionMatrix.fromArray(r.projectionMatrix),
							o.viewport.set(s.x, s.y, s.width, s.height),
							0 === i && A.matrix.copy(o.matrix),
							!0 === n && A.cameras.push(o);
					}
				}
				const r = i.inputSources;
				for (let t = 0; t < b.length; t++) {
					const e = r[t],
						i = M.get(e);
					void 0 !== i && i.update(e, n, a || s);
				}
				O && O(e, n), (m = null);
			}),
				(this.setAnimationLoop = function (t) {
					O = t;
				}),
				(this.dispose = function () {});
		}
	}
	function gs(t, e) {
		function n(n, i) {
			(n.opacity.value = i.opacity),
				i.color && n.diffuse.value.copy(i.color),
				i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
				i.map && (n.map.value = i.map),
				i.alphaMap && (n.alphaMap.value = i.alphaMap),
				i.bumpMap &&
					((n.bumpMap.value = i.bumpMap), (n.bumpScale.value = i.bumpScale), 1 === i.side && (n.bumpScale.value *= -1)),
				i.displacementMap &&
					((n.displacementMap.value = i.displacementMap),
					(n.displacementScale.value = i.displacementScale),
					(n.displacementBias.value = i.displacementBias)),
				i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
				i.normalMap &&
					((n.normalMap.value = i.normalMap),
					n.normalScale.value.copy(i.normalScale),
					1 === i.side && n.normalScale.value.negate()),
				i.specularMap && (n.specularMap.value = i.specularMap),
				i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
			const r = e.get(i).envMap;
			if (
				(r &&
					((n.envMap.value = r),
					(n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
					(n.reflectivity.value = i.reflectivity),
					(n.ior.value = i.ior),
					(n.refractionRatio.value = i.refractionRatio)),
				i.lightMap)
			) {
				n.lightMap.value = i.lightMap;
				const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
				n.lightMapIntensity.value = i.lightMapIntensity * e;
			}
			let s, o;
			i.aoMap && ((n.aoMap.value = i.aoMap), (n.aoMapIntensity.value = i.aoMapIntensity)),
				i.map
					? (s = i.map)
					: i.specularMap
					? (s = i.specularMap)
					: i.displacementMap
					? (s = i.displacementMap)
					: i.normalMap
					? (s = i.normalMap)
					: i.bumpMap
					? (s = i.bumpMap)
					: i.roughnessMap
					? (s = i.roughnessMap)
					: i.metalnessMap
					? (s = i.metalnessMap)
					: i.alphaMap
					? (s = i.alphaMap)
					: i.emissiveMap
					? (s = i.emissiveMap)
					: i.clearcoatMap
					? (s = i.clearcoatMap)
					: i.clearcoatNormalMap
					? (s = i.clearcoatNormalMap)
					: i.clearcoatRoughnessMap
					? (s = i.clearcoatRoughnessMap)
					: i.specularIntensityMap
					? (s = i.specularIntensityMap)
					: i.specularColorMap
					? (s = i.specularColorMap)
					: i.transmissionMap
					? (s = i.transmissionMap)
					: i.thicknessMap
					? (s = i.thicknessMap)
					: i.sheenColorMap
					? (s = i.sheenColorMap)
					: i.sheenRoughnessMap && (s = i.sheenRoughnessMap),
				void 0 !== s &&
					(s.isWebGLRenderTarget && (s = s.texture),
					!0 === s.matrixAutoUpdate && s.updateMatrix(),
					n.uvTransform.value.copy(s.matrix)),
				i.aoMap ? (o = i.aoMap) : i.lightMap && (o = i.lightMap),
				void 0 !== o &&
					(o.isWebGLRenderTarget && (o = o.texture),
					!0 === o.matrixAutoUpdate && o.updateMatrix(),
					n.uv2Transform.value.copy(o.matrix));
		}
		return {
			refreshFogUniforms: function (t, e) {
				t.fogColor.value.copy(e.color),
					e.isFog
						? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
						: e.isFogExp2 && (t.fogDensity.value = e.density);
			},
			refreshMaterialUniforms: function (t, i, r, s, o) {
				i.isMeshBasicMaterial || i.isMeshLambertMaterial
					? n(t, i)
					: i.isMeshToonMaterial
					? (n(t, i),
					  (function (t, e) {
							e.gradientMap && (t.gradientMap.value = e.gradientMap);
					  })(t, i))
					: i.isMeshPhongMaterial
					? (n(t, i),
					  (function (t, e) {
							t.specular.value.copy(e.specular), (t.shininess.value = Math.max(e.shininess, 1e-4));
					  })(t, i))
					: i.isMeshStandardMaterial
					? (n(t, i),
					  (function (t, n) {
							(t.roughness.value = n.roughness),
								(t.metalness.value = n.metalness),
								n.roughnessMap && (t.roughnessMap.value = n.roughnessMap),
								n.metalnessMap && (t.metalnessMap.value = n.metalnessMap),
								e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity);
					  })(t, i),
					  i.isMeshPhysicalMaterial &&
							(function (t, e, n) {
								(t.ior.value = e.ior),
									e.sheen > 0 &&
										(t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),
										(t.sheenRoughness.value = e.sheenRoughness),
										e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap),
										e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)),
									e.clearcoat > 0 &&
										((t.clearcoat.value = e.clearcoat),
										(t.clearcoatRoughness.value = e.clearcoatRoughness),
										e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap),
										e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
										e.clearcoatNormalMap &&
											(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
											(t.clearcoatNormalMap.value = e.clearcoatNormalMap),
											1 === e.side && t.clearcoatNormalScale.value.negate())),
									e.transmission > 0 &&
										((t.transmission.value = e.transmission),
										(t.transmissionSamplerMap.value = n.texture),
										t.transmissionSamplerSize.value.set(n.width, n.height),
										e.transmissionMap && (t.transmissionMap.value = e.transmissionMap),
										(t.thickness.value = e.thickness),
										e.thicknessMap && (t.thicknessMap.value = e.thicknessMap),
										(t.attenuationDistance.value = e.attenuationDistance),
										t.attenuationColor.value.copy(e.attenuationColor)),
									(t.specularIntensity.value = e.specularIntensity),
									t.specularColor.value.copy(e.specularColor),
									e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap),
									e.specularColorMap && (t.specularColorMap.value = e.specularColorMap);
							})(t, i, o))
					: i.isMeshMatcapMaterial
					? (n(t, i),
					  (function (t, e) {
							e.matcap && (t.matcap.value = e.matcap);
					  })(t, i))
					: i.isMeshDepthMaterial
					? n(t, i)
					: i.isMeshDistanceMaterial
					? (n(t, i),
					  (function (t, e) {
							t.referencePosition.value.copy(e.referencePosition),
								(t.nearDistance.value = e.nearDistance),
								(t.farDistance.value = e.farDistance);
					  })(t, i))
					: i.isMeshNormalMaterial
					? n(t, i)
					: i.isLineBasicMaterial
					? ((function (t, e) {
							t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
					  })(t, i),
					  i.isLineDashedMaterial &&
							(function (t, e) {
								(t.dashSize.value = e.dashSize),
									(t.totalSize.value = e.dashSize + e.gapSize),
									(t.scale.value = e.scale);
							})(t, i))
					: i.isPointsMaterial
					? (function (t, e, n, i) {
							let r;
							t.diffuse.value.copy(e.color),
								(t.opacity.value = e.opacity),
								(t.size.value = e.size * n),
								(t.scale.value = 0.5 * i),
								e.map && (t.map.value = e.map),
								e.alphaMap && (t.alphaMap.value = e.alphaMap),
								e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
								e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap),
								void 0 !== r &&
									(!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
					  })(t, i, r, s)
					: i.isSpriteMaterial
					? (function (t, e) {
							let n;
							t.diffuse.value.copy(e.color),
								(t.opacity.value = e.opacity),
								(t.rotation.value = e.rotation),
								e.map && (t.map.value = e.map),
								e.alphaMap && (t.alphaMap.value = e.alphaMap),
								e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
								e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap),
								void 0 !== n &&
									(!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
					  })(t, i)
					: i.isShadowMaterial
					? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
					: i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
			},
		};
	}
	function vs(t = {}) {
		const e =
				void 0 !== t.canvas
					? t.canvas
					: (function () {
							const t = nt("canvas");
							return (t.style.display = "block"), t;
					  })(),
			n = void 0 !== t.context ? t.context : null,
			i = void 0 === t.depth || t.depth,
			r = void 0 === t.stencil || t.stencil,
			s = void 0 !== t.antialias && t.antialias,
			o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
			a = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
			l = void 0 !== t.powerPreference ? t.powerPreference : "default",
			c = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
		let h;
		h = null !== n ? n.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha;
		let p = null,
			m = null;
		const v = [],
			x = [];
		(this.domElement = e),
			(this.debug = { checkShaderErrors: !0 }),
			(this.autoClear = !0),
			(this.autoClearColor = !0),
			(this.autoClearDepth = !0),
			(this.autoClearStencil = !0),
			(this.sortObjects = !0),
			(this.clippingPlanes = []),
			(this.localClippingEnabled = !1),
			(this.outputEncoding = P),
			(this.physicallyCorrectLights = !1),
			(this.toneMapping = 0),
			(this.toneMappingExposure = 1);
		const _ = this;
		let w = !1,
			b = 0,
			M = 0,
			S = null,
			E = -1,
			T = null;
		const A = new _t(),
			C = new _t();
		let R = null,
			L = e.width,
			I = e.height,
			D = 1,
			N = null,
			z = null;
		const B = new _t(0, 0, L, I),
			O = new _t(0, 0, L, I);
		let F = !1;
		const H = new Hn();
		let k = !1,
			U = !1,
			V = null;
		const G = new ne(),
			W = new Q(),
			j = new Et(),
			q = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
		function X() {
			return null === S ? D : 1;
		}
		let Y,
			Z,
			$,
			J,
			tt,
			et,
			it,
			rt,
			st,
			ot,
			at,
			lt,
			ct,
			ht,
			ut,
			dt,
			pt,
			mt,
			ft,
			gt,
			vt,
			yt,
			xt,
			bt = n;
		function Mt(t, n) {
			for (let i = 0; i < t.length; i++) {
				const r = t[i],
					s = e.getContext(r, n);
				if (null !== s) return s;
			}
			return null;
		}
		try {
			const t = {
				alpha: !0,
				depth: i,
				stencil: r,
				antialias: s,
				premultipliedAlpha: o,
				preserveDrawingBuffer: a,
				powerPreference: l,
				failIfMajorPerformanceCaveat: c,
			};
			if (
				("setAttribute" in e && e.setAttribute("data-engine", "three.js r140"),
				e.addEventListener("webglcontextlost", At, !1),
				e.addEventListener("webglcontextrestored", Ct, !1),
				null === bt)
			) {
				const e = ["webgl2", "webgl", "experimental-webgl"];
				if ((!0 === _.isWebGL1Renderer && e.shift(), (bt = Mt(e, t)), null === bt))
					throw Mt(e)
						? new Error("Error creating WebGL context with your selected attributes.")
						: new Error("Error creating WebGL context.");
			}
			void 0 === bt.getShaderPrecisionFormat &&
				(bt.getShaderPrecisionFormat = function () {
					return { rangeMin: 1, rangeMax: 1, precision: 1 };
				});
		} catch (t) {
			throw (console.error("THREE.WebGLRenderer: " + t.message), t);
		}
		function St() {
			(Y = new di(bt)),
				(Z = new Zn(bt, Y, t)),
				Y.init(Z),
				(yt = new cs(bt, Y, Z)),
				($ = new as(bt, Y, Z)),
				(J = new fi(bt)),
				(tt = new Xr()),
				(et = new ls(bt, Y, $, tt, Z, yt, J)),
				(it = new Kn(_)),
				(rt = new ui(_)),
				(st = new Un(bt, Z)),
				(xt = new Xn(bt, Y, st, Z)),
				(ot = new pi(bt, st, J, xt)),
				(at = new _i(bt, ot, st, J)),
				(ft = new xi(bt, Z, et)),
				(dt = new $n(tt)),
				(lt = new qr(_, it, rt, Y, Z, xt, dt)),
				(ct = new gs(_, tt)),
				(ht = new Kr()),
				(ut = new is(Y, Z)),
				(mt = new qn(_, it, $, at, h, o)),
				(pt = new os(_, at, Z)),
				(gt = new Yn(bt, Y, J, Z)),
				(vt = new mi(bt, Y, J, Z)),
				(J.programs = lt.programs),
				(_.capabilities = Z),
				(_.extensions = Y),
				(_.properties = tt),
				(_.renderLists = ht),
				(_.shadowMap = pt),
				(_.state = $),
				(_.info = J);
		}
		St();
		const Tt = new fs(_, bt);
		function At(t) {
			t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), (w = !0);
		}
		function Ct() {
			console.log("THREE.WebGLRenderer: Context Restored."), (w = !1);
			const t = J.autoReset,
				e = pt.enabled,
				n = pt.autoUpdate,
				i = pt.needsUpdate,
				r = pt.type;
			St(), (J.autoReset = t), (pt.enabled = e), (pt.autoUpdate = n), (pt.needsUpdate = i), (pt.type = r);
		}
		function Rt(t) {
			const e = t.target;
			e.removeEventListener("dispose", Rt),
				(function (t) {
					(function (t) {
						const e = tt.get(t).programs;
						void 0 !== e &&
							(e.forEach(function (t) {
								lt.releaseProgram(t);
							}),
							t.isShaderMaterial && lt.releaseShaderCache(t));
					})(t),
						tt.remove(t);
				})(e);
		}
		(this.xr = Tt),
			(this.getContext = function () {
				return bt;
			}),
			(this.getContextAttributes = function () {
				return bt.getContextAttributes();
			}),
			(this.forceContextLoss = function () {
				const t = Y.get("WEBGL_lose_context");
				t && t.loseContext();
			}),
			(this.forceContextRestore = function () {
				const t = Y.get("WEBGL_lose_context");
				t && t.restoreContext();
			}),
			(this.getPixelRatio = function () {
				return D;
			}),
			(this.setPixelRatio = function (t) {
				void 0 !== t && ((D = t), this.setSize(L, I, !1));
			}),
			(this.getSize = function (t) {
				return t.set(L, I);
			}),
			(this.setSize = function (t, n, i) {
				Tt.isPresenting
					? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.")
					: ((L = t),
					  (I = n),
					  (e.width = Math.floor(t * D)),
					  (e.height = Math.floor(n * D)),
					  !1 !== i && ((e.style.width = t + "px"), (e.style.height = n + "px")),
					  this.setViewport(0, 0, t, n));
			}),
			(this.getDrawingBufferSize = function (t) {
				return t.set(L * D, I * D).floor();
			}),
			(this.setDrawingBufferSize = function (t, n, i) {
				(L = t),
					(I = n),
					(D = i),
					(e.width = Math.floor(t * i)),
					(e.height = Math.floor(n * i)),
					this.setViewport(0, 0, t, n);
			}),
			(this.getCurrentViewport = function (t) {
				return t.copy(A);
			}),
			(this.getViewport = function (t) {
				return t.copy(B);
			}),
			(this.setViewport = function (t, e, n, i) {
				t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, i), $.viewport(A.copy(B).multiplyScalar(D).floor());
			}),
			(this.getScissor = function (t) {
				return t.copy(O);
			}),
			(this.setScissor = function (t, e, n, i) {
				t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, n, i), $.scissor(C.copy(O).multiplyScalar(D).floor());
			}),
			(this.getScissorTest = function () {
				return F;
			}),
			(this.setScissorTest = function (t) {
				$.setScissorTest((F = t));
			}),
			(this.setOpaqueSort = function (t) {
				N = t;
			}),
			(this.setTransparentSort = function (t) {
				z = t;
			}),
			(this.getClearColor = function (t) {
				return t.copy(mt.getClearColor());
			}),
			(this.setClearColor = function () {
				mt.setClearColor.apply(mt, arguments);
			}),
			(this.getClearAlpha = function () {
				return mt.getClearAlpha();
			}),
			(this.setClearAlpha = function () {
				mt.setClearAlpha.apply(mt, arguments);
			}),
			(this.clear = function (t = !0, e = !0, n = !0) {
				let i = 0;
				t && (i |= 16384), e && (i |= 256), n && (i |= 1024), bt.clear(i);
			}),
			(this.clearColor = function () {
				this.clear(!0, !1, !1);
			}),
			(this.clearDepth = function () {
				this.clear(!1, !0, !1);
			}),
			(this.clearStencil = function () {
				this.clear(!1, !1, !0);
			}),
			(this.dispose = function () {
				e.removeEventListener("webglcontextlost", At, !1),
					e.removeEventListener("webglcontextrestored", Ct, !1),
					ht.dispose(),
					ut.dispose(),
					tt.dispose(),
					it.dispose(),
					rt.dispose(),
					at.dispose(),
					xt.dispose(),
					lt.dispose(),
					Tt.dispose(),
					Tt.removeEventListener("sessionstart", Pt),
					Tt.removeEventListener("sessionend", It),
					V && (V.dispose(), (V = null)),
					Dt.stop();
			}),
			(this.renderBufferDirect = function (t, e, n, i, r, s) {
				null === e && (e = q);
				const o = r.isMesh && r.matrixWorld.determinant() < 0,
					a = (function (t, e, n, i, r) {
						!0 !== e.isScene && (e = q), et.resetTextureUnits();
						const s = e.fog,
							o = i.isMeshStandardMaterial ? e.environment : null,
							a = null === S ? _.outputEncoding : !0 === S.isXRRenderTarget ? S.texture.encoding : P,
							l = (i.isMeshStandardMaterial ? rt : it).get(i.envMap || o),
							c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
							h = !!i.normalMap && !!n.attributes.tangent,
							u = !!n.morphAttributes.position,
							d = !!n.morphAttributes.normal,
							p = !!n.morphAttributes.color,
							f = i.toneMapped ? _.toneMapping : 0,
							g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
							v = void 0 !== g ? g.length : 0,
							y = tt.get(i),
							x = m.state.lights;
						if (!0 === k && (!0 === U || t !== T)) {
							const e = t === T && i.id === E;
							dt.setState(i, t, e);
						}
						let w = !1;
						i.version === y.__version
							? (y.needsLights && y.lightsStateVersion !== x.state.version) ||
							  y.outputEncoding !== a ||
							  (r.isInstancedMesh && !1 === y.instancing)
								? (w = !0)
								: r.isInstancedMesh || !0 !== y.instancing
								? r.isSkinnedMesh && !1 === y.skinning
									? (w = !0)
									: r.isSkinnedMesh || !0 !== y.skinning
									? y.envMap !== l || (!0 === i.fog && y.fog !== s)
										? (w = !0)
										: void 0 === y.numClippingPlanes ||
										  (y.numClippingPlanes === dt.numPlanes && y.numIntersection === dt.numIntersection)
										? (y.vertexAlphas !== c ||
												y.vertexTangents !== h ||
												y.morphTargets !== u ||
												y.morphNormals !== d ||
												y.morphColors !== p ||
												y.toneMapping !== f ||
												(!0 === Z.isWebGL2 && y.morphTargetsCount !== v)) &&
										  (w = !0)
										: (w = !0)
									: (w = !0)
								: (w = !0)
							: ((w = !0), (y.__version = i.version));
						let b = y.currentProgram;
						!0 === w && (b = Ft(i, e, r));
						let M = !1,
							A = !1,
							C = !1;
						const R = b.getUniforms(),
							L = y.uniforms;
						if (
							($.useProgram(b.program) && ((M = !0), (A = !0), (C = !0)),
							i.id !== E && ((E = i.id), (A = !0)),
							M || T !== t)
						) {
							if (
								(R.setValue(bt, "projectionMatrix", t.projectionMatrix),
								Z.logarithmicDepthBuffer && R.setValue(bt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
								T !== t && ((T = t), (A = !0), (C = !0)),
								i.isShaderMaterial ||
									i.isMeshPhongMaterial ||
									i.isMeshToonMaterial ||
									i.isMeshStandardMaterial ||
									i.envMap)
							) {
								const e = R.map.cameraPosition;
								void 0 !== e && e.setValue(bt, j.setFromMatrixPosition(t.matrixWorld));
							}
							(i.isMeshPhongMaterial ||
								i.isMeshToonMaterial ||
								i.isMeshLambertMaterial ||
								i.isMeshBasicMaterial ||
								i.isMeshStandardMaterial ||
								i.isShaderMaterial) &&
								R.setValue(bt, "isOrthographic", !0 === t.isOrthographicCamera),
								(i.isMeshPhongMaterial ||
									i.isMeshToonMaterial ||
									i.isMeshLambertMaterial ||
									i.isMeshBasicMaterial ||
									i.isMeshStandardMaterial ||
									i.isShaderMaterial ||
									i.isShadowMaterial ||
									r.isSkinnedMesh) &&
									R.setValue(bt, "viewMatrix", t.matrixWorldInverse);
						}
						if (r.isSkinnedMesh) {
							R.setOptional(bt, r, "bindMatrix"), R.setOptional(bt, r, "bindMatrixInverse");
							const t = r.skeleton;
							t &&
								(Z.floatVertexTextures
									? (null === t.boneTexture && t.computeBoneTexture(),
									  R.setValue(bt, "boneTexture", t.boneTexture, et),
									  R.setValue(bt, "boneTextureSize", t.boneTextureSize))
									: console.warn(
											"THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
									  ));
						}
						const N = n.morphAttributes;
						var z, B;
						return (
							(void 0 !== N.position || void 0 !== N.normal || (void 0 !== N.color && !0 === Z.isWebGL2)) &&
								ft.update(r, n, i, b),
							(A || y.receiveShadow !== r.receiveShadow) &&
								((y.receiveShadow = r.receiveShadow), R.setValue(bt, "receiveShadow", r.receiveShadow)),
							A &&
								(R.setValue(bt, "toneMappingExposure", _.toneMappingExposure),
								y.needsLights &&
									((B = C),
									((z = L).ambientLightColor.needsUpdate = B),
									(z.lightProbe.needsUpdate = B),
									(z.directionalLights.needsUpdate = B),
									(z.directionalLightShadows.needsUpdate = B),
									(z.pointLights.needsUpdate = B),
									(z.pointLightShadows.needsUpdate = B),
									(z.spotLights.needsUpdate = B),
									(z.spotLightShadows.needsUpdate = B),
									(z.rectAreaLights.needsUpdate = B),
									(z.hemisphereLights.needsUpdate = B)),
								s && !0 === i.fog && ct.refreshFogUniforms(L, s),
								ct.refreshMaterialUniforms(L, i, D, I, V),
								Sr.upload(bt, y.uniformsList, L, et)),
							i.isShaderMaterial &&
								!0 === i.uniformsNeedUpdate &&
								(Sr.upload(bt, y.uniformsList, L, et), (i.uniformsNeedUpdate = !1)),
							i.isSpriteMaterial && R.setValue(bt, "center", r.center),
							R.setValue(bt, "modelViewMatrix", r.modelViewMatrix),
							R.setValue(bt, "normalMatrix", r.normalMatrix),
							R.setValue(bt, "modelMatrix", r.matrixWorld),
							b
						);
					})(t, e, n, i, r);
				$.setMaterial(i, o);
				let l = n.index;
				const c = n.attributes.position;
				if (null === l) {
					if (void 0 === c || 0 === c.count) return;
				} else if (0 === l.count) return;
				let h,
					u = 1;
				!0 === i.wireframe && ((l = ot.getWireframeAttribute(n)), (u = 2)), xt.setup(r, i, a, n, l);
				let d = gt;
				null !== l && ((h = st.get(l)), (d = vt), d.setIndex(h));
				const p = null !== l ? l.count : c.count,
					f = n.drawRange.start * u,
					g = n.drawRange.count * u,
					v = null !== s ? s.start * u : 0,
					y = null !== s ? s.count * u : 1 / 0,
					x = Math.max(f, v),
					w = Math.min(p, f + g, v + y) - 1,
					b = Math.max(0, w - x + 1);
				if (0 !== b) {
					if (r.isMesh) !0 === i.wireframe ? ($.setLineWidth(i.wireframeLinewidth * X()), d.setMode(1)) : d.setMode(4);
					else if (r.isLine) {
						let t = i.linewidth;
						void 0 === t && (t = 1),
							$.setLineWidth(t * X()),
							r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
					} else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
					if (r.isInstancedMesh) d.renderInstances(x, b, r.count);
					else if (n.isInstancedBufferGeometry) {
						const t = Math.min(n.instanceCount, n._maxInstanceCount);
						d.renderInstances(x, b, t);
					} else d.render(x, b);
				}
			}),
			(this.compile = function (t, e) {
				(m = ut.get(t)),
					m.init(),
					x.push(m),
					t.traverseVisible(function (t) {
						t.isLight && t.layers.test(e.layers) && (m.pushLight(t), t.castShadow && m.pushShadow(t));
					}),
					m.setupLights(_.physicallyCorrectLights),
					t.traverse(function (e) {
						const n = e.material;
						if (n)
							if (Array.isArray(n)) for (let i = 0; i < n.length; i++) Ft(n[i], t, e);
							else Ft(n, t, e);
					}),
					x.pop(),
					(m = null);
			});
		let Lt = null;
		function Pt() {
			Dt.stop();
		}
		function It() {
			Dt.start();
		}
		const Dt = new kn();
		function Nt(t, e, n, i) {
			if (!1 === t.visible) return;
			if (t.layers.test(e.layers))
				if (t.isGroup) n = t.renderOrder;
				else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
				else if (t.isLight) m.pushLight(t), t.castShadow && m.pushShadow(t);
				else if (t.isSprite) {
					if (!t.frustumCulled || H.intersectsSprite(t)) {
						i && j.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
						const e = at.update(t),
							r = t.material;
						r.visible && p.push(t, e, r, n, j.z, null);
					}
				} else if (
					(t.isMesh || t.isLine || t.isPoints) &&
					(t.isSkinnedMesh &&
						t.skeleton.frame !== J.render.frame &&
						(t.skeleton.update(), (t.skeleton.frame = J.render.frame)),
					!t.frustumCulled || H.intersectsObject(t))
				) {
					i && j.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
					const e = at.update(t),
						r = t.material;
					if (Array.isArray(r)) {
						const i = e.groups;
						for (let s = 0, o = i.length; s < o; s++) {
							const o = i[s],
								a = r[o.materialIndex];
							a && a.visible && p.push(t, e, a, n, j.z, o);
						}
					} else r.visible && p.push(t, e, r, n, j.z, null);
				}
			const r = t.children;
			for (let t = 0, s = r.length; t < s; t++) Nt(r[t], e, n, i);
		}
		function zt(t, e, n, i) {
			const r = t.opaque,
				o = t.transmissive,
				a = t.transparent;
			m.setupLightsView(n),
				o.length > 0 &&
					(function (t, e, n) {
						const i = Z.isWebGL2;
						null === V &&
							(V = new wt(1, 1, {
								generateMipmaps: !0,
								type: Y.has("EXT_color_buffer_half_float") ? g : d,
								minFilter: u,
								samples: i && !0 === s ? 4 : 0,
							})),
							_.getDrawingBufferSize(W),
							i ? V.setSize(W.x, W.y) : V.setSize(K(W.x), K(W.y));
						const r = _.getRenderTarget();
						_.setRenderTarget(V), _.clear();
						const o = _.toneMapping;
						(_.toneMapping = 0),
							Bt(t, e, n),
							(_.toneMapping = o),
							et.updateMultisampleRenderTarget(V),
							et.updateRenderTargetMipmap(V),
							_.setRenderTarget(r);
					})(r, e, n),
				i && $.viewport(A.copy(i)),
				r.length > 0 && Bt(r, e, n),
				o.length > 0 && Bt(o, e, n),
				a.length > 0 && Bt(a, e, n),
				$.buffers.depth.setTest(!0),
				$.buffers.depth.setMask(!0),
				$.buffers.color.setMask(!0),
				$.setPolygonOffset(!1);
		}
		function Bt(t, e, n) {
			const i = !0 === e.isScene ? e.overrideMaterial : null;
			for (let r = 0, s = t.length; r < s; r++) {
				const s = t[r],
					o = s.object,
					a = s.geometry,
					l = null === i ? s.material : i,
					c = s.group;
				o.layers.test(n.layers) && Ot(o, e, n, a, l, c);
			}
		}
		function Ot(t, e, n, i, r, s) {
			t.onBeforeRender(_, e, n, i, r, s),
				t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
				t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
				r.onBeforeRender(_, e, n, i, t, s),
				!0 === r.transparent && 2 === r.side
					? ((r.side = 1),
					  (r.needsUpdate = !0),
					  _.renderBufferDirect(n, e, i, r, t, s),
					  (r.side = 0),
					  (r.needsUpdate = !0),
					  _.renderBufferDirect(n, e, i, r, t, s),
					  (r.side = 2))
					: _.renderBufferDirect(n, e, i, r, t, s),
				t.onAfterRender(_, e, n, i, r, s);
		}
		function Ft(t, e, n) {
			!0 !== e.isScene && (e = q);
			const i = tt.get(t),
				r = m.state.lights,
				s = m.state.shadowsArray,
				o = r.state.version,
				a = lt.getParameters(t, r.state, s, e, n),
				l = lt.getProgramCacheKey(a);
			let c = i.programs;
			(i.environment = t.isMeshStandardMaterial ? e.environment : null),
				(i.fog = e.fog),
				(i.envMap = (t.isMeshStandardMaterial ? rt : it).get(t.envMap || i.environment)),
				void 0 === c && (t.addEventListener("dispose", Rt), (c = new Map()), (i.programs = c));
			let h = c.get(l);
			if (void 0 !== h) {
				if (i.currentProgram === h && i.lightsStateVersion === o) return Ht(t, a), h;
			} else
				(a.uniforms = lt.getUniforms(t)),
					t.onBuild(n, a, _),
					t.onBeforeCompile(a, _),
					(h = lt.acquireProgram(a, l)),
					c.set(l, h),
					(i.uniforms = a.uniforms);
			const u = i.uniforms;
			((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) || (u.clippingPlanes = dt.uniform),
				Ht(t, a),
				(i.needsLights = (function (t) {
					return (
						t.isMeshLambertMaterial ||
						t.isMeshToonMaterial ||
						t.isMeshPhongMaterial ||
						t.isMeshStandardMaterial ||
						t.isShadowMaterial ||
						(t.isShaderMaterial && !0 === t.lights)
					);
				})(t)),
				(i.lightsStateVersion = o),
				i.needsLights &&
					((u.ambientLightColor.value = r.state.ambient),
					(u.lightProbe.value = r.state.probe),
					(u.directionalLights.value = r.state.directional),
					(u.directionalLightShadows.value = r.state.directionalShadow),
					(u.spotLights.value = r.state.spot),
					(u.spotLightShadows.value = r.state.spotShadow),
					(u.rectAreaLights.value = r.state.rectArea),
					(u.ltc_1.value = r.state.rectAreaLTC1),
					(u.ltc_2.value = r.state.rectAreaLTC2),
					(u.pointLights.value = r.state.point),
					(u.pointLightShadows.value = r.state.pointShadow),
					(u.hemisphereLights.value = r.state.hemi),
					(u.directionalShadowMap.value = r.state.directionalShadowMap),
					(u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
					(u.spotShadowMap.value = r.state.spotShadowMap),
					(u.spotShadowMatrix.value = r.state.spotShadowMatrix),
					(u.pointShadowMap.value = r.state.pointShadowMap),
					(u.pointShadowMatrix.value = r.state.pointShadowMatrix));
			const d = h.getUniforms(),
				p = Sr.seqWithValue(d.seq, u);
			return (i.currentProgram = h), (i.uniformsList = p), h;
		}
		function Ht(t, e) {
			const n = tt.get(t);
			(n.outputEncoding = e.outputEncoding),
				(n.instancing = e.instancing),
				(n.skinning = e.skinning),
				(n.morphTargets = e.morphTargets),
				(n.morphNormals = e.morphNormals),
				(n.morphColors = e.morphColors),
				(n.morphTargetsCount = e.morphTargetsCount),
				(n.numClippingPlanes = e.numClippingPlanes),
				(n.numIntersection = e.numClipIntersection),
				(n.vertexAlphas = e.vertexAlphas),
				(n.vertexTangents = e.vertexTangents),
				(n.toneMapping = e.toneMapping);
		}
		Dt.setAnimationLoop(function (t) {
			Lt && Lt(t);
		}),
			"undefined" != typeof self && Dt.setContext(self),
			(this.setAnimationLoop = function (t) {
				(Lt = t), Tt.setAnimationLoop(t), null === t ? Dt.stop() : Dt.start();
			}),
			Tt.addEventListener("sessionstart", Pt),
			Tt.addEventListener("sessionend", It),
			(this.render = function (t, e) {
				if (void 0 !== e && !0 !== e.isCamera)
					return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				if (!0 === w) return;
				!0 === t.autoUpdate && t.updateMatrixWorld(),
					null === e.parent && e.updateMatrixWorld(),
					!0 === Tt.enabled &&
						!0 === Tt.isPresenting &&
						(!0 === Tt.cameraAutoUpdate && Tt.updateCamera(e), (e = Tt.getCamera())),
					!0 === t.isScene && t.onBeforeRender(_, t, e, S),
					(m = ut.get(t, x.length)),
					m.init(),
					x.push(m),
					G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
					H.setFromProjectionMatrix(G),
					(U = this.localClippingEnabled),
					(k = dt.init(this.clippingPlanes, U, e)),
					(p = ht.get(t, v.length)),
					p.init(),
					v.push(p),
					Nt(t, e, 0, _.sortObjects),
					p.finish(),
					!0 === _.sortObjects && p.sort(N, z),
					!0 === k && dt.beginShadows();
				const n = m.state.shadowsArray;
				if (
					(pt.render(n, t, e),
					!0 === k && dt.endShadows(),
					!0 === this.info.autoReset && this.info.reset(),
					mt.render(p, t),
					m.setupLights(_.physicallyCorrectLights),
					e.isArrayCamera)
				) {
					const n = e.cameras;
					for (let e = 0, i = n.length; e < i; e++) {
						const i = n[e];
						zt(p, t, i, i.viewport);
					}
				} else zt(p, t, e);
				null !== S && (et.updateMultisampleRenderTarget(S), et.updateRenderTargetMipmap(S)),
					!0 === t.isScene && t.onAfterRender(_, t, e),
					xt.resetDefaultState(),
					(E = -1),
					(T = null),
					x.pop(),
					(m = x.length > 0 ? x[x.length - 1] : null),
					v.pop(),
					(p = v.length > 0 ? v[v.length - 1] : null);
			}),
			(this.getActiveCubeFace = function () {
				return b;
			}),
			(this.getActiveMipmapLevel = function () {
				return M;
			}),
			(this.getRenderTarget = function () {
				return S;
			}),
			(this.setRenderTargetTextures = function (t, e, n) {
				(tt.get(t.texture).__webglTexture = e), (tt.get(t.depthTexture).__webglTexture = n);
				const i = tt.get(t);
				(i.__hasExternalTextures = !0),
					i.__hasExternalTextures &&
						((i.__autoAllocateDepthBuffer = void 0 === n),
						i.__autoAllocateDepthBuffer ||
							(!0 === Y.has("WEBGL_multisampled_render_to_texture") &&
								(console.warn(
									"THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
								),
								(i.__useRenderToTexture = !1))));
			}),
			(this.setRenderTargetFramebuffer = function (t, e) {
				const n = tt.get(t);
				(n.__webglFramebuffer = e), (n.__useDefaultFramebuffer = void 0 === e);
			}),
			(this.setRenderTarget = function (t, e = 0, n = 0) {
				(S = t), (b = e), (M = n);
				let i = !0;
				if (t) {
					const e = tt.get(t);
					void 0 !== e.__useDefaultFramebuffer
						? ($.bindFramebuffer(36160, null), (i = !1))
						: void 0 === e.__webglFramebuffer
						? et.setupRenderTarget(t)
						: e.__hasExternalTextures &&
						  et.rebindTextures(t, tt.get(t.texture).__webglTexture, tt.get(t.depthTexture).__webglTexture);
				}
				let r = null,
					s = !1,
					o = !1;
				if (t) {
					const n = t.texture;
					(n.isData3DTexture || n.isDataArrayTexture) && (o = !0);
					const i = tt.get(t).__webglFramebuffer;
					t.isWebGLCubeRenderTarget
						? ((r = i[e]), (s = !0))
						: (r =
								Z.isWebGL2 && t.samples > 0 && !1 === et.useMultisampledRTT(t)
									? tt.get(t).__webglMultisampledFramebuffer
									: i),
						A.copy(t.viewport),
						C.copy(t.scissor),
						(R = t.scissorTest);
				} else A.copy(B).multiplyScalar(D).floor(), C.copy(O).multiplyScalar(D).floor(), (R = F);
				if (
					($.bindFramebuffer(36160, r) && Z.drawBuffers && i && $.drawBuffers(t, r),
					$.viewport(A),
					$.scissor(C),
					$.setScissorTest(R),
					s)
				) {
					const i = tt.get(t.texture);
					bt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
				} else if (o) {
					const i = tt.get(t.texture),
						r = e || 0;
					bt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
				}
				E = -1;
			}),
			(this.readRenderTargetPixels = function (t, e, n, i, r, s, o) {
				if (!t || !t.isWebGLRenderTarget)
					return void console.error(
						"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
					);
				let a = tt.get(t).__webglFramebuffer;
				if ((t.isWebGLCubeRenderTarget && void 0 !== o && (a = a[o]), a)) {
					$.bindFramebuffer(36160, a);
					try {
						const o = t.texture,
							a = o.format,
							l = o.type;
						if (a !== y && yt.convert(a) !== bt.getParameter(35739))
							return void console.error(
								"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
							);
						const c =
							l === g && (Y.has("EXT_color_buffer_half_float") || (Z.isWebGL2 && Y.has("EXT_color_buffer_float")));
						if (
							!(
								l === d ||
								yt.convert(l) === bt.getParameter(35738) ||
								(l === f && (Z.isWebGL2 || Y.has("OES_texture_float") || Y.has("WEBGL_color_buffer_float"))) ||
								c
							)
						)
							return void console.error(
								"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
							);
						e >= 0 &&
							e <= t.width - i &&
							n >= 0 &&
							n <= t.height - r &&
							bt.readPixels(e, n, i, r, yt.convert(a), yt.convert(l), s);
					} finally {
						const t = null !== S ? tt.get(S).__webglFramebuffer : null;
						$.bindFramebuffer(36160, t);
					}
				}
			}),
			(this.copyFramebufferToTexture = function (t, e, n = 0) {
				if (!0 !== e.isFramebufferTexture)
					return void console.error(
						"THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."
					);
				const i = Math.pow(2, -n),
					r = Math.floor(e.image.width * i),
					s = Math.floor(e.image.height * i);
				et.setTexture2D(e, 0), bt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, s), $.unbindTexture();
			}),
			(this.copyTextureToTexture = function (t, e, n, i = 0) {
				const r = e.image.width,
					s = e.image.height,
					o = yt.convert(n.format),
					a = yt.convert(n.type);
				et.setTexture2D(n, 0),
					bt.pixelStorei(37440, n.flipY),
					bt.pixelStorei(37441, n.premultiplyAlpha),
					bt.pixelStorei(3317, n.unpackAlignment),
					e.isDataTexture
						? bt.texSubImage2D(3553, i, t.x, t.y, r, s, o, a, e.image.data)
						: e.isCompressedTexture
						? bt.compressedTexSubImage2D(
								3553,
								i,
								t.x,
								t.y,
								e.mipmaps[0].width,
								e.mipmaps[0].height,
								o,
								e.mipmaps[0].data
						  )
						: bt.texSubImage2D(3553, i, t.x, t.y, o, a, e.image),
					0 === i && n.generateMipmaps && bt.generateMipmap(3553),
					$.unbindTexture();
			}),
			(this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
				if (_.isWebGL1Renderer)
					return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
				const s = t.max.x - t.min.x + 1,
					o = t.max.y - t.min.y + 1,
					a = t.max.z - t.min.z + 1,
					l = yt.convert(i.format),
					c = yt.convert(i.type);
				let h;
				if (i.isData3DTexture) et.setTexture3D(i, 0), (h = 32879);
				else {
					if (!i.isDataArrayTexture)
						return void console.warn(
							"THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
						);
					et.setTexture2DArray(i, 0), (h = 35866);
				}
				bt.pixelStorei(37440, i.flipY),
					bt.pixelStorei(37441, i.premultiplyAlpha),
					bt.pixelStorei(3317, i.unpackAlignment);
				const u = bt.getParameter(3314),
					d = bt.getParameter(32878),
					p = bt.getParameter(3316),
					m = bt.getParameter(3315),
					f = bt.getParameter(32877),
					g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
				bt.pixelStorei(3314, g.width),
					bt.pixelStorei(32878, g.height),
					bt.pixelStorei(3316, t.min.x),
					bt.pixelStorei(3315, t.min.y),
					bt.pixelStorei(32877, t.min.z),
					n.isDataTexture || n.isData3DTexture
						? bt.texSubImage3D(h, r, e.x, e.y, e.z, s, o, a, l, c, g.data)
						: n.isCompressedTexture
						? (console.warn(
								"THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
						  ),
						  bt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, o, a, l, g.data))
						: bt.texSubImage3D(h, r, e.x, e.y, e.z, s, o, a, l, c, g),
					bt.pixelStorei(3314, u),
					bt.pixelStorei(32878, d),
					bt.pixelStorei(3316, p),
					bt.pixelStorei(3315, m),
					bt.pixelStorei(32877, f),
					0 === r && i.generateMipmaps && bt.generateMipmap(h),
					$.unbindTexture();
			}),
			(this.initTexture = function (t) {
				et.setTexture2D(t, 0), $.unbindTexture();
			}),
			(this.resetState = function () {
				(b = 0), (M = 0), (S = null), $.reset(), xt.reset();
			}),
			"undefined" != typeof __THREE_DEVTOOLS__ &&
				__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	(vs.prototype.isWebGLRenderer = !0), (class extends vs {}.prototype.isWebGL1Renderer = !0);
	class ys {
		constructor(t, e = 25e-5) {
			(this.name = ""), (this.color = new pt(t)), (this.density = e);
		}
		clone() {
			return new ys(this.color, this.density);
		}
		toJSON() {
			return { type: "FogExp2", color: this.color.getHex(), density: this.density };
		}
	}
	ys.prototype.isFogExp2 = !0;
	class xs {
		constructor(t, e = 1, n = 1e3) {
			(this.name = ""), (this.color = new pt(t)), (this.near = e), (this.far = n);
		}
		clone() {
			return new xs(this.color, this.near, this.far);
		}
		toJSON() {
			return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far };
		}
	}
	xs.prototype.isFog = !0;
	class _s extends Ae {
		constructor() {
			super(),
				(this.type = "Scene"),
				(this.background = null),
				(this.environment = null),
				(this.fog = null),
				(this.overrideMaterial = null),
				(this.autoUpdate = !0),
				"undefined" != typeof __THREE_DEVTOOLS__ &&
					__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
		}
		copy(t, e) {
			return (
				super.copy(t, e),
				null !== t.background && (this.background = t.background.clone()),
				null !== t.environment && (this.environment = t.environment.clone()),
				null !== t.fog && (this.fog = t.fog.clone()),
				null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
				(this.autoUpdate = t.autoUpdate),
				(this.matrixAutoUpdate = t.matrixAutoUpdate),
				this
			);
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
		}
	}
	_s.prototype.isScene = !0;
	class ws {
		constructor(t, e) {
			(this.array = t),
				(this.stride = e),
				(this.count = void 0 !== t ? t.length / e : 0),
				(this.usage = B),
				(this.updateRange = { offset: 0, count: -1 }),
				(this.version = 0),
				(this.uuid = j());
		}
		onUploadCallback() {}
		set needsUpdate(t) {
			!0 === t && this.version++;
		}
		setUsage(t) {
			return (this.usage = t), this;
		}
		copy(t) {
			return (
				(this.array = new t.array.constructor(t.array)),
				(this.count = t.count),
				(this.stride = t.stride),
				(this.usage = t.usage),
				this
			);
		}
		copyAt(t, e, n) {
			(t *= this.stride), (n *= e.stride);
			for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
			return this;
		}
		set(t, e = 0) {
			return this.array.set(t, e), this;
		}
		clone(t) {
			void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
				void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = j()),
				void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
					(t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
			const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
				n = new this.constructor(e, this.stride);
			return n.setUsage(this.usage), n;
		}
		onUpload(t) {
			return (this.onUploadCallback = t), this;
		}
		toJSON(t) {
			return (
				void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
				void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = j()),
				void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
					(t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
				{ uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride }
			);
		}
	}
	ws.prototype.isInterleavedBuffer = !0;
	const bs = new Et();
	class Ms {
		constructor(t, e, n, i = !1) {
			(this.name = ""), (this.data = t), (this.itemSize = e), (this.offset = n), (this.normalized = !0 === i);
		}
		get count() {
			return this.data.count;
		}
		get array() {
			return this.data.array;
		}
		set needsUpdate(t) {
			this.data.needsUpdate = t;
		}
		applyMatrix4(t) {
			for (let e = 0, n = this.data.count; e < n; e++)
				bs.fromBufferAttribute(this, e), bs.applyMatrix4(t), this.setXYZ(e, bs.x, bs.y, bs.z);
			return this;
		}
		applyNormalMatrix(t) {
			for (let e = 0, n = this.count; e < n; e++)
				bs.fromBufferAttribute(this, e), bs.applyNormalMatrix(t), this.setXYZ(e, bs.x, bs.y, bs.z);
			return this;
		}
		transformDirection(t) {
			for (let e = 0, n = this.count; e < n; e++)
				bs.fromBufferAttribute(this, e), bs.transformDirection(t), this.setXYZ(e, bs.x, bs.y, bs.z);
			return this;
		}
		setX(t, e) {
			return (this.data.array[t * this.data.stride + this.offset] = e), this;
		}
		setY(t, e) {
			return (this.data.array[t * this.data.stride + this.offset + 1] = e), this;
		}
		setZ(t, e) {
			return (this.data.array[t * this.data.stride + this.offset + 2] = e), this;
		}
		setW(t, e) {
			return (this.data.array[t * this.data.stride + this.offset + 3] = e), this;
		}
		getX(t) {
			return this.data.array[t * this.data.stride + this.offset];
		}
		getY(t) {
			return this.data.array[t * this.data.stride + this.offset + 1];
		}
		getZ(t) {
			return this.data.array[t * this.data.stride + this.offset + 2];
		}
		getW(t) {
			return this.data.array[t * this.data.stride + this.offset + 3];
		}
		setXY(t, e, n) {
			return (t = t * this.data.stride + this.offset), (this.data.array[t + 0] = e), (this.data.array[t + 1] = n), this;
		}
		setXYZ(t, e, n, i) {
			return (
				(t = t * this.data.stride + this.offset),
				(this.data.array[t + 0] = e),
				(this.data.array[t + 1] = n),
				(this.data.array[t + 2] = i),
				this
			);
		}
		setXYZW(t, e, n, i, r) {
			return (
				(t = t * this.data.stride + this.offset),
				(this.data.array[t + 0] = e),
				(this.data.array[t + 1] = n),
				(this.data.array[t + 2] = i),
				(this.data.array[t + 3] = r),
				this
			);
		}
		clone(t) {
			if (void 0 === t) {
				console.log(
					"THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
				);
				const t = [];
				for (let e = 0; e < this.count; e++) {
					const n = e * this.data.stride + this.offset;
					for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
				}
				return new We(new this.array.constructor(t), this.itemSize, this.normalized);
			}
			return (
				void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
				void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
				new Ms(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
			);
		}
		toJSON(t) {
			if (void 0 === t) {
				console.log(
					"THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
				);
				const t = [];
				for (let e = 0; e < this.count; e++) {
					const n = e * this.data.stride + this.offset;
					for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
				}
				return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
			}
			return (
				void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
				void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
				{
					isInterleavedBufferAttribute: !0,
					itemSize: this.itemSize,
					data: this.data.uuid,
					offset: this.offset,
					normalized: this.normalized,
				}
			);
		}
	}
	Ms.prototype.isInterleavedBufferAttribute = !0;
	class Ss extends ke {
		constructor(t) {
			super(),
				(this.type = "SpriteMaterial"),
				(this.color = new pt(16777215)),
				(this.map = null),
				(this.alphaMap = null),
				(this.rotation = 0),
				(this.sizeAttenuation = !0),
				(this.transparent = !0),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.rotation = t.rotation),
				(this.sizeAttenuation = t.sizeAttenuation),
				(this.fog = t.fog),
				this
			);
		}
	}
	let Es;
	Ss.prototype.isSpriteMaterial = !0;
	const Ts = new Et(),
		As = new Et(),
		Cs = new Et(),
		Rs = new Q(),
		Ls = new Q(),
		Ps = new ne(),
		Is = new Et(),
		Ds = new Et(),
		Ns = new Et(),
		zs = new Q(),
		Bs = new Q(),
		Os = new Q();
	function Fs(t, e, n, i, r, s) {
		Rs.subVectors(t, n).addScalar(0.5).multiply(i),
			void 0 !== r ? ((Ls.x = s * Rs.x - r * Rs.y), (Ls.y = r * Rs.x + s * Rs.y)) : Ls.copy(Rs),
			t.copy(e),
			(t.x += Ls.x),
			(t.y += Ls.y),
			t.applyMatrix4(Ps);
	}
	(class extends Ae {
		constructor(t) {
			if ((super(), (this.type = "Sprite"), void 0 === Es)) {
				Es = new en();
				const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]),
					e = new ws(t, 5);
				Es.setIndex([0, 1, 2, 0, 2, 3]),
					Es.setAttribute("position", new Ms(e, 3, 0, !1)),
					Es.setAttribute("uv", new Ms(e, 2, 3, !1));
			}
			(this.geometry = Es), (this.material = void 0 !== t ? t : new Ss()), (this.center = new Q(0.5, 0.5));
		}
		raycast(t, e) {
			null === t.camera &&
				console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),
				As.setFromMatrixScale(this.matrixWorld),
				Ps.copy(t.camera.matrixWorld),
				this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld),
				Cs.setFromMatrixPosition(this.modelViewMatrix),
				t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && As.multiplyScalar(-Cs.z);
			const n = this.material.rotation;
			let i, r;
			0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
			const s = this.center;
			Fs(Is.set(-0.5, -0.5, 0), Cs, s, As, i, r),
				Fs(Ds.set(0.5, -0.5, 0), Cs, s, As, i, r),
				Fs(Ns.set(0.5, 0.5, 0), Cs, s, As, i, r),
				zs.set(0, 0),
				Bs.set(1, 0),
				Os.set(1, 1);
			let o = t.ray.intersectTriangle(Is, Ds, Ns, !1, Ts);
			if (
				null === o &&
				(Fs(Ds.set(-0.5, 0.5, 0), Cs, s, As, i, r),
				Bs.set(0, 1),
				(o = t.ray.intersectTriangle(Is, Ns, Ds, !1, Ts)),
				null === o)
			)
				return;
			const a = t.ray.origin.distanceTo(Ts);
			a < t.near ||
				a > t.far ||
				e.push({
					distance: a,
					point: Ts.clone(),
					uv: Fe.getUV(Ts, Is, Ds, Ns, zs, Bs, Os, new Q()),
					face: null,
					object: this,
				});
		}
		copy(t) {
			return super.copy(t), void 0 !== t.center && this.center.copy(t.center), (this.material = t.material), this;
		}
	}).prototype.isSprite = !0;
	const Hs = new Et(),
		ks = new _t(),
		Us = new _t(),
		Vs = new Et(),
		Gs = new ne();
	class Ws extends _n {
		constructor(t, e) {
			super(t, e),
				(this.type = "SkinnedMesh"),
				(this.bindMode = "attached"),
				(this.bindMatrix = new ne()),
				(this.bindMatrixInverse = new ne());
		}
		copy(t) {
			return (
				super.copy(t),
				(this.bindMode = t.bindMode),
				this.bindMatrix.copy(t.bindMatrix),
				this.bindMatrixInverse.copy(t.bindMatrixInverse),
				(this.skeleton = t.skeleton),
				this
			);
		}
		bind(t, e) {
			(this.skeleton = t),
				void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), (e = this.matrixWorld)),
				this.bindMatrix.copy(e),
				this.bindMatrixInverse.copy(e).invert();
		}
		pose() {
			this.skeleton.pose();
		}
		normalizeSkinWeights() {
			const t = new _t(),
				e = this.geometry.attributes.skinWeight;
			for (let n = 0, i = e.count; n < i; n++) {
				t.fromBufferAttribute(e, n);
				const i = 1 / t.manhattanLength();
				i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
			}
		}
		updateMatrixWorld(t) {
			super.updateMatrixWorld(t),
				"attached" === this.bindMode
					? this.bindMatrixInverse.copy(this.matrixWorld).invert()
					: "detached" === this.bindMode
					? this.bindMatrixInverse.copy(this.bindMatrix).invert()
					: console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
		}
		boneTransform(t, e) {
			const n = this.skeleton,
				i = this.geometry;
			ks.fromBufferAttribute(i.attributes.skinIndex, t),
				Us.fromBufferAttribute(i.attributes.skinWeight, t),
				Hs.copy(e).applyMatrix4(this.bindMatrix),
				e.set(0, 0, 0);
			for (let t = 0; t < 4; t++) {
				const i = Us.getComponent(t);
				if (0 !== i) {
					const r = ks.getComponent(t);
					Gs.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
						e.addScaledVector(Vs.copy(Hs).applyMatrix4(Gs), i);
				}
			}
			return e.applyMatrix4(this.bindMatrixInverse);
		}
	}
	Ws.prototype.isSkinnedMesh = !0;
	class js extends Ae {
		constructor() {
			super(), (this.type = "Bone");
		}
	}
	js.prototype.isBone = !0;
	class qs extends xt {
		constructor(t = null, e = 1, n = 1, i, r, s, o, a, l = 1003, c = 1003, h, u) {
			super(null, s, o, a, l, c, i, r, h, u),
				(this.image = { data: t, width: e, height: n }),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.unpackAlignment = 1);
		}
	}
	qs.prototype.isDataTexture = !0;
	const Xs = new ne(),
		Ys = new ne();
	class Zs {
		constructor(t = [], e = []) {
			(this.uuid = j()),
				(this.bones = t.slice(0)),
				(this.boneInverses = e),
				(this.boneMatrices = null),
				(this.boneTexture = null),
				(this.boneTextureSize = 0),
				(this.frame = -1),
				this.init();
		}
		init() {
			const t = this.bones,
				e = this.boneInverses;
			if (((this.boneMatrices = new Float32Array(16 * t.length)), 0 === e.length)) this.calculateInverses();
			else if (t.length !== e.length) {
				console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),
					(this.boneInverses = []);
				for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new ne());
			}
		}
		calculateInverses() {
			this.boneInverses.length = 0;
			for (let t = 0, e = this.bones.length; t < e; t++) {
				const e = new ne();
				this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e);
			}
		}
		pose() {
			for (let t = 0, e = this.bones.length; t < e; t++) {
				const e = this.bones[t];
				e && e.matrixWorld.copy(this.boneInverses[t]).invert();
			}
			for (let t = 0, e = this.bones.length; t < e; t++) {
				const e = this.bones[t];
				e &&
					(e.parent && e.parent.isBone
						? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld))
						: e.matrix.copy(e.matrixWorld),
					e.matrix.decompose(e.position, e.quaternion, e.scale));
			}
		}
		update() {
			const t = this.bones,
				e = this.boneInverses,
				n = this.boneMatrices,
				i = this.boneTexture;
			for (let i = 0, r = t.length; i < r; i++) {
				const r = t[i] ? t[i].matrixWorld : Ys;
				Xs.multiplyMatrices(r, e[i]), Xs.toArray(n, 16 * i);
			}
			null !== i && (i.needsUpdate = !0);
		}
		clone() {
			return new Zs(this.bones, this.boneInverses);
		}
		computeBoneTexture() {
			let t = Math.sqrt(4 * this.bones.length);
			(t = $(t)), (t = Math.max(t, 4));
			const e = new Float32Array(t * t * 4);
			e.set(this.boneMatrices);
			const n = new qs(e, t, t, y, f);
			return (n.needsUpdate = !0), (this.boneMatrices = e), (this.boneTexture = n), (this.boneTextureSize = t), this;
		}
		getBoneByName(t) {
			for (let e = 0, n = this.bones.length; e < n; e++) {
				const n = this.bones[e];
				if (n.name === t) return n;
			}
		}
		dispose() {
			null !== this.boneTexture && (this.boneTexture.dispose(), (this.boneTexture = null));
		}
		fromJSON(t, e) {
			this.uuid = t.uuid;
			for (let n = 0, i = t.bones.length; n < i; n++) {
				const i = t.bones[n];
				let r = e[i];
				void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), (r = new js())),
					this.bones.push(r),
					this.boneInverses.push(new ne().fromArray(t.boneInverses[n]));
			}
			return this.init(), this;
		}
		toJSON() {
			const t = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
			t.uuid = this.uuid;
			const e = this.bones,
				n = this.boneInverses;
			for (let i = 0, r = e.length; i < r; i++) {
				const r = e[i];
				t.bones.push(r.uuid);
				const s = n[i];
				t.boneInverses.push(s.toArray());
			}
			return t;
		}
	}
	class $s extends We {
		constructor(t, e, n, i = 1) {
			"number" == typeof n &&
				((i = n),
				(n = !1),
				console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
				super(t, e, n),
				(this.meshPerAttribute = i);
		}
		copy(t) {
			return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
		}
		toJSON() {
			const t = super.toJSON();
			return (t.meshPerAttribute = this.meshPerAttribute), (t.isInstancedBufferAttribute = !0), t;
		}
	}
	$s.prototype.isInstancedBufferAttribute = !0;
	const Ks = new ne(),
		Js = new ne(),
		Qs = [],
		to = new _n();
	(class extends _n {
		constructor(t, e, n) {
			super(t, e),
				(this.instanceMatrix = new $s(new Float32Array(16 * n), 16)),
				(this.instanceColor = null),
				(this.count = n),
				(this.frustumCulled = !1);
		}
		copy(t) {
			return (
				super.copy(t),
				this.instanceMatrix.copy(t.instanceMatrix),
				null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()),
				(this.count = t.count),
				this
			);
		}
		getColorAt(t, e) {
			e.fromArray(this.instanceColor.array, 3 * t);
		}
		getMatrixAt(t, e) {
			e.fromArray(this.instanceMatrix.array, 16 * t);
		}
		raycast(t, e) {
			const n = this.matrixWorld,
				i = this.count;
			if (((to.geometry = this.geometry), (to.material = this.material), void 0 !== to.material))
				for (let r = 0; r < i; r++) {
					this.getMatrixAt(r, Ks), Js.multiplyMatrices(n, Ks), (to.matrixWorld = Js), to.raycast(t, Qs);
					for (let t = 0, n = Qs.length; t < n; t++) {
						const n = Qs[t];
						(n.instanceId = r), (n.object = this), e.push(n);
					}
					Qs.length = 0;
				}
		}
		setColorAt(t, e) {
			null === this.instanceColor && (this.instanceColor = new $s(new Float32Array(3 * this.instanceMatrix.count), 3)),
				e.toArray(this.instanceColor.array, 3 * t);
		}
		setMatrixAt(t, e) {
			e.toArray(this.instanceMatrix.array, 16 * t);
		}
		updateMorphTargets() {}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	}).prototype.isInstancedMesh = !0;
	class eo extends ke {
		constructor(t) {
			super(),
				(this.type = "LineBasicMaterial"),
				(this.color = new pt(16777215)),
				(this.linewidth = 1),
				(this.linecap = "round"),
				(this.linejoin = "round"),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.color.copy(t.color),
				(this.linewidth = t.linewidth),
				(this.linecap = t.linecap),
				(this.linejoin = t.linejoin),
				(this.fog = t.fog),
				this
			);
		}
	}
	eo.prototype.isLineBasicMaterial = !0;
	const no = new Et(),
		io = new Et(),
		ro = new ne(),
		so = new ee(),
		oo = new Xt();
	class ao extends Ae {
		constructor(t = new en(), e = new eo()) {
			super(), (this.type = "Line"), (this.geometry = t), (this.material = e), this.updateMorphTargets();
		}
		copy(t) {
			return super.copy(t), (this.material = t.material), (this.geometry = t.geometry), this;
		}
		computeLineDistances() {
			const t = this.geometry;
			if (t.isBufferGeometry)
				if (null === t.index) {
					const e = t.attributes.position,
						n = [0];
					for (let t = 1, i = e.count; t < i; t++)
						no.fromBufferAttribute(e, t - 1),
							io.fromBufferAttribute(e, t),
							(n[t] = n[t - 1]),
							(n[t] += no.distanceTo(io));
					t.setAttribute("lineDistance", new Xe(n, 1));
				} else
					console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
			else
				t.isGeometry &&
					console.error(
						"THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
					);
			return this;
		}
		raycast(t, e) {
			const n = this.geometry,
				i = this.matrixWorld,
				r = t.params.Line.threshold,
				s = n.drawRange;
			if (
				(null === n.boundingSphere && n.computeBoundingSphere(),
				oo.copy(n.boundingSphere),
				oo.applyMatrix4(i),
				(oo.radius += r),
				!1 === t.ray.intersectsSphere(oo))
			)
				return;
			ro.copy(i).invert(), so.copy(t.ray).applyMatrix4(ro);
			const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
				a = o * o,
				l = new Et(),
				c = new Et(),
				h = new Et(),
				u = new Et(),
				d = this.isLineSegments ? 2 : 1;
			if (n.isBufferGeometry) {
				const i = n.index,
					r = n.attributes.position;
				if (null !== i)
					for (let n = Math.max(0, s.start), o = Math.min(i.count, s.start + s.count) - 1; n < o; n += d) {
						const s = i.getX(n),
							o = i.getX(n + 1);
						if ((l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, o), so.distanceSqToSegment(l, c, u, h) > a))
							continue;
						u.applyMatrix4(this.matrixWorld);
						const d = t.ray.origin.distanceTo(u);
						d < t.near ||
							d > t.far ||
							e.push({
								distance: d,
								point: h.clone().applyMatrix4(this.matrixWorld),
								index: n,
								face: null,
								faceIndex: null,
								object: this,
							});
					}
				else
					for (let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d) {
						if (
							(l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1), so.distanceSqToSegment(l, c, u, h) > a)
						)
							continue;
						u.applyMatrix4(this.matrixWorld);
						const i = t.ray.origin.distanceTo(u);
						i < t.near ||
							i > t.far ||
							e.push({
								distance: i,
								point: h.clone().applyMatrix4(this.matrixWorld),
								index: n,
								face: null,
								faceIndex: null,
								object: this,
							});
					}
			} else
				n.isGeometry &&
					console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
		}
		updateMorphTargets() {
			const t = this.geometry;
			if (t.isBufferGeometry) {
				const e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					const t = e[n[0]];
					if (void 0 !== t) {
						(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e].name || String(e);
							this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
						}
					}
				}
			} else {
				const e = t.morphTargets;
				void 0 !== e &&
					e.length > 0 &&
					console.error(
						"THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
					);
			}
		}
	}
	ao.prototype.isLine = !0;
	const lo = new Et(),
		co = new Et();
	class ho extends ao {
		constructor(t, e) {
			super(t, e), (this.type = "LineSegments");
		}
		computeLineDistances() {
			const t = this.geometry;
			if (t.isBufferGeometry)
				if (null === t.index) {
					const e = t.attributes.position,
						n = [];
					for (let t = 0, i = e.count; t < i; t += 2)
						lo.fromBufferAttribute(e, t),
							co.fromBufferAttribute(e, t + 1),
							(n[t] = 0 === t ? 0 : n[t - 1]),
							(n[t + 1] = n[t] + lo.distanceTo(co));
					t.setAttribute("lineDistance", new Xe(n, 1));
				} else
					console.warn(
						"THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
					);
			else
				t.isGeometry &&
					console.error(
						"THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
					);
			return this;
		}
	}
	ho.prototype.isLineSegments = !0;
	class uo extends ao {
		constructor(t, e) {
			super(t, e), (this.type = "LineLoop");
		}
	}
	uo.prototype.isLineLoop = !0;
	class po extends ke {
		constructor(t) {
			super(),
				(this.type = "PointsMaterial"),
				(this.color = new pt(16777215)),
				(this.map = null),
				(this.alphaMap = null),
				(this.size = 1),
				(this.sizeAttenuation = !0),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.size = t.size),
				(this.sizeAttenuation = t.sizeAttenuation),
				(this.fog = t.fog),
				this
			);
		}
	}
	po.prototype.isPointsMaterial = !0;
	const mo = new ne(),
		fo = new ee(),
		go = new Xt(),
		vo = new Et();
	class yo extends Ae {
		constructor(t = new en(), e = new po()) {
			super(), (this.type = "Points"), (this.geometry = t), (this.material = e), this.updateMorphTargets();
		}
		copy(t) {
			return super.copy(t), (this.material = t.material), (this.geometry = t.geometry), this;
		}
		raycast(t, e) {
			const n = this.geometry,
				i = this.matrixWorld,
				r = t.params.Points.threshold,
				s = n.drawRange;
			if (
				(null === n.boundingSphere && n.computeBoundingSphere(),
				go.copy(n.boundingSphere),
				go.applyMatrix4(i),
				(go.radius += r),
				!1 === t.ray.intersectsSphere(go))
			)
				return;
			mo.copy(i).invert(), fo.copy(t.ray).applyMatrix4(mo);
			const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
				a = o * o;
			if (n.isBufferGeometry) {
				const r = n.index,
					o = n.attributes.position;
				if (null !== r)
					for (let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++) {
						const s = r.getX(n);
						vo.fromBufferAttribute(o, s), xo(vo, s, a, i, t, e, this);
					}
				else
					for (let n = Math.max(0, s.start), r = Math.min(o.count, s.start + s.count); n < r; n++)
						vo.fromBufferAttribute(o, n), xo(vo, n, a, i, t, e, this);
			} else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
		}
		updateMorphTargets() {
			const t = this.geometry;
			if (t.isBufferGeometry) {
				const e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					const t = e[n[0]];
					if (void 0 !== t) {
						(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e].name || String(e);
							this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
						}
					}
				}
			} else {
				const e = t.morphTargets;
				void 0 !== e &&
					e.length > 0 &&
					console.error(
						"THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
					);
			}
		}
	}
	function xo(t, e, n, i, r, s, o) {
		const a = fo.distanceSqToPoint(t);
		if (a < n) {
			const n = new Et();
			fo.closestPointToPoint(t, n), n.applyMatrix4(i);
			const l = r.ray.origin.distanceTo(n);
			if (l < r.near || l > r.far) return;
			s.push({ distance: l, distanceToRay: Math.sqrt(a), point: n, index: e, face: null, object: o });
		}
	}
	(yo.prototype.isPoints = !0),
		(class extends xt {
			constructor(t, e, n, i, r, s, o, a, l) {
				super(t, e, n, i, r, s, o, a, l),
					(this.minFilter = void 0 !== s ? s : h),
					(this.magFilter = void 0 !== r ? r : h),
					(this.generateMipmaps = !1);
				const c = this;
				"requestVideoFrameCallback" in t &&
					t.requestVideoFrameCallback(function e() {
						(c.needsUpdate = !0), t.requestVideoFrameCallback(e);
					});
			}
			clone() {
				return new this.constructor(this.image).copy(this);
			}
			update() {
				const t = this.image;
				!1 == "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
			}
		}.prototype.isVideoTexture = !0),
		(class extends xt {
			constructor(t, e, n) {
				super({ width: t, height: e }),
					(this.format = n),
					(this.magFilter = a),
					(this.minFilter = a),
					(this.generateMipmaps = !1),
					(this.needsUpdate = !0);
			}
		}.prototype.isFramebufferTexture = !0);
	((class extends xt {
		constructor(t, e, n, i, r, s, o, a, l, c, h, u) {
			super(null, s, o, a, l, c, i, r, h, u),
				(this.image = { width: e, height: n }),
				(this.mipmaps = t),
				(this.flipY = !1),
				(this.generateMipmaps = !1);
		}
	}).prototype.isCompressedTexture = !0),
		(class extends xt {
			constructor(t, e, n, i, r, s, o, a, l) {
				super(t, e, n, i, r, s, o, a, l), (this.needsUpdate = !0);
			}
		}.prototype.isCanvasTexture = !0);
	class _o {
		constructor() {
			(this.type = "Curve"), (this.arcLengthDivisions = 200);
		}
		getPoint() {
			return console.warn("THREE.Curve: .getPoint() not implemented."), null;
		}
		getPointAt(t, e) {
			const n = this.getUtoTmapping(t);
			return this.getPoint(n, e);
		}
		getPoints(t = 5) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return e;
		}
		getSpacedPoints(t = 5) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
			return e;
		}
		getLength() {
			const t = this.getLengths();
			return t[t.length - 1];
		}
		getLengths(t = this.arcLengthDivisions) {
			if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			const e = [];
			let n,
				i = this.getPoint(0),
				r = 0;
			e.push(0);
			for (let s = 1; s <= t; s++) (n = this.getPoint(s / t)), (r += n.distanceTo(i)), e.push(r), (i = n);
			return (this.cacheArcLengths = e), e;
		}
		updateArcLengths() {
			(this.needsUpdate = !0), this.getLengths();
		}
		getUtoTmapping(t, e) {
			const n = this.getLengths();
			let i = 0;
			const r = n.length;
			let s;
			s = e || t * n[r - 1];
			let o,
				a = 0,
				l = r - 1;
			for (; a <= l; )
				if (((i = Math.floor(a + (l - a) / 2)), (o = n[i] - s), o < 0)) a = i + 1;
				else {
					if (!(o > 0)) {
						l = i;
						break;
					}
					l = i - 1;
				}
			if (((i = l), n[i] === s)) return i / (r - 1);
			const c = n[i];
			return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
		}
		getTangent(t, e) {
			const n = 1e-4;
			let i = t - n,
				r = t + n;
			i < 0 && (i = 0), r > 1 && (r = 1);
			const s = this.getPoint(i),
				o = this.getPoint(r),
				a = e || (s.isVector2 ? new Q() : new Et());
			return a.copy(o).sub(s).normalize(), a;
		}
		getTangentAt(t, e) {
			const n = this.getUtoTmapping(t);
			return this.getTangent(n, e);
		}
		computeFrenetFrames(t, e) {
			const n = new Et(),
				i = [],
				r = [],
				s = [],
				o = new Et(),
				a = new ne();
			for (let e = 0; e <= t; e++) {
				const n = e / t;
				i[e] = this.getTangentAt(n, new Et());
			}
			(r[0] = new Et()), (s[0] = new Et());
			let l = Number.MAX_VALUE;
			const c = Math.abs(i[0].x),
				h = Math.abs(i[0].y),
				u = Math.abs(i[0].z);
			c <= l && ((l = c), n.set(1, 0, 0)),
				h <= l && ((l = h), n.set(0, 1, 0)),
				u <= l && n.set(0, 0, 1),
				o.crossVectors(i[0], n).normalize(),
				r[0].crossVectors(i[0], o),
				s[0].crossVectors(i[0], r[0]);
			for (let e = 1; e <= t; e++) {
				if (
					((r[e] = r[e - 1].clone()),
					(s[e] = s[e - 1].clone()),
					o.crossVectors(i[e - 1], i[e]),
					o.length() > Number.EPSILON)
				) {
					o.normalize();
					const t = Math.acos(q(i[e - 1].dot(i[e]), -1, 1));
					r[e].applyMatrix4(a.makeRotationAxis(o, t));
				}
				s[e].crossVectors(i[e], r[e]);
			}
			if (!0 === e) {
				let e = Math.acos(q(r[0].dot(r[t]), -1, 1));
				(e /= t), i[0].dot(o.crossVectors(r[0], r[t])) > 0 && (e = -e);
				for (let n = 1; n <= t; n++) r[n].applyMatrix4(a.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n]);
			}
			return { tangents: i, normals: r, binormals: s };
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return (this.arcLengthDivisions = t.arcLengthDivisions), this;
		}
		toJSON() {
			const t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } };
			return (t.arcLengthDivisions = this.arcLengthDivisions), (t.type = this.type), t;
		}
		fromJSON(t) {
			return (this.arcLengthDivisions = t.arcLengthDivisions), this;
		}
	}
	class wo extends _o {
		constructor(t = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, o = !1, a = 0) {
			super(),
				(this.type = "EllipseCurve"),
				(this.aX = t),
				(this.aY = e),
				(this.xRadius = n),
				(this.yRadius = i),
				(this.aStartAngle = r),
				(this.aEndAngle = s),
				(this.aClockwise = o),
				(this.aRotation = a);
		}
		getPoint(t, e) {
			const n = e || new Q(),
				i = 2 * Math.PI;
			let r = this.aEndAngle - this.aStartAngle;
			const s = Math.abs(r) < Number.EPSILON;
			for (; r < 0; ) r += i;
			for (; r > i; ) r -= i;
			r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? (r = -i) : (r -= i));
			const o = this.aStartAngle + t * r;
			let a = this.aX + this.xRadius * Math.cos(o),
				l = this.aY + this.yRadius * Math.sin(o);
			if (0 !== this.aRotation) {
				const t = Math.cos(this.aRotation),
					e = Math.sin(this.aRotation),
					n = a - this.aX,
					i = l - this.aY;
				(a = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
			}
			return n.set(a, l);
		}
		copy(t) {
			return (
				super.copy(t),
				(this.aX = t.aX),
				(this.aY = t.aY),
				(this.xRadius = t.xRadius),
				(this.yRadius = t.yRadius),
				(this.aStartAngle = t.aStartAngle),
				(this.aEndAngle = t.aEndAngle),
				(this.aClockwise = t.aClockwise),
				(this.aRotation = t.aRotation),
				this
			);
		}
		toJSON() {
			const t = super.toJSON();
			return (
				(t.aX = this.aX),
				(t.aY = this.aY),
				(t.xRadius = this.xRadius),
				(t.yRadius = this.yRadius),
				(t.aStartAngle = this.aStartAngle),
				(t.aEndAngle = this.aEndAngle),
				(t.aClockwise = this.aClockwise),
				(t.aRotation = this.aRotation),
				t
			);
		}
		fromJSON(t) {
			return (
				super.fromJSON(t),
				(this.aX = t.aX),
				(this.aY = t.aY),
				(this.xRadius = t.xRadius),
				(this.yRadius = t.yRadius),
				(this.aStartAngle = t.aStartAngle),
				(this.aEndAngle = t.aEndAngle),
				(this.aClockwise = t.aClockwise),
				(this.aRotation = t.aRotation),
				this
			);
		}
	}
	wo.prototype.isEllipseCurve = !0;
	class bo extends wo {
		constructor(t, e, n, i, r, s) {
			super(t, e, n, n, i, r, s), (this.type = "ArcCurve");
		}
	}
	function Mo() {
		let t = 0,
			e = 0,
			n = 0,
			i = 0;
		function r(r, s, o, a) {
			(t = r), (e = o), (n = -3 * r + 3 * s - 2 * o - a), (i = 2 * r - 2 * s + o + a);
		}
		return {
			initCatmullRom: function (t, e, n, i, s) {
				r(e, n, s * (n - t), s * (i - e));
			},
			initNonuniformCatmullRom: function (t, e, n, i, s, o, a) {
				let l = (e - t) / s - (n - t) / (s + o) + (n - e) / o,
					c = (n - e) / o - (i - e) / (o + a) + (i - n) / a;
				(l *= o), (c *= o), r(e, n, l, c);
			},
			calc: function (r) {
				const s = r * r;
				return t + e * r + n * s + i * (s * r);
			},
		};
	}
	bo.prototype.isArcCurve = !0;
	const So = new Et(),
		Eo = new Mo(),
		To = new Mo(),
		Ao = new Mo();
	class Co extends _o {
		constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
			super(),
				(this.type = "CatmullRomCurve3"),
				(this.points = t),
				(this.closed = e),
				(this.curveType = n),
				(this.tension = i);
		}
		getPoint(t, e = new Et()) {
			const n = e,
				i = this.points,
				r = i.length,
				s = (r - (this.closed ? 0 : 1)) * t;
			let o,
				a,
				l = Math.floor(s),
				c = s - l;
			this.closed
				? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r)
				: 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
				this.closed || l > 0 ? (o = i[(l - 1) % r]) : (So.subVectors(i[0], i[1]).add(i[0]), (o = So));
			const h = i[l % r],
				u = i[(l + 1) % r];
			if (
				(this.closed || l + 2 < r ? (a = i[(l + 2) % r]) : (So.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (a = So)),
				"centripetal" === this.curveType || "chordal" === this.curveType)
			) {
				const t = "chordal" === this.curveType ? 0.5 : 0.25;
				let e = Math.pow(o.distanceToSquared(h), t),
					n = Math.pow(h.distanceToSquared(u), t),
					i = Math.pow(u.distanceToSquared(a), t);
				n < 1e-4 && (n = 1),
					e < 1e-4 && (e = n),
					i < 1e-4 && (i = n),
					Eo.initNonuniformCatmullRom(o.x, h.x, u.x, a.x, e, n, i),
					To.initNonuniformCatmullRom(o.y, h.y, u.y, a.y, e, n, i),
					Ao.initNonuniformCatmullRom(o.z, h.z, u.z, a.z, e, n, i);
			} else
				"catmullrom" === this.curveType &&
					(Eo.initCatmullRom(o.x, h.x, u.x, a.x, this.tension),
					To.initCatmullRom(o.y, h.y, u.y, a.y, this.tension),
					Ao.initCatmullRom(o.z, h.z, u.z, a.z, this.tension));
			return n.set(Eo.calc(c), To.calc(c), Ao.calc(c)), n;
		}
		copy(t) {
			super.copy(t), (this.points = []);
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push(n.clone());
			}
			return (this.closed = t.closed), (this.curveType = t.curveType), (this.tension = t.tension), this;
		}
		toJSON() {
			const t = super.toJSON();
			t.points = [];
			for (let e = 0, n = this.points.length; e < n; e++) {
				const n = this.points[e];
				t.points.push(n.toArray());
			}
			return (t.closed = this.closed), (t.curveType = this.curveType), (t.tension = this.tension), t;
		}
		fromJSON(t) {
			super.fromJSON(t), (this.points = []);
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push(new Et().fromArray(n));
			}
			return (this.closed = t.closed), (this.curveType = t.curveType), (this.tension = t.tension), this;
		}
	}
	function Ro(t, e, n, i, r) {
		const s = 0.5 * (i - e),
			o = 0.5 * (r - n),
			a = t * t;
		return (2 * n - 2 * i + s + o) * (t * a) + (-3 * n + 3 * i - 2 * s - o) * a + s * t + n;
	}
	function Lo(t, e, n, i) {
		return (
			(function (t, e) {
				const n = 1 - t;
				return n * n * e;
			})(t, e) +
			(function (t, e) {
				return 2 * (1 - t) * t * e;
			})(t, n) +
			(function (t, e) {
				return t * t * e;
			})(t, i)
		);
	}
	function Po(t, e, n, i, r) {
		return (
			(function (t, e) {
				const n = 1 - t;
				return n * n * n * e;
			})(t, e) +
			(function (t, e) {
				const n = 1 - t;
				return 3 * n * n * t * e;
			})(t, n) +
			(function (t, e) {
				return 3 * (1 - t) * t * t * e;
			})(t, i) +
			(function (t, e) {
				return t * t * t * e;
			})(t, r)
		);
	}
	Co.prototype.isCatmullRomCurve3 = !0;
	class Io extends _o {
		constructor(t = new Q(), e = new Q(), n = new Q(), i = new Q()) {
			super(), (this.type = "CubicBezierCurve"), (this.v0 = t), (this.v1 = e), (this.v2 = n), (this.v3 = i);
		}
		getPoint(t, e = new Q()) {
			const n = e,
				i = this.v0,
				r = this.v1,
				s = this.v2,
				o = this.v3;
			return n.set(Po(t, i.x, r.x, s.x, o.x), Po(t, i.y, r.y, s.y, o.y)), n;
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
		}
		toJSON() {
			const t = super.toJSON();
			return (
				(t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), (t.v3 = this.v3.toArray()), t
			);
		}
		fromJSON(t) {
			return (
				super.fromJSON(t),
				this.v0.fromArray(t.v0),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this.v3.fromArray(t.v3),
				this
			);
		}
	}
	Io.prototype.isCubicBezierCurve = !0;
	class Do extends _o {
		constructor(t = new Et(), e = new Et(), n = new Et(), i = new Et()) {
			super(), (this.type = "CubicBezierCurve3"), (this.v0 = t), (this.v1 = e), (this.v2 = n), (this.v3 = i);
		}
		getPoint(t, e = new Et()) {
			const n = e,
				i = this.v0,
				r = this.v1,
				s = this.v2,
				o = this.v3;
			return n.set(Po(t, i.x, r.x, s.x, o.x), Po(t, i.y, r.y, s.y, o.y), Po(t, i.z, r.z, s.z, o.z)), n;
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
		}
		toJSON() {
			const t = super.toJSON();
			return (
				(t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), (t.v3 = this.v3.toArray()), t
			);
		}
		fromJSON(t) {
			return (
				super.fromJSON(t),
				this.v0.fromArray(t.v0),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this.v3.fromArray(t.v3),
				this
			);
		}
	}
	Do.prototype.isCubicBezierCurve3 = !0;
	class No extends _o {
		constructor(t = new Q(), e = new Q()) {
			super(), (this.type = "LineCurve"), (this.v1 = t), (this.v2 = e);
		}
		getPoint(t, e = new Q()) {
			const n = e;
			return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
		}
		getPointAt(t, e) {
			return this.getPoint(t, e);
		}
		getTangent(t, e) {
			const n = e || new Q();
			return n.copy(this.v2).sub(this.v1).normalize(), n;
		}
		copy(t) {
			return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
		}
		toJSON() {
			const t = super.toJSON();
			return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
		}
	}
	No.prototype.isLineCurve = !0;
	class zo extends _o {
		constructor(t = new Q(), e = new Q(), n = new Q()) {
			super(), (this.type = "QuadraticBezierCurve"), (this.v0 = t), (this.v1 = e), (this.v2 = n);
		}
		getPoint(t, e = new Q()) {
			const n = e,
				i = this.v0,
				r = this.v1,
				s = this.v2;
			return n.set(Lo(t, i.x, r.x, s.x), Lo(t, i.y, r.y, s.y)), n;
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
		}
		toJSON() {
			const t = super.toJSON();
			return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
		}
	}
	zo.prototype.isQuadraticBezierCurve = !0;
	class Bo extends _o {
		constructor(t = new Et(), e = new Et(), n = new Et()) {
			super(), (this.type = "QuadraticBezierCurve3"), (this.v0 = t), (this.v1 = e), (this.v2 = n);
		}
		getPoint(t, e = new Et()) {
			const n = e,
				i = this.v0,
				r = this.v1,
				s = this.v2;
			return n.set(Lo(t, i.x, r.x, s.x), Lo(t, i.y, r.y, s.y), Lo(t, i.z, r.z, s.z)), n;
		}
		copy(t) {
			return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
		}
		toJSON() {
			const t = super.toJSON();
			return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
		}
		fromJSON(t) {
			return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
		}
	}
	Bo.prototype.isQuadraticBezierCurve3 = !0;
	class Oo extends _o {
		constructor(t = []) {
			super(), (this.type = "SplineCurve"), (this.points = t);
		}
		getPoint(t, e = new Q()) {
			const n = e,
				i = this.points,
				r = (i.length - 1) * t,
				s = Math.floor(r),
				o = r - s,
				a = i[0 === s ? s : s - 1],
				l = i[s],
				c = i[s > i.length - 2 ? i.length - 1 : s + 1],
				h = i[s > i.length - 3 ? i.length - 1 : s + 2];
			return n.set(Ro(o, a.x, l.x, c.x, h.x), Ro(o, a.y, l.y, c.y, h.y)), n;
		}
		copy(t) {
			super.copy(t), (this.points = []);
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push(n.clone());
			}
			return this;
		}
		toJSON() {
			const t = super.toJSON();
			t.points = [];
			for (let e = 0, n = this.points.length; e < n; e++) {
				const n = this.points[e];
				t.points.push(n.toArray());
			}
			return t;
		}
		fromJSON(t) {
			super.fromJSON(t), (this.points = []);
			for (let e = 0, n = t.points.length; e < n; e++) {
				const n = t.points[e];
				this.points.push(new Q().fromArray(n));
			}
			return this;
		}
	}
	Oo.prototype.isSplineCurve = !0;
	var Fo = Object.freeze({
		__proto__: null,
		ArcCurve: bo,
		CatmullRomCurve3: Co,
		CubicBezierCurve: Io,
		CubicBezierCurve3: Do,
		EllipseCurve: wo,
		LineCurve: No,
		LineCurve3: class extends _o {
			constructor(t = new Et(), e = new Et()) {
				super(), (this.type = "LineCurve3"), (this.isLineCurve3 = !0), (this.v1 = t), (this.v2 = e);
			}
			getPoint(t, e = new Et()) {
				const n = e;
				return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
			}
			getPointAt(t, e) {
				return this.getPoint(t, e);
			}
			copy(t) {
				return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
			}
			toJSON() {
				const t = super.toJSON();
				return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}
			fromJSON(t) {
				return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
			}
		},
		QuadraticBezierCurve: zo,
		QuadraticBezierCurve3: Bo,
		SplineCurve: Oo,
	});
	class Ho extends _o {
		constructor() {
			super(), (this.type = "CurvePath"), (this.curves = []), (this.autoClose = !1);
		}
		add(t) {
			this.curves.push(t);
		}
		closePath() {
			const t = this.curves[0].getPoint(0),
				e = this.curves[this.curves.length - 1].getPoint(1);
			t.equals(e) || this.curves.push(new No(e, t));
		}
		getPoint(t, e) {
			const n = t * this.getLength(),
				i = this.getCurveLengths();
			let r = 0;
			for (; r < i.length; ) {
				if (i[r] >= n) {
					const t = i[r] - n,
						s = this.curves[r],
						o = s.getLength(),
						a = 0 === o ? 0 : 1 - t / o;
					return s.getPointAt(a, e);
				}
				r++;
			}
			return null;
		}
		getLength() {
			const t = this.getCurveLengths();
			return t[t.length - 1];
		}
		updateArcLengths() {
			(this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
		}
		getCurveLengths() {
			if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
			const t = [];
			let e = 0;
			for (let n = 0, i = this.curves.length; n < i; n++) (e += this.curves[n].getLength()), t.push(e);
			return (this.cacheLengths = t), t;
		}
		getSpacedPoints(t = 40) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return this.autoClose && e.push(e[0]), e;
		}
		getPoints(t = 12) {
			const e = [];
			let n;
			for (let i = 0, r = this.curves; i < r.length; i++) {
				const s = r[i],
					o = s.isEllipseCurve
						? 2 * t
						: s.isLineCurve || s.isLineCurve3
						? 1
						: s.isSplineCurve
						? t * s.points.length
						: t,
					a = s.getPoints(o);
				for (let t = 0; t < a.length; t++) {
					const i = a[t];
					(n && n.equals(i)) || (e.push(i), (n = i));
				}
			}
			return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
		}
		copy(t) {
			super.copy(t), (this.curves = []);
			for (let e = 0, n = t.curves.length; e < n; e++) {
				const n = t.curves[e];
				this.curves.push(n.clone());
			}
			return (this.autoClose = t.autoClose), this;
		}
		toJSON() {
			const t = super.toJSON();
			(t.autoClose = this.autoClose), (t.curves = []);
			for (let e = 0, n = this.curves.length; e < n; e++) {
				const n = this.curves[e];
				t.curves.push(n.toJSON());
			}
			return t;
		}
		fromJSON(t) {
			super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
			for (let e = 0, n = t.curves.length; e < n; e++) {
				const n = t.curves[e];
				this.curves.push(new Fo[n.type]().fromJSON(n));
			}
			return this;
		}
	}
	class ko extends Ho {
		constructor(t) {
			super(), (this.type = "Path"), (this.currentPoint = new Q()), t && this.setFromPoints(t);
		}
		setFromPoints(t) {
			this.moveTo(t[0].x, t[0].y);
			for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
			return this;
		}
		moveTo(t, e) {
			return this.currentPoint.set(t, e), this;
		}
		lineTo(t, e) {
			const n = new No(this.currentPoint.clone(), new Q(t, e));
			return this.curves.push(n), this.currentPoint.set(t, e), this;
		}
		quadraticCurveTo(t, e, n, i) {
			const r = new zo(this.currentPoint.clone(), new Q(t, e), new Q(n, i));
			return this.curves.push(r), this.currentPoint.set(n, i), this;
		}
		bezierCurveTo(t, e, n, i, r, s) {
			const o = new Io(this.currentPoint.clone(), new Q(t, e), new Q(n, i), new Q(r, s));
			return this.curves.push(o), this.currentPoint.set(r, s), this;
		}
		splineThru(t) {
			const e = [this.currentPoint.clone()].concat(t),
				n = new Oo(e);
			return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
		}
		arc(t, e, n, i, r, s) {
			const o = this.currentPoint.x,
				a = this.currentPoint.y;
			return this.absarc(t + o, e + a, n, i, r, s), this;
		}
		absarc(t, e, n, i, r, s) {
			return this.absellipse(t, e, n, n, i, r, s), this;
		}
		ellipse(t, e, n, i, r, s, o, a) {
			const l = this.currentPoint.x,
				c = this.currentPoint.y;
			return this.absellipse(t + l, e + c, n, i, r, s, o, a), this;
		}
		absellipse(t, e, n, i, r, s, o, a) {
			const l = new wo(t, e, n, i, r, s, o, a);
			if (this.curves.length > 0) {
				const t = l.getPoint(0);
				t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
			}
			this.curves.push(l);
			const c = l.getPoint(1);
			return this.currentPoint.copy(c), this;
		}
		copy(t) {
			return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
		}
		toJSON() {
			const t = super.toJSON();
			return (t.currentPoint = this.currentPoint.toArray()), t;
		}
		fromJSON(t) {
			return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
		}
	}
	class Uo extends en {
		constructor(t = 1, e = 1, n = 1, i = 8, r = 1, s = !1, o = 0, a = 2 * Math.PI) {
			super(),
				(this.type = "CylinderGeometry"),
				(this.parameters = {
					radiusTop: t,
					radiusBottom: e,
					height: n,
					radialSegments: i,
					heightSegments: r,
					openEnded: s,
					thetaStart: o,
					thetaLength: a,
				});
			const l = this;
			(i = Math.floor(i)), (r = Math.floor(r));
			const c = [],
				h = [],
				u = [],
				d = [];
			let p = 0;
			const m = [],
				f = n / 2;
			let g = 0;
			function v(n) {
				const r = p,
					s = new Q(),
					m = new Et();
				let v = 0;
				const y = !0 === n ? t : e,
					x = !0 === n ? 1 : -1;
				for (let t = 1; t <= i; t++) h.push(0, f * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
				const _ = p;
				for (let t = 0; t <= i; t++) {
					const e = (t / i) * a + o,
						n = Math.cos(e),
						r = Math.sin(e);
					(m.x = y * r),
						(m.y = f * x),
						(m.z = y * n),
						h.push(m.x, m.y, m.z),
						u.push(0, x, 0),
						(s.x = 0.5 * n + 0.5),
						(s.y = 0.5 * r * x + 0.5),
						d.push(s.x, s.y),
						p++;
				}
				for (let t = 0; t < i; t++) {
					const e = r + t,
						i = _ + t;
					!0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), (v += 3);
				}
				l.addGroup(g, v, !0 === n ? 1 : 2), (g += v);
			}
			!(function () {
				const s = new Et(),
					v = new Et();
				let y = 0;
				const x = (e - t) / n;
				for (let l = 0; l <= r; l++) {
					const c = [],
						g = l / r,
						y = g * (e - t) + t;
					for (let t = 0; t <= i; t++) {
						const e = t / i,
							r = e * a + o,
							l = Math.sin(r),
							m = Math.cos(r);
						(v.x = y * l),
							(v.y = -g * n + f),
							(v.z = y * m),
							h.push(v.x, v.y, v.z),
							s.set(l, x, m).normalize(),
							u.push(s.x, s.y, s.z),
							d.push(e, 1 - g),
							c.push(p++);
					}
					m.push(c);
				}
				for (let t = 0; t < i; t++)
					for (let e = 0; e < r; e++) {
						const n = m[e][t],
							i = m[e + 1][t],
							r = m[e + 1][t + 1],
							s = m[e][t + 1];
						c.push(n, i, s), c.push(i, r, s), (y += 6);
					}
				l.addGroup(g, y, 0), (g += y);
			})(),
				!1 === s && (t > 0 && v(!0), e > 0 && v(!1)),
				this.setIndex(c),
				this.setAttribute("position", new Xe(h, 3)),
				this.setAttribute("normal", new Xe(u, 3)),
				this.setAttribute("uv", new Xe(d, 2));
		}
		static fromJSON(t) {
			return new Uo(
				t.radiusTop,
				t.radiusBottom,
				t.height,
				t.radialSegments,
				t.heightSegments,
				t.openEnded,
				t.thetaStart,
				t.thetaLength
			);
		}
	}
	new Et(), new Et(), new Et(), new Fe();
	class Vo extends ko {
		constructor(t) {
			super(t), (this.uuid = j()), (this.type = "Shape"), (this.holes = []);
		}
		getPointsHoles(t) {
			const e = [];
			for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
			return e;
		}
		extractPoints(t) {
			return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
		}
		copy(t) {
			super.copy(t), (this.holes = []);
			for (let e = 0, n = t.holes.length; e < n; e++) {
				const n = t.holes[e];
				this.holes.push(n.clone());
			}
			return this;
		}
		toJSON() {
			const t = super.toJSON();
			(t.uuid = this.uuid), (t.holes = []);
			for (let e = 0, n = this.holes.length; e < n; e++) {
				const n = this.holes[e];
				t.holes.push(n.toJSON());
			}
			return t;
		}
		fromJSON(t) {
			super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
			for (let e = 0, n = t.holes.length; e < n; e++) {
				const n = t.holes[e];
				this.holes.push(new ko().fromJSON(n));
			}
			return this;
		}
	}
	function Go(t, e, n, i, r) {
		let s, o;
		if (
			r ===
			(function (t, e, n, i) {
				let r = 0;
				for (let s = e, o = n - i; s < n; s += i) (r += (t[o] - t[s]) * (t[s + 1] + t[o + 1])), (o = s);
				return r;
			})(t, e, n, i) >
				0
		)
			for (s = e; s < n; s += i) o = ha(s, t[s], t[s + 1], o);
		else for (s = n - i; s >= e; s -= i) o = ha(s, t[s], t[s + 1], o);
		return o && ra(o, o.next) && (ua(o), (o = o.next)), o;
	}
	function Wo(t, e) {
		if (!t) return t;
		e || (e = t);
		let n,
			i = t;
		do {
			if (((n = !1), i.steiner || (!ra(i, i.next) && 0 !== ia(i.prev, i, i.next)))) i = i.next;
			else {
				if ((ua(i), (i = e = i.prev), i === i.next)) break;
				n = !0;
			}
		} while (n || i !== e);
		return e;
	}
	function jo(t, e, n, i, r, s, o) {
		if (!t) return;
		!o &&
			s &&
			(function (t, e, n, i) {
				let r = t;
				do {
					null === r.z && (r.z = Qo(r.x, r.y, e, n, i)), (r.prevZ = r.prev), (r.nextZ = r.next), (r = r.next);
				} while (r !== t);
				(r.prevZ.nextZ = null),
					(r.prevZ = null),
					(function (t) {
						let e,
							n,
							i,
							r,
							s,
							o,
							a,
							l,
							c = 1;
						do {
							for (n = t, t = null, s = null, o = 0; n; ) {
								for (o++, i = n, a = 0, e = 0; e < c && (a++, (i = i.nextZ), i); e++);
								for (l = c; a > 0 || (l > 0 && i); )
									0 !== a && (0 === l || !i || n.z <= i.z)
										? ((r = n), (n = n.nextZ), a--)
										: ((r = i), (i = i.nextZ), l--),
										s ? (s.nextZ = r) : (t = r),
										(r.prevZ = s),
										(s = r);
								n = i;
							}
							(s.nextZ = null), (c *= 2);
						} while (o > 1);
					})(r);
			})(t, i, r, s);
		let a,
			l,
			c = t;
		for (; t.prev !== t.next; )
			if (((a = t.prev), (l = t.next), s ? Xo(t, i, r, s) : qo(t)))
				e.push(a.i / n), e.push(t.i / n), e.push(l.i / n), ua(t), (t = l.next), (c = l.next);
			else if ((t = l) === c) {
				o
					? 1 === o
						? jo((t = Yo(Wo(t), e, n)), e, n, i, r, s, 2)
						: 2 === o && Zo(t, e, n, i, r, s)
					: jo(Wo(t), e, n, i, r, s, 1);
				break;
			}
	}
	function qo(t) {
		const e = t.prev,
			n = t,
			i = t.next;
		if (ia(e, n, i) >= 0) return !1;
		let r = t.next.next;
		for (; r !== t.prev; ) {
			if (ea(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && ia(r.prev, r, r.next) >= 0) return !1;
			r = r.next;
		}
		return !0;
	}
	function Xo(t, e, n, i) {
		const r = t.prev,
			s = t,
			o = t.next;
		if (ia(r, s, o) >= 0) return !1;
		const a = r.x < s.x ? (r.x < o.x ? r.x : o.x) : s.x < o.x ? s.x : o.x,
			l = r.y < s.y ? (r.y < o.y ? r.y : o.y) : s.y < o.y ? s.y : o.y,
			c = r.x > s.x ? (r.x > o.x ? r.x : o.x) : s.x > o.x ? s.x : o.x,
			h = r.y > s.y ? (r.y > o.y ? r.y : o.y) : s.y > o.y ? s.y : o.y,
			u = Qo(a, l, e, n, i),
			d = Qo(c, h, e, n, i);
		let p = t.prevZ,
			m = t.nextZ;
		for (; p && p.z >= u && m && m.z <= d; ) {
			if (p !== t.prev && p !== t.next && ea(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && ia(p.prev, p, p.next) >= 0)
				return !1;
			if (
				((p = p.prevZ),
				m !== t.prev && m !== t.next && ea(r.x, r.y, s.x, s.y, o.x, o.y, m.x, m.y) && ia(m.prev, m, m.next) >= 0)
			)
				return !1;
			m = m.nextZ;
		}
		for (; p && p.z >= u; ) {
			if (p !== t.prev && p !== t.next && ea(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && ia(p.prev, p, p.next) >= 0)
				return !1;
			p = p.prevZ;
		}
		for (; m && m.z <= d; ) {
			if (m !== t.prev && m !== t.next && ea(r.x, r.y, s.x, s.y, o.x, o.y, m.x, m.y) && ia(m.prev, m, m.next) >= 0)
				return !1;
			m = m.nextZ;
		}
		return !0;
	}
	function Yo(t, e, n) {
		let i = t;
		do {
			const r = i.prev,
				s = i.next.next;
			!ra(r, s) &&
				sa(r, i, i.next, s) &&
				la(r, s) &&
				la(s, r) &&
				(e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), ua(i), ua(i.next), (i = t = s)),
				(i = i.next);
		} while (i !== t);
		return Wo(i);
	}
	function Zo(t, e, n, i, r, s) {
		let o = t;
		do {
			let t = o.next.next;
			for (; t !== o.prev; ) {
				if (o.i !== t.i && na(o, t)) {
					let a = ca(o, t);
					return (o = Wo(o, o.next)), (a = Wo(a, a.next)), jo(o, e, n, i, r, s), void jo(a, e, n, i, r, s);
				}
				t = t.next;
			}
			o = o.next;
		} while (o !== t);
	}
	function $o(t, e) {
		return t.x - e.x;
	}
	function Ko(t, e) {
		if (
			((e = (function (t, e) {
				let n = e;
				const i = t.x,
					r = t.y;
				let s,
					o = -1 / 0;
				do {
					if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
						const t = n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
						if (t <= i && t > o) {
							if (((o = t), t === i)) {
								if (r === n.y) return n;
								if (r === n.next.y) return n.next;
							}
							s = n.x < n.next.x ? n : n.next;
						}
					}
					n = n.next;
				} while (n !== e);
				if (!s) return null;
				if (i === o) return s;
				const a = s,
					l = s.x,
					c = s.y;
				let h,
					u = 1 / 0;
				n = s;
				do {
					i >= n.x &&
						n.x >= l &&
						i !== n.x &&
						ea(r < c ? i : o, r, l, c, r < c ? o : i, r, n.x, n.y) &&
						((h = Math.abs(r - n.y) / (i - n.x)),
						la(n, t) && (h < u || (h === u && (n.x > s.x || (n.x === s.x && Jo(s, n))))) && ((s = n), (u = h))),
						(n = n.next);
				} while (n !== a);
				return s;
			})(t, e)),
			e)
		) {
			const n = ca(e, t);
			Wo(e, e.next), Wo(n, n.next);
		}
	}
	function Jo(t, e) {
		return ia(t.prev, t, e.prev) < 0 && ia(e.next, t, t.next) < 0;
	}
	function Qo(t, e, n, i, r) {
		return (
			(t =
				1431655765 &
				((t =
					858993459 &
					((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | (t << 8))) | (t << 4))) | (t << 2))) |
					(t << 1))) |
			((e =
				1431655765 &
				((e =
					858993459 &
					((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) | (e << 4))) | (e << 2))) |
					(e << 1))) <<
				1)
		);
	}
	function ta(t) {
		let e = t,
			n = t;
		do {
			(e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
		} while (e !== t);
		return n;
	}
	function ea(t, e, n, i, r, s, o, a) {
		return (
			(r - o) * (e - a) - (t - o) * (s - a) >= 0 &&
			(t - o) * (i - a) - (n - o) * (e - a) >= 0 &&
			(n - o) * (s - a) - (r - o) * (i - a) >= 0
		);
	}
	function na(t, e) {
		return (
			t.next.i !== e.i &&
			t.prev.i !== e.i &&
			!(function (t, e) {
				let n = t;
				do {
					if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && sa(n, n.next, t, e)) return !0;
					n = n.next;
				} while (n !== t);
				return !1;
			})(t, e) &&
			((la(t, e) &&
				la(e, t) &&
				(function (t, e) {
					let n = t,
						i = !1;
					const r = (t.x + e.x) / 2,
						s = (t.y + e.y) / 2;
					do {
						n.y > s != n.next.y > s &&
							n.next.y !== n.y &&
							r < ((n.next.x - n.x) * (s - n.y)) / (n.next.y - n.y) + n.x &&
							(i = !i),
							(n = n.next);
					} while (n !== t);
					return i;
				})(t, e) &&
				(ia(t.prev, t, e.prev) || ia(t, e.prev, e))) ||
				(ra(t, e) && ia(t.prev, t, t.next) > 0 && ia(e.prev, e, e.next) > 0))
		);
	}
	function ia(t, e, n) {
		return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
	}
	function ra(t, e) {
		return t.x === e.x && t.y === e.y;
	}
	function sa(t, e, n, i) {
		const r = aa(ia(t, e, n)),
			s = aa(ia(t, e, i)),
			o = aa(ia(n, i, t)),
			a = aa(ia(n, i, e));
		return (
			(r !== s && o !== a) ||
			!(0 !== r || !oa(t, n, e)) ||
			!(0 !== s || !oa(t, i, e)) ||
			!(0 !== o || !oa(n, t, i)) ||
			!(0 !== a || !oa(n, e, i))
		);
	}
	function oa(t, e, n) {
		return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
	}
	function aa(t) {
		return t > 0 ? 1 : t < 0 ? -1 : 0;
	}
	function la(t, e) {
		return ia(t.prev, t, t.next) < 0
			? ia(t, e, t.next) >= 0 && ia(t, t.prev, e) >= 0
			: ia(t, e, t.prev) < 0 || ia(t, t.next, e) < 0;
	}
	function ca(t, e) {
		const n = new da(t.i, t.x, t.y),
			i = new da(e.i, e.x, e.y),
			r = t.next,
			s = e.prev;
		return (t.next = e), (e.prev = t), (n.next = r), (r.prev = n), (i.next = n), (n.prev = i), (s.next = i), (i.prev = s), i;
	}
	function ha(t, e, n, i) {
		const r = new da(t, e, n);
		return i ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r)) : ((r.prev = r), (r.next = r)), r;
	}
	function ua(t) {
		(t.next.prev = t.prev),
			(t.prev.next = t.next),
			t.prevZ && (t.prevZ.nextZ = t.nextZ),
			t.nextZ && (t.nextZ.prevZ = t.prevZ);
	}
	function da(t, e, n) {
		(this.i = t),
			(this.x = e),
			(this.y = n),
			(this.prev = null),
			(this.next = null),
			(this.z = null),
			(this.prevZ = null),
			(this.nextZ = null),
			(this.steiner = !1);
	}
	class pa {
		static area(t) {
			const e = t.length;
			let n = 0;
			for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
			return 0.5 * n;
		}
		static isClockWise(t) {
			return pa.area(t) < 0;
		}
		static triangulateShape(t, e) {
			const n = [],
				i = [],
				r = [];
			ma(t), fa(n, t);
			let s = t.length;
			e.forEach(ma);
			for (let t = 0; t < e.length; t++) i.push(s), (s += e[t].length), fa(n, e[t]);
			const o = (function (t, e, n = 2) {
				const i = e && e.length,
					r = i ? e[0] * n : t.length;
				let s = Go(t, 0, r, n, !0);
				const o = [];
				if (!s || s.next === s.prev) return o;
				let a, l, c, h, u, d, p;
				if (
					(i &&
						(s = (function (t, e, n, i) {
							const r = [];
							let s, o, a, l, c;
							for (s = 0, o = e.length; s < o; s++)
								(a = e[s] * i),
									(l = s < o - 1 ? e[s + 1] * i : t.length),
									(c = Go(t, a, l, i, !1)),
									c === c.next && (c.steiner = !0),
									r.push(ta(c));
							for (r.sort($o), s = 0; s < r.length; s++) Ko(r[s], n), (n = Wo(n, n.next));
							return n;
						})(t, e, s, n)),
					t.length > 80 * n)
				) {
					(a = c = t[0]), (l = h = t[1]);
					for (let e = n; e < r; e += n)
						(u = t[e]), (d = t[e + 1]), u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
					(p = Math.max(c - a, h - l)), (p = 0 !== p ? 1 / p : 0);
				}
				return jo(s, o, n, a, l, p), o;
			})(n, i);
			for (let t = 0; t < o.length; t += 3) r.push(o.slice(t, t + 3));
			return r;
		}
	}
	function ma(t) {
		const e = t.length;
		e > 2 && t[e - 1].equals(t[0]) && t.pop();
	}
	function fa(t, e) {
		for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
	}
	class ga extends en {
		constructor(t = new Vo([new Q(0.5, 0.5), new Q(-0.5, 0.5), new Q(-0.5, -0.5), new Q(0.5, -0.5)]), e = {}) {
			super(),
				(this.type = "ExtrudeGeometry"),
				(this.parameters = { shapes: t, options: e }),
				(t = Array.isArray(t) ? t : [t]);
			const n = this,
				i = [],
				r = [];
			for (let e = 0, n = t.length; e < n; e++) s(t[e]);
			function s(t) {
				const s = [],
					o = void 0 !== e.curveSegments ? e.curveSegments : 12,
					a = void 0 !== e.steps ? e.steps : 1;
				let l = void 0 !== e.depth ? e.depth : 1,
					c = void 0 === e.bevelEnabled || e.bevelEnabled,
					h = void 0 !== e.bevelThickness ? e.bevelThickness : 0.2,
					u = void 0 !== e.bevelSize ? e.bevelSize : h - 0.1,
					d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
					p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
				const m = e.extrudePath,
					f = void 0 !== e.UVGenerator ? e.UVGenerator : va;
				void 0 !== e.amount &&
					(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), (l = e.amount));
				let g,
					v,
					y,
					x,
					_,
					w = !1;
				m &&
					((g = m.getSpacedPoints(a)),
					(w = !0),
					(c = !1),
					(v = m.computeFrenetFrames(a, !1)),
					(y = new Et()),
					(x = new Et()),
					(_ = new Et())),
					c || ((p = 0), (h = 0), (u = 0), (d = 0));
				const b = t.extractPoints(o);
				let M = b.shape;
				const S = b.holes;
				if (!pa.isClockWise(M)) {
					M = M.reverse();
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						pa.isClockWise(e) && (S[t] = e.reverse());
					}
				}
				const E = pa.triangulateShape(M, S),
					T = M;
				for (let t = 0, e = S.length; t < e; t++) {
					const e = S[t];
					M = M.concat(e);
				}
				function A(t, e, n) {
					return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t);
				}
				const C = M.length,
					R = E.length;
				function L(t, e, n) {
					let i, r, s;
					const o = t.x - e.x,
						a = t.y - e.y,
						l = n.x - t.x,
						c = n.y - t.y,
						h = o * o + a * a,
						u = o * c - a * l;
					if (Math.abs(u) > Number.EPSILON) {
						const u = Math.sqrt(h),
							d = Math.sqrt(l * l + c * c),
							p = e.x - a / u,
							m = e.y + o / u,
							f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (o * c - a * l);
						(i = p + o * f - t.x), (r = m + a * f - t.y);
						const g = i * i + r * r;
						if (g <= 2) return new Q(i, r);
						s = Math.sqrt(g / 2);
					} else {
						let t = !1;
						o > Number.EPSILON
							? l > Number.EPSILON && (t = !0)
							: o < -Number.EPSILON
							? l < -Number.EPSILON && (t = !0)
							: Math.sign(a) === Math.sign(c) && (t = !0),
							t ? ((i = -a), (r = o), (s = Math.sqrt(h))) : ((i = o), (r = a), (s = Math.sqrt(h / 2)));
					}
					return new Q(i / s, r / s);
				}
				const P = [];
				for (let t = 0, e = T.length, n = e - 1, i = t + 1; t < e; t++, n++, i++)
					n === e && (n = 0), i === e && (i = 0), (P[t] = L(T[t], T[n], T[i]));
				const I = [];
				let D,
					N = P.concat();
				for (let t = 0, e = S.length; t < e; t++) {
					const e = S[t];
					D = [];
					for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++)
						i === n && (i = 0), r === n && (r = 0), (D[t] = L(e[t], e[i], e[r]));
					I.push(D), (N = N.concat(D));
				}
				for (let t = 0; t < p; t++) {
					const e = t / p,
						n = h * Math.cos((e * Math.PI) / 2),
						i = u * Math.sin((e * Math.PI) / 2) + d;
					for (let t = 0, e = T.length; t < e; t++) {
						const e = A(T[t], P[t], i);
						O(e.x, e.y, -n);
					}
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						D = I[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], D[t], i);
							O(r.x, r.y, -n);
						}
					}
				}
				const z = u + d;
				for (let t = 0; t < C; t++) {
					const e = c ? A(M[t], N[t], z) : M[t];
					w
						? (x.copy(v.normals[0]).multiplyScalar(e.x),
						  y.copy(v.binormals[0]).multiplyScalar(e.y),
						  _.copy(g[0]).add(x).add(y),
						  O(_.x, _.y, _.z))
						: O(e.x, e.y, 0);
				}
				for (let t = 1; t <= a; t++)
					for (let e = 0; e < C; e++) {
						const n = c ? A(M[e], N[e], z) : M[e];
						w
							? (x.copy(v.normals[t]).multiplyScalar(n.x),
							  y.copy(v.binormals[t]).multiplyScalar(n.y),
							  _.copy(g[t]).add(x).add(y),
							  O(_.x, _.y, _.z))
							: O(n.x, n.y, (l / a) * t);
					}
				for (let t = p - 1; t >= 0; t--) {
					const e = t / p,
						n = h * Math.cos((e * Math.PI) / 2),
						i = u * Math.sin((e * Math.PI) / 2) + d;
					for (let t = 0, e = T.length; t < e; t++) {
						const e = A(T[t], P[t], i);
						O(e.x, e.y, l + n);
					}
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						D = I[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], D[t], i);
							w ? O(r.x, r.y + g[a - 1].y, g[a - 1].x + n) : O(r.x, r.y, l + n);
						}
					}
				}
				function B(t, e) {
					let n = t.length;
					for (; --n >= 0; ) {
						const i = n;
						let r = n - 1;
						r < 0 && (r = t.length - 1);
						for (let t = 0, n = a + 2 * p; t < n; t++) {
							const n = C * t,
								s = C * (t + 1);
							H(e + i + n, e + r + n, e + r + s, e + i + s);
						}
					}
				}
				function O(t, e, n) {
					s.push(t), s.push(e), s.push(n);
				}
				function F(t, e, r) {
					k(t), k(e), k(r);
					const s = i.length / 3,
						o = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
					U(o[0]), U(o[1]), U(o[2]);
				}
				function H(t, e, r, s) {
					k(t), k(e), k(s), k(e), k(r), k(s);
					const o = i.length / 3,
						a = f.generateSideWallUV(n, i, o - 6, o - 3, o - 2, o - 1);
					U(a[0]), U(a[1]), U(a[3]), U(a[1]), U(a[2]), U(a[3]);
				}
				function k(t) {
					i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
				}
				function U(t) {
					r.push(t.x), r.push(t.y);
				}
				!(function () {
					const t = i.length / 3;
					if (c) {
						let t = 0,
							e = C * t;
						for (let t = 0; t < R; t++) {
							const n = E[t];
							F(n[2] + e, n[1] + e, n[0] + e);
						}
						(t = a + 2 * p), (e = C * t);
						for (let t = 0; t < R; t++) {
							const n = E[t];
							F(n[0] + e, n[1] + e, n[2] + e);
						}
					} else {
						for (let t = 0; t < R; t++) {
							const e = E[t];
							F(e[2], e[1], e[0]);
						}
						for (let t = 0; t < R; t++) {
							const e = E[t];
							F(e[0] + C * a, e[1] + C * a, e[2] + C * a);
						}
					}
					n.addGroup(t, i.length / 3 - t, 0);
				})(),
					(function () {
						const t = i.length / 3;
						let e = 0;
						B(T, e), (e += T.length);
						for (let t = 0, n = S.length; t < n; t++) {
							const n = S[t];
							B(n, e), (e += n.length);
						}
						n.addGroup(t, i.length / 3 - t, 1);
					})();
			}
			this.setAttribute("position", new Xe(i, 3)), this.setAttribute("uv", new Xe(r, 2)), this.computeVertexNormals();
		}
		toJSON() {
			const t = super.toJSON();
			return (function (t, e, n) {
				if (((n.shapes = []), Array.isArray(t)))
					for (let e = 0, i = t.length; e < i; e++) {
						const i = t[e];
						n.shapes.push(i.uuid);
					}
				else n.shapes.push(t.uuid);
				return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n;
			})(this.parameters.shapes, this.parameters.options, t);
		}
		static fromJSON(t, e) {
			const n = [];
			for (let i = 0, r = t.shapes.length; i < r; i++) {
				const r = e[t.shapes[i]];
				n.push(r);
			}
			const i = t.options.extrudePath;
			return void 0 !== i && (t.options.extrudePath = new Fo[i.type]().fromJSON(i)), new ga(n, t.options);
		}
	}
	const va = {
		generateTopUV: function (t, e, n, i, r) {
			const s = e[3 * n],
				o = e[3 * n + 1],
				a = e[3 * i],
				l = e[3 * i + 1],
				c = e[3 * r],
				h = e[3 * r + 1];
			return [new Q(s, o), new Q(a, l), new Q(c, h)];
		},
		generateSideWallUV: function (t, e, n, i, r, s) {
			const o = e[3 * n],
				a = e[3 * n + 1],
				l = e[3 * n + 2],
				c = e[3 * i],
				h = e[3 * i + 1],
				u = e[3 * i + 2],
				d = e[3 * r],
				p = e[3 * r + 1],
				m = e[3 * r + 2],
				f = e[3 * s],
				g = e[3 * s + 1],
				v = e[3 * s + 2];
			return Math.abs(a - h) < Math.abs(o - c)
				? [new Q(o, 1 - l), new Q(c, 1 - u), new Q(d, 1 - m), new Q(f, 1 - v)]
				: [new Q(a, 1 - l), new Q(h, 1 - u), new Q(p, 1 - m), new Q(g, 1 - v)];
		},
	};
	class ya extends en {
		constructor(t = new Vo([new Q(0, 0.5), new Q(-0.5, -0.5), new Q(0.5, -0.5)]), e = 12) {
			super(), (this.type = "ShapeGeometry"), (this.parameters = { shapes: t, curveSegments: e });
			const n = [],
				i = [],
				r = [],
				s = [];
			let o = 0,
				a = 0;
			if (!1 === Array.isArray(t)) l(t);
			else for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(o, a, e), (o += a), (a = 0);
			function l(t) {
				const o = i.length / 3,
					l = t.extractPoints(e);
				let c = l.shape;
				const h = l.holes;
				!1 === pa.isClockWise(c) && (c = c.reverse());
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					!0 === pa.isClockWise(e) && (h[t] = e.reverse());
				}
				const u = pa.triangulateShape(c, h);
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					c = c.concat(e);
				}
				for (let t = 0, e = c.length; t < e; t++) {
					const e = c[t];
					i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
				}
				for (let t = 0, e = u.length; t < e; t++) {
					const e = u[t],
						i = e[0] + o,
						r = e[1] + o,
						s = e[2] + o;
					n.push(i, r, s), (a += 3);
				}
			}
			this.setIndex(n),
				this.setAttribute("position", new Xe(i, 3)),
				this.setAttribute("normal", new Xe(r, 3)),
				this.setAttribute("uv", new Xe(s, 2));
		}
		toJSON() {
			const t = super.toJSON();
			return (function (t, e) {
				if (((e.shapes = []), Array.isArray(t)))
					for (let n = 0, i = t.length; n < i; n++) {
						const i = t[n];
						e.shapes.push(i.uuid);
					}
				else e.shapes.push(t.uuid);
				return e;
			})(this.parameters.shapes, t);
		}
		static fromJSON(t, e) {
			const n = [];
			for (let i = 0, r = t.shapes.length; i < r; i++) {
				const r = e[t.shapes[i]];
				n.push(r);
			}
			return new ya(n, t.curveSegments);
		}
	}
	class xa extends en {
		constructor(t = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, o = Math.PI) {
			super(),
				(this.type = "SphereGeometry"),
				(this.parameters = {
					radius: t,
					widthSegments: e,
					heightSegments: n,
					phiStart: i,
					phiLength: r,
					thetaStart: s,
					thetaLength: o,
				}),
				(e = Math.max(3, Math.floor(e))),
				(n = Math.max(2, Math.floor(n)));
			const a = Math.min(s + o, Math.PI);
			let l = 0;
			const c = [],
				h = new Et(),
				u = new Et(),
				d = [],
				p = [],
				m = [],
				f = [];
			for (let d = 0; d <= n; d++) {
				const g = [],
					v = d / n;
				let y = 0;
				0 == d && 0 == s ? (y = 0.5 / e) : d == n && a == Math.PI && (y = -0.5 / e);
				for (let n = 0; n <= e; n++) {
					const a = n / e;
					(h.x = -t * Math.cos(i + a * r) * Math.sin(s + v * o)),
						(h.y = t * Math.cos(s + v * o)),
						(h.z = t * Math.sin(i + a * r) * Math.sin(s + v * o)),
						p.push(h.x, h.y, h.z),
						u.copy(h).normalize(),
						m.push(u.x, u.y, u.z),
						f.push(a + y, 1 - v),
						g.push(l++);
				}
				c.push(g);
			}
			for (let t = 0; t < n; t++)
				for (let i = 0; i < e; i++) {
					const e = c[t][i + 1],
						r = c[t][i],
						o = c[t + 1][i],
						l = c[t + 1][i + 1];
					(0 !== t || s > 0) && d.push(e, r, l), (t !== n - 1 || a < Math.PI) && d.push(r, o, l);
				}
			this.setIndex(d),
				this.setAttribute("position", new Xe(p, 3)),
				this.setAttribute("normal", new Xe(m, 3)),
				this.setAttribute("uv", new Xe(f, 2));
		}
		static fromJSON(t) {
			return new xa(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
		}
	}
	class _a extends ke {
		constructor(t) {
			super(),
				(this.type = "ShadowMaterial"),
				(this.color = new pt(0)),
				(this.transparent = !0),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return super.copy(t), this.color.copy(t.color), (this.fog = t.fog), this;
		}
	}
	_a.prototype.isShadowMaterial = !0;
	class wa extends Tn {
		constructor(t) {
			super(t), (this.type = "RawShaderMaterial");
		}
	}
	wa.prototype.isRawShaderMaterial = !0;
	class ba extends ke {
		constructor(t) {
			super(),
				(this.defines = { STANDARD: "" }),
				(this.type = "MeshStandardMaterial"),
				(this.color = new pt(16777215)),
				(this.roughness = 1),
				(this.metalness = 0),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new pt(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Q(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.roughnessMap = null),
				(this.metalnessMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.envMapIntensity = 1),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.flatShading = !1),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				(this.defines = { STANDARD: "" }),
				this.color.copy(t.color),
				(this.roughness = t.roughness),
				(this.metalness = t.metalness),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.roughnessMap = t.roughnessMap),
				(this.metalnessMap = t.metalnessMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.envMapIntensity = t.envMapIntensity),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.flatShading = t.flatShading),
				(this.fog = t.fog),
				this
			);
		}
	}
	ba.prototype.isMeshStandardMaterial = !0;
	class Ma extends ba {
		constructor(t) {
			super(),
				(this.defines = { STANDARD: "", PHYSICAL: "" }),
				(this.type = "MeshPhysicalMaterial"),
				(this.clearcoatMap = null),
				(this.clearcoatRoughness = 0),
				(this.clearcoatRoughnessMap = null),
				(this.clearcoatNormalScale = new Q(1, 1)),
				(this.clearcoatNormalMap = null),
				(this.ior = 1.5),
				Object.defineProperty(this, "reflectivity", {
					get: function () {
						return q((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
					},
					set: function (t) {
						this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
					},
				}),
				(this.sheenColor = new pt(0)),
				(this.sheenColorMap = null),
				(this.sheenRoughness = 1),
				(this.sheenRoughnessMap = null),
				(this.transmissionMap = null),
				(this.thickness = 0),
				(this.thicknessMap = null),
				(this.attenuationDistance = 0),
				(this.attenuationColor = new pt(1, 1, 1)),
				(this.specularIntensity = 1),
				(this.specularIntensityMap = null),
				(this.specularColor = new pt(1, 1, 1)),
				(this.specularColorMap = null),
				(this._sheen = 0),
				(this._clearcoat = 0),
				(this._transmission = 0),
				this.setValues(t);
		}
		get sheen() {
			return this._sheen;
		}
		set sheen(t) {
			this._sheen > 0 != t > 0 && this.version++, (this._sheen = t);
		}
		get clearcoat() {
			return this._clearcoat;
		}
		set clearcoat(t) {
			this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t);
		}
		get transmission() {
			return this._transmission;
		}
		set transmission(t) {
			this._transmission > 0 != t > 0 && this.version++, (this._transmission = t);
		}
		copy(t) {
			return (
				super.copy(t),
				(this.defines = { STANDARD: "", PHYSICAL: "" }),
				(this.clearcoat = t.clearcoat),
				(this.clearcoatMap = t.clearcoatMap),
				(this.clearcoatRoughness = t.clearcoatRoughness),
				(this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
				(this.clearcoatNormalMap = t.clearcoatNormalMap),
				this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
				(this.ior = t.ior),
				(this.sheen = t.sheen),
				this.sheenColor.copy(t.sheenColor),
				(this.sheenColorMap = t.sheenColorMap),
				(this.sheenRoughness = t.sheenRoughness),
				(this.sheenRoughnessMap = t.sheenRoughnessMap),
				(this.transmission = t.transmission),
				(this.transmissionMap = t.transmissionMap),
				(this.thickness = t.thickness),
				(this.thicknessMap = t.thicknessMap),
				(this.attenuationDistance = t.attenuationDistance),
				this.attenuationColor.copy(t.attenuationColor),
				(this.specularIntensity = t.specularIntensity),
				(this.specularIntensityMap = t.specularIntensityMap),
				this.specularColor.copy(t.specularColor),
				(this.specularColorMap = t.specularColorMap),
				this
			);
		}
	}
	Ma.prototype.isMeshPhysicalMaterial = !0;
	class Sa extends ke {
		constructor(t) {
			super(),
				(this.type = "MeshPhongMaterial"),
				(this.color = new pt(16777215)),
				(this.specular = new pt(1118481)),
				(this.shininess = 30),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new pt(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Q(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.flatShading = !1),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.color.copy(t.color),
				this.specular.copy(t.specular),
				(this.shininess = t.shininess),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.specularMap = t.specularMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.combine = t.combine),
				(this.reflectivity = t.reflectivity),
				(this.refractionRatio = t.refractionRatio),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.flatShading = t.flatShading),
				(this.fog = t.fog),
				this
			);
		}
	}
	Sa.prototype.isMeshPhongMaterial = !0;
	class Ea extends ke {
		constructor(t) {
			super(),
				(this.defines = { TOON: "" }),
				(this.type = "MeshToonMaterial"),
				(this.color = new pt(16777215)),
				(this.map = null),
				(this.gradientMap = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new pt(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Q(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.alphaMap = null),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.gradientMap = t.gradientMap),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.alphaMap = t.alphaMap),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.fog = t.fog),
				this
			);
		}
	}
	Ea.prototype.isMeshToonMaterial = !0;
	class Ta extends ke {
		constructor(t) {
			super(),
				(this.type = "MeshNormalMaterial"),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Q(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.flatShading = !1),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.flatShading = t.flatShading),
				this
			);
		}
	}
	Ta.prototype.isMeshNormalMaterial = !0;
	class Aa extends ke {
		constructor(t) {
			super(),
				(this.type = "MeshLambertMaterial"),
				(this.color = new pt(16777215)),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new pt(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.specularMap = t.specularMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.combine = t.combine),
				(this.reflectivity = t.reflectivity),
				(this.refractionRatio = t.refractionRatio),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.fog = t.fog),
				this
			);
		}
	}
	Aa.prototype.isMeshLambertMaterial = !0;
	class Ca extends ke {
		constructor(t) {
			super(),
				(this.defines = { MATCAP: "" }),
				(this.type = "MeshMatcapMaterial"),
				(this.color = new pt(16777215)),
				(this.matcap = null),
				(this.map = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Q(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.alphaMap = null),
				(this.flatShading = !1),
				(this.fog = !0),
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				(this.defines = { MATCAP: "" }),
				this.color.copy(t.color),
				(this.matcap = t.matcap),
				(this.map = t.map),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.alphaMap = t.alphaMap),
				(this.flatShading = t.flatShading),
				(this.fog = t.fog),
				this
			);
		}
	}
	Ca.prototype.isMeshMatcapMaterial = !0;
	class Ra extends eo {
		constructor(t) {
			super(),
				(this.type = "LineDashedMaterial"),
				(this.scale = 1),
				(this.dashSize = 3),
				(this.gapSize = 1),
				this.setValues(t);
		}
		copy(t) {
			return super.copy(t), (this.scale = t.scale), (this.dashSize = t.dashSize), (this.gapSize = t.gapSize), this;
		}
	}
	Ra.prototype.isLineDashedMaterial = !0;
	const La = {
		ShadowMaterial: _a,
		SpriteMaterial: Ss,
		RawShaderMaterial: wa,
		ShaderMaterial: Tn,
		PointsMaterial: po,
		MeshPhysicalMaterial: Ma,
		MeshStandardMaterial: ba,
		MeshPhongMaterial: Sa,
		MeshToonMaterial: Ea,
		MeshNormalMaterial: Ta,
		MeshLambertMaterial: Aa,
		MeshDepthMaterial: rs,
		MeshDistanceMaterial: ss,
		MeshBasicMaterial: Ue,
		MeshMatcapMaterial: Ca,
		LineDashedMaterial: Ra,
		LineBasicMaterial: eo,
		Material: ke,
	};
	ke.fromType = function (t) {
		return new La[t]();
	};
	const Pa = {
		arraySlice: function (t, e, n) {
			return Pa.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
		},
		convertArray: function (t, e, n) {
			return !t || (!n && t.constructor === e)
				? t
				: "number" == typeof e.BYTES_PER_ELEMENT
				? new e(t)
				: Array.prototype.slice.call(t);
		},
		isTypedArray: function (t) {
			return ArrayBuffer.isView(t) && !(t instanceof DataView);
		},
		getKeyframeOrder: function (t) {
			const e = t.length,
				n = new Array(e);
			for (let t = 0; t !== e; ++t) n[t] = t;
			return (
				n.sort(function (e, n) {
					return t[e] - t[n];
				}),
				n
			);
		},
		sortedArray: function (t, e, n) {
			const i = t.length,
				r = new t.constructor(i);
			for (let s = 0, o = 0; o !== i; ++s) {
				const i = n[s] * e;
				for (let n = 0; n !== e; ++n) r[o++] = t[i + n];
			}
			return r;
		},
		flattenJSON: function (t, e, n, i) {
			let r = 1,
				s = t[0];
			for (; void 0 !== s && void 0 === s[i]; ) s = t[r++];
			if (void 0 === s) return;
			let o = s[i];
			if (void 0 !== o)
				if (Array.isArray(o))
					do {
						(o = s[i]), void 0 !== o && (e.push(s.time), n.push.apply(n, o)), (s = t[r++]);
					} while (void 0 !== s);
				else if (void 0 !== o.toArray)
					do {
						(o = s[i]), void 0 !== o && (e.push(s.time), o.toArray(n, n.length)), (s = t[r++]);
					} while (void 0 !== s);
				else
					do {
						(o = s[i]), void 0 !== o && (e.push(s.time), n.push(o)), (s = t[r++]);
					} while (void 0 !== s);
		},
		subclip: function (t, e, n, i, r = 30) {
			const s = t.clone();
			s.name = e;
			const o = [];
			for (let t = 0; t < s.tracks.length; ++t) {
				const e = s.tracks[t],
					a = e.getValueSize(),
					l = [],
					c = [];
				for (let t = 0; t < e.times.length; ++t) {
					const s = e.times[t] * r;
					if (!(s < n || s >= i)) {
						l.push(e.times[t]);
						for (let n = 0; n < a; ++n) c.push(e.values[t * a + n]);
					}
				}
				0 !== l.length &&
					((e.times = Pa.convertArray(l, e.times.constructor)),
					(e.values = Pa.convertArray(c, e.values.constructor)),
					o.push(e));
			}
			s.tracks = o;
			let a = 1 / 0;
			for (let t = 0; t < s.tracks.length; ++t) a > s.tracks[t].times[0] && (a = s.tracks[t].times[0]);
			for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * a);
			return s.resetDuration(), s;
		},
		makeClipAdditive: function (t, e = 0, n = t, i = 30) {
			i <= 0 && (i = 30);
			const r = n.tracks.length,
				s = e / i;
			for (let e = 0; e < r; ++e) {
				const i = n.tracks[e],
					r = i.ValueTypeName;
				if ("bool" === r || "string" === r) continue;
				const o = t.tracks.find(function (t) {
					return t.name === i.name && t.ValueTypeName === r;
				});
				if (void 0 === o) continue;
				let a = 0;
				const l = i.getValueSize();
				i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (a = l / 3);
				let c = 0;
				const h = o.getValueSize();
				o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
				const u = i.times.length - 1;
				let d;
				if (s <= i.times[0]) {
					const t = a,
						e = l - a;
					d = Pa.arraySlice(i.values, t, e);
				} else if (s >= i.times[u]) {
					const t = u * l + a,
						e = t + l - a;
					d = Pa.arraySlice(i.values, t, e);
				} else {
					const t = i.createInterpolant(),
						e = a,
						n = l - a;
					t.evaluate(s), (d = Pa.arraySlice(t.resultBuffer, e, n));
				}
				"quaternion" === r && new St().fromArray(d).normalize().conjugate().toArray(d);
				const p = o.times.length;
				for (let t = 0; t < p; ++t) {
					const e = t * h + c;
					if ("quaternion" === r) St.multiplyQuaternionsFlat(o.values, e, d, 0, o.values, e);
					else {
						const t = h - 2 * c;
						for (let n = 0; n < t; ++n) o.values[e + n] -= d[n];
					}
				}
			}
			return (t.blendMode = 2501), t;
		},
	};
	class Ia {
		constructor(t, e, n, i) {
			(this.parameterPositions = t),
				(this._cachedIndex = 0),
				(this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
				(this.sampleValues = e),
				(this.valueSize = n),
				(this.settings = null),
				(this.DefaultSettings_ = {});
		}
		evaluate(t) {
			const e = this.parameterPositions;
			let n = this._cachedIndex,
				i = e[n],
				r = e[n - 1];
			t: {
				e: {
					let s;
					n: {
						i: if (!(t < i)) {
							for (let s = n + 2; ; ) {
								if (void 0 === i) {
									if (t < r) break i;
									return (n = e.length), (this._cachedIndex = n), this.afterEnd_(n - 1, t, r);
								}
								if (n === s) break;
								if (((r = i), (i = e[++n]), t < i)) break e;
							}
							s = e.length;
							break n;
						}
						if (t >= r) break t;
						{
							const o = e[1];
							t < o && ((n = 2), (r = o));
							for (let s = n - 2; ; ) {
								if (void 0 === r) return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
								if (n === s) break;
								if (((i = r), (r = e[--n - 1]), t >= r)) break e;
							}
							(s = n), (n = 0);
						}
					}
					for (; n < s; ) {
						const i = (n + s) >>> 1;
						t < e[i] ? (s = i) : (n = i + 1);
					}
					if (((i = e[n]), (r = e[n - 1]), void 0 === r)) return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
					if (void 0 === i) return (n = e.length), (this._cachedIndex = n), this.afterEnd_(n - 1, r, t);
				}
				(this._cachedIndex = n), this.intervalChanged_(n, r, i);
			}
			return this.interpolate_(n, r, t, i);
		}
		getSettings_() {
			return this.settings || this.DefaultSettings_;
		}
		copySampleValue_(t) {
			const e = this.resultBuffer,
				n = this.sampleValues,
				i = this.valueSize,
				r = t * i;
			for (let t = 0; t !== i; ++t) e[t] = n[r + t];
			return e;
		}
		interpolate_() {
			throw new Error("call to abstract method");
		}
		intervalChanged_() {}
	}
	(Ia.prototype.beforeStart_ = Ia.prototype.copySampleValue_), (Ia.prototype.afterEnd_ = Ia.prototype.copySampleValue_);
	class Da extends Ia {
		constructor(t, e, n, i) {
			super(t, e, n, i),
				(this._weightPrev = -0),
				(this._offsetPrev = -0),
				(this._weightNext = -0),
				(this._offsetNext = -0),
				(this.DefaultSettings_ = { endingStart: C, endingEnd: C });
		}
		intervalChanged_(t, e, n) {
			const i = this.parameterPositions;
			let r = t - 2,
				s = t + 1,
				o = i[r],
				a = i[s];
			if (void 0 === o)
				switch (this.getSettings_().endingStart) {
					case R:
						(r = t), (o = 2 * e - n);
						break;
					case L:
						(r = i.length - 2), (o = e + i[r] - i[r + 1]);
						break;
					default:
						(r = t), (o = n);
				}
			if (void 0 === a)
				switch (this.getSettings_().endingEnd) {
					case R:
						(s = t), (a = 2 * n - e);
						break;
					case L:
						(s = 1), (a = n + i[1] - i[0]);
						break;
					default:
						(s = t - 1), (a = e);
				}
			const l = 0.5 * (n - e),
				c = this.valueSize;
			(this._weightPrev = l / (e - o)),
				(this._weightNext = l / (a - n)),
				(this._offsetPrev = r * c),
				(this._offsetNext = s * c);
		}
		interpolate_(t, e, n, i) {
			const r = this.resultBuffer,
				s = this.sampleValues,
				o = this.valueSize,
				a = t * o,
				l = a - o,
				c = this._offsetPrev,
				h = this._offsetNext,
				u = this._weightPrev,
				d = this._weightNext,
				p = (n - e) / (i - e),
				m = p * p,
				f = m * p,
				g = -u * f + 2 * u * m - u * p,
				v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1,
				y = (-1 - d) * f + (1.5 + d) * m + 0.5 * p,
				x = d * f - d * m;
			for (let t = 0; t !== o; ++t) r[t] = g * s[c + t] + v * s[l + t] + y * s[a + t] + x * s[h + t];
			return r;
		}
	}
	class Na extends Ia {
		constructor(t, e, n, i) {
			super(t, e, n, i);
		}
		interpolate_(t, e, n, i) {
			const r = this.resultBuffer,
				s = this.sampleValues,
				o = this.valueSize,
				a = t * o,
				l = a - o,
				c = (n - e) / (i - e),
				h = 1 - c;
			for (let t = 0; t !== o; ++t) r[t] = s[l + t] * h + s[a + t] * c;
			return r;
		}
	}
	class za extends Ia {
		constructor(t, e, n, i) {
			super(t, e, n, i);
		}
		interpolate_(t) {
			return this.copySampleValue_(t - 1);
		}
	}
	class Ba {
		constructor(t, e, n, i) {
			if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
			if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
			(this.name = t),
				(this.times = Pa.convertArray(e, this.TimeBufferType)),
				(this.values = Pa.convertArray(n, this.ValueBufferType)),
				this.setInterpolation(i || this.DefaultInterpolation);
		}
		static toJSON(t) {
			const e = t.constructor;
			let n;
			if (e.toJSON !== this.toJSON) n = e.toJSON(t);
			else {
				n = { name: t.name, times: Pa.convertArray(t.times, Array), values: Pa.convertArray(t.values, Array) };
				const e = t.getInterpolation();
				e !== t.DefaultInterpolation && (n.interpolation = e);
			}
			return (n.type = t.ValueTypeName), n;
		}
		InterpolantFactoryMethodDiscrete(t) {
			return new za(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodLinear(t) {
			return new Na(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodSmooth(t) {
			return new Da(this.times, this.values, this.getValueSize(), t);
		}
		setInterpolation(t) {
			let e;
			switch (t) {
				case E:
					e = this.InterpolantFactoryMethodDiscrete;
					break;
				case T:
					e = this.InterpolantFactoryMethodLinear;
					break;
				case A:
					e = this.InterpolantFactoryMethodSmooth;
			}
			if (void 0 === e) {
				const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if (void 0 === this.createInterpolant) {
					if (t === this.DefaultInterpolation) throw new Error(e);
					this.setInterpolation(this.DefaultInterpolation);
				}
				return console.warn("THREE.KeyframeTrack:", e), this;
			}
			return (this.createInterpolant = e), this;
		}
		getInterpolation() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete:
					return E;
				case this.InterpolantFactoryMethodLinear:
					return T;
				case this.InterpolantFactoryMethodSmooth:
					return A;
			}
		}
		getValueSize() {
			return this.values.length / this.times.length;
		}
		shift(t) {
			if (0 !== t) {
				const e = this.times;
				for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
			}
			return this;
		}
		scale(t) {
			if (1 !== t) {
				const e = this.times;
				for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
			}
			return this;
		}
		trim(t, e) {
			const n = this.times,
				i = n.length;
			let r = 0,
				s = i - 1;
			for (; r !== i && n[r] < t; ) ++r;
			for (; -1 !== s && n[s] > e; ) --s;
			if ((++s, 0 !== r || s !== i)) {
				r >= s && ((s = Math.max(s, 1)), (r = s - 1));
				const t = this.getValueSize();
				(this.times = Pa.arraySlice(n, r, s)), (this.values = Pa.arraySlice(this.values, r * t, s * t));
			}
			return this;
		}
		validate() {
			let t = !0;
			const e = this.getValueSize();
			e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), (t = !1));
			const n = this.times,
				i = this.values,
				r = n.length;
			0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
			let s = null;
			for (let e = 0; e !== r; e++) {
				const i = n[e];
				if ("number" == typeof i && isNaN(i)) {
					console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), (t = !1);
					break;
				}
				if (null !== s && s > i) {
					console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), (t = !1);
					break;
				}
				s = i;
			}
			if (void 0 !== i && Pa.isTypedArray(i))
				for (let e = 0, n = i.length; e !== n; ++e) {
					const n = i[e];
					if (isNaN(n)) {
						console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), (t = !1);
						break;
					}
				}
			return t;
		}
		optimize() {
			const t = Pa.arraySlice(this.times),
				e = Pa.arraySlice(this.values),
				n = this.getValueSize(),
				i = this.getInterpolation() === A,
				r = t.length - 1;
			let s = 1;
			for (let o = 1; o < r; ++o) {
				let r = !1;
				const a = t[o];
				if (a !== t[o + 1] && (1 !== o || a !== t[0]))
					if (i) r = !0;
					else {
						const t = o * n,
							i = t - n,
							s = t + n;
						for (let o = 0; o !== n; ++o) {
							const n = e[t + o];
							if (n !== e[i + o] || n !== e[s + o]) {
								r = !0;
								break;
							}
						}
					}
				if (r) {
					if (o !== s) {
						t[s] = t[o];
						const i = o * n,
							r = s * n;
						for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
					}
					++s;
				}
			}
			if (r > 0) {
				t[s] = t[r];
				for (let t = r * n, i = s * n, o = 0; o !== n; ++o) e[i + o] = e[t + o];
				++s;
			}
			return (
				s !== t.length
					? ((this.times = Pa.arraySlice(t, 0, s)), (this.values = Pa.arraySlice(e, 0, s * n)))
					: ((this.times = t), (this.values = e)),
				this
			);
		}
		clone() {
			const t = Pa.arraySlice(this.times, 0),
				e = Pa.arraySlice(this.values, 0),
				n = new (0, this.constructor)(this.name, t, e);
			return (n.createInterpolant = this.createInterpolant), n;
		}
	}
	(Ba.prototype.TimeBufferType = Float32Array),
		(Ba.prototype.ValueBufferType = Float32Array),
		(Ba.prototype.DefaultInterpolation = T);
	class Oa extends Ba {}
	(Oa.prototype.ValueTypeName = "bool"),
		(Oa.prototype.ValueBufferType = Array),
		(Oa.prototype.DefaultInterpolation = E),
		(Oa.prototype.InterpolantFactoryMethodLinear = void 0),
		(Oa.prototype.InterpolantFactoryMethodSmooth = void 0);
	class Fa extends Ba {}
	Fa.prototype.ValueTypeName = "color";
	class Ha extends Ba {}
	Ha.prototype.ValueTypeName = "number";
	class ka extends Ia {
		constructor(t, e, n, i) {
			super(t, e, n, i);
		}
		interpolate_(t, e, n, i) {
			const r = this.resultBuffer,
				s = this.sampleValues,
				o = this.valueSize,
				a = (n - e) / (i - e);
			let l = t * o;
			for (let t = l + o; l !== t; l += 4) St.slerpFlat(r, 0, s, l - o, s, l, a);
			return r;
		}
	}
	class Ua extends Ba {
		InterpolantFactoryMethodLinear(t) {
			return new ka(this.times, this.values, this.getValueSize(), t);
		}
	}
	(Ua.prototype.ValueTypeName = "quaternion"),
		(Ua.prototype.DefaultInterpolation = T),
		(Ua.prototype.InterpolantFactoryMethodSmooth = void 0);
	class Va extends Ba {}
	(Va.prototype.ValueTypeName = "string"),
		(Va.prototype.ValueBufferType = Array),
		(Va.prototype.DefaultInterpolation = E),
		(Va.prototype.InterpolantFactoryMethodLinear = void 0),
		(Va.prototype.InterpolantFactoryMethodSmooth = void 0);
	class Ga extends Ba {}
	Ga.prototype.ValueTypeName = "vector";
	class Wa {
		constructor(t, e = -1, n, i = 2500) {
			(this.name = t),
				(this.tracks = n),
				(this.duration = e),
				(this.blendMode = i),
				(this.uuid = j()),
				this.duration < 0 && this.resetDuration();
		}
		static parse(t) {
			const e = [],
				n = t.tracks,
				i = 1 / (t.fps || 1);
			for (let t = 0, r = n.length; t !== r; ++t) e.push(ja(n[t]).scale(i));
			const r = new this(t.name, t.duration, e, t.blendMode);
			return (r.uuid = t.uuid), r;
		}
		static toJSON(t) {
			const e = [],
				n = t.tracks,
				i = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid, blendMode: t.blendMode };
			for (let t = 0, i = n.length; t !== i; ++t) e.push(Ba.toJSON(n[t]));
			return i;
		}
		static CreateFromMorphTargetSequence(t, e, n, i) {
			const r = e.length,
				s = [];
			for (let t = 0; t < r; t++) {
				let o = [],
					a = [];
				o.push((t + r - 1) % r, t, (t + 1) % r), a.push(0, 1, 0);
				const l = Pa.getKeyframeOrder(o);
				(o = Pa.sortedArray(o, 1, l)),
					(a = Pa.sortedArray(a, 1, l)),
					i || 0 !== o[0] || (o.push(r), a.push(a[0])),
					s.push(new Ha(".morphTargetInfluences[" + e[t].name + "]", o, a).scale(1 / n));
			}
			return new this(t, -1, s);
		}
		static findByName(t, e) {
			let n = t;
			if (!Array.isArray(t)) {
				const e = t;
				n = (e.geometry && e.geometry.animations) || e.animations;
			}
			for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
			return null;
		}
		static CreateClipsFromMorphTargetSequences(t, e, n) {
			const i = {},
				r = /^([\w-]*?)([\d]+)$/;
			for (let e = 0, n = t.length; e < n; e++) {
				const n = t[e],
					s = n.name.match(r);
				if (s && s.length > 1) {
					const t = s[1];
					let e = i[t];
					e || (i[t] = e = []), e.push(n);
				}
			}
			const s = [];
			for (const t in i) s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
			return s;
		}
		static parseAnimation(t, e) {
			if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
			const n = function (t, e, n, i, r) {
					if (0 !== n.length) {
						const s = [],
							o = [];
						Pa.flattenJSON(n, s, o, i), 0 !== s.length && r.push(new t(e, s, o));
					}
				},
				i = [],
				r = t.name || "default",
				s = t.fps || 30,
				o = t.blendMode;
			let a = t.length || -1;
			const l = t.hierarchy || [];
			for (let t = 0; t < l.length; t++) {
				const r = l[t].keys;
				if (r && 0 !== r.length)
					if (r[0].morphTargets) {
						const t = {};
						let e;
						for (e = 0; e < r.length; e++)
							if (r[e].morphTargets)
								for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
						for (const n in t) {
							const t = [],
								s = [];
							for (let i = 0; i !== r[e].morphTargets.length; ++i) {
								const i = r[e];
								t.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
							}
							i.push(new Ha(".morphTargetInfluence[" + n + "]", t, s));
						}
						a = t.length * s;
					} else {
						const s = ".bones[" + e[t].name + "]";
						n(Ga, s + ".position", r, "pos", i),
							n(Ua, s + ".quaternion", r, "rot", i),
							n(Ga, s + ".scale", r, "scl", i);
					}
			}
			return 0 === i.length ? null : new this(r, a, i, o);
		}
		resetDuration() {
			let t = 0;
			for (let e = 0, n = this.tracks.length; e !== n; ++e) {
				const n = this.tracks[e];
				t = Math.max(t, n.times[n.times.length - 1]);
			}
			return (this.duration = t), this;
		}
		trim() {
			for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
			return this;
		}
		validate() {
			let t = !0;
			for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
			return t;
		}
		optimize() {
			for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
			return this;
		}
		clone() {
			const t = [];
			for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
			return new this.constructor(this.name, this.duration, t, this.blendMode);
		}
		toJSON() {
			return this.constructor.toJSON(this);
		}
	}
	function ja(t) {
		if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
		const e = (function (t) {
			switch (t.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return Ha;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return Ga;
				case "color":
					return Fa;
				case "quaternion":
					return Ua;
				case "bool":
				case "boolean":
					return Oa;
				case "string":
					return Va;
			}
			throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
		})(t.type);
		if (void 0 === t.times) {
			const e = [],
				n = [];
			Pa.flattenJSON(t.keys, e, n, "value"), (t.times = e), (t.values = n);
		}
		return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
	}
	const qa = {
		enabled: !1,
		files: {},
		add: function (t, e) {
			!1 !== this.enabled && (this.files[t] = e);
		},
		get: function (t) {
			if (!1 !== this.enabled) return this.files[t];
		},
		remove: function (t) {
			delete this.files[t];
		},
		clear: function () {
			this.files = {};
		},
	};
	class Xa {
		constructor(t, e, n) {
			const i = this;
			let r,
				s = !1,
				o = 0,
				a = 0;
			const l = [];
			(this.onStart = void 0),
				(this.onLoad = t),
				(this.onProgress = e),
				(this.onError = n),
				(this.itemStart = function (t) {
					a++, !1 === s && void 0 !== i.onStart && i.onStart(t, o, a), (s = !0);
				}),
				(this.itemEnd = function (t) {
					o++,
						void 0 !== i.onProgress && i.onProgress(t, o, a),
						o === a && ((s = !1), void 0 !== i.onLoad && i.onLoad());
				}),
				(this.itemError = function (t) {
					void 0 !== i.onError && i.onError(t);
				}),
				(this.resolveURL = function (t) {
					return r ? r(t) : t;
				}),
				(this.setURLModifier = function (t) {
					return (r = t), this;
				}),
				(this.addHandler = function (t, e) {
					return l.push(t, e), this;
				}),
				(this.removeHandler = function (t) {
					const e = l.indexOf(t);
					return -1 !== e && l.splice(e, 2), this;
				}),
				(this.getHandler = function (t) {
					for (let e = 0, n = l.length; e < n; e += 2) {
						const n = l[e],
							i = l[e + 1];
						if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
					}
					return null;
				});
		}
	}
	const Ya = new Xa();
	class Za {
		constructor(t) {
			(this.manager = void 0 !== t ? t : Ya),
				(this.crossOrigin = "anonymous"),
				(this.withCredentials = !1),
				(this.path = ""),
				(this.resourcePath = ""),
				(this.requestHeader = {});
		}
		load() {}
		loadAsync(t, e) {
			const n = this;
			return new Promise(function (i, r) {
				n.load(t, i, e, r);
			});
		}
		parse() {}
		setCrossOrigin(t) {
			return (this.crossOrigin = t), this;
		}
		setWithCredentials(t) {
			return (this.withCredentials = t), this;
		}
		setPath(t) {
			return (this.path = t), this;
		}
		setResourcePath(t) {
			return (this.resourcePath = t), this;
		}
		setRequestHeader(t) {
			return (this.requestHeader = t), this;
		}
	}
	const $a = {};
	class Ka extends Za {
		constructor(t) {
			super(t);
		}
		load(t, e, n, i) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
			const r = qa.get(t);
			if (void 0 !== r)
				return (
					this.manager.itemStart(t),
					setTimeout(() => {
						e && e(r), this.manager.itemEnd(t);
					}, 0),
					r
				);
			if (void 0 !== $a[t]) return void $a[t].push({ onLoad: e, onProgress: n, onError: i });
			($a[t] = []), $a[t].push({ onLoad: e, onProgress: n, onError: i });
			const s = new Request(t, {
					headers: new Headers(this.requestHeader),
					credentials: this.withCredentials ? "include" : "same-origin",
				}),
				o = this.mimeType,
				a = this.responseType;
			fetch(s)
				.then((e) => {
					if (200 === e.status || 0 === e.status) {
						if (
							(0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."),
							"undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader)
						)
							return e;
						const n = $a[t],
							i = e.body.getReader(),
							r = e.headers.get("Content-Length"),
							s = r ? parseInt(r) : 0,
							o = 0 !== s;
						let a = 0;
						const l = new ReadableStream({
							start(t) {
								!(function e() {
									i.read().then(({ done: i, value: r }) => {
										if (i) t.close();
										else {
											a += r.byteLength;
											const i = new ProgressEvent("progress", { lengthComputable: o, loaded: a, total: s });
											for (let t = 0, e = n.length; t < e; t++) {
												const e = n[t];
												e.onProgress && e.onProgress(i);
											}
											t.enqueue(r), e();
										}
									});
								})();
							},
						});
						return new Response(l);
					}
					throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`);
				})
				.then((t) => {
					switch (a) {
						case "arraybuffer":
							return t.arrayBuffer();
						case "blob":
							return t.blob();
						case "document":
							return t.text().then((t) => new DOMParser().parseFromString(t, o));
						case "json":
							return t.json();
						default:
							if (void 0 === o) return t.text();
							{
								const e = /charset="?([^;"\s]*)"?/i.exec(o),
									n = e && e[1] ? e[1].toLowerCase() : void 0,
									i = new TextDecoder(n);
								return t.arrayBuffer().then((t) => i.decode(t));
							}
					}
				})
				.then((e) => {
					qa.add(t, e);
					const n = $a[t];
					delete $a[t];
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t];
						i.onLoad && i.onLoad(e);
					}
				})
				.catch((e) => {
					const n = $a[t];
					if (void 0 === n) throw (this.manager.itemError(t), e);
					delete $a[t];
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t];
						i.onError && i.onError(e);
					}
					this.manager.itemError(t);
				})
				.finally(() => {
					this.manager.itemEnd(t);
				}),
				this.manager.itemStart(t);
		}
		setResponseType(t) {
			return (this.responseType = t), this;
		}
		setMimeType(t) {
			return (this.mimeType = t), this;
		}
	}
	class Ja extends Za {
		constructor(t) {
			super(t);
		}
		load(t, e, n, i) {
			void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
			const r = this,
				s = qa.get(t);
			if (void 0 !== s)
				return (
					r.manager.itemStart(t),
					setTimeout(function () {
						e && e(s), r.manager.itemEnd(t);
					}, 0),
					s
				);
			const o = nt("img");
			function a() {
				c(), qa.add(t, this), e && e(this), r.manager.itemEnd(t);
			}
			function l(e) {
				c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
			}
			function c() {
				o.removeEventListener("load", a, !1), o.removeEventListener("error", l, !1);
			}
			return (
				o.addEventListener("load", a, !1),
				o.addEventListener("error", l, !1),
				"data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin),
				r.manager.itemStart(t),
				(o.src = t),
				o
			);
		}
	}
	class Qa extends Za {
		constructor(t) {
			super(t);
		}
		load(t, e, n, i) {
			const r = new Pn(),
				s = new Ja(this.manager);
			s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
			let o = 0;
			function a(n) {
				s.load(
					t[n],
					function (t) {
						(r.images[n] = t), o++, 6 === o && ((r.needsUpdate = !0), e && e(r));
					},
					void 0,
					i
				);
			}
			for (let e = 0; e < t.length; ++e) a(e);
			return r;
		}
	}
	class tl extends Za {
		constructor(t) {
			super(t);
		}
		load(t, e, n, i) {
			const r = new xt(),
				s = new Ja(this.manager);
			return (
				s.setCrossOrigin(this.crossOrigin),
				s.setPath(this.path),
				s.load(
					t,
					function (t) {
						(r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
					},
					n,
					i
				),
				r
			);
		}
	}
	class el extends Ae {
		constructor(t, e = 1) {
			super(), (this.type = "Light"), (this.color = new pt(t)), (this.intensity = e);
		}
		dispose() {}
		copy(t) {
			return super.copy(t), this.color.copy(t.color), (this.intensity = t.intensity), this;
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return (
				(e.object.color = this.color.getHex()),
				(e.object.intensity = this.intensity),
				void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
				void 0 !== this.distance && (e.object.distance = this.distance),
				void 0 !== this.angle && (e.object.angle = this.angle),
				void 0 !== this.decay && (e.object.decay = this.decay),
				void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
				void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
				e
			);
		}
	}
	el.prototype.isLight = !0;
	(class extends el {
		constructor(t, e, n) {
			super(t, n),
				(this.type = "HemisphereLight"),
				this.position.copy(Ae.DefaultUp),
				this.updateMatrix(),
				(this.groundColor = new pt(e));
		}
		copy(t) {
			return el.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
		}
	}).prototype.isHemisphereLight = !0;
	const nl = new ne(),
		il = new Et(),
		rl = new Et();
	class sl {
		constructor(t) {
			(this.camera = t),
				(this.bias = 0),
				(this.normalBias = 0),
				(this.radius = 1),
				(this.blurSamples = 8),
				(this.mapSize = new Q(512, 512)),
				(this.map = null),
				(this.mapPass = null),
				(this.matrix = new ne()),
				(this.autoUpdate = !0),
				(this.needsUpdate = !1),
				(this._frustum = new Hn()),
				(this._frameExtents = new Q(1, 1)),
				(this._viewportCount = 1),
				(this._viewports = [new _t(0, 0, 1, 1)]);
		}
		getViewportCount() {
			return this._viewportCount;
		}
		getFrustum() {
			return this._frustum;
		}
		updateMatrices(t) {
			const e = this.camera,
				n = this.matrix;
			il.setFromMatrixPosition(t.matrixWorld),
				e.position.copy(il),
				rl.setFromMatrixPosition(t.target.matrixWorld),
				e.lookAt(rl),
				e.updateMatrixWorld(),
				nl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
				this._frustum.setFromProjectionMatrix(nl),
				n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
				n.multiply(e.projectionMatrix),
				n.multiply(e.matrixWorldInverse);
		}
		getViewport(t) {
			return this._viewports[t];
		}
		getFrameExtents() {
			return this._frameExtents;
		}
		dispose() {
			this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
		}
		copy(t) {
			return (
				(this.camera = t.camera.clone()),
				(this.bias = t.bias),
				(this.radius = t.radius),
				this.mapSize.copy(t.mapSize),
				this
			);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		toJSON() {
			const t = {};
			return (
				0 !== this.bias && (t.bias = this.bias),
				0 !== this.normalBias && (t.normalBias = this.normalBias),
				1 !== this.radius && (t.radius = this.radius),
				(512 === this.mapSize.x && 512 === this.mapSize.y) || (t.mapSize = this.mapSize.toArray()),
				(t.camera = this.camera.toJSON(!1).object),
				delete t.camera.matrix,
				t
			);
		}
	}
	class ol extends sl {
		constructor() {
			super(new Cn(50, 1, 0.5, 500)), (this.focus = 1);
		}
		updateMatrices(t) {
			const e = this.camera,
				n = 2 * W * t.angle * this.focus,
				i = this.mapSize.width / this.mapSize.height,
				r = t.distance || e.far;
			(n === e.fov && i === e.aspect && r === e.far) ||
				((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()),
				super.updateMatrices(t);
		}
		copy(t) {
			return super.copy(t), (this.focus = t.focus), this;
		}
	}
	ol.prototype.isSpotLightShadow = !0;
	class al extends el {
		constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1) {
			super(t, e),
				(this.type = "SpotLight"),
				this.position.copy(Ae.DefaultUp),
				this.updateMatrix(),
				(this.target = new Ae()),
				(this.distance = n),
				(this.angle = i),
				(this.penumbra = r),
				(this.decay = s),
				(this.shadow = new ol());
		}
		get power() {
			return this.intensity * Math.PI;
		}
		set power(t) {
			this.intensity = t / Math.PI;
		}
		dispose() {
			this.shadow.dispose();
		}
		copy(t) {
			return (
				super.copy(t),
				(this.distance = t.distance),
				(this.angle = t.angle),
				(this.penumbra = t.penumbra),
				(this.decay = t.decay),
				(this.target = t.target.clone()),
				(this.shadow = t.shadow.clone()),
				this
			);
		}
	}
	al.prototype.isSpotLight = !0;
	const ll = new ne(),
		cl = new Et(),
		hl = new Et();
	class ul extends sl {
		constructor() {
			super(new Cn(90, 1, 0.5, 500)),
				(this._frameExtents = new Q(4, 2)),
				(this._viewportCount = 6),
				(this._viewports = [
					new _t(2, 1, 1, 1),
					new _t(0, 1, 1, 1),
					new _t(3, 1, 1, 1),
					new _t(1, 1, 1, 1),
					new _t(3, 0, 1, 1),
					new _t(1, 0, 1, 1),
				]),
				(this._cubeDirections = [
					new Et(1, 0, 0),
					new Et(-1, 0, 0),
					new Et(0, 0, 1),
					new Et(0, 0, -1),
					new Et(0, 1, 0),
					new Et(0, -1, 0),
				]),
				(this._cubeUps = [
					new Et(0, 1, 0),
					new Et(0, 1, 0),
					new Et(0, 1, 0),
					new Et(0, 1, 0),
					new Et(0, 0, 1),
					new Et(0, 0, -1),
				]);
		}
		updateMatrices(t, e = 0) {
			const n = this.camera,
				i = this.matrix,
				r = t.distance || n.far;
			r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
				cl.setFromMatrixPosition(t.matrixWorld),
				n.position.copy(cl),
				hl.copy(n.position),
				hl.add(this._cubeDirections[e]),
				n.up.copy(this._cubeUps[e]),
				n.lookAt(hl),
				n.updateMatrixWorld(),
				i.makeTranslation(-cl.x, -cl.y, -cl.z),
				ll.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
				this._frustum.setFromProjectionMatrix(ll);
		}
	}
	ul.prototype.isPointLightShadow = !0;
	class dl extends el {
		constructor(t, e, n = 0, i = 1) {
			super(t, e), (this.type = "PointLight"), (this.distance = n), (this.decay = i), (this.shadow = new ul());
		}
		get power() {
			return 4 * this.intensity * Math.PI;
		}
		set power(t) {
			this.intensity = t / (4 * Math.PI);
		}
		dispose() {
			this.shadow.dispose();
		}
		copy(t) {
			return super.copy(t), (this.distance = t.distance), (this.decay = t.decay), (this.shadow = t.shadow.clone()), this;
		}
	}
	dl.prototype.isPointLight = !0;
	class pl extends sl {
		constructor() {
			super(new Jn(-5, 5, 5, -5, 0.5, 500));
		}
	}
	pl.prototype.isDirectionalLightShadow = !0;
	class ml extends el {
		constructor(t, e) {
			super(t, e),
				(this.type = "DirectionalLight"),
				this.position.copy(Ae.DefaultUp),
				this.updateMatrix(),
				(this.target = new Ae()),
				(this.shadow = new pl());
		}
		dispose() {
			this.shadow.dispose();
		}
		copy(t) {
			return super.copy(t), (this.target = t.target.clone()), (this.shadow = t.shadow.clone()), this;
		}
	}
	ml.prototype.isDirectionalLight = !0;
	(class extends el {
		constructor(t, e) {
			super(t, e), (this.type = "AmbientLight");
		}
	}).prototype.isAmbientLight = !0;
	(class extends el {
		constructor(t, e, n = 10, i = 10) {
			super(t, e), (this.type = "RectAreaLight"), (this.width = n), (this.height = i);
		}
		get power() {
			return this.intensity * this.width * this.height * Math.PI;
		}
		set power(t) {
			this.intensity = t / (this.width * this.height * Math.PI);
		}
		copy(t) {
			return super.copy(t), (this.width = t.width), (this.height = t.height), this;
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return (e.object.width = this.width), (e.object.height = this.height), e;
		}
	}).prototype.isRectAreaLight = !0;
	class fl {
		constructor() {
			this.coefficients = [];
			for (let t = 0; t < 9; t++) this.coefficients.push(new Et());
		}
		set(t) {
			for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
			return this;
		}
		zero() {
			for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
			return this;
		}
		getAt(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z,
				s = this.coefficients;
			return (
				e.copy(s[0]).multiplyScalar(0.282095),
				e.addScaledVector(s[1], 0.488603 * i),
				e.addScaledVector(s[2], 0.488603 * r),
				e.addScaledVector(s[3], 0.488603 * n),
				e.addScaledVector(s[4], n * i * 1.092548),
				e.addScaledVector(s[5], i * r * 1.092548),
				e.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)),
				e.addScaledVector(s[7], n * r * 1.092548),
				e.addScaledVector(s[8], 0.546274 * (n * n - i * i)),
				e
			);
		}
		getIrradianceAt(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z,
				s = this.coefficients;
			return (
				e.copy(s[0]).multiplyScalar(0.886227),
				e.addScaledVector(s[1], 1.023328 * i),
				e.addScaledVector(s[2], 1.023328 * r),
				e.addScaledVector(s[3], 1.023328 * n),
				e.addScaledVector(s[4], 0.858086 * n * i),
				e.addScaledVector(s[5], 0.858086 * i * r),
				e.addScaledVector(s[6], 0.743125 * r * r - 0.247708),
				e.addScaledVector(s[7], 0.858086 * n * r),
				e.addScaledVector(s[8], 0.429043 * (n * n - i * i)),
				e
			);
		}
		add(t) {
			for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
			return this;
		}
		addScaledSH(t, e) {
			for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
			return this;
		}
		scale(t) {
			for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
			return this;
		}
		lerp(t, e) {
			for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
			return this;
		}
		equals(t) {
			for (let e = 0; e < 9; e++) if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
			return !0;
		}
		copy(t) {
			return this.set(t.coefficients);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		fromArray(t, e = 0) {
			const n = this.coefficients;
			for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
			return this;
		}
		toArray(t = [], e = 0) {
			const n = this.coefficients;
			for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
			return t;
		}
		static getBasisAt(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z;
			(e[0] = 0.282095),
				(e[1] = 0.488603 * i),
				(e[2] = 0.488603 * r),
				(e[3] = 0.488603 * n),
				(e[4] = 1.092548 * n * i),
				(e[5] = 1.092548 * i * r),
				(e[6] = 0.315392 * (3 * r * r - 1)),
				(e[7] = 1.092548 * n * r),
				(e[8] = 0.546274 * (n * n - i * i));
		}
	}
	fl.prototype.isSphericalHarmonics3 = !0;
	class gl extends el {
		constructor(t = new fl(), e = 1) {
			super(void 0, e), (this.sh = t);
		}
		copy(t) {
			return super.copy(t), this.sh.copy(t.sh), this;
		}
		fromJSON(t) {
			return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return (e.object.sh = this.sh.toArray()), e;
		}
	}
	gl.prototype.isLightProbe = !0;
	class vl {
		static decodeText(t) {
			if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);
			let e = "";
			for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
			try {
				return decodeURIComponent(escape(e));
			} catch (t) {
				return e;
			}
		}
		static extractUrlBase(t) {
			const e = t.lastIndexOf("/");
			return -1 === e ? "./" : t.slice(0, e + 1);
		}
		static resolveURL(t, e) {
			return "string" != typeof t || "" === t
				? ""
				: (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
				  /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
		}
	}
	(class extends en {
		constructor() {
			super(), (this.type = "InstancedBufferGeometry"), (this.instanceCount = 1 / 0);
		}
		copy(t) {
			return super.copy(t), (this.instanceCount = t.instanceCount), this;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		toJSON() {
			const t = super.toJSON(this);
			return (t.instanceCount = this.instanceCount), (t.isInstancedBufferGeometry = !0), t;
		}
	}).prototype.isInstancedBufferGeometry = !0;
	class yl extends Za {
		constructor(t) {
			super(t),
				"undefined" == typeof createImageBitmap &&
					console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
				"undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
				(this.options = { premultiplyAlpha: "none" });
		}
		setOptions(t) {
			return (this.options = t), this;
		}
		load(t, e, n, i) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
			const r = this,
				s = qa.get(t);
			if (void 0 !== s)
				return (
					r.manager.itemStart(t),
					setTimeout(function () {
						e && e(s), r.manager.itemEnd(t);
					}, 0),
					s
				);
			const o = {};
			(o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include"),
				(o.headers = this.requestHeader),
				fetch(t, o)
					.then(function (t) {
						return t.blob();
					})
					.then(function (t) {
						return createImageBitmap(t, Object.assign(r.options, { colorSpaceConversion: "none" }));
					})
					.then(function (n) {
						qa.add(t, n), e && e(n), r.manager.itemEnd(t);
					})
					.catch(function (e) {
						i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
					}),
				r.manager.itemStart(t);
		}
	}
	let xl;
	yl.prototype.isImageBitmapLoader = !0;
	class _l extends Za {
		constructor(t) {
			super(t);
		}
		load(t, e, n, i) {
			const r = this,
				s = new Ka(this.manager);
			s.setResponseType("arraybuffer"),
				s.setPath(this.path),
				s.setRequestHeader(this.requestHeader),
				s.setWithCredentials(this.withCredentials),
				s.load(
					t,
					function (n) {
						try {
							const t = n.slice(0);
							(void 0 === xl && (xl = new (window.AudioContext || window.webkitAudioContext)()),
							xl).decodeAudioData(t, function (t) {
								e(t);
							});
						} catch (e) {
							i ? i(e) : console.error(e), r.manager.itemError(t);
						}
					},
					n,
					i
				);
		}
	}
	((class extends gl {
		constructor(t, e, n = 1) {
			super(void 0, n);
			const i = new pt().set(t),
				r = new pt().set(e),
				s = new Et(i.r, i.g, i.b),
				o = new Et(r.r, r.g, r.b),
				a = Math.sqrt(Math.PI),
				l = a * Math.sqrt(0.75);
			this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a), this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(l);
		}
	}).prototype.isHemisphereLightProbe = !0),
		(class extends gl {
			constructor(t, e = 1) {
				super(void 0, e);
				const n = new pt().set(t);
				this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
			}
		}.prototype.isAmbientLightProbe = !0);
	class wl {
		constructor(t, e, n) {
			let i, r, s;
			switch (((this.binding = t), (this.valueSize = n), e)) {
				case "quaternion":
					(i = this._slerp),
						(r = this._slerpAdditive),
						(s = this._setAdditiveIdentityQuaternion),
						(this.buffer = new Float64Array(6 * n)),
						(this._workIndex = 5);
					break;
				case "string":
				case "bool":
					(i = this._select),
						(r = this._select),
						(s = this._setAdditiveIdentityOther),
						(this.buffer = new Array(5 * n));
					break;
				default:
					(i = this._lerp),
						(r = this._lerpAdditive),
						(s = this._setAdditiveIdentityNumeric),
						(this.buffer = new Float64Array(5 * n));
			}
			(this._mixBufferRegion = i),
				(this._mixBufferRegionAdditive = r),
				(this._setIdentity = s),
				(this._origIndex = 3),
				(this._addIndex = 4),
				(this.cumulativeWeight = 0),
				(this.cumulativeWeightAdditive = 0),
				(this.useCount = 0),
				(this.referenceCount = 0);
		}
		accumulate(t, e) {
			const n = this.buffer,
				i = this.valueSize,
				r = t * i + i;
			let s = this.cumulativeWeight;
			if (0 === s) {
				for (let t = 0; t !== i; ++t) n[r + t] = n[t];
				s = e;
			} else {
				s += e;
				const t = e / s;
				this._mixBufferRegion(n, r, 0, t, i);
			}
			this.cumulativeWeight = s;
		}
		accumulateAdditive(t) {
			const e = this.buffer,
				n = this.valueSize,
				i = n * this._addIndex;
			0 === this.cumulativeWeightAdditive && this._setIdentity(),
				this._mixBufferRegionAdditive(e, i, 0, t, n),
				(this.cumulativeWeightAdditive += t);
		}
		apply(t) {
			const e = this.valueSize,
				n = this.buffer,
				i = t * e + e,
				r = this.cumulativeWeight,
				s = this.cumulativeWeightAdditive,
				o = this.binding;
			if (((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), r < 1)) {
				const t = e * this._origIndex;
				this._mixBufferRegion(n, i, t, 1 - r, e);
			}
			s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
			for (let t = e, r = e + e; t !== r; ++t)
				if (n[t] !== n[t + e]) {
					o.setValue(n, i);
					break;
				}
		}
		saveOriginalState() {
			const t = this.binding,
				e = this.buffer,
				n = this.valueSize,
				i = n * this._origIndex;
			t.getValue(e, i);
			for (let t = n, r = i; t !== r; ++t) e[t] = e[i + (t % n)];
			this._setIdentity(), (this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0);
		}
		restoreOriginalState() {
			const t = 3 * this.valueSize;
			this.binding.setValue(this.buffer, t);
		}
		_setAdditiveIdentityNumeric() {
			const t = this._addIndex * this.valueSize,
				e = t + this.valueSize;
			for (let n = t; n < e; n++) this.buffer[n] = 0;
		}
		_setAdditiveIdentityQuaternion() {
			this._setAdditiveIdentityNumeric(), (this.buffer[this._addIndex * this.valueSize + 3] = 1);
		}
		_setAdditiveIdentityOther() {
			const t = this._origIndex * this.valueSize,
				e = this._addIndex * this.valueSize;
			for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n];
		}
		_select(t, e, n, i, r) {
			if (i >= 0.5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i];
		}
		_slerp(t, e, n, i) {
			St.slerpFlat(t, e, t, e, t, n, i);
		}
		_slerpAdditive(t, e, n, i, r) {
			const s = this._workIndex * r;
			St.multiplyQuaternionsFlat(t, s, t, e, t, n), St.slerpFlat(t, e, t, e, t, s, i);
		}
		_lerp(t, e, n, i, r) {
			const s = 1 - i;
			for (let o = 0; o !== r; ++o) {
				const r = e + o;
				t[r] = t[r] * s + t[n + o] * i;
			}
		}
		_lerpAdditive(t, e, n, i, r) {
			for (let s = 0; s !== r; ++s) {
				const r = e + s;
				t[r] = t[r] + t[n + s] * i;
			}
		}
	}
	const bl = new RegExp("[\\[\\]\\.:\\/]", "g"),
		Ml = "[^\\[\\]\\.:\\/]",
		Sl = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
		El = /((?:WC+[\/:])*)/.source.replace("WC", Ml),
		Tl = /(WCOD+)?/.source.replace("WCOD", Sl),
		Al = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ml),
		Cl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ml),
		Rl = new RegExp("^" + El + Tl + Al + Cl + "$"),
		Ll = ["material", "materials", "bones"];
	class Pl {
		constructor(t, e, n) {
			(this.path = e),
				(this.parsedPath = n || Pl.parseTrackName(e)),
				(this.node = Pl.findNode(t, this.parsedPath.nodeName) || t),
				(this.rootNode = t),
				(this.getValue = this._getValue_unbound),
				(this.setValue = this._setValue_unbound);
		}
		static create(t, e, n) {
			return t && t.isAnimationObjectGroup ? new Pl.Composite(t, e, n) : new Pl(t, e, n);
		}
		static sanitizeNodeName(t) {
			return t.replace(/\s/g, "_").replace(bl, "");
		}
		static parseTrackName(t) {
			const e = Rl.exec(t);
			if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
			const n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] },
				i = n.nodeName && n.nodeName.lastIndexOf(".");
			if (void 0 !== i && -1 !== i) {
				const t = n.nodeName.substring(i + 1);
				-1 !== Ll.indexOf(t) && ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
			}
			if (null === n.propertyName || 0 === n.propertyName.length)
				throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
			return n;
		}
		static findNode(t, e) {
			if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
			if (t.skeleton) {
				const n = t.skeleton.getBoneByName(e);
				if (void 0 !== n) return n;
			}
			if (t.children) {
				const n = function (t) {
						for (let i = 0; i < t.length; i++) {
							const r = t[i];
							if (r.name === e || r.uuid === e) return r;
							const s = n(r.children);
							if (s) return s;
						}
						return null;
					},
					i = n(t.children);
				if (i) return i;
			}
			return null;
		}
		_getValue_unavailable() {}
		_setValue_unavailable() {}
		_getValue_direct(t, e) {
			t[e] = this.targetObject[this.propertyName];
		}
		_getValue_array(t, e) {
			const n = this.resolvedProperty;
			for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
		}
		_getValue_arrayElement(t, e) {
			t[e] = this.resolvedProperty[this.propertyIndex];
		}
		_getValue_toArray(t, e) {
			this.resolvedProperty.toArray(t, e);
		}
		_setValue_direct(t, e) {
			this.targetObject[this.propertyName] = t[e];
		}
		_setValue_direct_setNeedsUpdate(t, e) {
			(this.targetObject[this.propertyName] = t[e]), (this.targetObject.needsUpdate = !0);
		}
		_setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
			(this.targetObject[this.propertyName] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0);
		}
		_setValue_array(t, e) {
			const n = this.resolvedProperty;
			for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
		}
		_setValue_array_setNeedsUpdate(t, e) {
			const n = this.resolvedProperty;
			for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
			this.targetObject.needsUpdate = !0;
		}
		_setValue_array_setMatrixWorldNeedsUpdate(t, e) {
			const n = this.resolvedProperty;
			for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
			this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_setValue_arrayElement(t, e) {
			this.resolvedProperty[this.propertyIndex] = t[e];
		}
		_setValue_arrayElement_setNeedsUpdate(t, e) {
			(this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.needsUpdate = !0);
		}
		_setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
			(this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0);
		}
		_setValue_fromArray(t, e) {
			this.resolvedProperty.fromArray(t, e);
		}
		_setValue_fromArray_setNeedsUpdate(t, e) {
			this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0);
		}
		_setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
			this.resolvedProperty.fromArray(t, e), (this.targetObject.matrixWorldNeedsUpdate = !0);
		}
		_getValue_unbound(t, e) {
			this.bind(), this.getValue(t, e);
		}
		_setValue_unbound(t, e) {
			this.bind(), this.setValue(t, e);
		}
		bind() {
			let t = this.node;
			const e = this.parsedPath,
				n = e.objectName,
				i = e.propertyName;
			let r = e.propertyIndex;
			if (
				(t || ((t = Pl.findNode(this.rootNode, e.nodeName) || this.rootNode), (this.node = t)),
				(this.getValue = this._getValue_unavailable),
				(this.setValue = this._setValue_unavailable),
				!t)
			)
				return void console.error(
					"THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found."
				);
			if (n) {
				let i = e.objectIndex;
				switch (n) {
					case "materials":
						if (!t.material)
							return void console.error(
								"THREE.PropertyBinding: Can not bind to material as node does not have a material.",
								this
							);
						if (!t.material.materials)
							return void console.error(
								"THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
								this
							);
						t = t.material.materials;
						break;
					case "bones":
						if (!t.skeleton)
							return void console.error(
								"THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
								this
							);
						t = t.skeleton.bones;
						for (let e = 0; e < t.length; e++)
							if (t[e].name === i) {
								i = e;
								break;
							}
						break;
					default:
						if (void 0 === t[n])
							return void console.error(
								"THREE.PropertyBinding: Can not bind to objectName of node undefined.",
								this
							);
						t = t[n];
				}
				if (void 0 !== i) {
					if (void 0 === t[i])
						return void console.error(
							"THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
							this,
							t
						);
					t = t[i];
				}
			}
			const s = t[i];
			if (void 0 === s) {
				const n = e.nodeName;
				return void console.error(
					"THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.",
					t
				);
			}
			let o = this.Versioning.None;
			(this.targetObject = t),
				void 0 !== t.needsUpdate
					? (o = this.Versioning.NeedsUpdate)
					: void 0 !== t.matrixWorldNeedsUpdate && (o = this.Versioning.MatrixWorldNeedsUpdate);
			let a = this.BindingType.Direct;
			if (void 0 !== r) {
				if ("morphTargetInfluences" === i) {
					if (!t.geometry)
						return void console.error(
							"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
							this
						);
					if (!t.geometry.isBufferGeometry)
						return void console.error(
							"THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
							this
						);
					if (!t.geometry.morphAttributes)
						return void console.error(
							"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
							this
						);
					void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
				}
				(a = this.BindingType.ArrayElement), (this.resolvedProperty = s), (this.propertyIndex = r);
			} else
				void 0 !== s.fromArray && void 0 !== s.toArray
					? ((a = this.BindingType.HasFromToArray), (this.resolvedProperty = s))
					: Array.isArray(s)
					? ((a = this.BindingType.EntireArray), (this.resolvedProperty = s))
					: (this.propertyName = i);
			(this.getValue = this.GetterByBindingType[a]), (this.setValue = this.SetterByBindingTypeAndVersioning[a][o]);
		}
		unbind() {
			(this.node = null), (this.getValue = this._getValue_unbound), (this.setValue = this._setValue_unbound);
		}
	}
	(Pl.Composite = class {
		constructor(t, e, n) {
			const i = n || Pl.parseTrackName(e);
			(this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
		}
		getValue(t, e) {
			this.bind();
			const n = this._targetGroup.nCachedObjects_,
				i = this._bindings[n];
			void 0 !== i && i.getValue(t, e);
		}
		setValue(t, e) {
			const n = this._bindings;
			for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e);
		}
		bind() {
			const t = this._bindings;
			for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind();
		}
		unbind() {
			const t = this._bindings;
			for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind();
		}
	}),
		(Pl.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }),
		(Pl.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }),
		(Pl.prototype.GetterByBindingType = [
			Pl.prototype._getValue_direct,
			Pl.prototype._getValue_array,
			Pl.prototype._getValue_arrayElement,
			Pl.prototype._getValue_toArray,
		]),
		(Pl.prototype.SetterByBindingTypeAndVersioning = [
			[
				Pl.prototype._setValue_direct,
				Pl.prototype._setValue_direct_setNeedsUpdate,
				Pl.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
			],
			[
				Pl.prototype._setValue_array,
				Pl.prototype._setValue_array_setNeedsUpdate,
				Pl.prototype._setValue_array_setMatrixWorldNeedsUpdate,
			],
			[
				Pl.prototype._setValue_arrayElement,
				Pl.prototype._setValue_arrayElement_setNeedsUpdate,
				Pl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
			],
			[
				Pl.prototype._setValue_fromArray,
				Pl.prototype._setValue_fromArray_setNeedsUpdate,
				Pl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
			],
		]);
	class Il {
		constructor(t, e, n = null, i = e.blendMode) {
			(this._mixer = t), (this._clip = e), (this._localRoot = n), (this.blendMode = i);
			const r = e.tracks,
				s = r.length,
				o = new Array(s),
				a = { endingStart: C, endingEnd: C };
			for (let t = 0; t !== s; ++t) {
				const e = r[t].createInterpolant(null);
				(o[t] = e), (e.settings = a);
			}
			(this._interpolantSettings = a),
				(this._interpolants = o),
				(this._propertyBindings = new Array(s)),
				(this._cacheIndex = null),
				(this._byClipCacheIndex = null),
				(this._timeScaleInterpolant = null),
				(this._weightInterpolant = null),
				(this.loop = 2201),
				(this._loopCount = -1),
				(this._startTime = null),
				(this.time = 0),
				(this.timeScale = 1),
				(this._effectiveTimeScale = 1),
				(this.weight = 1),
				(this._effectiveWeight = 1),
				(this.repetitions = 1 / 0),
				(this.paused = !1),
				(this.enabled = !0),
				(this.clampWhenFinished = !1),
				(this.zeroSlopeAtStart = !0),
				(this.zeroSlopeAtEnd = !0);
		}
		play() {
			return this._mixer._activateAction(this), this;
		}
		stop() {
			return this._mixer._deactivateAction(this), this.reset();
		}
		reset() {
			return (
				(this.paused = !1),
				(this.enabled = !0),
				(this.time = 0),
				(this._loopCount = -1),
				(this._startTime = null),
				this.stopFading().stopWarping()
			);
		}
		isRunning() {
			return (
				this.enabled &&
				!this.paused &&
				0 !== this.timeScale &&
				null === this._startTime &&
				this._mixer._isActiveAction(this)
			);
		}
		isScheduled() {
			return this._mixer._isActiveAction(this);
		}
		startAt(t) {
			return (this._startTime = t), this;
		}
		setLoop(t, e) {
			return (this.loop = t), (this.repetitions = e), this;
		}
		setEffectiveWeight(t) {
			return (this.weight = t), (this._effectiveWeight = this.enabled ? t : 0), this.stopFading();
		}
		getEffectiveWeight() {
			return this._effectiveWeight;
		}
		fadeIn(t) {
			return this._scheduleFading(t, 0, 1);
		}
		fadeOut(t) {
			return this._scheduleFading(t, 1, 0);
		}
		crossFadeFrom(t, e, n) {
			if ((t.fadeOut(e), this.fadeIn(e), n)) {
				const n = this._clip.duration,
					i = t._clip.duration,
					r = i / n,
					s = n / i;
				t.warp(1, r, e), this.warp(s, 1, e);
			}
			return this;
		}
		crossFadeTo(t, e, n) {
			return t.crossFadeFrom(this, e, n);
		}
		stopFading() {
			const t = this._weightInterpolant;
			return null !== t && ((this._weightInterpolant = null), this._mixer._takeBackControlInterpolant(t)), this;
		}
		setEffectiveTimeScale(t) {
			return (this.timeScale = t), (this._effectiveTimeScale = this.paused ? 0 : t), this.stopWarping();
		}
		getEffectiveTimeScale() {
			return this._effectiveTimeScale;
		}
		setDuration(t) {
			return (this.timeScale = this._clip.duration / t), this.stopWarping();
		}
		syncWith(t) {
			return (this.time = t.time), (this.timeScale = t.timeScale), this.stopWarping();
		}
		halt(t) {
			return this.warp(this._effectiveTimeScale, 0, t);
		}
		warp(t, e, n) {
			const i = this._mixer,
				r = i.time,
				s = this.timeScale;
			let o = this._timeScaleInterpolant;
			null === o && ((o = i._lendControlInterpolant()), (this._timeScaleInterpolant = o));
			const a = o.parameterPositions,
				l = o.sampleValues;
			return (a[0] = r), (a[1] = r + n), (l[0] = t / s), (l[1] = e / s), this;
		}
		stopWarping() {
			const t = this._timeScaleInterpolant;
			return null !== t && ((this._timeScaleInterpolant = null), this._mixer._takeBackControlInterpolant(t)), this;
		}
		getMixer() {
			return this._mixer;
		}
		getClip() {
			return this._clip;
		}
		getRoot() {
			return this._localRoot || this._mixer._root;
		}
		_update(t, e, n, i) {
			if (!this.enabled) return void this._updateWeight(t);
			const r = this._startTime;
			if (null !== r) {
				const i = (t - r) * n;
				if (i < 0 || 0 === n) return;
				(this._startTime = null), (e = n * i);
			}
			e *= this._updateTimeScale(t);
			const s = this._updateTime(e),
				o = this._updateWeight(t);
			if (o > 0) {
				const t = this._interpolants,
					e = this._propertyBindings;
				if (2501 === this.blendMode)
					for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(s), e[n].accumulateAdditive(o);
				else for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(s), e[n].accumulate(i, o);
			}
		}
		_updateWeight(t) {
			let e = 0;
			if (this.enabled) {
				e = this.weight;
				const n = this._weightInterpolant;
				if (null !== n) {
					const i = n.evaluate(t)[0];
					(e *= i), t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1));
				}
			}
			return (this._effectiveWeight = e), e;
		}
		_updateTimeScale(t) {
			let e = 0;
			if (!this.paused) {
				e = this.timeScale;
				const n = this._timeScaleInterpolant;
				null !== n &&
					((e *= n.evaluate(t)[0]),
					t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? (this.paused = !0) : (this.timeScale = e)));
			}
			return (this._effectiveTimeScale = e), e;
		}
		_updateTime(t) {
			const e = this._clip.duration,
				n = this.loop;
			let i = this.time + t,
				r = this._loopCount;
			const s = 2202 === n;
			if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
			if (2200 === n) {
				-1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
				t: {
					if (i >= e) i = e;
					else {
						if (!(i < 0)) {
							this.time = i;
							break t;
						}
						i = 0;
					}
					this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
						(this.time = i),
						this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 });
				}
			} else {
				if (
					(-1 === r &&
						(t >= 0
							? ((r = 0), this._setEndings(!0, 0 === this.repetitions, s))
							: this._setEndings(0 === this.repetitions, !0, s)),
					i >= e || i < 0)
				) {
					const n = Math.floor(i / e);
					(i -= e * n), (r += Math.abs(n));
					const o = this.repetitions - r;
					if (o <= 0)
						this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
							(i = t > 0 ? e : 0),
							(this.time = i),
							this._mixer.dispatchEvent({ type: "finished", action: this, direction: t > 0 ? 1 : -1 });
					else {
						if (1 === o) {
							const e = t < 0;
							this._setEndings(e, !e, s);
						} else this._setEndings(!1, !1, s);
						(this._loopCount = r),
							(this.time = i),
							this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: n });
					}
				} else this.time = i;
				if (s && 1 == (1 & r)) return e - i;
			}
			return i;
		}
		_setEndings(t, e, n) {
			const i = this._interpolantSettings;
			n
				? ((i.endingStart = R), (i.endingEnd = R))
				: ((i.endingStart = t ? (this.zeroSlopeAtStart ? R : C) : L),
				  (i.endingEnd = e ? (this.zeroSlopeAtEnd ? R : C) : L));
		}
		_scheduleFading(t, e, n) {
			const i = this._mixer,
				r = i.time;
			let s = this._weightInterpolant;
			null === s && ((s = i._lendControlInterpolant()), (this._weightInterpolant = s));
			const o = s.parameterPositions,
				a = s.sampleValues;
			return (o[0] = r), (a[0] = e), (o[1] = r + t), (a[1] = n), this;
		}
	}
	(class extends k {
		constructor(t) {
			super(), (this._root = t), this._initMemoryManager(), (this._accuIndex = 0), (this.time = 0), (this.timeScale = 1);
		}
		_bindAction(t, e) {
			const n = t._localRoot || this._root,
				i = t._clip.tracks,
				r = i.length,
				s = t._propertyBindings,
				o = t._interpolants,
				a = n.uuid,
				l = this._bindingsByRootAndName;
			let c = l[a];
			void 0 === c && ((c = {}), (l[a] = c));
			for (let t = 0; t !== r; ++t) {
				const r = i[t],
					l = r.name;
				let h = c[l];
				if (void 0 !== h) ++h.referenceCount, (s[t] = h);
				else {
					if (((h = s[t]), void 0 !== h)) {
						null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, a, l));
						continue;
					}
					const i = e && e._propertyBindings[t].binding.parsedPath;
					(h = new wl(Pl.create(n, l, i), r.ValueTypeName, r.getValueSize())),
						++h.referenceCount,
						this._addInactiveBinding(h, a, l),
						(s[t] = h);
				}
				o[t].resultBuffer = h.buffer;
			}
		}
		_activateAction(t) {
			if (!this._isActiveAction(t)) {
				if (null === t._cacheIndex) {
					const e = (t._localRoot || this._root).uuid,
						n = t._clip.uuid,
						i = this._actionsByClip[n];
					this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e);
				}
				const e = t._propertyBindings;
				for (let t = 0, n = e.length; t !== n; ++t) {
					const n = e[t];
					0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
				}
				this._lendAction(t);
			}
		}
		_deactivateAction(t) {
			if (this._isActiveAction(t)) {
				const e = t._propertyBindings;
				for (let t = 0, n = e.length; t !== n; ++t) {
					const n = e[t];
					0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n));
				}
				this._takeBackAction(t);
			}
		}
		_initMemoryManager() {
			(this._actions = []),
				(this._nActiveActions = 0),
				(this._actionsByClip = {}),
				(this._bindings = []),
				(this._nActiveBindings = 0),
				(this._bindingsByRootAndName = {}),
				(this._controlInterpolants = []),
				(this._nActiveControlInterpolants = 0);
			const t = this;
			this.stats = {
				actions: {
					get total() {
						return t._actions.length;
					},
					get inUse() {
						return t._nActiveActions;
					},
				},
				bindings: {
					get total() {
						return t._bindings.length;
					},
					get inUse() {
						return t._nActiveBindings;
					},
				},
				controlInterpolants: {
					get total() {
						return t._controlInterpolants.length;
					},
					get inUse() {
						return t._nActiveControlInterpolants;
					},
				},
			};
		}
		_isActiveAction(t) {
			const e = t._cacheIndex;
			return null !== e && e < this._nActiveActions;
		}
		_addInactiveAction(t, e, n) {
			const i = this._actions,
				r = this._actionsByClip;
			let s = r[e];
			if (void 0 === s) (s = { knownActions: [t], actionByRoot: {} }), (t._byClipCacheIndex = 0), (r[e] = s);
			else {
				const e = s.knownActions;
				(t._byClipCacheIndex = e.length), e.push(t);
			}
			(t._cacheIndex = i.length), i.push(t), (s.actionByRoot[n] = t);
		}
		_removeInactiveAction(t) {
			const e = this._actions,
				n = e[e.length - 1],
				i = t._cacheIndex;
			(n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
			const r = t._clip.uuid,
				s = this._actionsByClip,
				o = s[r],
				a = o.knownActions,
				l = a[a.length - 1],
				c = t._byClipCacheIndex;
			(l._byClipCacheIndex = c),
				(a[c] = l),
				a.pop(),
				(t._byClipCacheIndex = null),
				delete o.actionByRoot[(t._localRoot || this._root).uuid],
				0 === a.length && delete s[r],
				this._removeInactiveBindingsForAction(t);
		}
		_removeInactiveBindingsForAction(t) {
			const e = t._propertyBindings;
			for (let t = 0, n = e.length; t !== n; ++t) {
				const n = e[t];
				0 == --n.referenceCount && this._removeInactiveBinding(n);
			}
		}
		_lendAction(t) {
			const e = this._actions,
				n = t._cacheIndex,
				i = this._nActiveActions++,
				r = e[i];
			(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
		}
		_takeBackAction(t) {
			const e = this._actions,
				n = t._cacheIndex,
				i = --this._nActiveActions,
				r = e[i];
			(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
		}
		_addInactiveBinding(t, e, n) {
			const i = this._bindingsByRootAndName,
				r = this._bindings;
			let s = i[e];
			void 0 === s && ((s = {}), (i[e] = s)), (s[n] = t), (t._cacheIndex = r.length), r.push(t);
		}
		_removeInactiveBinding(t) {
			const e = this._bindings,
				n = t.binding,
				i = n.rootNode.uuid,
				r = n.path,
				s = this._bindingsByRootAndName,
				o = s[i],
				a = e[e.length - 1],
				l = t._cacheIndex;
			(a._cacheIndex = l), (e[l] = a), e.pop(), delete o[r], 0 === Object.keys(o).length && delete s[i];
		}
		_lendBinding(t) {
			const e = this._bindings,
				n = t._cacheIndex,
				i = this._nActiveBindings++,
				r = e[i];
			(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
		}
		_takeBackBinding(t) {
			const e = this._bindings,
				n = t._cacheIndex,
				i = --this._nActiveBindings,
				r = e[i];
			(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
		}
		_lendControlInterpolant() {
			const t = this._controlInterpolants,
				e = this._nActiveControlInterpolants++;
			let n = t[e];
			return (
				void 0 === n &&
					((n = new Na(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)),
					(n.__cacheIndex = e),
					(t[e] = n)),
				n
			);
		}
		_takeBackControlInterpolant(t) {
			const e = this._controlInterpolants,
				n = t.__cacheIndex,
				i = --this._nActiveControlInterpolants,
				r = e[i];
			(t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
		}
		clipAction(t, e, n) {
			const i = e || this._root,
				r = i.uuid;
			let s = "string" == typeof t ? Wa.findByName(i, t) : t;
			const o = null !== s ? s.uuid : t,
				a = this._actionsByClip[o];
			let l = null;
			if ((void 0 === n && (n = null !== s ? s.blendMode : 2500), void 0 !== a)) {
				const t = a.actionByRoot[r];
				if (void 0 !== t && t.blendMode === n) return t;
				(l = a.knownActions[0]), null === s && (s = l._clip);
			}
			if (null === s) return null;
			const c = new Il(this, s, e, n);
			return this._bindAction(c, l), this._addInactiveAction(c, o, r), c;
		}
		existingAction(t, e) {
			const n = e || this._root,
				i = n.uuid,
				r = "string" == typeof t ? Wa.findByName(n, t) : t,
				s = r ? r.uuid : t,
				o = this._actionsByClip[s];
			return (void 0 !== o && o.actionByRoot[i]) || null;
		}
		stopAllAction() {
			const t = this._actions;
			for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
			return this;
		}
		update(t) {
			t *= this.timeScale;
			const e = this._actions,
				n = this._nActiveActions,
				i = (this.time += t),
				r = Math.sign(t),
				s = (this._accuIndex ^= 1);
			for (let o = 0; o !== n; ++o) e[o]._update(i, t, r, s);
			const o = this._bindings,
				a = this._nActiveBindings;
			for (let t = 0; t !== a; ++t) o[t].apply(s);
			return this;
		}
		setTime(t) {
			this.time = 0;
			for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
			return this.update(t);
		}
		getRoot() {
			return this._root;
		}
		uncacheClip(t) {
			const e = this._actions,
				n = t.uuid,
				i = this._actionsByClip,
				r = i[n];
			if (void 0 !== r) {
				const t = r.knownActions;
				for (let n = 0, i = t.length; n !== i; ++n) {
					const i = t[n];
					this._deactivateAction(i);
					const r = i._cacheIndex,
						s = e[e.length - 1];
					(i._cacheIndex = null),
						(i._byClipCacheIndex = null),
						(s._cacheIndex = r),
						(e[r] = s),
						e.pop(),
						this._removeInactiveBindingsForAction(i);
				}
				delete i[n];
			}
		}
		uncacheRoot(t) {
			const e = t.uuid,
				n = this._actionsByClip;
			for (const t in n) {
				const i = n[t].actionByRoot[e];
				void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
			}
			const i = this._bindingsByRootAndName[e];
			if (void 0 !== i)
				for (const t in i) {
					const e = i[t];
					e.restoreOriginalState(), this._removeInactiveBinding(e);
				}
		}
		uncacheAction(t, e) {
			const n = this.existingAction(t, e);
			null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
		}
	}).prototype._controlInterpolantsResultBuffer = new Float32Array(1);
	class Dl {
		constructor(t) {
			"string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), (t = arguments[1])),
				(this.value = t);
		}
		clone() {
			return new Dl(void 0 === this.value.clone ? this.value : this.value.clone());
		}
	}
	(class extends ws {
		constructor(t, e, n = 1) {
			super(t, e), (this.meshPerAttribute = n);
		}
		copy(t) {
			return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
		}
		clone(t) {
			const e = super.clone(t);
			return (e.meshPerAttribute = this.meshPerAttribute), e;
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return (e.isInstancedInterleavedBuffer = !0), (e.meshPerAttribute = this.meshPerAttribute), e;
		}
	}).prototype.isInstancedInterleavedBuffer = !0;
	class Nl {
		constructor(t = 1, e = 0, n = 0) {
			return (this.radius = t), (this.phi = e), (this.theta = n), this;
		}
		set(t, e, n) {
			return (this.radius = t), (this.phi = e), (this.theta = n), this;
		}
		copy(t) {
			return (this.radius = t.radius), (this.phi = t.phi), (this.theta = t.theta), this;
		}
		makeSafe() {
			const t = 1e-6;
			return (this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this;
		}
		setFromVector3(t) {
			return this.setFromCartesianCoords(t.x, t.y, t.z);
		}
		setFromCartesianCoords(t, e, n) {
			return (
				(this.radius = Math.sqrt(t * t + e * e + n * n)),
				0 === this.radius
					? ((this.theta = 0), (this.phi = 0))
					: ((this.theta = Math.atan2(t, n)), (this.phi = Math.acos(q(e / this.radius, -1, 1)))),
				this
			);
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}
	const zl = new Q();
	class Bl {
		constructor(t = new Q(1 / 0, 1 / 0), e = new Q(-1 / 0, -1 / 0)) {
			(this.min = t), (this.max = e);
		}
		set(t, e) {
			return this.min.copy(t), this.max.copy(e), this;
		}
		setFromPoints(t) {
			this.makeEmpty();
			for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
			return this;
		}
		setFromCenterAndSize(t, e) {
			const n = zl.copy(e).multiplyScalar(0.5);
			return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this;
		}
		makeEmpty() {
			return (this.min.x = this.min.y = 1 / 0), (this.max.x = this.max.y = -1 / 0), this;
		}
		isEmpty() {
			return this.max.x < this.min.x || this.max.y < this.min.y;
		}
		getCenter(t) {
			return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
		}
		getSize(t) {
			return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
		}
		expandByPoint(t) {
			return this.min.min(t), this.max.max(t), this;
		}
		expandByVector(t) {
			return this.min.sub(t), this.max.add(t), this;
		}
		expandByScalar(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this;
		}
		containsPoint(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
		}
		containsBox(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
		}
		getParameter(t, e) {
			return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
		}
		intersectsBox(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
		}
		clampPoint(t, e) {
			return e.copy(t).clamp(this.min, this.max);
		}
		distanceToPoint(t) {
			return zl.copy(t).clamp(this.min, this.max).sub(t).length();
		}
		intersect(t) {
			return this.min.max(t.min), this.max.min(t.max), this;
		}
		union(t) {
			return this.min.min(t.min), this.max.max(t.max), this;
		}
		translate(t) {
			return this.min.add(t), this.max.add(t), this;
		}
		equals(t) {
			return t.min.equals(this.min) && t.max.equals(this.max);
		}
	}
	Bl.prototype.isBox2 = !0;
	const Ol = new Et(),
		Fl = new ne(),
		Hl = new ne();
	function kl(t) {
		const e = [];
		!0 === t.isBone && e.push(t);
		for (let n = 0; n < t.children.length; n++) e.push.apply(e, kl(t.children[n]));
		return e;
	}
	const Ul = new ArrayBuffer(4),
		Vl = (new Float32Array(Ul), new Uint32Array(Ul), new Uint32Array(512)),
		Gl = new Uint32Array(512);
	for (let t = 0; t < 256; ++t) {
		const e = t - 127;
		e < -27
			? ((Vl[t] = 0), (Vl[256 | t] = 32768), (Gl[t] = 24), (Gl[256 | t] = 24))
			: e < -14
			? ((Vl[t] = 1024 >> (-e - 14)), (Vl[256 | t] = (1024 >> (-e - 14)) | 32768), (Gl[t] = -e - 1), (Gl[256 | t] = -e - 1))
			: e <= 15
			? ((Vl[t] = (e + 15) << 10), (Vl[256 | t] = ((e + 15) << 10) | 32768), (Gl[t] = 13), (Gl[256 | t] = 13))
			: e < 128
			? ((Vl[t] = 31744), (Vl[256 | t] = 64512), (Gl[t] = 24), (Gl[256 | t] = 24))
			: ((Vl[t] = 31744), (Vl[256 | t] = 64512), (Gl[t] = 13), (Gl[256 | t] = 13));
	}
	const Wl = new Uint32Array(2048),
		jl = new Uint32Array(64),
		ql = new Uint32Array(64);
	for (let t = 1; t < 1024; ++t) {
		let e = t << 13,
			n = 0;
		for (; 0 == (8388608 & e); ) (e <<= 1), (n -= 8388608);
		(e &= -8388609), (n += 947912704), (Wl[t] = e | n);
	}
	for (let t = 1024; t < 2048; ++t) Wl[t] = 939524096 + ((t - 1024) << 13);
	for (let t = 1; t < 31; ++t) jl[t] = t << 23;
	(jl[31] = 1199570944), (jl[32] = 2147483648);
	for (let t = 33; t < 63; ++t) jl[t] = 2147483648 + ((t - 32) << 23);
	jl[63] = 3347054592;
	for (let t = 1; t < 64; ++t) 32 !== t && (ql[t] = 1024);
	(_o.create = function (t, e) {
		return (
			console.log("THREE.Curve.create() has been deprecated"),
			(t.prototype = Object.create(_o.prototype)),
			(t.prototype.constructor = t),
			(t.prototype.getPoint = e),
			t
		);
	}),
		(ko.prototype.fromPoints = function (t) {
			return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t);
		}),
		(class extends ho {
			constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
				(n = new pt(n)), (i = new pt(i));
				const r = e / 2,
					s = t / e,
					o = t / 2,
					a = [],
					l = [];
				for (let t = 0, c = 0, h = -o; t <= e; t++, h += s) {
					a.push(-o, 0, h, o, 0, h), a.push(h, 0, -o, h, 0, o);
					const e = t === r ? n : i;
					e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3);
				}
				const c = new en();
				c.setAttribute("position", new Xe(a, 3)),
					c.setAttribute("color", new Xe(l, 3)),
					super(c, new eo({ vertexColors: !0, toneMapped: !1 })),
					(this.type = "GridHelper");
			}
		}.prototype.setColors = function () {
			console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
		}),
		(class extends ho {
			constructor(t) {
				const e = kl(t),
					n = new en(),
					i = [],
					r = [],
					s = new pt(0, 0, 1),
					o = new pt(0, 1, 0);
				for (let t = 0; t < e.length; t++) {
					const n = e[t];
					n.parent &&
						n.parent.isBone &&
						(i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(o.r, o.g, o.b));
				}
				n.setAttribute("position", new Xe(i, 3)),
					n.setAttribute("color", new Xe(r, 3)),
					super(n, new eo({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 })),
					(this.type = "SkeletonHelper"),
					(this.isSkeletonHelper = !0),
					(this.root = t),
					(this.bones = e),
					(this.matrix = t.matrixWorld),
					(this.matrixAutoUpdate = !1);
			}
			updateMatrixWorld(t) {
				const e = this.bones,
					n = this.geometry,
					i = n.getAttribute("position");
				Hl.copy(this.root.matrixWorld).invert();
				for (let t = 0, n = 0; t < e.length; t++) {
					const r = e[t];
					r.parent &&
						r.parent.isBone &&
						(Fl.multiplyMatrices(Hl, r.matrixWorld),
						Ol.setFromMatrixPosition(Fl),
						i.setXYZ(n, Ol.x, Ol.y, Ol.z),
						Fl.multiplyMatrices(Hl, r.parent.matrixWorld),
						Ol.setFromMatrixPosition(Fl),
						i.setXYZ(n + 1, Ol.x, Ol.y, Ol.z),
						(n += 2));
				}
				(n.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(t);
			}
		}.prototype.update = function () {
			console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
		}),
		(Za.prototype.extractUrlBase = function (t) {
			return (
				console.warn(
					"THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
				),
				vl.extractUrlBase(t)
			);
		}),
		(Za.Handlers = {
			add: function () {
				console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
			},
			get: function () {
				console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
			},
		}),
		(Bl.prototype.center = function (t) {
			return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t);
		}),
		(Bl.prototype.empty = function () {
			return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
		}),
		(Bl.prototype.isIntersectionBox = function (t) {
			return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
		}),
		(Bl.prototype.size = function (t) {
			return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t);
		}),
		(Ct.prototype.center = function (t) {
			return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t);
		}),
		(Ct.prototype.empty = function () {
			return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
		}),
		(Ct.prototype.isIntersectionBox = function (t) {
			return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
		}),
		(Ct.prototype.isIntersectionSphere = function (t) {
			return (
				console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
				this.intersectsSphere(t)
			);
		}),
		(Ct.prototype.size = function (t) {
			return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t);
		}),
		(de.prototype.toVector3 = function () {
			console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
		}),
		(Xt.prototype.empty = function () {
			return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
		}),
		(Hn.prototype.setFromMatrix = function (t) {
			return (
				console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),
				this.setFromProjectionMatrix(t)
			);
		}),
		(tt.prototype.flattenToArrayOffset = function (t, e) {
			return (
				console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
				this.toArray(t, e)
			);
		}),
		(tt.prototype.multiplyVector3 = function (t) {
			return (
				console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
				t.applyMatrix3(this)
			);
		}),
		(tt.prototype.multiplyVector3Array = function () {
			console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
		}),
		(tt.prototype.applyToBufferAttribute = function (t) {
			return (
				console.warn(
					"THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
				),
				t.applyMatrix3(this)
			);
		}),
		(tt.prototype.applyToVector3Array = function () {
			console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
		}),
		(tt.prototype.getInverse = function (t) {
			return (
				console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
				this.copy(t).invert()
			);
		}),
		(ne.prototype.extractPosition = function (t) {
			return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t);
		}),
		(ne.prototype.flattenToArrayOffset = function (t, e) {
			return (
				console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
				this.toArray(t, e)
			);
		}),
		(ne.prototype.getPosition = function () {
			return (
				console.warn(
					"THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
				),
				new Et().setFromMatrixColumn(this, 3)
			);
		}),
		(ne.prototype.setRotationFromQuaternion = function (t) {
			return (
				console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
				this.makeRotationFromQuaternion(t)
			);
		}),
		(ne.prototype.multiplyToArray = function () {
			console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
		}),
		(ne.prototype.multiplyVector3 = function (t) {
			return (
				console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
				t.applyMatrix4(this)
			);
		}),
		(ne.prototype.multiplyVector4 = function (t) {
			return (
				console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
				t.applyMatrix4(this)
			);
		}),
		(ne.prototype.multiplyVector3Array = function () {
			console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
		}),
		(ne.prototype.rotateAxis = function (t) {
			console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
				t.transformDirection(this);
		}),
		(ne.prototype.crossVector = function (t) {
			return (
				console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
				t.applyMatrix4(this)
			);
		}),
		(ne.prototype.translate = function () {
			console.error("THREE.Matrix4: .translate() has been removed.");
		}),
		(ne.prototype.rotateX = function () {
			console.error("THREE.Matrix4: .rotateX() has been removed.");
		}),
		(ne.prototype.rotateY = function () {
			console.error("THREE.Matrix4: .rotateY() has been removed.");
		}),
		(ne.prototype.rotateZ = function () {
			console.error("THREE.Matrix4: .rotateZ() has been removed.");
		}),
		(ne.prototype.rotateByAxis = function () {
			console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
		}),
		(ne.prototype.applyToBufferAttribute = function (t) {
			return (
				console.warn(
					"THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
				),
				t.applyMatrix4(this)
			);
		}),
		(ne.prototype.applyToVector3Array = function () {
			console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
		}),
		(ne.prototype.makeFrustum = function (t, e, n, i, r, s) {
			return (
				console.warn(
					"THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
				),
				this.makePerspective(t, e, i, n, r, s)
			);
		}),
		(ne.prototype.getInverse = function (t) {
			return (
				console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
				this.copy(t).invert()
			);
		}),
		(Bn.prototype.isIntersectionLine = function (t) {
			return (
				console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
			);
		}),
		(St.prototype.multiplyVector3 = function (t) {
			return (
				console.warn(
					"THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
				),
				t.applyQuaternion(this)
			);
		}),
		(St.prototype.inverse = function () {
			return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
		}),
		(ee.prototype.isIntersectionBox = function (t) {
			return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
		}),
		(ee.prototype.isIntersectionPlane = function (t) {
			return (
				console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
			);
		}),
		(ee.prototype.isIntersectionSphere = function (t) {
			return (
				console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
				this.intersectsSphere(t)
			);
		}),
		(Fe.prototype.area = function () {
			return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
		}),
		(Fe.prototype.barycoordFromPoint = function (t, e) {
			return (
				console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
				this.getBarycoord(t, e)
			);
		}),
		(Fe.prototype.midpoint = function (t) {
			return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t);
		}),
		(Fe.prototypenormal = function (t) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t);
		}),
		(Fe.prototype.plane = function (t) {
			return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t);
		}),
		(Fe.barycoordFromPoint = function (t, e, n, i, r) {
			return (
				console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
				Fe.getBarycoord(t, e, n, i, r)
			);
		}),
		(Fe.normal = function (t, e, n, i) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Fe.getNormal(t, e, n, i);
		}),
		(Vo.prototype.extractAllPoints = function (t) {
			return (
				console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),
				this.extractPoints(t)
			);
		}),
		(Vo.prototype.extrude = function (t) {
			return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ga(this, t);
		}),
		(Vo.prototype.makeGeometry = function (t) {
			return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new ya(this, t);
		}),
		(Q.prototype.fromAttribute = function (t, e, n) {
			return (
				console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
				this.fromBufferAttribute(t, e, n)
			);
		}),
		(Q.prototype.distanceToManhattan = function (t) {
			return (
				console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
				this.manhattanDistanceTo(t)
			);
		}),
		(Q.prototype.lengthManhattan = function () {
			return (
				console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
			);
		}),
		(Et.prototype.setEulerFromRotationMatrix = function () {
			console.error(
				"THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
			);
		}),
		(Et.prototype.setEulerFromQuaternion = function () {
			console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
		}),
		(Et.prototype.getPositionFromMatrix = function (t) {
			return (
				console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
				this.setFromMatrixPosition(t)
			);
		}),
		(Et.prototype.getScaleFromMatrix = function (t) {
			return (
				console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
				this.setFromMatrixScale(t)
			);
		}),
		(Et.prototype.getColumnFromMatrix = function (t, e) {
			return (
				console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
				this.setFromMatrixColumn(e, t)
			);
		}),
		(Et.prototype.applyProjection = function (t) {
			return (
				console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
				this.applyMatrix4(t)
			);
		}),
		(Et.prototype.fromAttribute = function (t, e, n) {
			return (
				console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
				this.fromBufferAttribute(t, e, n)
			);
		}),
		(Et.prototype.distanceToManhattan = function (t) {
			return (
				console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
				this.manhattanDistanceTo(t)
			);
		}),
		(Et.prototype.lengthManhattan = function () {
			return (
				console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
			);
		}),
		(_t.prototype.fromAttribute = function (t, e, n) {
			return (
				console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
				this.fromBufferAttribute(t, e, n)
			);
		}),
		(_t.prototype.lengthManhattan = function () {
			return (
				console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
			);
		}),
		(Ae.prototype.getChildByName = function (t) {
			return (
				console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
			);
		}),
		(Ae.prototype.renderDepth = function () {
			console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
		}),
		(Ae.prototype.translate = function (t, e) {
			return (
				console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
				this.translateOnAxis(e, t)
			);
		}),
		(Ae.prototype.getWorldRotation = function () {
			console.error(
				"THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
			);
		}),
		(Ae.prototype.applyMatrix = function (t) {
			return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
		}),
		Object.defineProperties(Ae.prototype, {
			eulerOrder: {
				get: function () {
					return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
				},
				set: function (t) {
					console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), (this.rotation.order = t);
				},
			},
			useQuaternion: {
				get: function () {
					console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
				},
				set: function () {
					console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
				},
			},
		}),
		(_n.prototype.setDrawMode = function () {
			console.error(
				"THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
			);
		}),
		Object.defineProperties(_n.prototype, {
			drawMode: {
				get: function () {
					return (
						console.error(
							"THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
						),
						0
					);
				},
				set: function () {
					console.error(
						"THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
					);
				},
			},
		}),
		(Ws.prototype.initBones = function () {
			console.error("THREE.SkinnedMesh: initBones() has been removed.");
		}),
		(Cn.prototype.setLens = function (t, e) {
			console.warn(
				"THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
			),
				void 0 !== e && (this.filmGauge = e),
				this.setFocalLength(t);
		}),
		Object.defineProperties(el.prototype, {
			onlyShadow: {
				set: function () {
					console.warn("THREE.Light: .onlyShadow has been removed.");
				},
			},
			shadowCameraFov: {
				set: function (t) {
					console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), (this.shadow.camera.fov = t);
				},
			},
			shadowCameraLeft: {
				set: function (t) {
					console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), (this.shadow.camera.left = t);
				},
			},
			shadowCameraRight: {
				set: function (t) {
					console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), (this.shadow.camera.right = t);
				},
			},
			shadowCameraTop: {
				set: function (t) {
					console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), (this.shadow.camera.top = t);
				},
			},
			shadowCameraBottom: {
				set: function (t) {
					console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
						(this.shadow.camera.bottom = t);
				},
			},
			shadowCameraNear: {
				set: function (t) {
					console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), (this.shadow.camera.near = t);
				},
			},
			shadowCameraFar: {
				set: function (t) {
					console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), (this.shadow.camera.far = t);
				},
			},
			shadowCameraVisible: {
				set: function () {
					console.warn(
						"THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
					);
				},
			},
			shadowBias: {
				set: function (t) {
					console.warn("THREE.Light: .shadowBias is now .shadow.bias."), (this.shadow.bias = t);
				},
			},
			shadowDarkness: {
				set: function () {
					console.warn("THREE.Light: .shadowDarkness has been removed.");
				},
			},
			shadowMapWidth: {
				set: function (t) {
					console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), (this.shadow.mapSize.width = t);
				},
			},
			shadowMapHeight: {
				set: function (t) {
					console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
						(this.shadow.mapSize.height = t);
				},
			},
		}),
		Object.defineProperties(We.prototype, {
			length: {
				get: function () {
					return (
						console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
					);
				},
			},
			dynamic: {
				get: function () {
					return (
						console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === O
					);
				},
				set: function () {
					console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(O);
				},
			},
		}),
		(We.prototype.setDynamic = function (t) {
			return (
				console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),
				this.setUsage(!0 === t ? O : B),
				this
			);
		}),
		(We.prototype.copyIndicesArray = function () {
			console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
		}),
		(We.prototype.setArray = function () {
			console.error(
				"THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
			);
		}),
		(en.prototype.addIndex = function (t) {
			console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t);
		}),
		(en.prototype.addAttribute = function (t, e) {
			return (
				console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),
				(e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
					? "index" === t
						? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
						  this.setIndex(e),
						  this)
						: this.setAttribute(t, e)
					: (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
					  this.setAttribute(t, new We(arguments[1], arguments[2])))
			);
		}),
		(en.prototype.addDrawCall = function (t, e, n) {
			void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
				console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
				this.addGroup(t, e);
		}),
		(en.prototype.clearDrawCalls = function () {
			console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
		}),
		(en.prototype.computeOffsets = function () {
			console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
		}),
		(en.prototype.removeAttribute = function (t) {
			return (
				console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),
				this.deleteAttribute(t)
			);
		}),
		(en.prototype.applyMatrix = function (t) {
			return (
				console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
			);
		}),
		Object.defineProperties(en.prototype, {
			drawcalls: {
				get: function () {
					return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
				},
			},
			offsets: {
				get: function () {
					return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
				},
			},
		}),
		(ws.prototype.setDynamic = function (t) {
			return (
				console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),
				this.setUsage(!0 === t ? O : B),
				this
			);
		}),
		(ws.prototype.setArray = function () {
			console.error(
				"THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
			);
		}),
		(ga.prototype.getArrays = function () {
			console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
		}),
		(ga.prototype.addShapeList = function () {
			console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
		}),
		(ga.prototype.addShape = function () {
			console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
		}),
		(_s.prototype.dispose = function () {
			console.error("THREE.Scene: .dispose() has been removed.");
		}),
		(Dl.prototype.onUpdate = function () {
			return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
		}),
		Object.defineProperties(ke.prototype, {
			wrapAround: {
				get: function () {
					console.warn("THREE.Material: .wrapAround has been removed.");
				},
				set: function () {
					console.warn("THREE.Material: .wrapAround has been removed.");
				},
			},
			overdraw: {
				get: function () {
					console.warn("THREE.Material: .overdraw has been removed.");
				},
				set: function () {
					console.warn("THREE.Material: .overdraw has been removed.");
				},
			},
			wrapRGB: {
				get: function () {
					return console.warn("THREE.Material: .wrapRGB has been removed."), new pt();
				},
			},
			shading: {
				get: function () {
					console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
				},
				set: function (t) {
					console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
						(this.flatShading = 1 === t);
				},
			},
			stencilMask: {
				get: function () {
					return (
						console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
						this.stencilFuncMask
					);
				},
				set: function (t) {
					console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
						(this.stencilFuncMask = t);
				},
			},
			vertexTangents: {
				get: function () {
					console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
				},
				set: function () {
					console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
				},
			},
		}),
		Object.defineProperties(Tn.prototype, {
			derivatives: {
				get: function () {
					return (
						console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
						this.extensions.derivatives
					);
				},
				set: function (t) {
					console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
						(this.extensions.derivatives = t);
				},
			},
		}),
		(vs.prototype.clearTarget = function (t, e, n, i) {
			console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
				this.setRenderTarget(t),
				this.clear(e, n, i);
		}),
		(vs.prototype.animate = function (t) {
			console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t);
		}),
		(vs.prototype.getCurrentRenderTarget = function () {
			return (
				console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
			);
		}),
		(vs.prototype.getMaxAnisotropy = function () {
			return (
				console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
				this.capabilities.getMaxAnisotropy()
			);
		}),
		(vs.prototype.getPrecision = function () {
			return (
				console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
			);
		}),
		(vs.prototype.resetGLState = function () {
			return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
		}),
		(vs.prototype.supportsFloatTextures = function () {
			return (
				console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
				this.extensions.get("OES_texture_float")
			);
		}),
		(vs.prototype.supportsHalfFloatTextures = function () {
			return (
				console.warn(
					"THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
				),
				this.extensions.get("OES_texture_half_float")
			);
		}),
		(vs.prototype.supportsStandardDerivatives = function () {
			return (
				console.warn(
					"THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
				),
				this.extensions.get("OES_standard_derivatives")
			);
		}),
		(vs.prototype.supportsCompressedTextureS3TC = function () {
			return (
				console.warn(
					"THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
				),
				this.extensions.get("WEBGL_compressed_texture_s3tc")
			);
		}),
		(vs.prototype.supportsCompressedTexturePVRTC = function () {
			return (
				console.warn(
					"THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
				),
				this.extensions.get("WEBGL_compressed_texture_pvrtc")
			);
		}),
		(vs.prototype.supportsBlendMinMax = function () {
			return (
				console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
				this.extensions.get("EXT_blend_minmax")
			);
		}),
		(vs.prototype.supportsVertexTextures = function () {
			return (
				console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
				this.capabilities.vertexTextures
			);
		}),
		(vs.prototype.supportsInstancedArrays = function () {
			return (
				console.warn(
					"THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
				),
				this.extensions.get("ANGLE_instanced_arrays")
			);
		}),
		(vs.prototype.enableScissorTest = function (t) {
			console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t);
		}),
		(vs.prototype.initMaterial = function () {
			console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
		}),
		(vs.prototype.addPrePlugin = function () {
			console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
		}),
		(vs.prototype.addPostPlugin = function () {
			console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
		}),
		(vs.prototype.updateShadowMap = function () {
			console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
		}),
		(vs.prototype.setFaceCulling = function () {
			console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
		}),
		(vs.prototype.allocTextureUnit = function () {
			console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
		}),
		(vs.prototype.setTexture = function () {
			console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
		}),
		(vs.prototype.setTexture2D = function () {
			console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
		}),
		(vs.prototype.setTextureCube = function () {
			console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
		}),
		(vs.prototype.getActiveMipMapLevel = function () {
			return (
				console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),
				this.getActiveMipmapLevel()
			);
		}),
		Object.defineProperties(vs.prototype, {
			shadowMapEnabled: {
				get: function () {
					return this.shadowMap.enabled;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
						(this.shadowMap.enabled = t);
				},
			},
			shadowMapType: {
				get: function () {
					return this.shadowMap.type;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), (this.shadowMap.type = t);
				},
			},
			shadowMapCullFace: {
				get: function () {
					console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
				},
				set: function () {
					console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
				},
			},
			context: {
				get: function () {
					return (
						console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),
						this.getContext()
					);
				},
			},
			vr: {
				get: function () {
					return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
				},
			},
			gammaInput: {
				get: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
						),
						!1
					);
				},
				set: function () {
					console.warn(
						"THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
					);
				},
			},
			gammaOutput: {
				get: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
						),
						!1
					);
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
						(this.outputEncoding = !0 === t ? I : P);
				},
			},
			toneMappingWhitePoint: {
				get: function () {
					return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
				},
				set: function () {
					console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
				},
			},
			gammaFactor: {
				get: function () {
					return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
				},
				set: function () {
					console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
				},
			},
		}),
		Object.defineProperties(os.prototype, {
			cullFace: {
				get: function () {
					console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
				},
				set: function () {
					console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
				},
			},
			renderReverseSided: {
				get: function () {
					console.warn(
						"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
					);
				},
				set: function () {
					console.warn(
						"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
					);
				},
			},
			renderSingleSided: {
				get: function () {
					console.warn(
						"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
					);
				},
				set: function () {
					console.warn(
						"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
					);
				},
			},
		}),
		Object.defineProperties(wt.prototype, {
			wrapS: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), (this.texture.wrapS = t);
				},
			},
			wrapT: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), (this.texture.wrapT = t);
				},
			},
			magFilter: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), (this.texture.magFilter = t);
				},
			},
			minFilter: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), (this.texture.minFilter = t);
				},
			},
			anisotropy: {
				get: function () {
					return (
						console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
					);
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
						(this.texture.anisotropy = t);
				},
			},
			offset: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), (this.texture.offset = t);
				},
			},
			repeat: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), (this.texture.repeat = t);
				},
			},
			format: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), (this.texture.format = t);
				},
			},
			type: {
				get: function () {
					return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), (this.texture.type = t);
				},
			},
			generateMipmaps: {
				get: function () {
					return (
						console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
						this.texture.generateMipmaps
					);
				},
				set: function (t) {
					console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
						(this.texture.generateMipmaps = t);
				},
			},
		}),
		(class extends Ae {
			constructor(t) {
				super(),
					(this.type = "Audio"),
					(this.listener = t),
					(this.context = t.context),
					(this.gain = this.context.createGain()),
					this.gain.connect(t.getInput()),
					(this.autoplay = !1),
					(this.buffer = null),
					(this.detune = 0),
					(this.loop = !1),
					(this.loopStart = 0),
					(this.loopEnd = 0),
					(this.offset = 0),
					(this.duration = void 0),
					(this.playbackRate = 1),
					(this.isPlaying = !1),
					(this.hasPlaybackControl = !0),
					(this.source = null),
					(this.sourceType = "empty"),
					(this._startedAt = 0),
					(this._progress = 0),
					(this._connected = !1),
					(this.filters = []);
			}
			getOutput() {
				return this.gain;
			}
			setNodeSource(t) {
				return (this.hasPlaybackControl = !1), (this.sourceType = "audioNode"), (this.source = t), this.connect(), this;
			}
			setMediaElementSource(t) {
				return (
					(this.hasPlaybackControl = !1),
					(this.sourceType = "mediaNode"),
					(this.source = this.context.createMediaElementSource(t)),
					this.connect(),
					this
				);
			}
			setMediaStreamSource(t) {
				return (
					(this.hasPlaybackControl = !1),
					(this.sourceType = "mediaStreamNode"),
					(this.source = this.context.createMediaStreamSource(t)),
					this.connect(),
					this
				);
			}
			setBuffer(t) {
				return (this.buffer = t), (this.sourceType = "buffer"), this.autoplay && this.play(), this;
			}
			play(t = 0) {
				if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
				if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
				this._startedAt = this.context.currentTime + t;
				const e = this.context.createBufferSource();
				return (
					(e.buffer = this.buffer),
					(e.loop = this.loop),
					(e.loopStart = this.loopStart),
					(e.loopEnd = this.loopEnd),
					(e.onended = this.onEnded.bind(this)),
					e.start(this._startedAt, this._progress + this.offset, this.duration),
					(this.isPlaying = !0),
					(this.source = e),
					this.setDetune(this.detune),
					this.setPlaybackRate(this.playbackRate),
					this.connect()
				);
			}
			pause() {
				if (!1 !== this.hasPlaybackControl)
					return (
						!0 === this.isPlaying &&
							((this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate),
							!0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)),
							this.source.stop(),
							(this.source.onended = null),
							(this.isPlaying = !1)),
						this
					);
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			stop() {
				if (!1 !== this.hasPlaybackControl)
					return (this._progress = 0), this.source.stop(), (this.source.onended = null), (this.isPlaying = !1), this;
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			connect() {
				if (this.filters.length > 0) {
					this.source.connect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
					this.filters[this.filters.length - 1].connect(this.getOutput());
				} else this.source.connect(this.getOutput());
				return (this._connected = !0), this;
			}
			disconnect() {
				if (this.filters.length > 0) {
					this.source.disconnect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
					this.filters[this.filters.length - 1].disconnect(this.getOutput());
				} else this.source.disconnect(this.getOutput());
				return (this._connected = !1), this;
			}
			getFilters() {
				return this.filters;
			}
			setFilters(t) {
				return (
					t || (t = []),
					!0 === this._connected
						? (this.disconnect(), (this.filters = t.slice()), this.connect())
						: (this.filters = t.slice()),
					this
				);
			}
			setDetune(t) {
				if (((this.detune = t), void 0 !== this.source.detune))
					return (
						!0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01),
						this
					);
			}
			getDetune() {
				return this.detune;
			}
			getFilter() {
				return this.getFilters()[0];
			}
			setFilter(t) {
				return this.setFilters(t ? [t] : []);
			}
			setPlaybackRate(t) {
				if (!1 !== this.hasPlaybackControl)
					return (
						(this.playbackRate = t),
						!0 === this.isPlaying &&
							this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01),
						this
					);
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			getPlaybackRate() {
				return this.playbackRate;
			}
			onEnded() {
				this.isPlaying = !1;
			}
			getLoop() {
				return !1 === this.hasPlaybackControl
					? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
					: this.loop;
			}
			setLoop(t) {
				if (!1 !== this.hasPlaybackControl)
					return (this.loop = t), !0 === this.isPlaying && (this.source.loop = this.loop), this;
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			setLoopStart(t) {
				return (this.loopStart = t), this;
			}
			setLoopEnd(t) {
				return (this.loopEnd = t), this;
			}
			getVolume() {
				return this.gain.gain.value;
			}
			setVolume(t) {
				return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
			}
		}.prototype.load = function (t) {
			console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
			const e = this;
			return (
				new _l().load(t, function (t) {
					e.setBuffer(t);
				}),
				this
			);
		}),
		(Ln.prototype.updateCubeMap = function (t, e) {
			return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e);
		}),
		(Ln.prototype.clear = function (t, e, n, i) {
			return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i);
		}),
		(ft.crossOrigin = void 0),
		(ft.loadTexture = function (t, e, n, i) {
			console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
			const r = new tl();
			r.setCrossOrigin(this.crossOrigin);
			const s = r.load(t, n, void 0, i);
			return e && (s.mapping = e), s;
		}),
		(ft.loadTextureCube = function (t, e, n, i) {
			console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
			const r = new Qa();
			r.setCrossOrigin(this.crossOrigin);
			const s = r.load(t, n, void 0, i);
			return e && (s.mapping = e), s;
		}),
		(ft.loadCompressedTexture = function () {
			console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
		}),
		(ft.loadCompressedTextureCube = function () {
			console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
		}),
		"undefined" != typeof __THREE_DEVTOOLS__ &&
			__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "140" } })),
		"undefined" != typeof window &&
			(window.__THREE__
				? console.warn("WARNING: Multiple instances of Three.js being imported.")
				: (window.__THREE__ = "140"));
	class Xl {
		constructor() {
			(this.callbacks = {}), (this.callbacks.base = {});
		}
		on(t, e) {
			return void 0 === t || "" === t
				? (console.warn("wrong names"), !1)
				: void 0 === e
				? (console.warn("wrong callback"), !1)
				: (this.resolveNames(t).forEach((t) => {
						const n = this.resolveName(t);
						this.callbacks[n.namespace] instanceof Object || (this.callbacks[n.namespace] = {}),
							this.callbacks[n.namespace][n.value] instanceof Array || (this.callbacks[n.namespace][n.value] = []),
							this.callbacks[n.namespace][n.value].push(e);
				  }),
				  this);
		}
		off(t) {
			return void 0 === t || "" === t
				? (console.warn("wrong name"), !1)
				: (this.resolveNames(t).forEach((t) => {
						const e = this.resolveName(t);
						if ("base" !== e.namespace && "" === e.value) delete this.callbacks[e.namespace];
						else if ("base" === e.namespace)
							for (const t in this.callbacks)
								this.callbacks[t] instanceof Object &&
									this.callbacks[t][e.value] instanceof Array &&
									(delete this.callbacks[t][e.value],
									0 === Object.keys(this.callbacks[t]).length && delete this.callbacks[t]);
						else
							this.callbacks[e.namespace] instanceof Object &&
								this.callbacks[e.namespace][e.value] instanceof Array &&
								(delete this.callbacks[e.namespace][e.value],
								0 === Object.keys(this.callbacks[e.namespace]).length && delete this.callbacks[e.namespace]);
				  }),
				  this);
		}
		trigger(t, e) {
			if (void 0 === t || "" === t) return console.warn("wrong name"), !1;
			let n = null,
				i = null;
			const r = e instanceof Array ? e : [];
			let s = this.resolveNames(t);
			if (((s = this.resolveName(s[0])), "base" === s.namespace))
				for (const t in this.callbacks)
					this.callbacks[t] instanceof Object &&
						this.callbacks[t][s.value] instanceof Array &&
						this.callbacks[t][s.value].forEach(function (t) {
							(i = t.apply(this, r)), void 0 === n && (n = i);
						});
			else if (this.callbacks[s.namespace] instanceof Object) {
				if ("" === s.value) return console.warn("wrong name"), this;
				this.callbacks[s.namespace][s.value].forEach(function (t) {
					(i = t.apply(this, r)), void 0 === n && (n = i);
				});
			}
			return n;
		}
		resolveNames(t) {
			let e = t;
			return (e = e.replace(/[^a-zA-Z0-9 ,/.]/g, "")), (e = e.replace(/[,/]+/g, " ")), (e = e.split(" ")), e;
		}
		resolveName(t) {
			const e = {},
				n = t.split(".");
			return (
				(e.original = t), (e.value = n[0]), (e.namespace = "base"), n.length > 1 && "" !== n[1] && (e.namespace = n[1]), e
			);
		}
	}
	class Yl extends Xl {
		constructor() {
			super(),
				(this.width = window.innerWidth),
				(this.height = window.innerHeight),
				(this.pixelRatio = Math.min(window.devicePixelRatio, 2)),
				window.addEventListener("resize", () => {
					(this.width = window.innerWidth),
						(this.height = window.innerHeight),
						(this.pixelRatio = Math.min(window.devicePixelRatio, 2)),
						this.trigger("resize");
				});
		}
	}
	class Zl extends Xl {
		constructor() {
			super(),
				(this.start = Date.now()),
				(this.current = this.start),
				(this.elapsed = 0),
				(this.delta = 16),
				window.requestAnimationFrame(() => {
					this.tick();
				});
		}
		tick() {
			const t = Date.now();
			(this.delta = t - this.current),
				(this.current = t),
				(this.elapsed = this.current - this.start),
				this.trigger("tick"),
				window.requestAnimationFrame(() => {
					this.tick();
				});
		}
	}
	const $l = { type: "change" },
		Kl = { type: "start" },
		Jl = { type: "end" };
	class Ql extends k {
		constructor(t, e) {
			super(),
				void 0 === e && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),
				e === document &&
					console.error(
						'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
					),
				(this.object = t),
				(this.domElement = e),
				(this.domElement.style.touchAction = "none"),
				(this.enabled = !0),
				(this.target = new Et()),
				(this.minDistance = 0),
				(this.maxDistance = 1 / 0),
				(this.minZoom = 0),
				(this.maxZoom = 1 / 0),
				(this.minPolarAngle = 0),
				(this.maxPolarAngle = Math.PI),
				(this.minAzimuthAngle = -1 / 0),
				(this.maxAzimuthAngle = 1 / 0),
				(this.enableDamping = !1),
				(this.dampingFactor = 0.05),
				(this.enableZoom = !0),
				(this.zoomSpeed = 1),
				(this.enableRotate = !0),
				(this.rotateSpeed = 1),
				(this.enablePan = !0),
				(this.panSpeed = 1),
				(this.screenSpacePanning = !0),
				(this.keyPanSpeed = 7),
				(this.autoRotate = !1),
				(this.autoRotateSpeed = 2),
				(this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }),
				(this.mouseButtons = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }),
				(this.touches = { ONE: 0, TWO: 2 }),
				(this.target0 = this.target.clone()),
				(this.position0 = this.object.position.clone()),
				(this.zoom0 = this.object.zoom),
				(this._domElementKeyEvents = null),
				(this.getPolarAngle = function () {
					return o.phi;
				}),
				(this.getAzimuthalAngle = function () {
					return o.theta;
				}),
				(this.getDistance = function () {
					return this.object.position.distanceTo(this.target);
				}),
				(this.listenToKeyEvents = function (t) {
					t.addEventListener("keydown", G), (this._domElementKeyEvents = t);
				}),
				(this.saveState = function () {
					n.target0.copy(n.target), n.position0.copy(n.object.position), (n.zoom0 = n.object.zoom);
				}),
				(this.reset = function () {
					n.target.copy(n.target0),
						n.object.position.copy(n.position0),
						(n.object.zoom = n.zoom0),
						n.object.updateProjectionMatrix(),
						n.dispatchEvent($l),
						n.update(),
						(r = i.NONE);
				}),
				(this.update = (function () {
					const e = new Et(),
						u = new St().setFromUnitVectors(t.up, new Et(0, 1, 0)),
						d = u.clone().invert(),
						p = new Et(),
						m = new St(),
						f = 2 * Math.PI;
					return function () {
						const t = n.object.position;
						e.copy(t).sub(n.target),
							e.applyQuaternion(u),
							o.setFromVector3(e),
							n.autoRotate && r === i.NONE && M(((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed),
							n.enableDamping
								? ((o.theta += a.theta * n.dampingFactor), (o.phi += a.phi * n.dampingFactor))
								: ((o.theta += a.theta), (o.phi += a.phi));
						let g = n.minAzimuthAngle,
							v = n.maxAzimuthAngle;
						return (
							isFinite(g) &&
								isFinite(v) &&
								(g < -Math.PI ? (g += f) : g > Math.PI && (g -= f),
								v < -Math.PI ? (v += f) : v > Math.PI && (v -= f),
								(o.theta =
									g <= v
										? Math.max(g, Math.min(v, o.theta))
										: o.theta > (g + v) / 2
										? Math.max(g, o.theta)
										: Math.min(v, o.theta))),
							(o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi))),
							o.makeSafe(),
							(o.radius *= l),
							(o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius))),
							!0 === n.enableDamping ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c),
							e.setFromSpherical(o),
							e.applyQuaternion(d),
							t.copy(n.target).add(e),
							n.object.lookAt(n.target),
							!0 === n.enableDamping
								? ((a.theta *= 1 - n.dampingFactor),
								  (a.phi *= 1 - n.dampingFactor),
								  c.multiplyScalar(1 - n.dampingFactor))
								: (a.set(0, 0, 0), c.set(0, 0, 0)),
							(l = 1),
							!!(h || p.distanceToSquared(n.object.position) > s || 8 * (1 - m.dot(n.object.quaternion)) > s) &&
								(n.dispatchEvent($l), p.copy(n.object.position), m.copy(n.object.quaternion), (h = !1), !0)
						);
					};
				})()),
				(this.dispose = function () {
					n.domElement.removeEventListener("contextmenu", W),
						n.domElement.removeEventListener("pointerdown", F),
						n.domElement.removeEventListener("pointercancel", U),
						n.domElement.removeEventListener("wheel", V),
						n.domElement.removeEventListener("pointermove", H),
						n.domElement.removeEventListener("pointerup", k),
						null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", G);
				});
			const n = this,
				i = {
					NONE: -1,
					ROTATE: 0,
					DOLLY: 1,
					PAN: 2,
					TOUCH_ROTATE: 3,
					TOUCH_PAN: 4,
					TOUCH_DOLLY_PAN: 5,
					TOUCH_DOLLY_ROTATE: 6,
				};
			let r = i.NONE;
			const s = 1e-6,
				o = new Nl(),
				a = new Nl();
			let l = 1;
			const c = new Et();
			let h = !1;
			const u = new Q(),
				d = new Q(),
				p = new Q(),
				m = new Q(),
				f = new Q(),
				g = new Q(),
				v = new Q(),
				y = new Q(),
				x = new Q(),
				_ = [],
				w = {};
			function b() {
				return Math.pow(0.95, n.zoomSpeed);
			}
			function M(t) {
				a.theta -= t;
			}
			function S(t) {
				a.phi -= t;
			}
			const E = (function () {
					const t = new Et();
					return function (e, n) {
						t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), c.add(t);
					};
				})(),
				T = (function () {
					const t = new Et();
					return function (e, i) {
						!0 === n.screenSpacePanning
							? t.setFromMatrixColumn(i, 1)
							: (t.setFromMatrixColumn(i, 0), t.crossVectors(n.object.up, t)),
							t.multiplyScalar(e),
							c.add(t);
					};
				})(),
				A = (function () {
					const t = new Et();
					return function (e, i) {
						const r = n.domElement;
						if (n.object.isPerspectiveCamera) {
							const s = n.object.position;
							t.copy(s).sub(n.target);
							let o = t.length();
							(o *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
								E((2 * e * o) / r.clientHeight, n.object.matrix),
								T((2 * i * o) / r.clientHeight, n.object.matrix);
						} else
							n.object.isOrthographicCamera
								? (E((e * (n.object.right - n.object.left)) / n.object.zoom / r.clientWidth, n.object.matrix),
								  T((i * (n.object.top - n.object.bottom)) / n.object.zoom / r.clientHeight, n.object.matrix))
								: (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
								  (n.enablePan = !1));
					};
				})();
			function C(t) {
				n.object.isPerspectiveCamera
					? (l /= t)
					: n.object.isOrthographicCamera
					? ((n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * t))),
					  n.object.updateProjectionMatrix(),
					  (h = !0))
					: (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
					  (n.enableZoom = !1));
			}
			function R(t) {
				n.object.isPerspectiveCamera
					? (l *= t)
					: n.object.isOrthographicCamera
					? ((n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / t))),
					  n.object.updateProjectionMatrix(),
					  (h = !0))
					: (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
					  (n.enableZoom = !1));
			}
			function L(t) {
				u.set(t.clientX, t.clientY);
			}
			function P(t) {
				m.set(t.clientX, t.clientY);
			}
			function I() {
				if (1 === _.length) u.set(_[0].pageX, _[0].pageY);
				else {
					const t = 0.5 * (_[0].pageX + _[1].pageX),
						e = 0.5 * (_[0].pageY + _[1].pageY);
					u.set(t, e);
				}
			}
			function D() {
				if (1 === _.length) m.set(_[0].pageX, _[0].pageY);
				else {
					const t = 0.5 * (_[0].pageX + _[1].pageX),
						e = 0.5 * (_[0].pageY + _[1].pageY);
					m.set(t, e);
				}
			}
			function N() {
				const t = _[0].pageX - _[1].pageX,
					e = _[0].pageY - _[1].pageY,
					n = Math.sqrt(t * t + e * e);
				v.set(0, n);
			}
			function z(t) {
				if (1 == _.length) d.set(t.pageX, t.pageY);
				else {
					const e = X(t),
						n = 0.5 * (t.pageX + e.x),
						i = 0.5 * (t.pageY + e.y);
					d.set(n, i);
				}
				p.subVectors(d, u).multiplyScalar(n.rotateSpeed);
				const e = n.domElement;
				M((2 * Math.PI * p.x) / e.clientHeight), S((2 * Math.PI * p.y) / e.clientHeight), u.copy(d);
			}
			function B(t) {
				if (1 === _.length) f.set(t.pageX, t.pageY);
				else {
					const e = X(t),
						n = 0.5 * (t.pageX + e.x),
						i = 0.5 * (t.pageY + e.y);
					f.set(n, i);
				}
				g.subVectors(f, m).multiplyScalar(n.panSpeed), A(g.x, g.y), m.copy(f);
			}
			function O(t) {
				const e = X(t),
					i = t.pageX - e.x,
					r = t.pageY - e.y,
					s = Math.sqrt(i * i + r * r);
				y.set(0, s), x.set(0, Math.pow(y.y / v.y, n.zoomSpeed)), C(x.y), v.copy(y);
			}
			function F(t) {
				!1 !== n.enabled &&
					(0 === _.length &&
						(n.domElement.setPointerCapture(t.pointerId),
						n.domElement.addEventListener("pointermove", H),
						n.domElement.addEventListener("pointerup", k)),
					(function (t) {
						_.push(t);
					})(t),
					"touch" === t.pointerType
						? (function (t) {
								switch ((q(t), _.length)) {
									case 1:
										switch (n.touches.ONE) {
											case 0:
												if (!1 === n.enableRotate) return;
												I(), (r = i.TOUCH_ROTATE);
												break;
											case 1:
												if (!1 === n.enablePan) return;
												D(), (r = i.TOUCH_PAN);
												break;
											default:
												r = i.NONE;
										}
										break;
									case 2:
										switch (n.touches.TWO) {
											case 2:
												if (!1 === n.enableZoom && !1 === n.enablePan) return;
												n.enableZoom && N(), n.enablePan && D(), (r = i.TOUCH_DOLLY_PAN);
												break;
											case 3:
												if (!1 === n.enableZoom && !1 === n.enableRotate) return;
												n.enableZoom && N(), n.enableRotate && I(), (r = i.TOUCH_DOLLY_ROTATE);
												break;
											default:
												r = i.NONE;
										}
										break;
									default:
										r = i.NONE;
								}
								r !== i.NONE && n.dispatchEvent(Kl);
						  })(t)
						: (function (t) {
								let e;
								switch (t.button) {
									case 0:
										e = n.mouseButtons.LEFT;
										break;
									case 1:
										e = n.mouseButtons.MIDDLE;
										break;
									case 2:
										e = n.mouseButtons.RIGHT;
										break;
									default:
										e = -1;
								}
								switch (e) {
									case 1:
										if (!1 === n.enableZoom) return;
										!(function (t) {
											v.set(t.clientX, t.clientY);
										})(t),
											(r = i.DOLLY);
										break;
									case 0:
										if (t.ctrlKey || t.metaKey || t.shiftKey) {
											if (!1 === n.enablePan) return;
											P(t), (r = i.PAN);
										} else {
											if (!1 === n.enableRotate) return;
											L(t), (r = i.ROTATE);
										}
										break;
									case 2:
										if (t.ctrlKey || t.metaKey || t.shiftKey) {
											if (!1 === n.enableRotate) return;
											L(t), (r = i.ROTATE);
										} else {
											if (!1 === n.enablePan) return;
											P(t), (r = i.PAN);
										}
										break;
									default:
										r = i.NONE;
								}
								r !== i.NONE && n.dispatchEvent(Kl);
						  })(t));
			}
			function H(t) {
				!1 !== n.enabled &&
					("touch" === t.pointerType
						? (function (t) {
								switch ((q(t), r)) {
									case i.TOUCH_ROTATE:
										if (!1 === n.enableRotate) return;
										z(t), n.update();
										break;
									case i.TOUCH_PAN:
										if (!1 === n.enablePan) return;
										B(t), n.update();
										break;
									case i.TOUCH_DOLLY_PAN:
										if (!1 === n.enableZoom && !1 === n.enablePan) return;
										!(function (t) {
											n.enableZoom && O(t), n.enablePan && B(t);
										})(t),
											n.update();
										break;
									case i.TOUCH_DOLLY_ROTATE:
										if (!1 === n.enableZoom && !1 === n.enableRotate) return;
										!(function (t) {
											n.enableZoom && O(t), n.enableRotate && z(t);
										})(t),
											n.update();
										break;
									default:
										r = i.NONE;
								}
						  })(t)
						: (function (t) {
								if (!1 !== n.enabled)
									switch (r) {
										case i.ROTATE:
											if (!1 === n.enableRotate) return;
											!(function (t) {
												d.set(t.clientX, t.clientY), p.subVectors(d, u).multiplyScalar(n.rotateSpeed);
												const e = n.domElement;
												M((2 * Math.PI * p.x) / e.clientHeight),
													S((2 * Math.PI * p.y) / e.clientHeight),
													u.copy(d),
													n.update();
											})(t);
											break;
										case i.DOLLY:
											if (!1 === n.enableZoom) return;
											!(function (t) {
												y.set(t.clientX, t.clientY),
													x.subVectors(y, v),
													x.y > 0 ? C(b()) : x.y < 0 && R(b()),
													v.copy(y),
													n.update();
											})(t);
											break;
										case i.PAN:
											if (!1 === n.enablePan) return;
											!(function (t) {
												f.set(t.clientX, t.clientY),
													g.subVectors(f, m).multiplyScalar(n.panSpeed),
													A(g.x, g.y),
													m.copy(f),
													n.update();
											})(t);
									}
						  })(t));
			}
			function k(t) {
				j(t),
					0 === _.length &&
						(n.domElement.releasePointerCapture(t.pointerId),
						n.domElement.removeEventListener("pointermove", H),
						n.domElement.removeEventListener("pointerup", k)),
					n.dispatchEvent(Jl),
					(r = i.NONE);
			}
			function U(t) {
				j(t);
			}
			function V(t) {
				!1 !== n.enabled &&
					!1 !== n.enableZoom &&
					r === i.NONE &&
					(t.preventDefault(),
					n.dispatchEvent(Kl),
					(function (t) {
						t.deltaY < 0 ? R(b()) : t.deltaY > 0 && C(b()), n.update();
					})(t),
					n.dispatchEvent(Jl));
			}
			function G(t) {
				!1 !== n.enabled &&
					!1 !== n.enablePan &&
					(function (t) {
						let e = !1;
						switch (t.code) {
							case n.keys.UP:
								A(0, n.keyPanSpeed), (e = !0);
								break;
							case n.keys.BOTTOM:
								A(0, -n.keyPanSpeed), (e = !0);
								break;
							case n.keys.LEFT:
								A(n.keyPanSpeed, 0), (e = !0);
								break;
							case n.keys.RIGHT:
								A(-n.keyPanSpeed, 0), (e = !0);
						}
						e && (t.preventDefault(), n.update());
					})(t);
			}
			function W(t) {
				!1 !== n.enabled && t.preventDefault();
			}
			function j(t) {
				delete w[t.pointerId];
				for (let e = 0; e < _.length; e++) if (_[e].pointerId == t.pointerId) return void _.splice(e, 1);
			}
			function q(t) {
				let e = w[t.pointerId];
				void 0 === e && ((e = new Q()), (w[t.pointerId] = e)), e.set(t.pageX, t.pageY);
			}
			function X(t) {
				const e = t.pointerId === _[0].pointerId ? _[1] : _[0];
				return w[e.pointerId];
			}
			n.domElement.addEventListener("contextmenu", W),
				n.domElement.addEventListener("pointerdown", F),
				n.domElement.addEventListener("pointercancel", U),
				n.domElement.addEventListener("wheel", V, { passive: !1 }),
				this.update();
		}
	}
	class tc {
		constructor() {
			(this.experience = new Ym()),
				(this.sizes = this.experience.sizes),
				(this.scene = this.experience.scene),
				(this.canvas = this.experience.canvas),
				this.setInstance();
		}
		setInstance() {
			(this.instance = new Cn(35, this.sizes.width / this.sizes.height, 0.1, 1e3)),
				this.instance.position.set(0, 4, 0),
				this.instance.lookAt(this.scene.position),
				this.scene.add(this.instance);
		}
		setOrbitControls() {
			(this.controls = new Ql(this.instance, this.canvas)), (this.controls.enableDamping = !0);
		}
		resize() {
			(this.instance.aspect = this.sizes.width / this.sizes.height), this.instance.updateProjectionMatrix();
		}
		update() {
			this.controls.update();
		}
	}
	class ec {
		constructor() {
			(this.experience = new Ym()),
				(this.canvas = this.experience.canvas),
				(this.sizes = this.experience.sizes),
				(this.scene = this.experience.scene),
				(this.camera = this.experience.camera),
				this.setInstance();
		}
		setInstance() {
			(this.instance = new vs({
				canvas: this.canvas,
				antialias: !0,
				physicallyCorrectLights: !0,
				shadowMap: { enabled: !0, type: 2 },
				toneMapping: 3,
			})),
				this.instance.setSize(this.sizes.width, this.sizes.height),
				this.instance.setPixelRatio(this.sizes.devicePixelRatio),
				this.instance.setClearColor("#211d20");
		}
		resize() {
			this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(this.sizes.devicePixelRatio);
		}
		update() {
			this.instance.render(this.scene, this.camera.instance);
		}
	}
	class nc extends _n {
		constructor() {
			const t = nc.SkyShader,
				e = new Tn({
					name: "SkyShader",
					fragmentShader: t.fragmentShader,
					vertexShader: t.vertexShader,
					uniforms: En.clone(t.uniforms),
					side: 1,
					depthWrite: !1,
				});
			super(new bn(1, 1, 1), e);
		}
	}
	(nc.prototype.isSky = !0),
		(nc.SkyShader = {
			uniforms: {
				turbidity: { value: 2 },
				rayleigh: { value: 1 },
				mieCoefficient: { value: 0.005 },
				mieDirectionalG: { value: 0.8 },
				sunPosition: { value: new Et() },
				up: { value: new Et(0, 1, 0) },
			},
			vertexShader:
				"\n\t\tuniform vec3 sunPosition;\n\t\tuniform float rayleigh;\n\t\tuniform float turbidity;\n\t\tuniform float mieCoefficient;\n\t\tuniform vec3 up;\n\n\t\tvarying vec3 vWorldPosition;\n\t\tvarying vec3 vSunDirection;\n\t\tvarying float vSunfade;\n\t\tvarying vec3 vBetaR;\n\t\tvarying vec3 vBetaM;\n\t\tvarying float vSunE;\n\n\t\t// constants for atmospheric scattering\n\t\tconst float e = 2.71828182845904523536028747135266249775724709369995957;\n\t\tconst float pi = 3.141592653589793238462643383279502884197169;\n\n\t\t// wavelength of used primaries, according to preetham\n\t\tconst vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );\n\t\t// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:\n\t\t// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\n\t\tconst vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );\n\n\t\t// mie stuff\n\t\t// K coefficient for the primaries\n\t\tconst float v = 4.0;\n\t\tconst vec3 K = vec3( 0.686, 0.678, 0.666 );\n\t\t// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K\n\t\tconst vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );\n\n\t\t// earth shadow hack\n\t\t// cutoffAngle = pi / 1.95;\n\t\tconst float cutoffAngle = 1.6110731556870734;\n\t\tconst float steepness = 1.5;\n\t\tconst float EE = 1000.0;\n\n\t\tfloat sunIntensity( float zenithAngleCos ) {\n\t\t\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\n\t\t\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\n\t\t}\n\n\t\tvec3 totalMie( float T ) {\n\t\t\tfloat c = ( 0.2 * T ) * 10E-18;\n\t\t\treturn 0.434 * c * MieConst;\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\t\t\tvWorldPosition = worldPosition.xyz;\n\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n\t\t\tvSunDirection = normalize( sunPosition );\n\n\t\t\tvSunE = sunIntensity( dot( vSunDirection, up ) );\n\n\t\t\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );\n\n\t\t\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\n\n\t\t\t// extinction (absorbtion + out scattering)\n\t\t\t// rayleigh coefficients\n\t\t\tvBetaR = totalRayleigh * rayleighCoefficient;\n\n\t\t\t// mie coefficients\n\t\t\tvBetaM = totalMie( turbidity ) * mieCoefficient;\n\n\t\t}",
			fragmentShader:
				"\n\t\tvarying vec3 vWorldPosition;\n\t\tvarying vec3 vSunDirection;\n\t\tvarying float vSunfade;\n\t\tvarying vec3 vBetaR;\n\t\tvarying vec3 vBetaM;\n\t\tvarying float vSunE;\n\n\t\tuniform float mieDirectionalG;\n\t\tuniform vec3 up;\n\n\t\tconst vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );\n\n\t\t// constants for atmospheric scattering\n\t\tconst float pi = 3.141592653589793238462643383279502884197169;\n\n\t\tconst float n = 1.0003; // refractive index of air\n\t\tconst float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)\n\n\t\t// optical length at zenith for molecules\n\t\tconst float rayleighZenithLength = 8.4E3;\n\t\tconst float mieZenithLength = 1.25E3;\n\t\t// 66 arc seconds -> degrees, and the cosine of that\n\t\tconst float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\n\n\t\t// 3.0 / ( 16.0 * pi )\n\t\tconst float THREE_OVER_SIXTEENPI = 0.05968310365946075;\n\t\t// 1.0 / ( 4.0 * pi )\n\t\tconst float ONE_OVER_FOURPI = 0.07957747154594767;\n\n\t\tfloat rayleighPhase( float cosTheta ) {\n\t\t\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );\n\t\t}\n\n\t\tfloat hgPhase( float cosTheta, float g ) {\n\t\t\tfloat g2 = pow( g, 2.0 );\n\t\t\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );\n\t\t\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec3 direction = normalize( vWorldPosition - cameraPos );\n\n\t\t\t// optical length\n\t\t\t// cutoff angle at 90 to avoid singularity in next formula.\n\t\t\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );\n\t\t\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );\n\t\t\tfloat sR = rayleighZenithLength * inverse;\n\t\t\tfloat sM = mieZenithLength * inverse;\n\n\t\t\t// combined extinction factor\n\t\t\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );\n\n\t\t\t// in scattering\n\t\t\tfloat cosTheta = dot( direction, vSunDirection );\n\n\t\t\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );\n\t\t\tvec3 betaRTheta = vBetaR * rPhase;\n\n\t\t\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );\n\t\t\tvec3 betaMTheta = vBetaM * mPhase;\n\n\t\t\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );\n\t\t\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );\n\n\t\t\t// nightsky\n\t\t\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]\n\t\t\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]\n\t\t\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );\n\t\t\tvec3 L0 = vec3( 0.1 ) * Fex;\n\n\t\t\t// composition + solar disc\n\t\t\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );\n\t\t\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;\n\n\t\t\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );\n\n\t\t\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );\n\n\t\t\tgl_FragColor = vec4( retColor, 1.0 );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <encodings_fragment>\n\n\t\t}",
		});
	class ic {
		constructor() {
			(this.experience = new Ym()),
				(this.scene = this.experience.scene),
				(this.debug = this.experience.debug),
				this.debug.active && (this.debugFolder = this.debug.gui.addFolder("environment")),
				this.setSunLight(),
				this.setSky();
		}
		setSunLight() {
			(this.sunLight = new ml(16777215, 3)),
				(this.sunLight.castShadow = !0),
				this.sunLight.shadow.mapSize.set(1024, 1024),
				(this.sunLight.shadow.camera.far = 15),
				(this.sunLight.shadow.camera.left = -7),
				(this.sunLight.shadow.camera.top = 7),
				(this.sunLight.shadow.camera.right = 7),
				(this.sunLight.shadow.camera.bottom = -7),
				(this.sunLight.shadow.normalBias = 0.05),
				this.sunLight.position.set(5, 10, 8),
				this.scene.add(this.sunLight),
				this.debug.active &&
					(this.debugFolder.add(this.sunLight, "intensity").name("sunLightIntensity").min(0).max(10).step(0.001),
					this.debugFolder.add(this.sunLight.position, "x").name("sunLightX").min(-5).max(5).step(0.001),
					this.debugFolder.add(this.sunLight.position, "y").name("sunLightY").min(-5).max(5).step(0.001),
					this.debugFolder.add(this.sunLight.position, "z").name("sunLightZ").min(-5).max(5).step(0.001));
		}
		setSky() {
			(this.sky = new nc()),
				this.sky.scale.setScalar(45e3),
				this.scene.add(this.sky),
				(this.sun = new Et()),
				(this.effectController = {
					turbidity: 6.7,
					rayleigh: 0.165,
					mieCoefficient: 0,
					mieDirectionalG: 0.865,
					elevation: 10,
					azimuth: 166,
					exposure: this.experience.renderer.instance.toneMappingExposure,
				}),
				this.updateSky(),
				this.debug.active &&
					(console.log("debug active"),
					this.debugFolder
						.add(this.effectController, "turbidity", 0, 20, 0.1)
						.name("turbidity")
						.onChange(() => this.updateSky()),
					this.debugFolder
						.add(this.effectController, "rayleigh", 0, 4, 0.001)
						.name("rayleigh")
						.onChange(() => this.updateSky()),
					this.debugFolder
						.add(this.effectController, "mieCoefficient", 0, 0.1, 0.001)
						.name("mieCoefficient")
						.onChange(() => this.updateSky()),
					this.debugFolder
						.add(this.effectController, "mieDirectionalG", 0, 1, 0.001)
						.name("mieDirectionalG")
						.onChange(() => this.updateSky()),
					this.debugFolder
						.add(this.effectController, "elevation", 0, 90, 0.1)
						.name("elevation")
						.onChange(() => this.updateSky()),
					this.debugFolder
						.add(this.effectController, "azimuth", -180, 180, 0.1)
						.name("azimuth")
						.onChange(() => this.updateSky()),
					console.log(this.experience.renderer.instance.toneMappingExposure),
					this.debugFolder
						.add(this.effectController, "exposure", 0, 1, 1e-4)
						.name("exposure")
						.onChange(() => this.updateSky()));
		}
		updateSky() {
			const t = this.sky.material.uniforms;
			(t.turbidity.value = this.effectController.turbidity),
				(t.rayleigh.value = this.effectController.rayleigh),
				(t.mieCoefficient.value = this.effectController.mieCoefficient),
				(t.mieDirectionalG.value = this.effectController.mieDirectionalG);
			const e = J.degToRad(90 - this.effectController.elevation),
				n = J.degToRad(this.effectController.azimuth);
			this.sun.setFromSphericalCoords(1, e, n),
				t.sunPosition.value.copy(this.sun),
				(this.experience.renderer.instance.toneMappingExposure = this.effectController.exposure),
				this.experience.renderer.instance.render(this.scene, this.experience.camera.instance);
		}
	}
	class rc {
		constructor(t) {
			void 0 === t && (t = [0, 0, 0, 0, 0, 0, 0, 0, 0]), (this.elements = t);
		}
		identity() {
			const t = this.elements;
			(t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1);
		}
		setZero() {
			const t = this.elements;
			(t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 0);
		}
		setTrace(t) {
			const e = this.elements;
			(e[0] = t.x), (e[4] = t.y), (e[8] = t.z);
		}
		getTrace(t) {
			void 0 === t && (t = new oc());
			const e = this.elements;
			return (t.x = e[0]), (t.y = e[4]), (t.z = e[8]), t;
		}
		vmult(t, e) {
			void 0 === e && (e = new oc());
			const n = this.elements,
				i = t.x,
				r = t.y,
				s = t.z;
			return (
				(e.x = n[0] * i + n[1] * r + n[2] * s),
				(e.y = n[3] * i + n[4] * r + n[5] * s),
				(e.z = n[6] * i + n[7] * r + n[8] * s),
				e
			);
		}
		smult(t) {
			for (let e = 0; e < this.elements.length; e++) this.elements[e] *= t;
		}
		mmult(t, e) {
			void 0 === e && (e = new rc());
			const n = this.elements,
				i = t.elements,
				r = e.elements,
				s = n[0],
				o = n[1],
				a = n[2],
				l = n[3],
				c = n[4],
				h = n[5],
				u = n[6],
				d = n[7],
				p = n[8],
				m = i[0],
				f = i[1],
				g = i[2],
				v = i[3],
				y = i[4],
				x = i[5],
				_ = i[6],
				w = i[7],
				b = i[8];
			return (
				(r[0] = s * m + o * v + a * _),
				(r[1] = s * f + o * y + a * w),
				(r[2] = s * g + o * x + a * b),
				(r[3] = l * m + c * v + h * _),
				(r[4] = l * f + c * y + h * w),
				(r[5] = l * g + c * x + h * b),
				(r[6] = u * m + d * v + p * _),
				(r[7] = u * f + d * y + p * w),
				(r[8] = u * g + d * x + p * b),
				e
			);
		}
		scale(t, e) {
			void 0 === e && (e = new rc());
			const n = this.elements,
				i = e.elements;
			for (let e = 0; 3 !== e; e++)
				(i[3 * e + 0] = t.x * n[3 * e + 0]), (i[3 * e + 1] = t.y * n[3 * e + 1]), (i[3 * e + 2] = t.z * n[3 * e + 2]);
			return e;
		}
		solve(t, e) {
			void 0 === e && (e = new oc());
			const n = [];
			let i, r;
			for (i = 0; i < 12; i++) n.push(0);
			for (i = 0; i < 3; i++) for (r = 0; r < 3; r++) n[i + 4 * r] = this.elements[i + 3 * r];
			(n[3] = t.x), (n[7] = t.y), (n[11] = t.z);
			let s = 3;
			const o = s;
			let a, l;
			do {
				if (((i = o - s), 0 === n[i + 4 * i]))
					for (r = i + 1; r < o; r++)
						if (0 !== n[i + 4 * r]) {
							a = 4;
							do {
								(l = 4 - a), (n[l + 4 * i] += n[l + 4 * r]);
							} while (--a);
							break;
						}
				if (0 !== n[i + 4 * i])
					for (r = i + 1; r < o; r++) {
						const t = n[i + 4 * r] / n[i + 4 * i];
						a = 4;
						do {
							(l = 4 - a), (n[l + 4 * r] = l <= i ? 0 : n[l + 4 * r] - n[l + 4 * i] * t);
						} while (--a);
					}
			} while (--s);
			if (
				((e.z = n[11] / n[10]),
				(e.y = (n[7] - n[6] * e.z) / n[5]),
				(e.x = (n[3] - n[2] * e.z - n[1] * e.y) / n[0]),
				isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || e.x === 1 / 0 || e.y === 1 / 0 || e.z === 1 / 0)
			)
				throw `Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;
			return e;
		}
		e(t, e, n) {
			if (void 0 === n) return this.elements[e + 3 * t];
			this.elements[e + 3 * t] = n;
		}
		copy(t) {
			for (let e = 0; e < t.elements.length; e++) this.elements[e] = t.elements[e];
			return this;
		}
		toString() {
			let t = "";
			for (let e = 0; e < 9; e++) t += this.elements[e] + ",";
			return t;
		}
		reverse(t) {
			void 0 === t && (t = new rc());
			const e = sc;
			let n, i;
			for (n = 0; n < 3; n++) for (i = 0; i < 3; i++) e[n + 6 * i] = this.elements[n + 3 * i];
			(e[3] = 1), (e[9] = 0), (e[15] = 0), (e[4] = 0), (e[10] = 1), (e[16] = 0), (e[5] = 0), (e[11] = 0), (e[17] = 1);
			let r = 3;
			const s = r;
			let o, a;
			do {
				if (((n = s - r), 0 === e[n + 6 * n]))
					for (i = n + 1; i < s; i++)
						if (0 !== e[n + 6 * i]) {
							o = 6;
							do {
								(a = 6 - o), (e[a + 6 * n] += e[a + 6 * i]);
							} while (--o);
							break;
						}
				if (0 !== e[n + 6 * n])
					for (i = n + 1; i < s; i++) {
						const t = e[n + 6 * i] / e[n + 6 * n];
						o = 6;
						do {
							(a = 6 - o), (e[a + 6 * i] = a <= n ? 0 : e[a + 6 * i] - e[a + 6 * n] * t);
						} while (--o);
					}
			} while (--r);
			n = 2;
			do {
				i = n - 1;
				do {
					const t = e[n + 6 * i] / e[n + 6 * n];
					o = 6;
					do {
						(a = 6 - o), (e[a + 6 * i] = e[a + 6 * i] - e[a + 6 * n] * t);
					} while (--o);
				} while (i--);
			} while (--n);
			n = 2;
			do {
				const t = 1 / e[n + 6 * n];
				o = 6;
				do {
					(a = 6 - o), (e[a + 6 * n] = e[a + 6 * n] * t);
				} while (--o);
			} while (n--);
			n = 2;
			do {
				i = 2;
				do {
					if (((a = e[3 + i + 6 * n]), isNaN(a) || a === 1 / 0)) throw `Could not reverse! A=[${this.toString()}]`;
					t.e(n, i, a);
				} while (i--);
			} while (n--);
			return t;
		}
		setRotationFromQuaternion(t) {
			const e = t.x,
				n = t.y,
				i = t.z,
				r = t.w,
				s = e + e,
				o = n + n,
				a = i + i,
				l = e * s,
				c = e * o,
				h = e * a,
				u = n * o,
				d = n * a,
				p = i * a,
				m = r * s,
				f = r * o,
				g = r * a,
				v = this.elements;
			return (
				(v[0] = 1 - (u + p)),
				(v[1] = c - g),
				(v[2] = h + f),
				(v[3] = c + g),
				(v[4] = 1 - (l + p)),
				(v[5] = d - m),
				(v[6] = h - f),
				(v[7] = d + m),
				(v[8] = 1 - (l + u)),
				this
			);
		}
		transpose(t) {
			void 0 === t && (t = new rc());
			const e = this.elements,
				n = t.elements;
			let i;
			return (
				(n[0] = e[0]),
				(n[4] = e[4]),
				(n[8] = e[8]),
				(i = e[1]),
				(n[1] = e[3]),
				(n[3] = i),
				(i = e[2]),
				(n[2] = e[6]),
				(n[6] = i),
				(i = e[5]),
				(n[5] = e[7]),
				(n[7] = i),
				t
			);
		}
	}
	const sc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	class oc {
		constructor(t, e, n) {
			void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.x = t), (this.y = e), (this.z = n);
		}
		cross(t, e) {
			void 0 === e && (e = new oc());
			const n = t.x,
				i = t.y,
				r = t.z,
				s = this.x,
				o = this.y,
				a = this.z;
			return (e.x = o * r - a * i), (e.y = a * n - s * r), (e.z = s * i - o * n), e;
		}
		set(t, e, n) {
			return (this.x = t), (this.y = e), (this.z = n), this;
		}
		setZero() {
			this.x = this.y = this.z = 0;
		}
		vadd(t, e) {
			if (!e) return new oc(this.x + t.x, this.y + t.y, this.z + t.z);
			(e.x = t.x + this.x), (e.y = t.y + this.y), (e.z = t.z + this.z);
		}
		vsub(t, e) {
			if (!e) return new oc(this.x - t.x, this.y - t.y, this.z - t.z);
			(e.x = this.x - t.x), (e.y = this.y - t.y), (e.z = this.z - t.z);
		}
		crossmat() {
			return new rc([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
		}
		normalize() {
			const t = this.x,
				e = this.y,
				n = this.z,
				i = Math.sqrt(t * t + e * e + n * n);
			if (i > 0) {
				const t = 1 / i;
				(this.x *= t), (this.y *= t), (this.z *= t);
			} else (this.x = 0), (this.y = 0), (this.z = 0);
			return i;
		}
		unit(t) {
			void 0 === t && (t = new oc());
			const e = this.x,
				n = this.y,
				i = this.z;
			let r = Math.sqrt(e * e + n * n + i * i);
			return r > 0 ? ((r = 1 / r), (t.x = e * r), (t.y = n * r), (t.z = i * r)) : ((t.x = 1), (t.y = 0), (t.z = 0)), t;
		}
		length() {
			const t = this.x,
				e = this.y,
				n = this.z;
			return Math.sqrt(t * t + e * e + n * n);
		}
		lengthSquared() {
			return this.dot(this);
		}
		distanceTo(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.x,
				s = t.y,
				o = t.z;
			return Math.sqrt((r - e) * (r - e) + (s - n) * (s - n) + (o - i) * (o - i));
		}
		distanceSquared(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.x,
				s = t.y,
				o = t.z;
			return (r - e) * (r - e) + (s - n) * (s - n) + (o - i) * (o - i);
		}
		scale(t, e) {
			void 0 === e && (e = new oc());
			const n = this.x,
				i = this.y,
				r = this.z;
			return (e.x = t * n), (e.y = t * i), (e.z = t * r), e;
		}
		vmul(t, e) {
			return void 0 === e && (e = new oc()), (e.x = t.x * this.x), (e.y = t.y * this.y), (e.z = t.z * this.z), e;
		}
		addScaledVector(t, e, n) {
			return (
				void 0 === n && (n = new oc()), (n.x = this.x + t * e.x), (n.y = this.y + t * e.y), (n.z = this.z + t * e.z), n
			);
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z;
		}
		isZero() {
			return 0 === this.x && 0 === this.y && 0 === this.z;
		}
		negate(t) {
			return void 0 === t && (t = new oc()), (t.x = -this.x), (t.y = -this.y), (t.z = -this.z), t;
		}
		tangents(t, e) {
			const n = this.length();
			if (n > 0) {
				const i = ac,
					r = 1 / n;
				i.set(this.x * r, this.y * r, this.z * r);
				const s = lc;
				Math.abs(i.x) < 0.9 ? (s.set(1, 0, 0), i.cross(s, t)) : (s.set(0, 1, 0), i.cross(s, t)), i.cross(t, e);
			} else t.set(1, 0, 0), e.set(0, 1, 0);
		}
		toString() {
			return `${this.x},${this.y},${this.z}`;
		}
		toArray() {
			return [this.x, this.y, this.z];
		}
		copy(t) {
			return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
		}
		lerp(t, e, n) {
			const i = this.x,
				r = this.y,
				s = this.z;
			(n.x = i + (t.x - i) * e), (n.y = r + (t.y - r) * e), (n.z = s + (t.z - s) * e);
		}
		almostEquals(t, e) {
			return (
				void 0 === e && (e = 1e-6),
				!(Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e)
			);
		}
		almostZero(t) {
			return void 0 === t && (t = 1e-6), !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t);
		}
		isAntiparallelTo(t, e) {
			return this.negate(cc), cc.almostEquals(t, e);
		}
		clone() {
			return new oc(this.x, this.y, this.z);
		}
	}
	(oc.ZERO = new oc(0, 0, 0)), (oc.UNIT_X = new oc(1, 0, 0)), (oc.UNIT_Y = new oc(0, 1, 0)), (oc.UNIT_Z = new oc(0, 0, 1));
	const ac = new oc(),
		lc = new oc(),
		cc = new oc();
	class hc {
		constructor(t) {
			void 0 === t && (t = {}),
				(this.lowerBound = new oc()),
				(this.upperBound = new oc()),
				t.lowerBound && this.lowerBound.copy(t.lowerBound),
				t.upperBound && this.upperBound.copy(t.upperBound);
		}
		setFromPoints(t, e, n, i) {
			const r = this.lowerBound,
				s = this.upperBound,
				o = n;
			r.copy(t[0]), o && o.vmult(r, r), s.copy(r);
			for (let e = 1; e < t.length; e++) {
				let n = t[e];
				o && (o.vmult(n, uc), (n = uc)),
					n.x > s.x && (s.x = n.x),
					n.x < r.x && (r.x = n.x),
					n.y > s.y && (s.y = n.y),
					n.y < r.y && (r.y = n.y),
					n.z > s.z && (s.z = n.z),
					n.z < r.z && (r.z = n.z);
			}
			return (
				e && (e.vadd(r, r), e.vadd(s, s)),
				i && ((r.x -= i), (r.y -= i), (r.z -= i), (s.x += i), (s.y += i), (s.z += i)),
				this
			);
		}
		copy(t) {
			return this.lowerBound.copy(t.lowerBound), this.upperBound.copy(t.upperBound), this;
		}
		clone() {
			return new hc().copy(this);
		}
		extend(t) {
			(this.lowerBound.x = Math.min(this.lowerBound.x, t.lowerBound.x)),
				(this.upperBound.x = Math.max(this.upperBound.x, t.upperBound.x)),
				(this.lowerBound.y = Math.min(this.lowerBound.y, t.lowerBound.y)),
				(this.upperBound.y = Math.max(this.upperBound.y, t.upperBound.y)),
				(this.lowerBound.z = Math.min(this.lowerBound.z, t.lowerBound.z)),
				(this.upperBound.z = Math.max(this.upperBound.z, t.upperBound.z));
		}
		overlaps(t) {
			const e = this.lowerBound,
				n = this.upperBound,
				i = t.lowerBound,
				r = t.upperBound,
				s = (i.x <= n.x && n.x <= r.x) || (e.x <= r.x && r.x <= n.x),
				o = (i.y <= n.y && n.y <= r.y) || (e.y <= r.y && r.y <= n.y),
				a = (i.z <= n.z && n.z <= r.z) || (e.z <= r.z && r.z <= n.z);
			return s && o && a;
		}
		volume() {
			const t = this.lowerBound,
				e = this.upperBound;
			return (e.x - t.x) * (e.y - t.y) * (e.z - t.z);
		}
		contains(t) {
			const e = this.lowerBound,
				n = this.upperBound,
				i = t.lowerBound,
				r = t.upperBound;
			return e.x <= i.x && n.x >= r.x && e.y <= i.y && n.y >= r.y && e.z <= i.z && n.z >= r.z;
		}
		getCorners(t, e, n, i, r, s, o, a) {
			const l = this.lowerBound,
				c = this.upperBound;
			t.copy(l),
				e.set(c.x, l.y, l.z),
				n.set(c.x, c.y, l.z),
				i.set(l.x, c.y, c.z),
				r.set(c.x, l.y, c.z),
				s.set(l.x, c.y, l.z),
				o.set(l.x, l.y, c.z),
				a.copy(c);
		}
		toLocalFrame(t, e) {
			const n = dc,
				i = n[0],
				r = n[1],
				s = n[2],
				o = n[3],
				a = n[4],
				l = n[5],
				c = n[6],
				h = n[7];
			this.getCorners(i, r, s, o, a, l, c, h);
			for (let e = 0; 8 !== e; e++) {
				const i = n[e];
				t.pointToLocal(i, i);
			}
			return e.setFromPoints(n);
		}
		toWorldFrame(t, e) {
			const n = dc,
				i = n[0],
				r = n[1],
				s = n[2],
				o = n[3],
				a = n[4],
				l = n[5],
				c = n[6],
				h = n[7];
			this.getCorners(i, r, s, o, a, l, c, h);
			for (let e = 0; 8 !== e; e++) {
				const i = n[e];
				t.pointToWorld(i, i);
			}
			return e.setFromPoints(n);
		}
		overlapsRay(t) {
			const { direction: e, from: n } = t,
				i = 1 / e.x,
				r = 1 / e.y,
				s = 1 / e.z,
				o = (this.lowerBound.x - n.x) * i,
				a = (this.upperBound.x - n.x) * i,
				l = (this.lowerBound.y - n.y) * r,
				c = (this.upperBound.y - n.y) * r,
				h = (this.lowerBound.z - n.z) * s,
				u = (this.upperBound.z - n.z) * s,
				d = Math.max(Math.max(Math.min(o, a), Math.min(l, c)), Math.min(h, u)),
				p = Math.min(Math.min(Math.max(o, a), Math.max(l, c)), Math.max(h, u));
			return !(p < 0 || d > p);
		}
	}
	const uc = new oc(),
		dc = [new oc(), new oc(), new oc(), new oc(), new oc(), new oc(), new oc(), new oc()];
	class pc {
		constructor() {
			this.matrix = [];
		}
		get(t, e) {
			let { index: n } = t,
				{ index: i } = e;
			if (i > n) {
				const t = i;
				(i = n), (n = t);
			}
			return this.matrix[((n * (n + 1)) >> 1) + i - 1];
		}
		set(t, e, n) {
			let { index: i } = t,
				{ index: r } = e;
			if (r > i) {
				const t = r;
				(r = i), (i = t);
			}
			this.matrix[((i * (i + 1)) >> 1) + r - 1] = n ? 1 : 0;
		}
		reset() {
			for (let t = 0, e = this.matrix.length; t !== e; t++) this.matrix[t] = 0;
		}
		setNumObjects(t) {
			this.matrix.length = (t * (t - 1)) >> 1;
		}
	}
	class mc {
		addEventListener(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			const n = this._listeners;
			return void 0 === n[t] && (n[t] = []), n[t].includes(e) || n[t].push(e), this;
		}
		hasEventListener(t, e) {
			if (void 0 === this._listeners) return !1;
			const n = this._listeners;
			return !(void 0 === n[t] || !n[t].includes(e));
		}
		hasAnyEventListener(t) {
			return void 0 !== this._listeners && void 0 !== this._listeners[t];
		}
		removeEventListener(t, e) {
			if (void 0 === this._listeners) return this;
			const n = this._listeners;
			if (void 0 === n[t]) return this;
			const i = n[t].indexOf(e);
			return -1 !== i && n[t].splice(i, 1), this;
		}
		dispatchEvent(t) {
			if (void 0 === this._listeners) return this;
			const e = this._listeners[t.type];
			if (void 0 !== e) {
				t.target = this;
				for (let n = 0, i = e.length; n < i; n++) e[n].call(this, t);
			}
			return this;
		}
	}
	class fc {
		constructor(t, e, n, i) {
			void 0 === t && (t = 0),
				void 0 === e && (e = 0),
				void 0 === n && (n = 0),
				void 0 === i && (i = 1),
				(this.x = t),
				(this.y = e),
				(this.z = n),
				(this.w = i);
		}
		set(t, e, n, i) {
			return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
		}
		toString() {
			return `${this.x},${this.y},${this.z},${this.w}`;
		}
		toArray() {
			return [this.x, this.y, this.z, this.w];
		}
		setFromAxisAngle(t, e) {
			const n = Math.sin(0.5 * e);
			return (this.x = t.x * n), (this.y = t.y * n), (this.z = t.z * n), (this.w = Math.cos(0.5 * e)), this;
		}
		toAxisAngle(t) {
			void 0 === t && (t = new oc()), this.normalize();
			const e = 2 * Math.acos(this.w),
				n = Math.sqrt(1 - this.w * this.w);
			return (
				n < 0.001
					? ((t.x = this.x), (t.y = this.y), (t.z = this.z))
					: ((t.x = this.x / n), (t.y = this.y / n), (t.z = this.z / n)),
				[t, e]
			);
		}
		setFromVectors(t, e) {
			if (t.isAntiparallelTo(e)) {
				const e = gc,
					n = vc;
				t.tangents(e, n), this.setFromAxisAngle(e, Math.PI);
			} else {
				const n = t.cross(e);
				(this.x = n.x),
					(this.y = n.y),
					(this.z = n.z),
					(this.w = Math.sqrt(t.length() ** 2 * e.length() ** 2) + t.dot(e)),
					this.normalize();
			}
			return this;
		}
		mult(t, e) {
			void 0 === e && (e = new fc());
			const n = this.x,
				i = this.y,
				r = this.z,
				s = this.w,
				o = t.x,
				a = t.y,
				l = t.z,
				c = t.w;
			return (
				(e.x = n * c + s * o + i * l - r * a),
				(e.y = i * c + s * a + r * o - n * l),
				(e.z = r * c + s * l + n * a - i * o),
				(e.w = s * c - n * o - i * a - r * l),
				e
			);
		}
		inverse(t) {
			void 0 === t && (t = new fc());
			const e = this.x,
				n = this.y,
				i = this.z,
				r = this.w;
			this.conjugate(t);
			const s = 1 / (e * e + n * n + i * i + r * r);
			return (t.x *= s), (t.y *= s), (t.z *= s), (t.w *= s), t;
		}
		conjugate(t) {
			return void 0 === t && (t = new fc()), (t.x = -this.x), (t.y = -this.y), (t.z = -this.z), (t.w = this.w), t;
		}
		normalize() {
			let t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
			return (
				0 === t
					? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
					: ((t = 1 / t), (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t)),
				this
			);
		}
		normalizeFast() {
			const t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
			return (
				0 === t
					? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
					: ((this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t)),
				this
			);
		}
		vmult(t, e) {
			void 0 === e && (e = new oc());
			const n = t.x,
				i = t.y,
				r = t.z,
				s = this.x,
				o = this.y,
				a = this.z,
				l = this.w,
				c = l * n + o * r - a * i,
				h = l * i + a * n - s * r,
				u = l * r + s * i - o * n,
				d = -s * n - o * i - a * r;
			return (
				(e.x = c * l + d * -s + h * -a - u * -o),
				(e.y = h * l + d * -o + u * -s - c * -a),
				(e.z = u * l + d * -a + c * -o - h * -s),
				e
			);
		}
		copy(t) {
			return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this;
		}
		toEuler(t, e) {
			let n, i, r;
			void 0 === e && (e = "YZX");
			const s = this.x,
				o = this.y,
				a = this.z,
				l = this.w;
			if ("YZX" !== e) throw new Error(`Euler order ${e} not supported yet.`);
			{
				const t = s * o + a * l;
				if (
					(t > 0.499 && ((n = 2 * Math.atan2(s, l)), (i = Math.PI / 2), (r = 0)),
					t < -0.499 && ((n = -2 * Math.atan2(s, l)), (i = -Math.PI / 2), (r = 0)),
					void 0 === n)
				) {
					const e = s * s,
						c = o * o,
						h = a * a;
					(n = Math.atan2(2 * o * l - 2 * s * a, 1 - 2 * c - 2 * h)),
						(i = Math.asin(2 * t)),
						(r = Math.atan2(2 * s * l - 2 * o * a, 1 - 2 * e - 2 * h));
				}
			}
			(t.y = n), (t.z = i), (t.x = r);
		}
		setFromEuler(t, e, n, i) {
			void 0 === i && (i = "XYZ");
			const r = Math.cos(t / 2),
				s = Math.cos(e / 2),
				o = Math.cos(n / 2),
				a = Math.sin(t / 2),
				l = Math.sin(e / 2),
				c = Math.sin(n / 2);
			return (
				"XYZ" === i
					? ((this.x = a * s * o + r * l * c),
					  (this.y = r * l * o - a * s * c),
					  (this.z = r * s * c + a * l * o),
					  (this.w = r * s * o - a * l * c))
					: "YXZ" === i
					? ((this.x = a * s * o + r * l * c),
					  (this.y = r * l * o - a * s * c),
					  (this.z = r * s * c - a * l * o),
					  (this.w = r * s * o + a * l * c))
					: "ZXY" === i
					? ((this.x = a * s * o - r * l * c),
					  (this.y = r * l * o + a * s * c),
					  (this.z = r * s * c + a * l * o),
					  (this.w = r * s * o - a * l * c))
					: "ZYX" === i
					? ((this.x = a * s * o - r * l * c),
					  (this.y = r * l * o + a * s * c),
					  (this.z = r * s * c - a * l * o),
					  (this.w = r * s * o + a * l * c))
					: "YZX" === i
					? ((this.x = a * s * o + r * l * c),
					  (this.y = r * l * o + a * s * c),
					  (this.z = r * s * c - a * l * o),
					  (this.w = r * s * o - a * l * c))
					: "XZY" === i &&
					  ((this.x = a * s * o - r * l * c),
					  (this.y = r * l * o - a * s * c),
					  (this.z = r * s * c + a * l * o),
					  (this.w = r * s * o + a * l * c)),
				this
			);
		}
		clone() {
			return new fc(this.x, this.y, this.z, this.w);
		}
		slerp(t, e, n) {
			void 0 === n && (n = new fc());
			const i = this.x,
				r = this.y,
				s = this.z,
				o = this.w;
			let a,
				l,
				c,
				h,
				u,
				d = t.x,
				p = t.y,
				m = t.z,
				f = t.w;
			return (
				(l = i * d + r * p + s * m + o * f),
				l < 0 && ((l = -l), (d = -d), (p = -p), (m = -m), (f = -f)),
				1 - l > 1e-6
					? ((a = Math.acos(l)), (c = Math.sin(a)), (h = Math.sin((1 - e) * a) / c), (u = Math.sin(e * a) / c))
					: ((h = 1 - e), (u = e)),
				(n.x = h * i + u * d),
				(n.y = h * r + u * p),
				(n.z = h * s + u * m),
				(n.w = h * o + u * f),
				n
			);
		}
		integrate(t, e, n, i) {
			void 0 === i && (i = new fc());
			const r = t.x * n.x,
				s = t.y * n.y,
				o = t.z * n.z,
				a = this.x,
				l = this.y,
				c = this.z,
				h = this.w,
				u = 0.5 * e;
			return (
				(i.x += u * (r * h + s * c - o * l)),
				(i.y += u * (s * h + o * a - r * c)),
				(i.z += u * (o * h + r * l - s * a)),
				(i.w += u * (-r * a - s * l - o * c)),
				i
			);
		}
	}
	const gc = new oc(),
		vc = new oc();
	class yc {
		constructor(t) {
			void 0 === t && (t = {}),
				(this.id = yc.idCounter++),
				(this.type = t.type || 0),
				(this.boundingSphereRadius = 0),
				(this.collisionResponse = !t.collisionResponse || t.collisionResponse),
				(this.collisionFilterGroup = void 0 !== t.collisionFilterGroup ? t.collisionFilterGroup : 1),
				(this.collisionFilterMask = void 0 !== t.collisionFilterMask ? t.collisionFilterMask : -1),
				(this.material = t.material ? t.material : null),
				(this.body = null);
		}
		updateBoundingSphereRadius() {
			throw `computeBoundingSphereRadius() not implemented for shape type ${this.type}`;
		}
		volume() {
			throw `volume() not implemented for shape type ${this.type}`;
		}
		calculateLocalInertia(t, e) {
			throw `calculateLocalInertia() not implemented for shape type ${this.type}`;
		}
		calculateWorldAABB(t, e, n, i) {
			throw `calculateWorldAABB() not implemented for shape type ${this.type}`;
		}
	}
	(yc.idCounter = 0),
		(yc.types = {
			SPHERE: 1,
			PLANE: 2,
			BOX: 4,
			COMPOUND: 8,
			CONVEXPOLYHEDRON: 16,
			HEIGHTFIELD: 32,
			PARTICLE: 64,
			CYLINDER: 128,
			TRIMESH: 256,
		});
	class xc {
		constructor(t) {
			void 0 === t && (t = {}),
				(this.position = new oc()),
				(this.quaternion = new fc()),
				t.position && this.position.copy(t.position),
				t.quaternion && this.quaternion.copy(t.quaternion);
		}
		pointToLocal(t, e) {
			return xc.pointToLocalFrame(this.position, this.quaternion, t, e);
		}
		pointToWorld(t, e) {
			return xc.pointToWorldFrame(this.position, this.quaternion, t, e);
		}
		vectorToWorldFrame(t, e) {
			return void 0 === e && (e = new oc()), this.quaternion.vmult(t, e), e;
		}
		static pointToLocalFrame(t, e, n, i) {
			return void 0 === i && (i = new oc()), n.vsub(t, i), e.conjugate(_c), _c.vmult(i, i), i;
		}
		static pointToWorldFrame(t, e, n, i) {
			return void 0 === i && (i = new oc()), e.vmult(n, i), i.vadd(t, i), i;
		}
		static vectorToWorldFrame(t, e, n) {
			return void 0 === n && (n = new oc()), t.vmult(e, n), n;
		}
		static vectorToLocalFrame(t, e, n, i) {
			return void 0 === i && (i = new oc()), (e.w *= -1), e.vmult(n, i), (e.w *= -1), i;
		}
	}
	const _c = new fc();
	class wc extends yc {
		constructor(t) {
			void 0 === t && (t = {});
			const { vertices: e = [], faces: n = [], normals: i = [], axes: r, boundingSphereRadius: s } = t;
			super({ type: yc.types.CONVEXPOLYHEDRON }),
				(this.vertices = e),
				(this.faces = n),
				(this.faceNormals = i),
				0 === this.faceNormals.length && this.computeNormals(),
				s ? (this.boundingSphereRadius = s) : this.updateBoundingSphereRadius(),
				(this.worldVertices = []),
				(this.worldVerticesNeedsUpdate = !0),
				(this.worldFaceNormals = []),
				(this.worldFaceNormalsNeedsUpdate = !0),
				(this.uniqueAxes = r ? r.slice() : null),
				(this.uniqueEdges = []),
				this.computeEdges();
		}
		computeEdges() {
			const t = this.faces,
				e = this.vertices,
				n = this.uniqueEdges;
			n.length = 0;
			const i = new oc();
			for (let r = 0; r !== t.length; r++) {
				const s = t[r],
					o = s.length;
				for (let t = 0; t !== o; t++) {
					const r = (t + 1) % o;
					e[s[t]].vsub(e[s[r]], i), i.normalize();
					let a = !1;
					for (let t = 0; t !== n.length; t++)
						if (n[t].almostEquals(i) || n[t].almostEquals(i)) {
							a = !0;
							break;
						}
					a || n.push(i.clone());
				}
			}
		}
		computeNormals() {
			this.faceNormals.length = this.faces.length;
			for (let t = 0; t < this.faces.length; t++) {
				for (let e = 0; e < this.faces[t].length; e++)
					if (!this.vertices[this.faces[t][e]]) throw new Error(`Vertex ${this.faces[t][e]} not found!`);
				const e = this.faceNormals[t] || new oc();
				this.getFaceNormal(t, e), e.negate(e), (this.faceNormals[t] = e);
				const n = this.vertices[this.faces[t][0]];
				if (e.dot(n) < 0) {
					console.error(
						`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`
					);
					for (let e = 0; e < this.faces[t].length; e++)
						console.warn(`.vertices[${this.faces[t][e]}] = Vec3(${this.vertices[this.faces[t][e]].toString()})`);
				}
			}
		}
		getFaceNormal(t, e) {
			const n = this.faces[t],
				i = this.vertices[n[0]],
				r = this.vertices[n[1]],
				s = this.vertices[n[2]];
			wc.computeNormal(i, r, s, e);
		}
		static computeNormal(t, e, n, i) {
			const r = new oc(),
				s = new oc();
			e.vsub(t, s), n.vsub(e, r), r.cross(s, i), i.isZero() || i.normalize();
		}
		clipAgainstHull(t, e, n, i, r, s, o, a, l) {
			const c = new oc();
			let h = -1,
				u = -Number.MAX_VALUE;
			for (let t = 0; t < n.faces.length; t++) {
				c.copy(n.faceNormals[t]), r.vmult(c, c);
				const e = c.dot(s);
				e > u && ((u = e), (h = t));
			}
			const d = [];
			for (let t = 0; t < n.faces[h].length; t++) {
				const e = n.vertices[n.faces[h][t]],
					s = new oc();
				s.copy(e), r.vmult(s, s), i.vadd(s, s), d.push(s);
			}
			h >= 0 && this.clipFaceAgainstHull(s, t, e, d, o, a, l);
		}
		findSeparatingAxis(t, e, n, i, r, s, o, a) {
			const l = new oc(),
				c = new oc(),
				h = new oc(),
				u = new oc(),
				d = new oc(),
				p = new oc();
			let m = Number.MAX_VALUE;
			const f = this;
			if (f.uniqueAxes)
				for (let o = 0; o !== f.uniqueAxes.length; o++) {
					n.vmult(f.uniqueAxes[o], l);
					const a = f.testSepAxis(l, t, e, n, i, r);
					if (!1 === a) return !1;
					a < m && ((m = a), s.copy(l));
				}
			else {
				const a = o ? o.length : f.faces.length;
				for (let c = 0; c < a; c++) {
					const a = o ? o[c] : c;
					l.copy(f.faceNormals[a]), n.vmult(l, l);
					const h = f.testSepAxis(l, t, e, n, i, r);
					if (!1 === h) return !1;
					h < m && ((m = h), s.copy(l));
				}
			}
			if (t.uniqueAxes)
				for (let o = 0; o !== t.uniqueAxes.length; o++) {
					r.vmult(t.uniqueAxes[o], c);
					const a = f.testSepAxis(c, t, e, n, i, r);
					if (!1 === a) return !1;
					a < m && ((m = a), s.copy(c));
				}
			else {
				const o = a ? a.length : t.faces.length;
				for (let l = 0; l < o; l++) {
					const o = a ? a[l] : l;
					c.copy(t.faceNormals[o]), r.vmult(c, c);
					const h = f.testSepAxis(c, t, e, n, i, r);
					if (!1 === h) return !1;
					h < m && ((m = h), s.copy(c));
				}
			}
			for (let o = 0; o !== f.uniqueEdges.length; o++) {
				n.vmult(f.uniqueEdges[o], u);
				for (let o = 0; o !== t.uniqueEdges.length; o++)
					if ((r.vmult(t.uniqueEdges[o], d), u.cross(d, p), !p.almostZero())) {
						p.normalize();
						const o = f.testSepAxis(p, t, e, n, i, r);
						if (!1 === o) return !1;
						o < m && ((m = o), s.copy(p));
					}
			}
			return i.vsub(e, h), h.dot(s) > 0 && s.negate(s), !0;
		}
		testSepAxis(t, e, n, i, r, s) {
			wc.project(this, t, n, i, bc), wc.project(e, t, r, s, Mc);
			const o = bc[0],
				a = bc[1],
				l = Mc[0],
				c = Mc[1];
			if (o < c || l < a) return !1;
			const h = o - c,
				u = l - a;
			return h < u ? h : u;
		}
		calculateLocalInertia(t, e) {
			const n = new oc(),
				i = new oc();
			this.computeLocalAABB(i, n);
			const r = n.x - i.x,
				s = n.y - i.y,
				o = n.z - i.z;
			(e.x = (1 / 12) * t * (2 * s * 2 * s + 2 * o * 2 * o)),
				(e.y = (1 / 12) * t * (2 * r * 2 * r + 2 * o * 2 * o)),
				(e.z = (1 / 12) * t * (2 * s * 2 * s + 2 * r * 2 * r));
		}
		getPlaneConstantOfFace(t) {
			const e = this.faces[t],
				n = this.faceNormals[t],
				i = this.vertices[e[0]];
			return -n.dot(i);
		}
		clipFaceAgainstHull(t, e, n, i, r, s, o) {
			const a = new oc(),
				l = new oc(),
				c = new oc(),
				h = new oc(),
				u = new oc(),
				d = new oc(),
				p = new oc(),
				m = new oc(),
				f = this,
				g = i,
				v = [];
			let y = -1,
				x = Number.MAX_VALUE;
			for (let e = 0; e < f.faces.length; e++) {
				a.copy(f.faceNormals[e]), n.vmult(a, a);
				const i = a.dot(t);
				i < x && ((x = i), (y = e));
			}
			if (y < 0) return;
			const _ = f.faces[y];
			_.connectedFaces = [];
			for (let t = 0; t < f.faces.length; t++)
				for (let e = 0; e < f.faces[t].length; e++)
					-1 !== _.indexOf(f.faces[t][e]) && t !== y && -1 === _.connectedFaces.indexOf(t) && _.connectedFaces.push(t);
			const w = _.length;
			for (let t = 0; t < w; t++) {
				const i = f.vertices[_[t]],
					r = f.vertices[_[(t + 1) % w]];
				i.vsub(r, l),
					c.copy(l),
					n.vmult(c, c),
					e.vadd(c, c),
					h.copy(this.faceNormals[y]),
					n.vmult(h, h),
					e.vadd(h, h),
					c.cross(h, u),
					u.negate(u),
					d.copy(i),
					n.vmult(d, d),
					e.vadd(d, d);
				const s = _.connectedFaces[t];
				p.copy(this.faceNormals[s]);
				const o = this.getPlaneConstantOfFace(s);
				m.copy(p), n.vmult(m, m);
				const a = o - m.dot(e);
				for (this.clipFaceAgainstPlane(g, v, m, a); g.length; ) g.shift();
				for (; v.length; ) g.push(v.shift());
			}
			p.copy(this.faceNormals[y]);
			const b = this.getPlaneConstantOfFace(y);
			m.copy(p), n.vmult(m, m);
			const M = b - m.dot(e);
			for (let t = 0; t < g.length; t++) {
				let e = m.dot(g[t]) + M;
				if ((e <= r && (console.log(`clamped: depth=${e} to minDist=${r}`), (e = r)), e <= s)) {
					const n = g[t];
					if (e <= 1e-6) {
						const t = { point: n, normal: m, depth: e };
						o.push(t);
					}
				}
			}
		}
		clipFaceAgainstPlane(t, e, n, i) {
			let r, s;
			const o = t.length;
			if (o < 2) return e;
			let a = t[t.length - 1],
				l = t[0];
			r = n.dot(a) + i;
			for (let c = 0; c < o; c++) {
				if (((l = t[c]), (s = n.dot(l) + i), r < 0))
					if (s < 0) {
						const t = new oc();
						t.copy(l), e.push(t);
					} else {
						const t = new oc();
						a.lerp(l, r / (r - s), t), e.push(t);
					}
				else if (s < 0) {
					const t = new oc();
					a.lerp(l, r / (r - s), t), e.push(t), e.push(l);
				}
				(a = l), (r = s);
			}
			return e;
		}
		computeWorldVertices(t, e) {
			for (; this.worldVertices.length < this.vertices.length; ) this.worldVertices.push(new oc());
			const n = this.vertices,
				i = this.worldVertices;
			for (let r = 0; r !== this.vertices.length; r++) e.vmult(n[r], i[r]), t.vadd(i[r], i[r]);
			this.worldVerticesNeedsUpdate = !1;
		}
		computeLocalAABB(t, e) {
			const n = this.vertices;
			t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
				e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
			for (let i = 0; i < this.vertices.length; i++) {
				const r = n[i];
				r.x < t.x ? (t.x = r.x) : r.x > e.x && (e.x = r.x),
					r.y < t.y ? (t.y = r.y) : r.y > e.y && (e.y = r.y),
					r.z < t.z ? (t.z = r.z) : r.z > e.z && (e.z = r.z);
			}
		}
		computeWorldFaceNormals(t) {
			const e = this.faceNormals.length;
			for (; this.worldFaceNormals.length < e; ) this.worldFaceNormals.push(new oc());
			const n = this.faceNormals,
				i = this.worldFaceNormals;
			for (let r = 0; r !== e; r++) t.vmult(n[r], i[r]);
			this.worldFaceNormalsNeedsUpdate = !1;
		}
		updateBoundingSphereRadius() {
			let t = 0;
			const e = this.vertices;
			for (let n = 0; n !== e.length; n++) {
				const i = e[n].lengthSquared();
				i > t && (t = i);
			}
			this.boundingSphereRadius = Math.sqrt(t);
		}
		calculateWorldAABB(t, e, n, i) {
			const r = this.vertices;
			let s,
				o,
				a,
				l,
				c,
				h,
				u = new oc();
			for (let n = 0; n < r.length; n++) {
				u.copy(r[n]), e.vmult(u, u), t.vadd(u, u);
				const i = u;
				(void 0 === s || i.x < s) && (s = i.x),
					(void 0 === l || i.x > l) && (l = i.x),
					(void 0 === o || i.y < o) && (o = i.y),
					(void 0 === c || i.y > c) && (c = i.y),
					(void 0 === a || i.z < a) && (a = i.z),
					(void 0 === h || i.z > h) && (h = i.z);
			}
			n.set(s, o, a), i.set(l, c, h);
		}
		volume() {
			return (4 * Math.PI * this.boundingSphereRadius) / 3;
		}
		getAveragePointLocal(t) {
			void 0 === t && (t = new oc());
			const e = this.vertices;
			for (let n = 0; n < e.length; n++) t.vadd(e[n], t);
			return t.scale(1 / e.length, t), t;
		}
		transformAllPoints(t, e) {
			const n = this.vertices.length,
				i = this.vertices;
			if (e) {
				for (let t = 0; t < n; t++) {
					const n = i[t];
					e.vmult(n, n);
				}
				for (let t = 0; t < this.faceNormals.length; t++) {
					const n = this.faceNormals[t];
					e.vmult(n, n);
				}
			}
			if (t)
				for (let e = 0; e < n; e++) {
					const n = i[e];
					n.vadd(t, n);
				}
		}
		pointIsInside(t) {
			const e = this.vertices,
				n = this.faces,
				i = this.faceNormals,
				r = new oc();
			this.getAveragePointLocal(r);
			for (let s = 0; s < this.faces.length; s++) {
				let o = i[s];
				const a = e[n[s][0]],
					l = new oc();
				t.vsub(a, l);
				const c = o.dot(l),
					h = new oc();
				r.vsub(a, h);
				const u = o.dot(h);
				if ((c < 0 && u > 0) || (c > 0 && u < 0)) return !1;
			}
			return -1;
		}
		static project(t, e, n, i, r) {
			const s = t.vertices.length,
				o = Sc;
			let a = 0,
				l = 0;
			const c = Ec,
				h = t.vertices;
			c.setZero(), xc.vectorToLocalFrame(n, i, e, o), xc.pointToLocalFrame(n, i, c, c);
			const u = c.dot(o);
			l = a = h[0].dot(o);
			for (let t = 1; t < s; t++) {
				const e = h[t].dot(o);
				e > a && (a = e), e < l && (l = e);
			}
			if (((l -= u), (a -= u), l > a)) {
				const t = l;
				(l = a), (a = t);
			}
			(r[0] = a), (r[1] = l);
		}
	}
	const bc = [],
		Mc = [],
		Sc = (new oc(), new oc()),
		Ec = new oc();
	class Tc extends yc {
		constructor(t) {
			super({ type: yc.types.BOX }),
				(this.halfExtents = t),
				(this.convexPolyhedronRepresentation = null),
				this.updateConvexPolyhedronRepresentation(),
				this.updateBoundingSphereRadius();
		}
		updateConvexPolyhedronRepresentation() {
			const t = this.halfExtents.x,
				e = this.halfExtents.y,
				n = this.halfExtents.z,
				i = oc,
				r = [
					new i(-t, -e, -n),
					new i(t, -e, -n),
					new i(t, e, -n),
					new i(-t, e, -n),
					new i(-t, -e, n),
					new i(t, -e, n),
					new i(t, e, n),
					new i(-t, e, n),
				],
				s = [new i(0, 0, 1), new i(0, 1, 0), new i(1, 0, 0)],
				o = new wc({
					vertices: r,
					faces: [
						[3, 2, 1, 0],
						[4, 5, 6, 7],
						[5, 4, 0, 1],
						[2, 3, 7, 6],
						[0, 4, 7, 3],
						[1, 2, 6, 5],
					],
					axes: s,
				});
			(this.convexPolyhedronRepresentation = o), (o.material = this.material);
		}
		calculateLocalInertia(t, e) {
			return void 0 === e && (e = new oc()), Tc.calculateInertia(this.halfExtents, t, e), e;
		}
		static calculateInertia(t, e, n) {
			const i = t;
			(n.x = (1 / 12) * e * (2 * i.y * 2 * i.y + 2 * i.z * 2 * i.z)),
				(n.y = (1 / 12) * e * (2 * i.x * 2 * i.x + 2 * i.z * 2 * i.z)),
				(n.z = (1 / 12) * e * (2 * i.y * 2 * i.y + 2 * i.x * 2 * i.x));
		}
		getSideNormals(t, e) {
			const n = t,
				i = this.halfExtents;
			if (
				(n[0].set(i.x, 0, 0),
				n[1].set(0, i.y, 0),
				n[2].set(0, 0, i.z),
				n[3].set(-i.x, 0, 0),
				n[4].set(0, -i.y, 0),
				n[5].set(0, 0, -i.z),
				void 0 !== e)
			)
				for (let t = 0; t !== n.length; t++) e.vmult(n[t], n[t]);
			return n;
		}
		volume() {
			return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
		}
		updateBoundingSphereRadius() {
			this.boundingSphereRadius = this.halfExtents.length();
		}
		forEachWorldCorner(t, e, n) {
			const i = this.halfExtents,
				r = [
					[i.x, i.y, i.z],
					[-i.x, i.y, i.z],
					[-i.x, -i.y, i.z],
					[-i.x, -i.y, -i.z],
					[i.x, -i.y, -i.z],
					[i.x, i.y, -i.z],
					[-i.x, i.y, -i.z],
					[i.x, -i.y, i.z],
				];
			for (let i = 0; i < r.length; i++)
				Ac.set(r[i][0], r[i][1], r[i][2]), e.vmult(Ac, Ac), t.vadd(Ac, Ac), n(Ac.x, Ac.y, Ac.z);
		}
		calculateWorldAABB(t, e, n, i) {
			const r = this.halfExtents;
			Cc[0].set(r.x, r.y, r.z),
				Cc[1].set(-r.x, r.y, r.z),
				Cc[2].set(-r.x, -r.y, r.z),
				Cc[3].set(-r.x, -r.y, -r.z),
				Cc[4].set(r.x, -r.y, -r.z),
				Cc[5].set(r.x, r.y, -r.z),
				Cc[6].set(-r.x, r.y, -r.z),
				Cc[7].set(r.x, -r.y, r.z);
			const s = Cc[0];
			e.vmult(s, s), t.vadd(s, s), i.copy(s), n.copy(s);
			for (let r = 1; r < 8; r++) {
				const s = Cc[r];
				e.vmult(s, s), t.vadd(s, s);
				const o = s.x,
					a = s.y,
					l = s.z;
				o > i.x && (i.x = o),
					a > i.y && (i.y = a),
					l > i.z && (i.z = l),
					o < n.x && (n.x = o),
					a < n.y && (n.y = a),
					l < n.z && (n.z = l);
			}
		}
	}
	const Ac = new oc(),
		Cc = [new oc(), new oc(), new oc(), new oc(), new oc(), new oc(), new oc(), new oc()];
	class Rc extends mc {
		constructor(t) {
			void 0 === t && (t = {}),
				super(),
				(this.id = Rc.idCounter++),
				(this.index = -1),
				(this.world = null),
				(this.vlambda = new oc()),
				(this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1),
				(this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : -1),
				(this.collisionResponse = "boolean" != typeof t.collisionResponse || t.collisionResponse),
				(this.position = new oc()),
				(this.previousPosition = new oc()),
				(this.interpolatedPosition = new oc()),
				(this.initPosition = new oc()),
				t.position &&
					(this.position.copy(t.position),
					this.previousPosition.copy(t.position),
					this.interpolatedPosition.copy(t.position),
					this.initPosition.copy(t.position)),
				(this.velocity = new oc()),
				t.velocity && this.velocity.copy(t.velocity),
				(this.initVelocity = new oc()),
				(this.force = new oc());
			const e = "number" == typeof t.mass ? t.mass : 0;
			(this.mass = e),
				(this.invMass = e > 0 ? 1 / e : 0),
				(this.material = t.material || null),
				(this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : 0.01),
				(this.type = e <= 0 ? Rc.STATIC : Rc.DYNAMIC),
				typeof t.type == typeof Rc.STATIC && (this.type = t.type),
				(this.allowSleep = void 0 === t.allowSleep || t.allowSleep),
				(this.sleepState = Rc.AWAKE),
				(this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : 0.1),
				(this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1),
				(this.timeLastSleepy = 0),
				(this.wakeUpAfterNarrowphase = !1),
				(this.torque = new oc()),
				(this.quaternion = new fc()),
				(this.initQuaternion = new fc()),
				(this.previousQuaternion = new fc()),
				(this.interpolatedQuaternion = new fc()),
				t.quaternion &&
					(this.quaternion.copy(t.quaternion),
					this.initQuaternion.copy(t.quaternion),
					this.previousQuaternion.copy(t.quaternion),
					this.interpolatedQuaternion.copy(t.quaternion)),
				(this.angularVelocity = new oc()),
				t.angularVelocity && this.angularVelocity.copy(t.angularVelocity),
				(this.initAngularVelocity = new oc()),
				(this.shapes = []),
				(this.shapeOffsets = []),
				(this.shapeOrientations = []),
				(this.inertia = new oc()),
				(this.invInertia = new oc()),
				(this.invInertiaWorld = new rc()),
				(this.invMassSolve = 0),
				(this.invInertiaSolve = new oc()),
				(this.invInertiaWorldSolve = new rc()),
				(this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation),
				(this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : 0.01),
				(this.linearFactor = new oc(1, 1, 1)),
				t.linearFactor && this.linearFactor.copy(t.linearFactor),
				(this.angularFactor = new oc(1, 1, 1)),
				t.angularFactor && this.angularFactor.copy(t.angularFactor),
				(this.aabb = new hc()),
				(this.aabbNeedsUpdate = !0),
				(this.boundingRadius = 0),
				(this.wlambda = new oc()),
				(this.isTrigger = Boolean(t.isTrigger)),
				t.shape && this.addShape(t.shape),
				this.updateMassProperties();
		}
		wakeUp() {
			const t = this.sleepState;
			(this.sleepState = Rc.AWAKE),
				(this.wakeUpAfterNarrowphase = !1),
				t === Rc.SLEEPING && this.dispatchEvent(Rc.wakeupEvent);
		}
		sleep() {
			(this.sleepState = Rc.SLEEPING),
				this.velocity.set(0, 0, 0),
				this.angularVelocity.set(0, 0, 0),
				(this.wakeUpAfterNarrowphase = !1);
		}
		sleepTick(t) {
			if (this.allowSleep) {
				const e = this.sleepState,
					n = this.velocity.lengthSquared() + this.angularVelocity.lengthSquared(),
					i = this.sleepSpeedLimit ** 2;
				e === Rc.AWAKE && n < i
					? ((this.sleepState = Rc.SLEEPY), (this.timeLastSleepy = t), this.dispatchEvent(Rc.sleepyEvent))
					: e === Rc.SLEEPY && n > i
					? this.wakeUp()
					: e === Rc.SLEEPY &&
					  t - this.timeLastSleepy > this.sleepTimeLimit &&
					  (this.sleep(), this.dispatchEvent(Rc.sleepEvent));
			}
		}
		updateSolveMassProperties() {
			this.sleepState === Rc.SLEEPING || this.type === Rc.KINEMATIC
				? ((this.invMassSolve = 0), this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero())
				: ((this.invMassSolve = this.invMass),
				  this.invInertiaSolve.copy(this.invInertia),
				  this.invInertiaWorldSolve.copy(this.invInertiaWorld));
		}
		pointToLocalFrame(t, e) {
			return void 0 === e && (e = new oc()), t.vsub(this.position, e), this.quaternion.conjugate().vmult(e, e), e;
		}
		vectorToLocalFrame(t, e) {
			return void 0 === e && (e = new oc()), this.quaternion.conjugate().vmult(t, e), e;
		}
		pointToWorldFrame(t, e) {
			return void 0 === e && (e = new oc()), this.quaternion.vmult(t, e), e.vadd(this.position, e), e;
		}
		vectorToWorldFrame(t, e) {
			return void 0 === e && (e = new oc()), this.quaternion.vmult(t, e), e;
		}
		addShape(t, e, n) {
			const i = new oc(),
				r = new fc();
			return (
				e && i.copy(e),
				n && r.copy(n),
				this.shapes.push(t),
				this.shapeOffsets.push(i),
				this.shapeOrientations.push(r),
				this.updateMassProperties(),
				this.updateBoundingRadius(),
				(this.aabbNeedsUpdate = !0),
				(t.body = this),
				this
			);
		}
		removeShape(t) {
			const e = this.shapes.indexOf(t);
			return -1 === e
				? (console.warn("Shape does not belong to the body"), this)
				: (this.shapes.splice(e, 1),
				  this.shapeOffsets.splice(e, 1),
				  this.shapeOrientations.splice(e, 1),
				  this.updateMassProperties(),
				  this.updateBoundingRadius(),
				  (this.aabbNeedsUpdate = !0),
				  (t.body = null),
				  this);
		}
		updateBoundingRadius() {
			const t = this.shapes,
				e = this.shapeOffsets,
				n = t.length;
			let i = 0;
			for (let r = 0; r !== n; r++) {
				const n = t[r];
				n.updateBoundingSphereRadius();
				const s = e[r].length(),
					o = n.boundingSphereRadius;
				s + o > i && (i = s + o);
			}
			this.boundingRadius = i;
		}
		updateAABB() {
			const t = this.shapes,
				e = this.shapeOffsets,
				n = this.shapeOrientations,
				i = t.length,
				r = Lc,
				s = Pc,
				o = this.quaternion,
				a = this.aabb,
				l = Ic;
			for (let c = 0; c !== i; c++) {
				const i = t[c];
				o.vmult(e[c], r),
					r.vadd(this.position, r),
					o.mult(n[c], s),
					i.calculateWorldAABB(r, s, l.lowerBound, l.upperBound),
					0 === c ? a.copy(l) : a.extend(l);
			}
			this.aabbNeedsUpdate = !1;
		}
		updateInertiaWorld(t) {
			const e = this.invInertia;
			if (e.x !== e.y || e.y !== e.z || t) {
				const t = Dc,
					n = Nc;
				t.setRotationFromQuaternion(this.quaternion), t.transpose(n), t.scale(e, t), t.mmult(n, this.invInertiaWorld);
			}
		}
		applyForce(t, e) {
			if ((void 0 === e && (e = new oc()), this.type !== Rc.DYNAMIC)) return;
			this.sleepState === Rc.SLEEPING && this.wakeUp();
			const n = zc;
			e.cross(t, n), this.force.vadd(t, this.force), this.torque.vadd(n, this.torque);
		}
		applyLocalForce(t, e) {
			if ((void 0 === e && (e = new oc()), this.type !== Rc.DYNAMIC)) return;
			const n = Bc,
				i = Oc;
			this.vectorToWorldFrame(t, n), this.vectorToWorldFrame(e, i), this.applyForce(n, i);
		}
		applyTorque(t) {
			this.type === Rc.DYNAMIC && (this.sleepState === Rc.SLEEPING && this.wakeUp(), this.torque.vadd(t, this.torque));
		}
		applyImpulse(t, e) {
			if ((void 0 === e && (e = new oc()), this.type !== Rc.DYNAMIC)) return;
			this.sleepState === Rc.SLEEPING && this.wakeUp();
			const n = e,
				i = Fc;
			i.copy(t), i.scale(this.invMass, i), this.velocity.vadd(i, this.velocity);
			const r = Hc;
			n.cross(t, r), this.invInertiaWorld.vmult(r, r), this.angularVelocity.vadd(r, this.angularVelocity);
		}
		applyLocalImpulse(t, e) {
			if ((void 0 === e && (e = new oc()), this.type !== Rc.DYNAMIC)) return;
			const n = kc,
				i = Uc;
			this.vectorToWorldFrame(t, n), this.vectorToWorldFrame(e, i), this.applyImpulse(n, i);
		}
		updateMassProperties() {
			const t = Vc;
			this.invMass = this.mass > 0 ? 1 / this.mass : 0;
			const e = this.inertia,
				n = this.fixedRotation;
			this.updateAABB(),
				t.set(
					(this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2,
					(this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2,
					(this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2
				),
				Tc.calculateInertia(t, this.mass, e),
				this.invInertia.set(e.x > 0 && !n ? 1 / e.x : 0, e.y > 0 && !n ? 1 / e.y : 0, e.z > 0 && !n ? 1 / e.z : 0),
				this.updateInertiaWorld(!0);
		}
		getVelocityAtWorldPoint(t, e) {
			const n = new oc();
			return t.vsub(this.position, n), this.angularVelocity.cross(n, e), this.velocity.vadd(e, e), e;
		}
		integrate(t, e, n) {
			if (
				(this.previousPosition.copy(this.position),
				this.previousQuaternion.copy(this.quaternion),
				(this.type !== Rc.DYNAMIC && this.type !== Rc.KINEMATIC) || this.sleepState === Rc.SLEEPING)
			)
				return;
			const i = this.velocity,
				r = this.angularVelocity,
				s = this.position,
				o = this.force,
				a = this.torque,
				l = this.quaternion,
				c = this.invMass,
				h = this.invInertiaWorld,
				u = this.linearFactor,
				d = c * t;
			(i.x += o.x * d * u.x), (i.y += o.y * d * u.y), (i.z += o.z * d * u.z);
			const p = h.elements,
				m = this.angularFactor,
				f = a.x * m.x,
				g = a.y * m.y,
				v = a.z * m.z;
			(r.x += t * (p[0] * f + p[1] * g + p[2] * v)),
				(r.y += t * (p[3] * f + p[4] * g + p[5] * v)),
				(r.z += t * (p[6] * f + p[7] * g + p[8] * v)),
				(s.x += i.x * t),
				(s.y += i.y * t),
				(s.z += i.z * t),
				l.integrate(this.angularVelocity, t, this.angularFactor, l),
				e && (n ? l.normalizeFast() : l.normalize()),
				(this.aabbNeedsUpdate = !0),
				this.updateInertiaWorld();
		}
	}
	(Rc.idCounter = 0),
		(Rc.COLLIDE_EVENT_NAME = "collide"),
		(Rc.DYNAMIC = 1),
		(Rc.STATIC = 2),
		(Rc.KINEMATIC = 4),
		(Rc.AWAKE = 0),
		(Rc.SLEEPY = 1),
		(Rc.SLEEPING = 2),
		(Rc.wakeupEvent = { type: "wakeup" }),
		(Rc.sleepyEvent = { type: "sleepy" }),
		(Rc.sleepEvent = { type: "sleep" });
	const Lc = new oc(),
		Pc = new fc(),
		Ic = new hc(),
		Dc = new rc(),
		Nc = new rc(),
		zc = (new rc(), new oc()),
		Bc = new oc(),
		Oc = new oc(),
		Fc = new oc(),
		Hc = new oc(),
		kc = new oc(),
		Uc = new oc(),
		Vc = new oc();
	class Gc {
		constructor() {
			(this.world = null), (this.useBoundingBoxes = !1), (this.dirty = !0);
		}
		collisionPairs(t, e, n) {
			throw new Error("collisionPairs not implemented for this BroadPhase class!");
		}
		needBroadphaseCollision(t, e) {
			return (
				0 != (t.collisionFilterGroup & e.collisionFilterMask) &&
				0 != (e.collisionFilterGroup & t.collisionFilterMask) &&
				((0 == (t.type & Rc.STATIC) && t.sleepState !== Rc.SLEEPING) ||
					(0 == (e.type & Rc.STATIC) && e.sleepState !== Rc.SLEEPING))
			);
		}
		intersectionTest(t, e, n, i) {
			this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, n, i) : this.doBoundingSphereBroadphase(t, e, n, i);
		}
		doBoundingSphereBroadphase(t, e, n, i) {
			const r = Wc;
			e.position.vsub(t.position, r);
			const s = (t.boundingRadius + e.boundingRadius) ** 2;
			r.lengthSquared() < s && (n.push(t), i.push(e));
		}
		doBoundingBoxBroadphase(t, e, n, i) {
			t.aabbNeedsUpdate && t.updateAABB(),
				e.aabbNeedsUpdate && e.updateAABB(),
				t.aabb.overlaps(e.aabb) && (n.push(t), i.push(e));
		}
		makePairsUnique(t, e) {
			const n = jc,
				i = qc,
				r = Xc,
				s = t.length;
			for (let n = 0; n !== s; n++) (i[n] = t[n]), (r[n] = e[n]);
			(t.length = 0), (e.length = 0);
			for (let t = 0; t !== s; t++) {
				const e = i[t].id,
					s = r[t].id,
					o = e < s ? `${e},${s}` : `${s},${e}`;
				(n[o] = t), n.keys.push(o);
			}
			for (let s = 0; s !== n.keys.length; s++) {
				const s = n.keys.pop(),
					o = n[s];
				t.push(i[o]), e.push(r[o]), delete n[s];
			}
		}
		setWorld(t) {}
		static boundingSphereCheck(t, e) {
			const n = new oc();
			t.position.vsub(e.position, n);
			const i = t.shapes[0],
				r = e.shapes[0];
			return Math.pow(i.boundingSphereRadius + r.boundingSphereRadius, 2) > n.lengthSquared();
		}
		aabbQuery(t, e, n) {
			return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), [];
		}
	}
	const Wc = new oc();
	new oc(), new fc(), new oc();
	const jc = { keys: [] },
		qc = [],
		Xc = [];
	new oc(), new oc(), new oc();
	class Yc extends Gc {
		constructor() {
			super();
		}
		collisionPairs(t, e, n) {
			const i = t.bodies,
				r = i.length;
			let s, o;
			for (let t = 0; t !== r; t++)
				for (let r = 0; r !== t; r++)
					(s = i[t]), (o = i[r]), this.needBroadphaseCollision(s, o) && this.intersectionTest(s, o, e, n);
		}
		aabbQuery(t, e, n) {
			void 0 === n && (n = []);
			for (let i = 0; i < t.bodies.length; i++) {
				const r = t.bodies[i];
				r.aabbNeedsUpdate && r.updateAABB(), r.aabb.overlaps(e) && n.push(r);
			}
			return n;
		}
	}
	class Zc {
		constructor() {
			(this.rayFromWorld = new oc()),
				(this.rayToWorld = new oc()),
				(this.hitNormalWorld = new oc()),
				(this.hitPointWorld = new oc()),
				(this.hasHit = !1),
				(this.shape = null),
				(this.body = null),
				(this.hitFaceIndex = -1),
				(this.distance = -1),
				(this.shouldStop = !1);
		}
		reset() {
			this.rayFromWorld.setZero(),
				this.rayToWorld.setZero(),
				this.hitNormalWorld.setZero(),
				this.hitPointWorld.setZero(),
				(this.hasHit = !1),
				(this.shape = null),
				(this.body = null),
				(this.hitFaceIndex = -1),
				(this.distance = -1),
				(this.shouldStop = !1);
		}
		abort() {
			this.shouldStop = !0;
		}
		set(t, e, n, i, r, s, o) {
			this.rayFromWorld.copy(t),
				this.rayToWorld.copy(e),
				this.hitNormalWorld.copy(n),
				this.hitPointWorld.copy(i),
				(this.shape = r),
				(this.body = s),
				(this.distance = o);
		}
	}
	let $c, Kc, Jc, Qc, th, eh, nh;
	($c = yc.types.SPHERE),
		(Kc = yc.types.PLANE),
		(Jc = yc.types.BOX),
		(Qc = yc.types.CYLINDER),
		(th = yc.types.CONVEXPOLYHEDRON),
		(eh = yc.types.HEIGHTFIELD),
		(nh = yc.types.TRIMESH);
	class ih {
		get [$c]() {
			return this._intersectSphere;
		}
		get [Kc]() {
			return this._intersectPlane;
		}
		get [Jc]() {
			return this._intersectBox;
		}
		get [Qc]() {
			return this._intersectConvex;
		}
		get [th]() {
			return this._intersectConvex;
		}
		get [eh]() {
			return this._intersectHeightfield;
		}
		get [nh]() {
			return this._intersectTrimesh;
		}
		constructor(t, e) {
			void 0 === t && (t = new oc()),
				void 0 === e && (e = new oc()),
				(this.from = t.clone()),
				(this.to = e.clone()),
				(this.direction = new oc()),
				(this.precision = 1e-4),
				(this.checkCollisionResponse = !0),
				(this.skipBackfaces = !1),
				(this.collisionFilterMask = -1),
				(this.collisionFilterGroup = -1),
				(this.mode = ih.ANY),
				(this.result = new Zc()),
				(this.hasHit = !1),
				(this.callback = (t) => {});
		}
		intersectWorld(t, e) {
			return (
				(this.mode = e.mode || ih.ANY),
				(this.result = e.result || new Zc()),
				(this.skipBackfaces = !!e.skipBackfaces),
				(this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1),
				(this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1),
				(this.checkCollisionResponse = void 0 === e.checkCollisionResponse || e.checkCollisionResponse),
				e.from && this.from.copy(e.from),
				e.to && this.to.copy(e.to),
				(this.callback = e.callback || (() => {})),
				(this.hasHit = !1),
				this.result.reset(),
				this.updateDirection(),
				this.getAABB(rh),
				(sh.length = 0),
				t.broadphase.aabbQuery(t, rh, sh),
				this.intersectBodies(sh),
				this.hasHit
			);
		}
		intersectBody(t, e) {
			e && ((this.result = e), this.updateDirection());
			const n = this.checkCollisionResponse;
			if (n && !t.collisionResponse) return;
			if (
				0 == (this.collisionFilterGroup & t.collisionFilterMask) ||
				0 == (t.collisionFilterGroup & this.collisionFilterMask)
			)
				return;
			const i = lh,
				r = ch;
			for (let e = 0, s = t.shapes.length; e < s; e++) {
				const s = t.shapes[e];
				if (
					(!n || s.collisionResponse) &&
					(t.quaternion.mult(t.shapeOrientations[e], r),
					t.quaternion.vmult(t.shapeOffsets[e], i),
					i.vadd(t.position, i),
					this.intersectShape(s, r, i, t),
					this.result.shouldStop)
				)
					break;
			}
		}
		intersectBodies(t, e) {
			e && ((this.result = e), this.updateDirection());
			for (let e = 0, n = t.length; !this.result.shouldStop && e < n; e++) this.intersectBody(t[e]);
		}
		updateDirection() {
			this.to.vsub(this.from, this.direction), this.direction.normalize();
		}
		intersectShape(t, e, n, i) {
			const r = (function (t, e, n) {
				n.vsub(t, Lh);
				const i = Lh.dot(e);
				return e.scale(i, Ph), Ph.vadd(t, Ph), n.distanceTo(Ph);
			})(this.from, this.direction, n);
			if (r > t.boundingSphereRadius) return;
			const s = this[t.type];
			s && s.call(this, t, e, n, i, t);
		}
		_intersectBox(t, e, n, i, r) {
			return this._intersectConvex(t.convexPolyhedronRepresentation, e, n, i, r);
		}
		_intersectPlane(t, e, n, i, r) {
			const s = this.from,
				o = this.to,
				a = this.direction,
				l = new oc(0, 0, 1);
			e.vmult(l, l);
			const c = new oc();
			s.vsub(n, c);
			const h = c.dot(l);
			if ((o.vsub(n, c), h * c.dot(l) > 0)) return;
			if (s.distanceTo(o) < h) return;
			const u = l.dot(a);
			if (Math.abs(u) < this.precision) return;
			const d = new oc(),
				p = new oc(),
				m = new oc();
			s.vsub(n, d);
			const f = -l.dot(d) / u;
			a.scale(f, p), s.vadd(p, m), this.reportIntersection(l, m, r, i, -1);
		}
		getAABB(t) {
			const { lowerBound: e, upperBound: n } = t,
				i = this.to,
				r = this.from;
			(e.x = Math.min(i.x, r.x)),
				(e.y = Math.min(i.y, r.y)),
				(e.z = Math.min(i.z, r.z)),
				(n.x = Math.max(i.x, r.x)),
				(n.y = Math.max(i.y, r.y)),
				(n.z = Math.max(i.z, r.z));
		}
		_intersectHeightfield(t, e, n, i, r) {
			t.data, t.elementSize;
			const s = gh;
			s.from.copy(this.from),
				s.to.copy(this.to),
				xc.pointToLocalFrame(n, e, s.from, s.from),
				xc.pointToLocalFrame(n, e, s.to, s.to),
				s.updateDirection();
			const o = vh;
			let a, l, c, h;
			(a = l = 0), (c = h = t.data.length - 1);
			const u = new hc();
			s.getAABB(u),
				t.getIndexOfPosition(u.lowerBound.x, u.lowerBound.y, o, !0),
				(a = Math.max(a, o[0])),
				(l = Math.max(l, o[1])),
				t.getIndexOfPosition(u.upperBound.x, u.upperBound.y, o, !0),
				(c = Math.min(c, o[0] + 1)),
				(h = Math.min(h, o[1] + 1));
			for (let o = a; o < c; o++)
				for (let a = l; a < h; a++) {
					if (this.result.shouldStop) return;
					if ((t.getAabbAtIndex(o, a, u), u.overlapsRay(s))) {
						if (
							(t.getConvexTrianglePillar(o, a, !1),
							xc.pointToWorldFrame(n, e, t.pillarOffset, fh),
							this._intersectConvex(t.pillarConvex, e, fh, i, r, mh),
							this.result.shouldStop)
						)
							return;
						t.getConvexTrianglePillar(o, a, !0),
							xc.pointToWorldFrame(n, e, t.pillarOffset, fh),
							this._intersectConvex(t.pillarConvex, e, fh, i, r, mh);
					}
				}
		}
		_intersectSphere(t, e, n, i, r) {
			const s = this.from,
				o = this.to,
				a = t.radius,
				l = (o.x - s.x) ** 2 + (o.y - s.y) ** 2 + (o.z - s.z) ** 2,
				c = 2 * ((o.x - s.x) * (s.x - n.x) + (o.y - s.y) * (s.y - n.y) + (o.z - s.z) * (s.z - n.z)),
				h = c ** 2 - 4 * l * ((s.x - n.x) ** 2 + (s.y - n.y) ** 2 + (s.z - n.z) ** 2 - a ** 2),
				u = yh,
				d = xh;
			if (!(h < 0))
				if (0 === h) s.lerp(o, h, u), u.vsub(n, d), d.normalize(), this.reportIntersection(d, u, r, i, -1);
				else {
					const t = (-c - Math.sqrt(h)) / (2 * l),
						e = (-c + Math.sqrt(h)) / (2 * l);
					if (
						(t >= 0 &&
							t <= 1 &&
							(s.lerp(o, t, u), u.vsub(n, d), d.normalize(), this.reportIntersection(d, u, r, i, -1)),
						this.result.shouldStop)
					)
						return;
					e >= 0 && e <= 1 && (s.lerp(o, e, u), u.vsub(n, d), d.normalize(), this.reportIntersection(d, u, r, i, -1));
				}
		}
		_intersectConvex(t, e, n, i, r, s) {
			const o = _h,
				a = wh,
				l = (s && s.faceList) || null,
				c = t.faces,
				h = t.vertices,
				u = t.faceNormals,
				d = this.direction,
				p = this.from,
				m = this.to,
				f = p.distanceTo(m),
				g = l ? l.length : c.length,
				v = this.result;
			for (let t = 0; !v.shouldStop && t < g; t++) {
				const s = l ? l[t] : t,
					m = c[s],
					g = u[s],
					y = e,
					x = n;
				a.copy(h[m[0]]), y.vmult(a, a), a.vadd(x, a), a.vsub(p, a), y.vmult(g, o);
				const _ = d.dot(o);
				if (Math.abs(_) < this.precision) continue;
				const w = o.dot(a) / _;
				if (!(w < 0)) {
					d.scale(w, hh), hh.vadd(p, hh), uh.copy(h[m[0]]), y.vmult(uh, uh), x.vadd(uh, uh);
					for (let t = 1; !v.shouldStop && t < m.length - 1; t++) {
						dh.copy(h[m[t]]), ph.copy(h[m[t + 1]]), y.vmult(dh, dh), y.vmult(ph, ph), x.vadd(dh, dh), x.vadd(ph, ph);
						const e = hh.distanceTo(p);
						(!ih.pointInTriangle(hh, uh, dh, ph) && !ih.pointInTriangle(hh, dh, uh, ph)) ||
							e > f ||
							this.reportIntersection(o, hh, r, i, s);
					}
				}
			}
		}
		_intersectTrimesh(t, e, n, i, r, s) {
			const o = bh,
				a = Ch,
				l = Rh,
				c = wh,
				h = Mh,
				u = Sh,
				d = Eh,
				p = Ah,
				m = Th,
				f = t.indices;
			t.vertices;
			const g = this.from,
				v = this.to,
				y = this.direction;
			l.position.copy(n),
				l.quaternion.copy(e),
				xc.vectorToLocalFrame(n, e, y, h),
				xc.pointToLocalFrame(n, e, g, u),
				xc.pointToLocalFrame(n, e, v, d),
				(d.x *= t.scale.x),
				(d.y *= t.scale.y),
				(d.z *= t.scale.z),
				(u.x *= t.scale.x),
				(u.y *= t.scale.y),
				(u.z *= t.scale.z),
				d.vsub(u, h),
				h.normalize();
			const x = u.distanceSquared(d);
			t.tree.rayQuery(this, l, a);
			for (let s = 0, l = a.length; !this.result.shouldStop && s !== l; s++) {
				const l = a[s];
				t.getNormal(l, o), t.getVertex(f[3 * l], uh), uh.vsub(u, c);
				const d = h.dot(o),
					g = o.dot(c) / d;
				if (g < 0) continue;
				h.scale(g, hh), hh.vadd(u, hh), t.getVertex(f[3 * l + 1], dh), t.getVertex(f[3 * l + 2], ph);
				const v = hh.distanceSquared(u);
				(!ih.pointInTriangle(hh, dh, uh, ph) && !ih.pointInTriangle(hh, uh, dh, ph)) ||
					v > x ||
					(xc.vectorToWorldFrame(e, o, m), xc.pointToWorldFrame(n, e, hh, p), this.reportIntersection(m, p, r, i, l));
			}
			a.length = 0;
		}
		reportIntersection(t, e, n, i, r) {
			const s = this.from,
				o = this.to,
				a = s.distanceTo(e),
				l = this.result;
			if (!(this.skipBackfaces && t.dot(this.direction) > 0))
				switch (((l.hitFaceIndex = void 0 !== r ? r : -1), this.mode)) {
					case ih.ALL:
						(this.hasHit = !0), l.set(s, o, t, e, n, i, a), (l.hasHit = !0), this.callback(l);
						break;
					case ih.CLOSEST:
						(a < l.distance || !l.hasHit) && ((this.hasHit = !0), (l.hasHit = !0), l.set(s, o, t, e, n, i, a));
						break;
					case ih.ANY:
						(this.hasHit = !0), (l.hasHit = !0), l.set(s, o, t, e, n, i, a), (l.shouldStop = !0);
				}
		}
		static pointInTriangle(t, e, n, i) {
			i.vsub(e, Lh), n.vsub(e, oh), t.vsub(e, ah);
			const r = Lh.dot(Lh),
				s = Lh.dot(oh),
				o = Lh.dot(ah),
				a = oh.dot(oh),
				l = oh.dot(ah);
			let c, h;
			return (c = a * o - s * l) >= 0 && (h = r * l - s * o) >= 0 && c + h < r * a - s * s;
		}
	}
	(ih.CLOSEST = 1), (ih.ANY = 2), (ih.ALL = 4);
	const rh = new hc(),
		sh = [],
		oh = new oc(),
		ah = new oc(),
		lh = new oc(),
		ch = new fc(),
		hh = new oc(),
		uh = new oc(),
		dh = new oc(),
		ph = new oc();
	new oc(), new Zc();
	const mh = { faceList: [0] },
		fh = new oc(),
		gh = new ih(),
		vh = [],
		yh = new oc(),
		xh = new oc(),
		_h = new oc(),
		wh = (new oc(), new oc(), new oc()),
		bh = new oc(),
		Mh = new oc(),
		Sh = new oc(),
		Eh = new oc(),
		Th = new oc(),
		Ah = new oc();
	new hc();
	const Ch = [],
		Rh = new xc(),
		Lh = new oc(),
		Ph = new oc();
	class Ih extends Gc {
		static checkBounds(t, e, n) {
			let i, r;
			0 === n
				? ((i = t.position.x), (r = e.position.x))
				: 1 === n
				? ((i = t.position.y), (r = e.position.y))
				: 2 === n && ((i = t.position.z), (r = e.position.z));
			const s = t.boundingRadius;
			return r - e.boundingRadius < i + s;
		}
		static insertionSortX(t) {
			for (let e = 1, n = t.length; e < n; e++) {
				const n = t[e];
				let i;
				for (i = e - 1; i >= 0 && !(t[i].aabb.lowerBound.x <= n.aabb.lowerBound.x); i--) t[i + 1] = t[i];
				t[i + 1] = n;
			}
			return t;
		}
		static insertionSortY(t) {
			for (let e = 1, n = t.length; e < n; e++) {
				const n = t[e];
				let i;
				for (i = e - 1; i >= 0 && !(t[i].aabb.lowerBound.y <= n.aabb.lowerBound.y); i--) t[i + 1] = t[i];
				t[i + 1] = n;
			}
			return t;
		}
		static insertionSortZ(t) {
			for (let e = 1, n = t.length; e < n; e++) {
				const n = t[e];
				let i;
				for (i = e - 1; i >= 0 && !(t[i].aabb.lowerBound.z <= n.aabb.lowerBound.z); i--) t[i + 1] = t[i];
				t[i + 1] = n;
			}
			return t;
		}
		constructor(t) {
			super(), (this.axisList = []), (this.world = null), (this.axisIndex = 0);
			const e = this.axisList;
			(this._addBodyHandler = (t) => {
				e.push(t.body);
			}),
				(this._removeBodyHandler = (t) => {
					const n = e.indexOf(t.body);
					-1 !== n && e.splice(n, 1);
				}),
				t && this.setWorld(t);
		}
		setWorld(t) {
			this.axisList.length = 0;
			for (let e = 0; e < t.bodies.length; e++) this.axisList.push(t.bodies[e]);
			t.removeEventListener("addBody", this._addBodyHandler),
				t.removeEventListener("removeBody", this._removeBodyHandler),
				t.addEventListener("addBody", this._addBodyHandler),
				t.addEventListener("removeBody", this._removeBodyHandler),
				(this.world = t),
				(this.dirty = !0);
		}
		collisionPairs(t, e, n) {
			const i = this.axisList,
				r = i.length,
				s = this.axisIndex;
			let o, a;
			for (this.dirty && (this.sortList(), (this.dirty = !1)), o = 0; o !== r; o++) {
				const t = i[o];
				for (a = o + 1; a < r; a++) {
					const r = i[a];
					if (this.needBroadphaseCollision(t, r)) {
						if (!Ih.checkBounds(t, r, s)) break;
						this.intersectionTest(t, r, e, n);
					}
				}
			}
		}
		sortList() {
			const t = this.axisList,
				e = this.axisIndex,
				n = t.length;
			for (let e = 0; e !== n; e++) {
				const n = t[e];
				n.aabbNeedsUpdate && n.updateAABB();
			}
			0 === e ? Ih.insertionSortX(t) : 1 === e ? Ih.insertionSortY(t) : 2 === e && Ih.insertionSortZ(t);
		}
		autoDetectAxis() {
			let t = 0,
				e = 0,
				n = 0,
				i = 0,
				r = 0,
				s = 0;
			const o = this.axisList,
				a = o.length,
				l = 1 / a;
			for (let l = 0; l !== a; l++) {
				const a = o[l],
					c = a.position.x;
				(t += c), (e += c * c);
				const h = a.position.y;
				(n += h), (i += h * h);
				const u = a.position.z;
				(r += u), (s += u * u);
			}
			const c = e - t * t * l,
				h = i - n * n * l,
				u = s - r * r * l;
			this.axisIndex = c > h ? (c > u ? 0 : 2) : h > u ? 1 : 2;
		}
		aabbQuery(t, e, n) {
			void 0 === n && (n = []), this.dirty && (this.sortList(), (this.dirty = !1));
			const i = this.axisIndex;
			let r = "x";
			1 === i && (r = "y"), 2 === i && (r = "z");
			const s = this.axisList;
			e.lowerBound[r], e.upperBound[r];
			for (let t = 0; t < s.length; t++) {
				const i = s[t];
				i.aabbNeedsUpdate && i.updateAABB(), i.aabb.overlaps(e) && n.push(i);
			}
			return n;
		}
	}
	class Dh {
		static defaults(t, e) {
			void 0 === t && (t = {});
			for (let n in e) n in t || (t[n] = e[n]);
			return t;
		}
	}
	class Nh {
		constructor(t, e, n) {
			void 0 === n && (n = {}),
				(n = Dh.defaults(n, { collideConnected: !0, wakeUpBodies: !0 })),
				(this.equations = []),
				(this.bodyA = t),
				(this.bodyB = e),
				(this.id = Nh.idCounter++),
				(this.collideConnected = n.collideConnected),
				n.wakeUpBodies && (t && t.wakeUp(), e && e.wakeUp());
		}
		update() {
			throw new Error("method update() not implmemented in this Constraint subclass!");
		}
		enable() {
			const t = this.equations;
			for (let e = 0; e < t.length; e++) t[e].enabled = !0;
		}
		disable() {
			const t = this.equations;
			for (let e = 0; e < t.length; e++) t[e].enabled = !1;
		}
	}
	Nh.idCounter = 0;
	class zh {
		constructor() {
			(this.spatial = new oc()), (this.rotational = new oc());
		}
		multiplyElement(t) {
			return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational);
		}
		multiplyVectors(t, e) {
			return t.dot(this.spatial) + e.dot(this.rotational);
		}
	}
	class Bh {
		constructor(t, e, n, i) {
			void 0 === n && (n = -1e6),
				void 0 === i && (i = 1e6),
				(this.id = Bh.idCounter++),
				(this.minForce = n),
				(this.maxForce = i),
				(this.bi = t),
				(this.bj = e),
				(this.a = 0),
				(this.b = 0),
				(this.eps = 0),
				(this.jacobianElementA = new zh()),
				(this.jacobianElementB = new zh()),
				(this.enabled = !0),
				(this.multiplier = 0),
				this.setSpookParams(1e7, 4, 1 / 60);
		}
		setSpookParams(t, e, n) {
			const i = e,
				r = t,
				s = n;
			(this.a = 4 / (s * (1 + 4 * i))), (this.b = (4 * i) / (1 + 4 * i)), (this.eps = 4 / (s * s * r * (1 + 4 * i)));
		}
		computeB(t, e, n) {
			const i = this.computeGW();
			return -this.computeGq() * t - i * e - this.computeGiMf() * n;
		}
		computeGq() {
			const t = this.jacobianElementA,
				e = this.jacobianElementB,
				n = this.bi,
				i = this.bj,
				r = n.position,
				s = i.position;
			return t.spatial.dot(r) + e.spatial.dot(s);
		}
		computeGW() {
			const t = this.jacobianElementA,
				e = this.jacobianElementB,
				n = this.bi,
				i = this.bj,
				r = n.velocity,
				s = i.velocity,
				o = n.angularVelocity,
				a = i.angularVelocity;
			return t.multiplyVectors(r, o) + e.multiplyVectors(s, a);
		}
		computeGWlambda() {
			const t = this.jacobianElementA,
				e = this.jacobianElementB,
				n = this.bi,
				i = this.bj,
				r = n.vlambda,
				s = i.vlambda,
				o = n.wlambda,
				a = i.wlambda;
			return t.multiplyVectors(r, o) + e.multiplyVectors(s, a);
		}
		computeGiMf() {
			const t = this.jacobianElementA,
				e = this.jacobianElementB,
				n = this.bi,
				i = this.bj,
				r = n.force,
				s = n.torque,
				o = i.force,
				a = i.torque,
				l = n.invMassSolve,
				c = i.invMassSolve;
			return (
				r.scale(l, Oh),
				o.scale(c, Fh),
				n.invInertiaWorldSolve.vmult(s, Hh),
				i.invInertiaWorldSolve.vmult(a, kh),
				t.multiplyVectors(Oh, Hh) + e.multiplyVectors(Fh, kh)
			);
		}
		computeGiMGt() {
			const t = this.jacobianElementA,
				e = this.jacobianElementB,
				n = this.bi,
				i = this.bj,
				r = n.invMassSolve,
				s = i.invMassSolve,
				o = n.invInertiaWorldSolve,
				a = i.invInertiaWorldSolve;
			let l = r + s;
			return (
				o.vmult(t.rotational, Uh), (l += Uh.dot(t.rotational)), a.vmult(e.rotational, Uh), (l += Uh.dot(e.rotational)), l
			);
		}
		addToWlambda(t) {
			const e = this.jacobianElementA,
				n = this.jacobianElementB,
				i = this.bi,
				r = this.bj,
				s = Vh;
			i.vlambda.addScaledVector(i.invMassSolve * t, e.spatial, i.vlambda),
				r.vlambda.addScaledVector(r.invMassSolve * t, n.spatial, r.vlambda),
				i.invInertiaWorldSolve.vmult(e.rotational, s),
				i.wlambda.addScaledVector(t, s, i.wlambda),
				r.invInertiaWorldSolve.vmult(n.rotational, s),
				r.wlambda.addScaledVector(t, s, r.wlambda);
		}
		computeC() {
			return this.computeGiMGt() + this.eps;
		}
	}
	Bh.idCounter = 0;
	const Oh = new oc(),
		Fh = new oc(),
		Hh = new oc(),
		kh = new oc(),
		Uh = new oc(),
		Vh = new oc();
	class Gh extends Bh {
		constructor(t, e, n) {
			void 0 === n && (n = 1e6),
				super(t, e, 0, n),
				(this.restitution = 0),
				(this.ri = new oc()),
				(this.rj = new oc()),
				(this.ni = new oc());
		}
		computeB(t) {
			const e = this.a,
				n = this.b,
				i = this.bi,
				r = this.bj,
				s = this.ri,
				o = this.rj,
				a = Wh,
				l = jh,
				c = i.velocity,
				h = i.angularVelocity;
			i.force, i.torque;
			const u = r.velocity,
				d = r.angularVelocity;
			r.force, r.torque;
			const p = qh,
				m = this.jacobianElementA,
				f = this.jacobianElementB,
				g = this.ni;
			s.cross(g, a),
				o.cross(g, l),
				g.negate(m.spatial),
				a.negate(m.rotational),
				f.spatial.copy(g),
				f.rotational.copy(l),
				p.copy(r.position),
				p.vadd(o, p),
				p.vsub(i.position, p),
				p.vsub(s, p);
			const v = g.dot(p),
				y = this.restitution + 1;
			return -v * e - (y * u.dot(g) - y * c.dot(g) + d.dot(l) - h.dot(a)) * n - t * this.computeGiMf();
		}
		getImpactVelocityAlongNormal() {
			const t = Xh,
				e = Yh,
				n = Zh,
				i = $h,
				r = Kh;
			return (
				this.bi.position.vadd(this.ri, n),
				this.bj.position.vadd(this.rj, i),
				this.bi.getVelocityAtWorldPoint(n, t),
				this.bj.getVelocityAtWorldPoint(i, e),
				t.vsub(e, r),
				this.ni.dot(r)
			);
		}
	}
	const Wh = new oc(),
		jh = new oc(),
		qh = new oc(),
		Xh = new oc(),
		Yh = new oc(),
		Zh = new oc(),
		$h = new oc(),
		Kh = new oc();
	class Jh extends Nh {
		constructor(t, e, n, i, r) {
			void 0 === e && (e = new oc()),
				void 0 === i && (i = new oc()),
				void 0 === r && (r = 1e6),
				super(t, n),
				(this.pivotA = e.clone()),
				(this.pivotB = i.clone());
			const s = (this.equationX = new Gh(t, n)),
				o = (this.equationY = new Gh(t, n)),
				a = (this.equationZ = new Gh(t, n));
			this.equations.push(s, o, a),
				(s.minForce = o.minForce = a.minForce = -r),
				(s.maxForce = o.maxForce = a.maxForce = r),
				s.ni.set(1, 0, 0),
				o.ni.set(0, 1, 0),
				a.ni.set(0, 0, 1);
		}
		update() {
			const t = this.bodyA,
				e = this.bodyB,
				n = this.equationX,
				i = this.equationY,
				r = this.equationZ;
			t.quaternion.vmult(this.pivotA, n.ri),
				e.quaternion.vmult(this.pivotB, n.rj),
				i.ri.copy(n.ri),
				i.rj.copy(n.rj),
				r.ri.copy(n.ri),
				r.rj.copy(n.rj);
		}
	}
	new oc(), new oc();
	class Qh extends Bh {
		constructor(t, e, n) {
			void 0 === n && (n = {});
			const i = void 0 !== n.maxForce ? n.maxForce : 1e6;
			super(t, e, -i, i),
				(this.axisA = n.axisA ? n.axisA.clone() : new oc(1, 0, 0)),
				(this.axisB = n.axisB ? n.axisB.clone() : new oc(0, 1, 0)),
				(this.maxAngle = Math.PI / 2);
		}
		computeB(t) {
			const e = this.a,
				n = this.b,
				i = this.axisA,
				r = this.axisB,
				s = tu,
				o = eu,
				a = this.jacobianElementA,
				l = this.jacobianElementB;
			return (
				i.cross(r, s),
				r.cross(i, o),
				a.rotational.copy(o),
				l.rotational.copy(s),
				-(Math.cos(this.maxAngle) - i.dot(r)) * e - this.computeGW() * n - t * this.computeGiMf()
			);
		}
	}
	const tu = new oc(),
		eu = new oc();
	new oc(), new oc(), new oc(), new oc();
	class nu extends Bh {
		constructor(t, e, n) {
			void 0 === n && (n = 1e6),
				super(t, e, -n, n),
				(this.axisA = new oc()),
				(this.axisB = new oc()),
				(this.targetVelocity = 0);
		}
		computeB(t) {
			this.a;
			const e = this.b;
			this.bi, this.bj;
			const n = this.axisA,
				i = this.axisB,
				r = this.jacobianElementA,
				s = this.jacobianElementB;
			return (
				r.rotational.copy(n),
				i.negate(s.rotational),
				-(this.computeGW() - this.targetVelocity) * e - t * this.computeGiMf()
			);
		}
	}
	class iu extends Jh {
		constructor(t, e, n) {
			void 0 === n && (n = {});
			const i = void 0 !== n.maxForce ? n.maxForce : 1e6;
			super(t, n.pivotA ? n.pivotA.clone() : new oc(), e, n.pivotB ? n.pivotB.clone() : new oc(), i),
				(this.axisA = n.axisA ? n.axisA.clone() : new oc(1, 0, 0)).normalize(),
				(this.axisB = n.axisB ? n.axisB.clone() : new oc(1, 0, 0)).normalize(),
				(this.collideConnected = !!n.collideConnected);
			const r = (this.rotationalEquation1 = new Qh(t, e, n)),
				s = (this.rotationalEquation2 = new Qh(t, e, n)),
				o = (this.motorEquation = new nu(t, e, i));
			(o.enabled = !1), this.equations.push(r, s, o);
		}
		enableMotor() {
			this.motorEquation.enabled = !0;
		}
		disableMotor() {
			this.motorEquation.enabled = !1;
		}
		setMotorSpeed(t) {
			this.motorEquation.targetVelocity = t;
		}
		setMotorMaxForce(t) {
			(this.motorEquation.maxForce = t), (this.motorEquation.minForce = -t);
		}
		update() {
			const t = this.bodyA,
				e = this.bodyB,
				n = this.motorEquation,
				i = this.rotationalEquation1,
				r = this.rotationalEquation2,
				s = ru,
				o = su,
				a = this.axisA,
				l = this.axisB;
			super.update(),
				t.quaternion.vmult(a, s),
				e.quaternion.vmult(l, o),
				s.tangents(i.axisA, r.axisA),
				i.axisB.copy(o),
				r.axisB.copy(o),
				this.motorEquation.enabled && (t.quaternion.vmult(this.axisA, n.axisA), e.quaternion.vmult(this.axisB, n.axisB));
		}
	}
	const ru = new oc(),
		su = new oc();
	class ou extends Bh {
		constructor(t, e, n) {
			super(t, e, -n, n), (this.ri = new oc()), (this.rj = new oc()), (this.t = new oc());
		}
		computeB(t) {
			this.a;
			const e = this.b;
			this.bi, this.bj;
			const n = this.ri,
				i = this.rj,
				r = au,
				s = lu,
				o = this.t;
			n.cross(o, r), i.cross(o, s);
			const a = this.jacobianElementA,
				l = this.jacobianElementB;
			return (
				o.negate(a.spatial),
				r.negate(a.rotational),
				l.spatial.copy(o),
				l.rotational.copy(s),
				-this.computeGW() * e - t * this.computeGiMf()
			);
		}
	}
	const au = new oc(),
		lu = new oc();
	class cu {
		constructor(t, e, n) {
			(n = Dh.defaults(n, {
				friction: 0.3,
				restitution: 0.3,
				contactEquationStiffness: 1e7,
				contactEquationRelaxation: 3,
				frictionEquationStiffness: 1e7,
				frictionEquationRelaxation: 3,
			})),
				(this.id = cu.idCounter++),
				(this.materials = [t, e]),
				(this.friction = n.friction),
				(this.restitution = n.restitution),
				(this.contactEquationStiffness = n.contactEquationStiffness),
				(this.contactEquationRelaxation = n.contactEquationRelaxation),
				(this.frictionEquationStiffness = n.frictionEquationStiffness),
				(this.frictionEquationRelaxation = n.frictionEquationRelaxation);
		}
	}
	cu.idCounter = 0;
	class hu {
		constructor(t) {
			void 0 === t && (t = {});
			let e = "";
			"string" == typeof t && ((e = t), (t = {})),
				(this.name = e),
				(this.id = hu.idCounter++),
				(this.friction = void 0 !== t.friction ? t.friction : -1),
				(this.restitution = void 0 !== t.restitution ? t.restitution : -1);
		}
	}
	(hu.idCounter = 0),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new ih(),
		new oc(),
		new oc(),
		new oc(),
		new oc(1, 0, 0),
		new oc(0, 1, 0),
		new oc(0, 0, 1),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc();
	class uu extends yc {
		constructor(t) {
			if ((super({ type: yc.types.SPHERE }), (this.radius = void 0 !== t ? t : 1), this.radius < 0))
				throw new Error("The sphere radius cannot be negative.");
			this.updateBoundingSphereRadius();
		}
		calculateLocalInertia(t, e) {
			void 0 === e && (e = new oc());
			const n = (2 * t * this.radius * this.radius) / 5;
			return (e.x = n), (e.y = n), (e.z = n), e;
		}
		volume() {
			return (4 * Math.PI * Math.pow(this.radius, 3)) / 3;
		}
		updateBoundingSphereRadius() {
			this.boundingSphereRadius = this.radius;
		}
		calculateWorldAABB(t, e, n, i) {
			const r = this.radius,
				s = ["x", "y", "z"];
			for (let e = 0; e < s.length; e++) {
				const o = s[e];
				(n[o] = t[o] - r), (i[o] = t[o] + r);
			}
		}
	}
	class du {
		constructor(t) {
			void 0 === t && (t = {}),
				(this.wheelBodies = []),
				(this.coordinateSystem = void 0 !== t.coordinateSystem ? t.coordinateSystem.clone() : new oc(1, 2, 3)),
				t.chassisBody
					? (this.chassisBody = t.chassisBody)
					: (this.chassisBody = new Rc({ mass: 1, shape: new Tc(new oc(5, 0.5, 2)) })),
				(this.constraints = []),
				(this.wheelAxes = []),
				(this.wheelForces = []);
		}
		addWheel(t) {
			let e;
			void 0 === t && (t = {}),
				(e = t.body ? t.body : new Rc({ mass: 1, shape: new uu(1.2) })),
				this.wheelBodies.push(e),
				this.wheelForces.push(0);
			const n = void 0 !== t.position ? t.position.clone() : new oc(),
				i = new oc();
			this.chassisBody.pointToWorldFrame(n, i), e.position.set(i.x, i.y, i.z);
			const r = void 0 !== t.axis ? t.axis.clone() : new oc(0, 0, 1);
			this.wheelAxes.push(r);
			const s = new iu(this.chassisBody, e, { pivotA: n, axisA: r, pivotB: oc.ZERO, axisB: r, collideConnected: !1 });
			return this.constraints.push(s), this.wheelBodies.length - 1;
		}
		setSteeringValue(t, e) {
			const n = this.wheelAxes[e],
				i = Math.cos(t),
				r = Math.sin(t),
				s = n.x,
				o = n.z;
			this.constraints[e].axisA.set(-i * s + r * o, 0, r * s + i * o);
		}
		setMotorSpeed(t, e) {
			const n = this.constraints[e];
			n.enableMotor(), (n.motorTargetVelocity = t);
		}
		disableMotor(t) {
			this.constraints[t].disableMotor();
		}
		setWheelForce(t, e) {
			this.wheelForces[e] = t;
		}
		applyWheelForce(t, e) {
			const n = this.wheelAxes[e],
				i = this.wheelBodies[e],
				r = i.torque;
			n.scale(t, pu), i.vectorToWorldFrame(pu, pu), r.vadd(pu, r);
		}
		addToWorld(t) {
			const e = this.constraints,
				n = this.wheelBodies.concat([this.chassisBody]);
			for (let e = 0; e < n.length; e++) t.addBody(n[e]);
			for (let n = 0; n < e.length; n++) t.addConstraint(e[n]);
			t.addEventListener("preStep", this._update.bind(this));
		}
		_update() {
			const t = this.wheelForces;
			for (let e = 0; e < t.length; e++) this.applyWheelForce(t[e], e);
		}
		removeFromWorld(t) {
			const e = this.constraints,
				n = this.wheelBodies.concat([this.chassisBody]);
			for (let e = 0; e < n.length; e++) t.removeBody(n[e]);
			for (let n = 0; n < e.length; n++) t.removeConstraint(e[n]);
		}
		getWheelSpeed(t) {
			const e = this.wheelAxes[t],
				n = this.wheelBodies[t].angularVelocity;
			return this.chassisBody.vectorToWorldFrame(e, mu), n.dot(mu);
		}
	}
	const pu = new oc(),
		mu = new oc();
	new oc(), new oc(), new oc(), new oc(), new oc(), new oc(), new oc();
	class fu extends wc {
		constructor(t, e, n, i) {
			if ((void 0 === t && (t = 1), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === i && (i = 8), t < 0))
				throw new Error("The cylinder radiusTop cannot be negative.");
			if (e < 0) throw new Error("The cylinder radiusBottom cannot be negative.");
			const r = i,
				s = [],
				o = [],
				a = [],
				l = [],
				c = [],
				h = Math.cos,
				u = Math.sin;
			s.push(new oc(-e * u(0), 0.5 * -n, e * h(0))), l.push(0), s.push(new oc(-t * u(0), 0.5 * n, t * h(0))), c.push(1);
			for (let i = 0; i < r; i++) {
				const d = ((2 * Math.PI) / r) * (i + 1),
					p = ((2 * Math.PI) / r) * (i + 0.5);
				i < r - 1
					? (s.push(new oc(-e * u(d), 0.5 * -n, e * h(d))),
					  l.push(2 * i + 2),
					  s.push(new oc(-t * u(d), 0.5 * n, t * h(d))),
					  c.push(2 * i + 3),
					  a.push([2 * i, 2 * i + 1, 2 * i + 3, 2 * i + 2]))
					: a.push([2 * i, 2 * i + 1, 1, 0]),
					(r % 2 == 1 || i < r / 2) && o.push(new oc(-u(p), 0, h(p)));
			}
			a.push(l), o.push(new oc(0, 1, 0));
			const d = [];
			for (let t = 0; t < c.length; t++) d.push(c[c.length - t - 1]);
			a.push(d),
				super({ vertices: s, faces: a, axes: o }),
				(this.type = yc.types.CYLINDER),
				(this.radiusTop = t),
				(this.radiusBottom = e),
				(this.height = n),
				(this.numSegments = i);
		}
	}
	new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new hc(),
		new oc(),
		new hc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new oc(),
		new hc(),
		new oc(),
		new xc(),
		new hc();
	class gu extends class {
		constructor() {
			this.equations = [];
		}
		solve(t, e) {
			return 0;
		}
		addEquation(t) {
			!t.enabled || t.bi.isTrigger || t.bj.isTrigger || this.equations.push(t);
		}
		removeEquation(t) {
			const e = this.equations,
				n = e.indexOf(t);
			-1 !== n && e.splice(n, 1);
		}
		removeAllEquations() {
			this.equations.length = 0;
		}
	} {
		constructor() {
			super(), (this.iterations = 10), (this.tolerance = 1e-7);
		}
		solve(t, e) {
			let n = 0;
			const i = this.iterations,
				r = this.tolerance * this.tolerance,
				s = this.equations,
				o = s.length,
				a = e.bodies,
				l = a.length,
				c = t;
			let h, u, d, p, m, f;
			if (0 !== o) for (let t = 0; t !== l; t++) a[t].updateSolveMassProperties();
			const g = yu,
				v = xu,
				y = vu;
			(g.length = o), (v.length = o), (y.length = o);
			for (let t = 0; t !== o; t++) {
				const e = s[t];
				(y[t] = 0), (v[t] = e.computeB(c)), (g[t] = 1 / e.computeC());
			}
			if (0 !== o) {
				for (let t = 0; t !== l; t++) {
					const e = a[t],
						n = e.vlambda,
						i = e.wlambda;
					n.set(0, 0, 0), i.set(0, 0, 0);
				}
				for (n = 0; n !== i; n++) {
					p = 0;
					for (let t = 0; t !== o; t++) {
						const e = s[t];
						(h = v[t]),
							(u = g[t]),
							(f = y[t]),
							(m = e.computeGWlambda()),
							(d = u * (h - m - e.eps * f)),
							f + d < e.minForce ? (d = e.minForce - f) : f + d > e.maxForce && (d = e.maxForce - f),
							(y[t] += d),
							(p += d > 0 ? d : -d),
							e.addToWlambda(d);
					}
					if (p * p < r) break;
				}
				for (let t = 0; t !== l; t++) {
					const e = a[t],
						n = e.velocity,
						i = e.angularVelocity;
					e.vlambda.vmul(e.linearFactor, e.vlambda),
						n.vadd(e.vlambda, n),
						e.wlambda.vmul(e.angularFactor, e.wlambda),
						i.vadd(e.wlambda, i);
				}
				let t = s.length;
				const e = 1 / c;
				for (; t--; ) s[t].multiplier = y[t] * e;
			}
			return n;
		}
	}
	const vu = [],
		yu = [],
		xu = [];
	Rc.STATIC;
	class _u extends class {
		constructor() {
			(this.objects = []), (this.type = Object);
		}
		release() {
			const t = arguments.length;
			for (let e = 0; e !== t; e++) this.objects.push(e < 0 || arguments.length <= e ? void 0 : arguments[e]);
			return this;
		}
		get() {
			return 0 === this.objects.length ? this.constructObject() : this.objects.pop();
		}
		constructObject() {
			throw new Error("constructObject() not implemented in this Pool subclass yet!");
		}
		resize(t) {
			const e = this.objects;
			for (; e.length > t; ) e.pop();
			for (; e.length < t; ) e.push(this.constructObject());
			return this;
		}
	} {
		constructor() {
			super(...arguments), (this.type = oc);
		}
		constructObject() {
			return new oc();
		}
	}
	const wu = yc.types.SPHERE,
		bu = yc.types.SPHERE | yc.types.PLANE,
		Mu = yc.types.BOX | yc.types.BOX,
		Su = yc.types.SPHERE | yc.types.BOX,
		Eu = yc.types.PLANE | yc.types.BOX,
		Tu = yc.types.CONVEXPOLYHEDRON,
		Au = yc.types.SPHERE | yc.types.CONVEXPOLYHEDRON,
		Cu = yc.types.PLANE | yc.types.CONVEXPOLYHEDRON,
		Ru = yc.types.BOX | yc.types.CONVEXPOLYHEDRON,
		Lu = yc.types.SPHERE | yc.types.HEIGHTFIELD,
		Pu = yc.types.BOX | yc.types.HEIGHTFIELD,
		Iu = yc.types.CONVEXPOLYHEDRON | yc.types.HEIGHTFIELD,
		Du = yc.types.PARTICLE | yc.types.SPHERE,
		Nu = yc.types.PLANE | yc.types.PARTICLE,
		zu = yc.types.BOX | yc.types.PARTICLE,
		Bu = yc.types.PARTICLE | yc.types.CONVEXPOLYHEDRON,
		Ou = yc.types.CYLINDER,
		Fu = yc.types.SPHERE | yc.types.CYLINDER,
		Hu = yc.types.PLANE | yc.types.CYLINDER,
		ku = yc.types.BOX | yc.types.CYLINDER,
		Uu = yc.types.CONVEXPOLYHEDRON | yc.types.CYLINDER,
		Vu = yc.types.HEIGHTFIELD | yc.types.CYLINDER,
		Gu = yc.types.PARTICLE | yc.types.CYLINDER,
		Wu = yc.types.SPHERE | yc.types.TRIMESH,
		ju = yc.types.PLANE | yc.types.TRIMESH;
	class qu {
		get [wu]() {
			return this.sphereSphere;
		}
		get [bu]() {
			return this.spherePlane;
		}
		get [Mu]() {
			return this.boxBox;
		}
		get [Su]() {
			return this.sphereBox;
		}
		get [Eu]() {
			return this.planeBox;
		}
		get [Tu]() {
			return this.convexConvex;
		}
		get [Au]() {
			return this.sphereConvex;
		}
		get [Cu]() {
			return this.planeConvex;
		}
		get [Ru]() {
			return this.boxConvex;
		}
		get [Lu]() {
			return this.sphereHeightfield;
		}
		get [Pu]() {
			return this.boxHeightfield;
		}
		get [Iu]() {
			return this.convexHeightfield;
		}
		get [Du]() {
			return this.sphereParticle;
		}
		get [Nu]() {
			return this.planeParticle;
		}
		get [zu]() {
			return this.boxParticle;
		}
		get [Bu]() {
			return this.convexParticle;
		}
		get [Ou]() {
			return this.convexConvex;
		}
		get [Fu]() {
			return this.sphereConvex;
		}
		get [Hu]() {
			return this.planeConvex;
		}
		get [ku]() {
			return this.boxConvex;
		}
		get [Uu]() {
			return this.convexConvex;
		}
		get [Vu]() {
			return this.heightfieldCylinder;
		}
		get [Gu]() {
			return this.particleCylinder;
		}
		get [Wu]() {
			return this.sphereTrimesh;
		}
		get [ju]() {
			return this.planeTrimesh;
		}
		constructor(t) {
			(this.contactPointPool = []),
				(this.frictionEquationPool = []),
				(this.result = []),
				(this.frictionResult = []),
				(this.v3pool = new _u()),
				(this.world = t),
				(this.currentContactMaterial = t.defaultContactMaterial),
				(this.enableFrictionReduction = !1);
		}
		createContactEquation(t, e, n, i, r, s) {
			let o;
			this.contactPointPool.length ? ((o = this.contactPointPool.pop()), (o.bi = t), (o.bj = e)) : (o = new Gh(t, e)),
				(o.enabled = t.collisionResponse && e.collisionResponse && n.collisionResponse && i.collisionResponse);
			const a = this.currentContactMaterial;
			(o.restitution = a.restitution),
				o.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
			const l = n.material || t.material,
				c = i.material || e.material;
			return (
				l && c && l.restitution >= 0 && c.restitution >= 0 && (o.restitution = l.restitution * c.restitution),
				(o.si = r || n),
				(o.sj = s || i),
				o
			);
		}
		createFrictionEquationsFromContact(t, e) {
			const n = t.bi,
				i = t.bj,
				r = t.si,
				s = t.sj,
				o = this.world,
				a = this.currentContactMaterial;
			let l = a.friction;
			const c = r.material || n.material,
				h = s.material || i.material;
			if ((c && h && c.friction >= 0 && h.friction >= 0 && (l = c.friction * h.friction), l > 0)) {
				const r = l * o.gravity.length();
				let s = n.invMass + i.invMass;
				s > 0 && (s = 1 / s);
				const c = this.frictionEquationPool,
					h = c.length ? c.pop() : new ou(n, i, r * s),
					u = c.length ? c.pop() : new ou(n, i, r * s);
				return (
					(h.bi = u.bi = n),
					(h.bj = u.bj = i),
					(h.minForce = u.minForce = -r * s),
					(h.maxForce = u.maxForce = r * s),
					h.ri.copy(t.ri),
					h.rj.copy(t.rj),
					u.ri.copy(t.ri),
					u.rj.copy(t.rj),
					t.ni.tangents(h.t, u.t),
					h.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, o.dt),
					u.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, o.dt),
					(h.enabled = u.enabled = t.enabled),
					e.push(h, u),
					!0
				);
			}
			return !1;
		}
		createFrictionFromAverage(t) {
			let e = this.result[this.result.length - 1];
			if (!this.createFrictionEquationsFromContact(e, this.frictionResult) || 1 === t) return;
			const n = this.frictionResult[this.frictionResult.length - 2],
				i = this.frictionResult[this.frictionResult.length - 1];
			Xu.setZero(), Yu.setZero(), Zu.setZero();
			const r = e.bi;
			e.bj;
			for (let n = 0; n !== t; n++)
				(e = this.result[this.result.length - 1 - n]),
					e.bi !== r
						? (Xu.vadd(e.ni, Xu), Yu.vadd(e.ri, Yu), Zu.vadd(e.rj, Zu))
						: (Xu.vsub(e.ni, Xu), Yu.vadd(e.rj, Yu), Zu.vadd(e.ri, Zu));
			const s = 1 / t;
			Yu.scale(s, n.ri), Zu.scale(s, n.rj), i.ri.copy(n.ri), i.rj.copy(n.rj), Xu.normalize(), Xu.tangents(n.t, i.t);
		}
		getContacts(t, e, n, i, r, s, o) {
			(this.contactPointPool = r), (this.frictionEquationPool = o), (this.result = i), (this.frictionResult = s);
			const a = Ju,
				l = Qu,
				c = $u,
				h = Ku;
			for (let i = 0, r = t.length; i !== r; i++) {
				const r = t[i],
					s = e[i];
				let o = null;
				r.material && s.material && (o = n.getContactMaterial(r.material, s.material) || null);
				const u =
					(r.type & Rc.KINEMATIC && s.type & Rc.STATIC) ||
					(r.type & Rc.STATIC && s.type & Rc.KINEMATIC) ||
					(r.type & Rc.KINEMATIC && s.type & Rc.KINEMATIC);
				for (let t = 0; t < r.shapes.length; t++) {
					r.quaternion.mult(r.shapeOrientations[t], a), r.quaternion.vmult(r.shapeOffsets[t], c), c.vadd(r.position, c);
					const e = r.shapes[t];
					for (let t = 0; t < s.shapes.length; t++) {
						s.quaternion.mult(s.shapeOrientations[t], l),
							s.quaternion.vmult(s.shapeOffsets[t], h),
							h.vadd(s.position, h);
						const i = s.shapes[t];
						if (!(e.collisionFilterMask & i.collisionFilterGroup && i.collisionFilterMask & e.collisionFilterGroup))
							continue;
						if (c.distanceTo(h) > e.boundingSphereRadius + i.boundingSphereRadius) continue;
						let d = null;
						e.material && i.material && (d = n.getContactMaterial(e.material, i.material) || null),
							(this.currentContactMaterial = d || o || n.defaultContactMaterial);
						const p = this[e.type | i.type];
						if (p) {
							let t = !1;
							(t =
								e.type < i.type
									? p.call(this, e, i, c, h, a, l, r, s, e, i, u)
									: p.call(this, i, e, h, c, l, a, s, r, e, i, u)),
								t && u && (n.shapeOverlapKeeper.set(e.id, i.id), n.bodyOverlapKeeper.set(r.id, s.id));
						}
					}
				}
			}
		}
		sphereSphere(t, e, n, i, r, s, o, a, l, c, h) {
			if (h) return n.distanceSquared(i) < (t.radius + e.radius) ** 2;
			const u = this.createContactEquation(o, a, t, e, l, c);
			i.vsub(n, u.ni),
				u.ni.normalize(),
				u.ri.copy(u.ni),
				u.rj.copy(u.ni),
				u.ri.scale(t.radius, u.ri),
				u.rj.scale(-e.radius, u.rj),
				u.ri.vadd(n, u.ri),
				u.ri.vsub(o.position, u.ri),
				u.rj.vadd(i, u.rj),
				u.rj.vsub(a.position, u.rj),
				this.result.push(u),
				this.createFrictionEquationsFromContact(u, this.frictionResult);
		}
		spherePlane(t, e, n, i, r, s, o, a, l, c, h) {
			const u = this.createContactEquation(o, a, t, e, l, c);
			if (
				(u.ni.set(0, 0, 1),
				s.vmult(u.ni, u.ni),
				u.ni.negate(u.ni),
				u.ni.normalize(),
				u.ni.scale(t.radius, u.ri),
				n.vsub(i, yd),
				u.ni.scale(u.ni.dot(yd), xd),
				yd.vsub(xd, u.rj),
				-yd.dot(u.ni) <= t.radius)
			) {
				if (h) return !0;
				const t = u.ri,
					e = u.rj;
				t.vadd(n, t),
					t.vsub(o.position, t),
					e.vadd(i, e),
					e.vsub(a.position, e),
					this.result.push(u),
					this.createFrictionEquationsFromContact(u, this.frictionResult);
			}
		}
		boxBox(t, e, n, i, r, s, o, a, l, c, h) {
			return (
				(t.convexPolyhedronRepresentation.material = t.material),
				(e.convexPolyhedronRepresentation.material = e.material),
				(t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse),
				(e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse),
				this.convexConvex(t.convexPolyhedronRepresentation, e.convexPolyhedronRepresentation, n, i, r, s, o, a, t, e, h)
			);
		}
		sphereBox(t, e, n, i, r, s, o, a, l, c, h) {
			const u = this.v3pool,
				d = Cd;
			n.vsub(i, Sd), e.getSideNormals(d, s);
			const p = t.radius;
			let m = !1;
			const f = Ld,
				g = Pd,
				v = Id;
			let y = null,
				x = 0,
				_ = 0,
				w = 0,
				b = null;
			for (let t = 0, e = d.length; t !== e && !1 === m; t++) {
				const e = Ed;
				e.copy(d[t]);
				const n = e.length();
				e.normalize();
				const i = Sd.dot(e);
				if (i < n + p && i > 0) {
					const r = Td,
						s = Ad;
					r.copy(d[(t + 1) % 3]), s.copy(d[(t + 2) % 3]);
					const o = r.length(),
						a = s.length();
					r.normalize(), s.normalize();
					const l = Sd.dot(r),
						c = Sd.dot(s);
					if (l < o && l > -o && c < a && c > -a) {
						const t = Math.abs(i - n - p);
						if (
							(null === b || t < b) &&
							((b = t), (_ = l), (w = c), (y = n), f.copy(e), g.copy(r), v.copy(s), x++, h)
						)
							return !0;
					}
				}
			}
			if (x) {
				m = !0;
				const r = this.createContactEquation(o, a, t, e, l, c);
				f.scale(-p, r.ri),
					r.ni.copy(f),
					r.ni.negate(r.ni),
					f.scale(y, f),
					g.scale(_, g),
					f.vadd(g, f),
					v.scale(w, v),
					f.vadd(v, r.rj),
					r.ri.vadd(n, r.ri),
					r.ri.vsub(o.position, r.ri),
					r.rj.vadd(i, r.rj),
					r.rj.vsub(a.position, r.rj),
					this.result.push(r),
					this.createFrictionEquationsFromContact(r, this.frictionResult);
			}
			let M = u.get();
			const S = Rd;
			for (let r = 0; 2 !== r && !m; r++)
				for (let s = 0; 2 !== s && !m; s++)
					for (let u = 0; 2 !== u && !m; u++)
						if (
							(M.set(0, 0, 0),
							r ? M.vadd(d[0], M) : M.vsub(d[0], M),
							s ? M.vadd(d[1], M) : M.vsub(d[1], M),
							u ? M.vadd(d[2], M) : M.vsub(d[2], M),
							i.vadd(M, S),
							S.vsub(n, S),
							S.lengthSquared() < p * p)
						) {
							if (h) return !0;
							m = !0;
							const r = this.createContactEquation(o, a, t, e, l, c);
							r.ri.copy(S),
								r.ri.normalize(),
								r.ni.copy(r.ri),
								r.ri.scale(p, r.ri),
								r.rj.copy(M),
								r.ri.vadd(n, r.ri),
								r.ri.vsub(o.position, r.ri),
								r.rj.vadd(i, r.rj),
								r.rj.vsub(a.position, r.rj),
								this.result.push(r),
								this.createFrictionEquationsFromContact(r, this.frictionResult);
						}
			u.release(M), (M = null);
			const E = u.get(),
				T = u.get(),
				A = u.get(),
				C = u.get(),
				R = u.get(),
				L = d.length;
			for (let r = 0; r !== L && !m; r++)
				for (let s = 0; s !== L && !m; s++)
					if (r % 3 != s % 3) {
						d[s].cross(d[r], E), E.normalize(), d[r].vadd(d[s], T), A.copy(n), A.vsub(T, A), A.vsub(i, A);
						const u = A.dot(E);
						E.scale(u, C);
						let f = 0;
						for (; f === r % 3 || f === s % 3; ) f++;
						R.copy(n), R.vsub(C, R), R.vsub(T, R), R.vsub(i, R);
						const g = Math.abs(u),
							v = R.length();
						if (g < d[f].length() && v < p) {
							if (h) return !0;
							m = !0;
							const r = this.createContactEquation(o, a, t, e, l, c);
							T.vadd(C, r.rj),
								r.rj.copy(r.rj),
								R.negate(r.ni),
								r.ni.normalize(),
								r.ri.copy(r.rj),
								r.ri.vadd(i, r.ri),
								r.ri.vsub(n, r.ri),
								r.ri.normalize(),
								r.ri.scale(p, r.ri),
								r.ri.vadd(n, r.ri),
								r.ri.vsub(o.position, r.ri),
								r.rj.vadd(i, r.rj),
								r.rj.vsub(a.position, r.rj),
								this.result.push(r),
								this.createFrictionEquationsFromContact(r, this.frictionResult);
						}
					}
			u.release(E, T, A, C, R);
		}
		planeBox(t, e, n, i, r, s, o, a, l, c, h) {
			return (
				(e.convexPolyhedronRepresentation.material = e.material),
				(e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse),
				(e.convexPolyhedronRepresentation.id = e.id),
				this.planeConvex(t, e.convexPolyhedronRepresentation, n, i, r, s, o, a, t, e, h)
			);
		}
		convexConvex(t, e, n, i, r, s, o, a, l, c, h, u, d) {
			const p = Xd;
			if (
				!(n.distanceTo(i) > t.boundingSphereRadius + e.boundingSphereRadius) &&
				t.findSeparatingAxis(e, n, r, i, s, p, u, d)
			) {
				const u = [],
					d = Yd;
				t.clipAgainstHull(n, r, e, i, s, p, -100, 100, u);
				let m = 0;
				for (let r = 0; r !== u.length; r++) {
					if (h) return !0;
					const s = this.createContactEquation(o, a, t, e, l, c),
						f = s.ri,
						g = s.rj;
					p.negate(s.ni),
						u[r].normal.negate(d),
						d.scale(u[r].depth, d),
						u[r].point.vadd(d, f),
						g.copy(u[r].point),
						f.vsub(n, f),
						g.vsub(i, g),
						f.vadd(n, f),
						f.vsub(o.position, f),
						g.vadd(i, g),
						g.vsub(a.position, g),
						this.result.push(s),
						m++,
						this.enableFrictionReduction || this.createFrictionEquationsFromContact(s, this.frictionResult);
				}
				this.enableFrictionReduction && m && this.createFrictionFromAverage(m);
			}
		}
		sphereConvex(t, e, n, i, r, s, o, a, l, c, h) {
			const u = this.v3pool;
			n.vsub(i, Dd);
			const d = e.faceNormals,
				p = e.faces,
				m = e.vertices,
				f = t.radius;
			let g = !1;
			for (let r = 0; r !== m.length; r++) {
				const u = m[r],
					d = Od;
				s.vmult(u, d), i.vadd(d, d);
				const p = Bd;
				if ((d.vsub(n, p), p.lengthSquared() < f * f)) {
					if (h) return !0;
					g = !0;
					const r = this.createContactEquation(o, a, t, e, l, c);
					return (
						r.ri.copy(p),
						r.ri.normalize(),
						r.ni.copy(r.ri),
						r.ri.scale(f, r.ri),
						d.vsub(i, r.rj),
						r.ri.vadd(n, r.ri),
						r.ri.vsub(o.position, r.ri),
						r.rj.vadd(i, r.rj),
						r.rj.vsub(a.position, r.rj),
						this.result.push(r),
						void this.createFrictionEquationsFromContact(r, this.frictionResult)
					);
				}
			}
			for (let r = 0, v = p.length; r !== v && !1 === g; r++) {
				const v = d[r],
					y = p[r],
					x = Fd;
				s.vmult(v, x);
				const _ = Hd;
				s.vmult(m[y[0]], _), _.vadd(i, _);
				const w = kd;
				x.scale(-f, w), n.vadd(w, w);
				const b = Ud;
				w.vsub(_, b);
				const M = b.dot(x),
					S = Vd;
				if ((n.vsub(_, S), M < 0 && S.dot(x) > 0)) {
					const r = [];
					for (let t = 0, e = y.length; t !== e; t++) {
						const e = u.get();
						s.vmult(m[y[t]], e), i.vadd(e, e), r.push(e);
					}
					if (Md(r, x, n)) {
						if (h) return !0;
						g = !0;
						const s = this.createContactEquation(o, a, t, e, l, c);
						x.scale(-f, s.ri), x.negate(s.ni);
						const d = u.get();
						x.scale(-M, d);
						const p = u.get();
						x.scale(-f, p),
							n.vsub(i, s.rj),
							s.rj.vadd(p, s.rj),
							s.rj.vadd(d, s.rj),
							s.rj.vadd(i, s.rj),
							s.rj.vsub(a.position, s.rj),
							s.ri.vadd(n, s.ri),
							s.ri.vsub(o.position, s.ri),
							u.release(d),
							u.release(p),
							this.result.push(s),
							this.createFrictionEquationsFromContact(s, this.frictionResult);
						for (let t = 0, e = r.length; t !== e; t++) u.release(r[t]);
						return;
					}
					for (let d = 0; d !== y.length; d++) {
						const p = u.get(),
							g = u.get();
						s.vmult(m[y[(d + 1) % y.length]], p), s.vmult(m[y[(d + 2) % y.length]], g), i.vadd(p, p), i.vadd(g, g);
						const v = Nd;
						g.vsub(p, v);
						const x = zd;
						v.unit(x);
						const _ = u.get(),
							w = u.get();
						n.vsub(p, w);
						const b = w.dot(x);
						x.scale(b, _), _.vadd(p, _);
						const M = u.get();
						if ((_.vsub(n, M), b > 0 && b * b < v.lengthSquared() && M.lengthSquared() < f * f)) {
							if (h) return !0;
							const s = this.createContactEquation(o, a, t, e, l, c);
							_.vsub(i, s.rj),
								_.vsub(n, s.ni),
								s.ni.normalize(),
								s.ni.scale(f, s.ri),
								s.rj.vadd(i, s.rj),
								s.rj.vsub(a.position, s.rj),
								s.ri.vadd(n, s.ri),
								s.ri.vsub(o.position, s.ri),
								this.result.push(s),
								this.createFrictionEquationsFromContact(s, this.frictionResult);
							for (let t = 0, e = r.length; t !== e; t++) u.release(r[t]);
							return u.release(p), u.release(g), u.release(_), u.release(M), void u.release(w);
						}
						u.release(p), u.release(g), u.release(_), u.release(M), u.release(w);
					}
					for (let t = 0, e = r.length; t !== e; t++) u.release(r[t]);
				}
			}
		}
		planeConvex(t, e, n, i, r, s, o, a, l, c, h) {
			const u = Gd,
				d = Wd;
			d.set(0, 0, 1), r.vmult(d, d);
			let p = 0;
			const m = jd;
			for (let r = 0; r !== e.vertices.length; r++)
				if ((u.copy(e.vertices[r]), s.vmult(u, u), i.vadd(u, u), u.vsub(n, m), d.dot(m) <= 0)) {
					if (h) return !0;
					const r = this.createContactEquation(o, a, t, e, l, c),
						s = qd;
					d.scale(d.dot(m), s),
						u.vsub(s, s),
						s.vsub(n, r.ri),
						r.ni.copy(d),
						u.vsub(i, r.rj),
						r.ri.vadd(n, r.ri),
						r.ri.vsub(o.position, r.ri),
						r.rj.vadd(i, r.rj),
						r.rj.vsub(a.position, r.rj),
						this.result.push(r),
						p++,
						this.enableFrictionReduction || this.createFrictionEquationsFromContact(r, this.frictionResult);
				}
			this.enableFrictionReduction && p && this.createFrictionFromAverage(p);
		}
		boxConvex(t, e, n, i, r, s, o, a, l, c, h) {
			return (
				(t.convexPolyhedronRepresentation.material = t.material),
				(t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse),
				this.convexConvex(t.convexPolyhedronRepresentation, e, n, i, r, s, o, a, t, e, h)
			);
		}
		sphereHeightfield(t, e, n, i, r, s, o, a, l, c, h) {
			const u = e.data,
				d = t.radius,
				p = e.elementSize,
				m = lp,
				f = ap;
			xc.pointToLocalFrame(i, s, n, f);
			let g = Math.floor((f.x - d) / p) - 1,
				v = Math.ceil((f.x + d) / p) + 1,
				y = Math.floor((f.y - d) / p) - 1,
				x = Math.ceil((f.y + d) / p) + 1;
			if (v < 0 || x < 0 || g > u.length || y > u[0].length) return;
			g < 0 && (g = 0),
				v < 0 && (v = 0),
				y < 0 && (y = 0),
				x < 0 && (x = 0),
				g >= u.length && (g = u.length - 1),
				v >= u.length && (v = u.length - 1),
				x >= u[0].length && (x = u[0].length - 1),
				y >= u[0].length && (y = u[0].length - 1);
			const _ = [];
			e.getRectMinMax(g, y, v, x, _);
			const w = _[0],
				b = _[1];
			if (f.z - d > b || f.z + d < w) return;
			const M = this.result;
			for (let l = g; l < v; l++)
				for (let c = y; c < x; c++) {
					const u = M.length;
					let d = !1;
					if (
						(e.getConvexTrianglePillar(l, c, !1),
						xc.pointToWorldFrame(i, s, e.pillarOffset, m),
						n.distanceTo(m) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
							(d = this.sphereConvex(t, e.pillarConvex, n, m, r, s, o, a, t, e, h)),
						h && d)
					)
						return !0;
					if (
						(e.getConvexTrianglePillar(l, c, !0),
						xc.pointToWorldFrame(i, s, e.pillarOffset, m),
						n.distanceTo(m) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
							(d = this.sphereConvex(t, e.pillarConvex, n, m, r, s, o, a, t, e, h)),
						h && d)
					)
						return !0;
					if (M.length - u > 2) return;
				}
		}
		boxHeightfield(t, e, n, i, r, s, o, a, l, c, h) {
			return (
				(t.convexPolyhedronRepresentation.material = t.material),
				(t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse),
				this.convexHeightfield(t.convexPolyhedronRepresentation, e, n, i, r, s, o, a, t, e, h)
			);
		}
		convexHeightfield(t, e, n, i, r, s, o, a, l, c, h) {
			const u = e.data,
				d = e.elementSize,
				p = t.boundingSphereRadius,
				m = sp,
				f = op,
				g = rp;
			xc.pointToLocalFrame(i, s, n, g);
			let v = Math.floor((g.x - p) / d) - 1,
				y = Math.ceil((g.x + p) / d) + 1,
				x = Math.floor((g.y - p) / d) - 1,
				_ = Math.ceil((g.y + p) / d) + 1;
			if (y < 0 || _ < 0 || v > u.length || x > u[0].length) return;
			v < 0 && (v = 0),
				y < 0 && (y = 0),
				x < 0 && (x = 0),
				_ < 0 && (_ = 0),
				v >= u.length && (v = u.length - 1),
				y >= u.length && (y = u.length - 1),
				_ >= u[0].length && (_ = u[0].length - 1),
				x >= u[0].length && (x = u[0].length - 1);
			const w = [];
			e.getRectMinMax(v, x, y, _, w);
			const b = w[0],
				M = w[1];
			if (!(g.z - p > M || g.z + p < b))
				for (let l = v; l < y; l++)
					for (let c = x; c < _; c++) {
						let u = !1;
						if (
							(e.getConvexTrianglePillar(l, c, !1),
							xc.pointToWorldFrame(i, s, e.pillarOffset, m),
							n.distanceTo(m) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
								(u = this.convexConvex(t, e.pillarConvex, n, m, r, s, o, a, null, null, h, f, null)),
							h && u)
						)
							return !0;
						if (
							(e.getConvexTrianglePillar(l, c, !0),
							xc.pointToWorldFrame(i, s, e.pillarOffset, m),
							n.distanceTo(m) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius &&
								(u = this.convexConvex(t, e.pillarConvex, n, m, r, s, o, a, null, null, h, f, null)),
							h && u)
						)
							return !0;
					}
		}
		sphereParticle(t, e, n, i, r, s, o, a, l, c, h) {
			const u = Jd;
			if ((u.set(0, 0, 1), i.vsub(n, u), u.lengthSquared() <= t.radius * t.radius)) {
				if (h) return !0;
				const n = this.createContactEquation(a, o, e, t, l, c);
				u.normalize(),
					n.rj.copy(u),
					n.rj.scale(t.radius, n.rj),
					n.ni.copy(u),
					n.ni.negate(n.ni),
					n.ri.set(0, 0, 0),
					this.result.push(n),
					this.createFrictionEquationsFromContact(n, this.frictionResult);
			}
		}
		planeParticle(t, e, n, i, r, s, o, a, l, c, h) {
			const u = Zd;
			u.set(0, 0, 1), o.quaternion.vmult(u, u);
			const d = $d;
			if ((i.vsub(o.position, d), u.dot(d) <= 0)) {
				if (h) return !0;
				const n = this.createContactEquation(a, o, e, t, l, c);
				n.ni.copy(u), n.ni.negate(n.ni), n.ri.set(0, 0, 0);
				const r = Kd;
				u.scale(u.dot(i), r),
					i.vsub(r, r),
					n.rj.copy(r),
					this.result.push(n),
					this.createFrictionEquationsFromContact(n, this.frictionResult);
			}
		}
		boxParticle(t, e, n, i, r, s, o, a, l, c, h) {
			return (
				(t.convexPolyhedronRepresentation.material = t.material),
				(t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse),
				this.convexParticle(t.convexPolyhedronRepresentation, e, n, i, r, s, o, a, t, e, h)
			);
		}
		convexParticle(t, e, n, i, r, s, o, a, l, c, h) {
			let u = -1;
			const d = ep,
				p = ip;
			let m = null;
			const f = tp;
			if ((f.copy(i), f.vsub(n, f), r.conjugate(Qd), Qd.vmult(f, f), t.pointIsInside(f))) {
				t.worldVerticesNeedsUpdate && t.computeWorldVertices(n, r),
					t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(r);
				for (let e = 0, n = t.faces.length; e !== n; e++) {
					const n = [t.worldVertices[t.faces[e][0]]],
						r = t.worldFaceNormals[e];
					i.vsub(n[0], np);
					const s = -r.dot(np);
					if (null === m || Math.abs(s) < Math.abs(m)) {
						if (h) return !0;
						(m = s), (u = e), d.copy(r);
					}
				}
				if (-1 !== u) {
					const r = this.createContactEquation(a, o, e, t, l, c);
					d.scale(m, p), p.vadd(i, p), p.vsub(n, p), r.rj.copy(p), d.negate(r.ni), r.ri.set(0, 0, 0);
					const s = r.ri,
						h = r.rj;
					s.vadd(i, s),
						s.vsub(a.position, s),
						h.vadd(n, h),
						h.vsub(o.position, h),
						this.result.push(r),
						this.createFrictionEquationsFromContact(r, this.frictionResult);
				} else console.warn("Point found inside convex, but did not find penetrating face!");
			}
		}
		heightfieldCylinder(t, e, n, i, r, s, o, a, l, c, h) {
			return this.convexHeightfield(e, t, i, n, s, r, a, o, l, c, h);
		}
		particleCylinder(t, e, n, i, r, s, o, a, l, c, h) {
			return this.convexParticle(e, t, i, n, s, r, a, o, l, c, h);
		}
		sphereTrimesh(t, e, n, i, r, s, o, a, l, c, h) {
			const u = ad,
				d = ld,
				p = cd,
				m = hd,
				f = ud,
				g = dd,
				v = gd,
				y = od,
				x = rd,
				_ = vd;
			xc.pointToLocalFrame(i, s, n, f);
			const w = t.radius;
			v.lowerBound.set(f.x - w, f.y - w, f.z - w), v.upperBound.set(f.x + w, f.y + w, f.z + w), e.getTrianglesInAABB(v, _);
			const b = sd,
				M = t.radius * t.radius;
			for (let r = 0; r < _.length; r++)
				for (let u = 0; u < 3; u++)
					if ((e.getVertex(e.indices[3 * _[r] + u], b), b.vsub(f, x), x.lengthSquared() <= M)) {
						if ((y.copy(b), xc.pointToWorldFrame(i, s, y, b), b.vsub(n, x), h)) return !0;
						let r = this.createContactEquation(o, a, t, e, l, c);
						r.ni.copy(x),
							r.ni.normalize(),
							r.ri.copy(r.ni),
							r.ri.scale(t.radius, r.ri),
							r.ri.vadd(n, r.ri),
							r.ri.vsub(o.position, r.ri),
							r.rj.copy(b),
							r.rj.vsub(a.position, r.rj),
							this.result.push(r),
							this.createFrictionEquationsFromContact(r, this.frictionResult);
					}
			for (let r = 0; r < _.length; r++)
				for (let v = 0; v < 3; v++) {
					e.getVertex(e.indices[3 * _[r] + v], u),
						e.getVertex(e.indices[3 * _[r] + ((v + 1) % 3)], d),
						d.vsub(u, p),
						f.vsub(d, g);
					const y = g.dot(p);
					f.vsub(u, g);
					let x = g.dot(p);
					if (
						x > 0 &&
						y < 0 &&
						(f.vsub(u, g),
						m.copy(p),
						m.normalize(),
						(x = g.dot(m)),
						m.scale(x, g),
						g.vadd(u, g),
						g.distanceTo(f) < t.radius)
					) {
						if (h) return !0;
						const r = this.createContactEquation(o, a, t, e, l, c);
						g.vsub(f, r.ni),
							r.ni.normalize(),
							r.ni.scale(t.radius, r.ri),
							r.ri.vadd(n, r.ri),
							r.ri.vsub(o.position, r.ri),
							xc.pointToWorldFrame(i, s, g, g),
							g.vsub(a.position, r.rj),
							xc.vectorToWorldFrame(s, r.ni, r.ni),
							xc.vectorToWorldFrame(s, r.ri, r.ri),
							this.result.push(r),
							this.createFrictionEquationsFromContact(r, this.frictionResult);
					}
				}
			const S = pd,
				E = md,
				T = fd,
				A = id;
			for (let r = 0, u = _.length; r !== u; r++) {
				e.getTriangleVertices(_[r], S, E, T), e.getNormal(_[r], A), f.vsub(S, g);
				let u = g.dot(A);
				if ((A.scale(u, g), f.vsub(g, g), (u = g.distanceTo(f)), ih.pointInTriangle(g, S, E, T) && u < t.radius)) {
					if (h) return !0;
					let r = this.createContactEquation(o, a, t, e, l, c);
					g.vsub(f, r.ni),
						r.ni.normalize(),
						r.ni.scale(t.radius, r.ri),
						r.ri.vadd(n, r.ri),
						r.ri.vsub(o.position, r.ri),
						xc.pointToWorldFrame(i, s, g, g),
						g.vsub(a.position, r.rj),
						xc.vectorToWorldFrame(s, r.ni, r.ni),
						xc.vectorToWorldFrame(s, r.ri, r.ri),
						this.result.push(r),
						this.createFrictionEquationsFromContact(r, this.frictionResult);
				}
			}
			_.length = 0;
		}
		planeTrimesh(t, e, n, i, r, s, o, a, l, c, h) {
			const u = new oc(),
				d = td;
			d.set(0, 0, 1), r.vmult(d, d);
			for (let r = 0; r < e.vertices.length / 3; r++) {
				e.getVertex(r, u);
				const p = new oc();
				p.copy(u), xc.pointToWorldFrame(i, s, p, u);
				const m = ed;
				if ((u.vsub(n, m), d.dot(m) <= 0)) {
					if (h) return !0;
					const n = this.createContactEquation(o, a, t, e, l, c);
					n.ni.copy(d);
					const i = nd;
					d.scale(m.dot(d), i),
						u.vsub(i, i),
						n.ri.copy(i),
						n.ri.vsub(o.position, n.ri),
						n.rj.copy(u),
						n.rj.vsub(a.position, n.rj),
						this.result.push(n),
						this.createFrictionEquationsFromContact(n, this.frictionResult);
				}
			}
		}
	}
	const Xu = new oc(),
		Yu = new oc(),
		Zu = new oc(),
		$u = new oc(),
		Ku = new oc(),
		Ju = new fc(),
		Qu = new fc(),
		td = new oc(),
		ed = new oc(),
		nd = new oc(),
		id = new oc(),
		rd = new oc();
	new oc();
	const sd = new oc(),
		od = new oc(),
		ad = new oc(),
		ld = new oc(),
		cd = new oc(),
		hd = new oc(),
		ud = new oc(),
		dd = new oc(),
		pd = new oc(),
		md = new oc(),
		fd = new oc(),
		gd = new hc(),
		vd = [],
		yd = new oc(),
		xd = new oc(),
		_d = new oc(),
		wd = new oc(),
		bd = new oc();
	function Md(t, e, n) {
		let i = null;
		const r = t.length;
		for (let s = 0; s !== r; s++) {
			const o = t[s],
				a = _d;
			t[(s + 1) % r].vsub(o, a);
			const l = wd;
			a.cross(e, l);
			const c = bd;
			n.vsub(o, c);
			const h = l.dot(c);
			if (!(null === i || (h > 0 && !0 === i) || (h <= 0 && !1 === i))) return !1;
			null === i && (i = h > 0);
		}
		return !0;
	}
	const Sd = new oc(),
		Ed = new oc(),
		Td = new oc(),
		Ad = new oc(),
		Cd = [new oc(), new oc(), new oc(), new oc(), new oc(), new oc()],
		Rd = new oc(),
		Ld = new oc(),
		Pd = new oc(),
		Id = new oc(),
		Dd = new oc(),
		Nd = new oc(),
		zd = new oc(),
		Bd = new oc(),
		Od = new oc(),
		Fd = new oc(),
		Hd = new oc(),
		kd = new oc(),
		Ud = new oc(),
		Vd = new oc();
	new oc(), new oc();
	const Gd = new oc(),
		Wd = new oc(),
		jd = new oc(),
		qd = new oc(),
		Xd = new oc(),
		Yd = new oc(),
		Zd = new oc(),
		$d = new oc(),
		Kd = new oc(),
		Jd = new oc(),
		Qd = new fc(),
		tp = new oc();
	new oc();
	const ep = new oc(),
		np = new oc(),
		ip = new oc(),
		rp = new oc(),
		sp = new oc(),
		op = [0],
		ap = new oc(),
		lp = new oc();
	class cp {
		constructor() {
			(this.current = []), (this.previous = []);
		}
		getKey(t, e) {
			if (e < t) {
				const n = e;
				(e = t), (t = n);
			}
			return (t << 16) | e;
		}
		set(t, e) {
			const n = this.getKey(t, e),
				i = this.current;
			let r = 0;
			for (; n > i[r]; ) r++;
			if (n !== i[r]) {
				for (let t = i.length - 1; t >= r; t--) i[t + 1] = i[t];
				i[r] = n;
			}
		}
		tick() {
			const t = this.current;
			(this.current = this.previous), (this.previous = t), (this.current.length = 0);
		}
		getDiff(t, e) {
			const n = this.current,
				i = this.previous,
				r = n.length,
				s = i.length;
			let o = 0;
			for (let e = 0; e < r; e++) {
				let r = !1;
				const s = n[e];
				for (; s > i[o]; ) o++;
				(r = s === i[o]), r || hp(t, s);
			}
			o = 0;
			for (let t = 0; t < s; t++) {
				let r = !1;
				const s = i[t];
				for (; s > n[o]; ) o++;
				(r = n[o] === s), r || hp(e, s);
			}
		}
	}
	function hp(t, e) {
		t.push((4294901760 & e) >> 16, 65535 & e);
	}
	const up = (t, e) => (t < e ? `${t}-${e}` : `${e}-${t}`);
	class dp {
		constructor() {
			this.data = { keys: [] };
		}
		get(t, e) {
			const n = up(t, e);
			return this.data[n];
		}
		set(t, e, n) {
			const i = up(t, e);
			this.get(t, e) || this.data.keys.push(i), (this.data[i] = n);
		}
		delete(t, e) {
			const n = up(t, e),
				i = this.data.keys.indexOf(n);
			-1 !== i && this.data.keys.splice(i, 1), delete this.data[n];
		}
		reset() {
			const t = this.data,
				e = t.keys;
			for (; e.length > 0; ) delete t[e.pop()];
		}
	}
	class pp extends mc {
		constructor(t) {
			void 0 === t && (t = {}),
				super(),
				(this.dt = -1),
				(this.allowSleep = !!t.allowSleep),
				(this.contacts = []),
				(this.frictionEquations = []),
				(this.quatNormalizeSkip = void 0 !== t.quatNormalizeSkip ? t.quatNormalizeSkip : 0),
				(this.quatNormalizeFast = void 0 !== t.quatNormalizeFast && t.quatNormalizeFast),
				(this.time = 0),
				(this.stepnumber = 0),
				(this.default_dt = 1 / 60),
				(this.nextId = 0),
				(this.gravity = new oc()),
				t.gravity && this.gravity.copy(t.gravity),
				(this.broadphase = void 0 !== t.broadphase ? t.broadphase : new Yc()),
				(this.bodies = []),
				(this.hasActiveBodies = !1),
				(this.solver = void 0 !== t.solver ? t.solver : new gu()),
				(this.constraints = []),
				(this.narrowphase = new qu(this)),
				(this.collisionMatrix = new pc()),
				(this.collisionMatrixPrevious = new pc()),
				(this.bodyOverlapKeeper = new cp()),
				(this.shapeOverlapKeeper = new cp()),
				(this.contactmaterials = []),
				(this.contactMaterialTable = new dp()),
				(this.defaultMaterial = new hu("default")),
				(this.defaultContactMaterial = new cu(this.defaultMaterial, this.defaultMaterial, {
					friction: 0.3,
					restitution: 0,
				})),
				(this.doProfiling = !1),
				(this.profile = { solve: 0, makeContactConstraints: 0, broadphase: 0, integrate: 0, narrowphase: 0 }),
				(this.accumulator = 0),
				(this.subsystems = []),
				(this.addBodyEvent = { type: "addBody", body: null }),
				(this.removeBodyEvent = { type: "removeBody", body: null }),
				(this.idToBodyMap = {}),
				this.broadphase.setWorld(this);
		}
		getContactMaterial(t, e) {
			return this.contactMaterialTable.get(t.id, e.id);
		}
		collisionMatrixTick() {
			const t = this.collisionMatrixPrevious;
			(this.collisionMatrixPrevious = this.collisionMatrix),
				(this.collisionMatrix = t),
				this.collisionMatrix.reset(),
				this.bodyOverlapKeeper.tick(),
				this.shapeOverlapKeeper.tick();
		}
		addConstraint(t) {
			this.constraints.push(t);
		}
		removeConstraint(t) {
			const e = this.constraints.indexOf(t);
			-1 !== e && this.constraints.splice(e, 1);
		}
		rayTest(t, e, n) {
			n instanceof Zc
				? this.raycastClosest(t, e, { skipBackfaces: !0 }, n)
				: this.raycastAll(t, e, { skipBackfaces: !0 }, n);
		}
		raycastAll(t, e, n, i) {
			return (
				void 0 === n && (n = {}),
				(n.mode = ih.ALL),
				(n.from = t),
				(n.to = e),
				(n.callback = i),
				mp.intersectWorld(this, n)
			);
		}
		raycastAny(t, e, n, i) {
			return (
				void 0 === n && (n = {}), (n.mode = ih.ANY), (n.from = t), (n.to = e), (n.result = i), mp.intersectWorld(this, n)
			);
		}
		raycastClosest(t, e, n, i) {
			return (
				void 0 === n && (n = {}),
				(n.mode = ih.CLOSEST),
				(n.from = t),
				(n.to = e),
				(n.result = i),
				mp.intersectWorld(this, n)
			);
		}
		addBody(t) {
			this.bodies.includes(t) ||
				((t.index = this.bodies.length),
				this.bodies.push(t),
				(t.world = this),
				t.initPosition.copy(t.position),
				t.initVelocity.copy(t.velocity),
				(t.timeLastSleepy = this.time),
				t instanceof Rc && (t.initAngularVelocity.copy(t.angularVelocity), t.initQuaternion.copy(t.quaternion)),
				this.collisionMatrix.setNumObjects(this.bodies.length),
				(this.addBodyEvent.body = t),
				(this.idToBodyMap[t.id] = t),
				this.dispatchEvent(this.addBodyEvent));
		}
		removeBody(t) {
			t.world = null;
			const e = this.bodies.length - 1,
				n = this.bodies,
				i = n.indexOf(t);
			if (-1 !== i) {
				n.splice(i, 1);
				for (let t = 0; t !== n.length; t++) n[t].index = t;
				this.collisionMatrix.setNumObjects(e),
					(this.removeBodyEvent.body = t),
					delete this.idToBodyMap[t.id],
					this.dispatchEvent(this.removeBodyEvent);
			}
		}
		getBodyById(t) {
			return this.idToBodyMap[t];
		}
		getShapeById(t) {
			const e = this.bodies;
			for (let n = 0; n < e.length; n++) {
				const i = e[n].shapes;
				for (let e = 0; e < i.length; e++) {
					const n = i[e];
					if (n.id === t) return n;
				}
			}
			return null;
		}
		addContactMaterial(t) {
			this.contactmaterials.push(t), this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t);
		}
		removeContactMaterial(t) {
			const e = this.contactmaterials.indexOf(t);
			-1 !== e &&
				(this.contactmaterials.splice(e, 1), this.contactMaterialTable.delete(t.materials[0].id, t.materials[1].id));
		}
		fixedStep(t, e) {
			void 0 === t && (t = 1 / 60), void 0 === e && (e = 10);
			const n = fp.now() / 1e3;
			if (this.lastCallTime) {
				const i = n - this.lastCallTime;
				this.step(t, i, e);
			} else this.step(t, void 0, e);
			this.lastCallTime = n;
		}
		step(t, e, n) {
			if ((void 0 === n && (n = 10), void 0 === e)) this.internalStep(t), (this.time += t);
			else {
				this.accumulator += e;
				const i = fp.now();
				let r = 0;
				for (
					;
					this.accumulator >= t &&
					r < n &&
					(this.internalStep(t), (this.accumulator -= t), r++, !(fp.now() - i > 1e3 * t));

				);
				this.accumulator = this.accumulator % t;
				const s = this.accumulator / t;
				for (let t = 0; t !== this.bodies.length; t++) {
					const e = this.bodies[t];
					e.previousPosition.lerp(e.position, s, e.interpolatedPosition),
						e.previousQuaternion.slerp(e.quaternion, s, e.interpolatedQuaternion),
						e.previousQuaternion.normalize();
				}
				this.time += e;
			}
		}
		internalStep(t) {
			this.dt = t;
			const e = this.contacts,
				n = wp,
				i = bp,
				r = this.bodies.length,
				s = this.bodies,
				o = this.solver,
				a = this.gravity,
				l = this.doProfiling,
				c = this.profile,
				h = Rc.DYNAMIC;
			let u = -1 / 0;
			const d = this.constraints,
				p = _p;
			a.length();
			const m = a.x,
				f = a.y,
				g = a.z;
			let v = 0;
			for (l && (u = fp.now()), v = 0; v !== r; v++) {
				const t = s[v];
				if (t.type === h) {
					const e = t.force,
						n = t.mass;
					(e.x += n * m), (e.y += n * f), (e.z += n * g);
				}
			}
			for (let t = 0, e = this.subsystems.length; t !== e; t++) this.subsystems[t].update();
			l && (u = fp.now()),
				(n.length = 0),
				(i.length = 0),
				this.broadphase.collisionPairs(this, n, i),
				l && (c.broadphase = fp.now() - u);
			let y = d.length;
			for (v = 0; v !== y; v++) {
				const t = d[v];
				if (!t.collideConnected)
					for (let e = n.length - 1; e >= 0; e -= 1)
						((t.bodyA === n[e] && t.bodyB === i[e]) || (t.bodyB === n[e] && t.bodyA === i[e])) &&
							(n.splice(e, 1), i.splice(e, 1));
			}
			this.collisionMatrixTick(), l && (u = fp.now());
			const x = xp,
				_ = e.length;
			for (v = 0; v !== _; v++) x.push(e[v]);
			e.length = 0;
			const w = this.frictionEquations.length;
			for (v = 0; v !== w; v++) p.push(this.frictionEquations[v]);
			for (
				this.frictionEquations.length = 0,
					this.narrowphase.getContacts(n, i, this, e, x, this.frictionEquations, p),
					l && (c.narrowphase = fp.now() - u),
					l && (u = fp.now()),
					v = 0;
				v < this.frictionEquations.length;
				v++
			)
				o.addEquation(this.frictionEquations[v]);
			const b = e.length;
			for (let t = 0; t !== b; t++) {
				const n = e[t],
					i = n.bi,
					r = n.bj,
					s = n.si,
					a = n.sj;
				let l;
				(l =
					(i.material && r.material && this.getContactMaterial(i.material, r.material)) || this.defaultContactMaterial),
					l.friction,
					i.material &&
						r.material &&
						(i.material.friction >= 0 && r.material.friction >= 0 && (i.material.friction, r.material.friction),
						i.material.restitution >= 0 &&
							r.material.restitution >= 0 &&
							(n.restitution = i.material.restitution * r.material.restitution)),
					o.addEquation(n),
					i.allowSleep &&
						i.type === Rc.DYNAMIC &&
						i.sleepState === Rc.SLEEPING &&
						r.sleepState === Rc.AWAKE &&
						r.type !== Rc.STATIC &&
						r.velocity.lengthSquared() + r.angularVelocity.lengthSquared() >= 2 * r.sleepSpeedLimit ** 2 &&
						(i.wakeUpAfterNarrowphase = !0),
					r.allowSleep &&
						r.type === Rc.DYNAMIC &&
						r.sleepState === Rc.SLEEPING &&
						i.sleepState === Rc.AWAKE &&
						i.type !== Rc.STATIC &&
						i.velocity.lengthSquared() + i.angularVelocity.lengthSquared() >= 2 * i.sleepSpeedLimit ** 2 &&
						(r.wakeUpAfterNarrowphase = !0),
					this.collisionMatrix.set(i, r, !0),
					this.collisionMatrixPrevious.get(i, r) ||
						((yp.body = r), (yp.contact = n), i.dispatchEvent(yp), (yp.body = i), r.dispatchEvent(yp)),
					this.bodyOverlapKeeper.set(i.id, r.id),
					this.shapeOverlapKeeper.set(s.id, a.id);
			}
			for (
				this.emitContactEvents(), l && ((c.makeContactConstraints = fp.now() - u), (u = fp.now())), v = 0;
				v !== r;
				v++
			) {
				const t = s[v];
				t.wakeUpAfterNarrowphase && (t.wakeUp(), (t.wakeUpAfterNarrowphase = !1));
			}
			for (y = d.length, v = 0; v !== y; v++) {
				const t = d[v];
				t.update();
				for (let e = 0, n = t.equations.length; e !== n; e++) {
					const n = t.equations[e];
					o.addEquation(n);
				}
			}
			o.solve(t, this), l && (c.solve = fp.now() - u), o.removeAllEquations();
			const M = Math.pow;
			for (v = 0; v !== r; v++) {
				const e = s[v];
				if (e.type & h) {
					const n = M(1 - e.linearDamping, t),
						i = e.velocity;
					i.scale(n, i);
					const r = e.angularVelocity;
					if (r) {
						const n = M(1 - e.angularDamping, t);
						r.scale(n, r);
					}
				}
			}
			this.dispatchEvent(vp), l && (u = fp.now());
			const S = this.stepnumber % (this.quatNormalizeSkip + 1) == 0,
				E = this.quatNormalizeFast;
			for (v = 0; v !== r; v++) s[v].integrate(t, S, E);
			this.clearForces(),
				(this.broadphase.dirty = !0),
				l && (c.integrate = fp.now() - u),
				(this.stepnumber += 1),
				this.dispatchEvent(gp);
			let T = !0;
			if (this.allowSleep)
				for (T = !1, v = 0; v !== r; v++) {
					const t = s[v];
					t.sleepTick(this.time), t.sleepState !== Rc.SLEEPING && (T = !0);
				}
			this.hasActiveBodies = T;
		}
		emitContactEvents() {
			const t = this.hasAnyEventListener("beginContact"),
				e = this.hasAnyEventListener("endContact");
			if (((t || e) && this.bodyOverlapKeeper.getDiff(Mp, Sp), t)) {
				for (let t = 0, e = Mp.length; t < e; t += 2)
					(Ep.bodyA = this.getBodyById(Mp[t])), (Ep.bodyB = this.getBodyById(Mp[t + 1])), this.dispatchEvent(Ep);
				Ep.bodyA = Ep.bodyB = null;
			}
			if (e) {
				for (let t = 0, e = Sp.length; t < e; t += 2)
					(Tp.bodyA = this.getBodyById(Sp[t])), (Tp.bodyB = this.getBodyById(Sp[t + 1])), this.dispatchEvent(Tp);
				Tp.bodyA = Tp.bodyB = null;
			}
			Mp.length = Sp.length = 0;
			const n = this.hasAnyEventListener("beginShapeContact"),
				i = this.hasAnyEventListener("endShapeContact");
			if (((n || i) && this.shapeOverlapKeeper.getDiff(Mp, Sp), n)) {
				for (let t = 0, e = Mp.length; t < e; t += 2) {
					const e = this.getShapeById(Mp[t]),
						n = this.getShapeById(Mp[t + 1]);
					(Ap.shapeA = e), (Ap.shapeB = n), e && (Ap.bodyA = e.body), n && (Ap.bodyB = n.body), this.dispatchEvent(Ap);
				}
				Ap.bodyA = Ap.bodyB = Ap.shapeA = Ap.shapeB = null;
			}
			if (i) {
				for (let t = 0, e = Sp.length; t < e; t += 2) {
					const e = this.getShapeById(Sp[t]),
						n = this.getShapeById(Sp[t + 1]);
					(Cp.shapeA = e), (Cp.shapeB = n), e && (Cp.bodyA = e.body), n && (Cp.bodyB = n.body), this.dispatchEvent(Cp);
				}
				Cp.bodyA = Cp.bodyB = Cp.shapeA = Cp.shapeB = null;
			}
		}
		clearForces() {
			const t = this.bodies,
				e = t.length;
			for (let n = 0; n !== e; n++) {
				const e = t[n];
				e.force, e.torque, e.force.set(0, 0, 0), e.torque.set(0, 0, 0);
			}
		}
	}
	new hc();
	const mp = new ih(),
		fp = globalThis.performance || {};
	if (!fp.now) {
		let t = Date.now();
		fp.timing && fp.timing.navigationStart && (t = fp.timing.navigationStart), (fp.now = () => Date.now() - t);
	}
	new oc();
	const gp = { type: "postStep" },
		vp = { type: "preStep" },
		yp = { type: Rc.COLLIDE_EVENT_NAME, body: null, contact: null },
		xp = [],
		_p = [],
		wp = [],
		bp = [],
		Mp = [],
		Sp = [],
		Ep = { type: "beginContact", bodyA: null, bodyB: null },
		Tp = { type: "endContact", bodyA: null, bodyB: null },
		Ap = { type: "beginShapeContact", bodyA: null, bodyB: null, shapeA: null, shapeB: null },
		Cp = { type: "endShapeContact", bodyA: null, bodyB: null, shapeA: null, shapeB: null };
	class Rp {
		constructor() {
			(this.experience = new Ym()),
				(this.scene = this.experience.scene),
				(this.worldPhysics = this.experience.worldPhysics.instance),
				(this.resources = this.experience.resources),
				this.setGeometry(),
				this.setTextures(),
				this.setMaterial(),
				this.setMesh(),
				this.setPhysics();
		}
		setGeometry() {
			this.geometry = new Vn(64, 64, 32, 32);
		}
		setTextures() {
			(this.textures = {}),
				(this.textures.occlusion = this.resources.items.occlusionTexture),
				this.textures.occlusion.repeat.set(2, 2),
				(this.textures.occlusion.wrapS = r),
				(this.textures.occlusion.wrapT = r),
				(this.textures.base = this.resources.items.baseTexture),
				this.textures.base.repeat.set(2, 2),
				(this.textures.base.wrapS = r),
				(this.textures.base.wrapT = r),
				(this.textures.height = this.resources.items.heightTexture),
				this.textures.height.repeat.set(2, 2),
				(this.textures.height.wrapS = r),
				(this.textures.height.wrapT = r),
				(this.textures.normal = this.resources.items.normalTexture),
				this.textures.normal.repeat.set(2, 2),
				(this.textures.normal.wrapS = r),
				(this.textures.normal.wrapT = r),
				(this.textures.roughness = this.resources.items.roughnessTexture),
				this.textures.roughness.repeat.set(2, 2),
				(this.textures.roughness.wrapS = r),
				(this.textures.roughness.wrapT = r);
		}
		setMaterial() {
			this.material = new ba({
				map: this.textures.base,
				aoMap: this.textures.occlusion,
				aoMapIntensity: 1,
				displacementMap: this.textures.height,
				displacementScale: 0.5,
				normalMap: this.textures.normal,
				roughnessMap: this.textures.roughness,
				roughness: 0.5,
			});
		}
		setMesh() {
			(this.mesh = new _n(this.geometry, this.material)),
				(this.mesh.rotation.x = 0.5 * -Math.PI),
				(this.mesh.receiveShadow = !0),
				this.scene.add(this.mesh);
		}
		setPhysics() {
			(this.body = new Rc({ type: Rc.STATIC, shape: new Tc(new oc(36, 0.01, 36)) })),
				(this.body.position.y += 0.5),
				this.worldPhysics.addBody(this.body);
		}
	}
	class Lp {
		constructor() {
			(this.experience = new Ym()),
				(this.resources = this.experience.resources),
				(this.resource = this.resources.items.carModel),
				this.setModel();
		}
		setModel() {
			(this.model = this.resource.scene),
				(this.chassisMesh = this.model.getObjectByName("Body_blue_0")),
				(this.engine = this.addPartToChassis("engine_engine001_0")),
				(this.engine_part1 = this.addPartToChassis("engine_part_engine001_0")),
				(this.engine_part2 = this.addPartToChassis("engine_part002_engine001_0")),
				(this.engine_part3 = this.addPartToChassis("engine_part001_engine001_0")),
				(this.frontWheelMesh1 = this.model.getObjectByName("front_right_wheel_front_wheel_0")),
				(this.frontWheelMesh2 = this.model.getObjectByName("front_left_wheel_front_wheel_0")),
				(this.rearWheelMesh1 = this.model.getObjectByName("rear_right_wheel_rear_wheel_0")),
				(this.rearWheelMesh2 = this.model.getObjectByName("rear_left_wheel_rear_wheel_0"));
		}
		addPartToChassis(t) {
			const e = this.model.getObjectByName(t);
			let n = new Et();
			return e.getWorldPosition(n), e.position.copy(this.chassisMesh.worldToLocal(n)), this.chassisMesh.add(e), e;
		}
		createShapeFromMesh(t) {
			let e = new Ct().setFromObject(t),
				n = new Et();
			return e.getSize(n), new fu(0.5 * n.y, 0.5 * n.z, n.x, 32);
		}
		updateMeshPosition(t, e) {
			t.position.copy(e.position), t.quaternion.copy(e.quaternion);
		}
	}
	class Pp {
		constructor() {
			(this.car = new Np()), (this.maxSteerVal = Math.PI / 8), (this.maxForce = 10), this.setSteering();
		}
		setSteering() {
			document.addEventListener("keydown", (t) => {
				switch (t.key) {
					case "w":
					case "ArrowUp":
						this.car.vehicle.setWheelForce(this.maxForce, 0), this.car.vehicle.setWheelForce(-this.maxForce, 1);
						break;
					case "s":
					case "ArrowDown":
						this.car.vehicle.setWheelForce(0.5 * -this.maxForce, 0),
							this.car.vehicle.setWheelForce(0.5 * this.maxForce, 1);
						break;
					case "a":
					case "ArrowLeft":
						this.car.vehicle.setSteeringValue(this.maxSteerVal, 2),
							this.car.vehicle.setSteeringValue(this.maxSteerVal, 3);
						break;
					case "d":
					case "ArrowRight":
						this.car.vehicle.setSteeringValue(-this.maxSteerVal, 2),
							this.car.vehicle.setSteeringValue(-this.maxSteerVal, 3);
				}
			}),
				document.addEventListener("keyup", (t) => {
					switch (t.key) {
						case "w":
						case "ArrowUp":
						case "s":
						case "ArrowDown":
							this.car.vehicle.setWheelForce(0, 0), this.car.vehicle.setWheelForce(0, 1);
							break;
						case "a":
						case "ArrowLeft":
						case "d":
						case "ArrowRight":
							this.car.vehicle.setSteeringValue(0, 2), this.car.vehicle.setSteeringValue(0, 3);
					}
				});
		}
	}
	class Ip {
		constructor() {
			(this.car = new Np()), (this.experience = new Ym()), (this.scene = this.experience.scene), this.setPhysics();
		}
		setPhysics() {
			const t = new hu("wheel"),
				e = new oc(0, -1, 0),
				n = new fc().setFromEuler(0, 0, -Math.PI / 2),
				i = new Ct().setFromObject(this.car.carModel.chassisMesh),
				r = new Et();
			i.getSize(r);
			const s = this.car.carModel.chassisMesh.getWorldPosition(new Et()),
				o = this.toCannonVec3(s),
				a = new Rc({ mass: 6, shape: new Tc(new oc(0.5 * r.x, 0.5 * r.y, 0.5 * r.z)), position: o });
			(a.position.y += 5), (this.vehicle = new du({ chassisBody: a }));
			const l = [
					this.car.carModel.rearWheelMesh1,
					this.car.carModel.rearWheelMesh2,
					this.car.carModel.frontWheelMesh1,
					this.car.carModel.frontWheelMesh2,
				],
				c = l.map((t) => this.car.carModel.createShapeFromMesh(t));
			l.forEach((i, r) => {
				const s = i.getWorldPosition(new Et()),
					a = this.toCannonVec3(s).vsub(o),
					l = new Rc({ mass: 1, material: t });
				l.addShape(c[r], new oc(), n);
				const h = new oc(r % 2 == 0 ? -1 : 1, 0, 0);
				this.vehicle.addWheel({ body: l, position: a, axis: h, direction: e }), (l.angularDamping = 0.4);
			}),
				this.vehicle.addToWorld(this.experience.worldPhysics.instance),
				this.scene.add(this.car.carModel.chassisMesh),
				this.scene.add(this.car.carModel.frontWheelMesh1),
				this.scene.add(this.car.carModel.frontWheelMesh2),
				this.scene.add(this.car.carModel.rearWheelMesh1),
				this.scene.add(this.car.carModel.rearWheelMesh2);
		}
		toCannonVec3(t) {
			return new oc(t.x, t.y, t.z);
		}
	}
	let Dp = null;
	class Np {
		constructor() {
			if (Dp) return Dp;
			(Dp = this),
				(this.experience = new Ym()),
				(this.scene = this.experience.scene),
				(this.camera = this.experience.camera.instance),
				(this.carModel = new Lp()),
				(this.carControllers = new Pp()),
				(this.carPhysics = new Ip()),
				(this.vehicle = this.carPhysics.vehicle),
				(this.time = this.experience.time),
				(this.debug = this.experience.debug),
				(this.frontWheelMesh1 = this.carModel.frontWheelMesh1),
				(this.frontWheelMesh2 = this.carModel.frontWheelMesh2),
				(this.rearWheelMesh1 = this.carModel.rearWheelMesh1),
				(this.rearWheelMesh2 = this.carModel.rearWheelMesh2),
				(this.chassisMesh = this.carModel.chassisMesh),
				this.debug.active && (this.debugFolder = this.debug.gui.addFolder("car")),
				this.initChaseCamera();
		}
		initChaseCamera() {
			(this.chaseCamera = new Ae()),
				(this.chaseCameraPivot = new Ae()),
				(this.view = new Et()),
				this.chaseCamera.position.set(0, 0, 0),
				this.chaseCameraPivot.position.set(0, -10, 1),
				this.chaseCamera.add(this.chaseCameraPivot),
				this.scene.add(this.chaseCamera),
				this.chassisMesh && this.chassisMesh.add(this.chaseCamera);
		}
		updateChaseCamera() {
			this.chaseCameraPivot.getWorldPosition(this.view),
				this.view.y < 1 && (this.view.y = 1),
				this.camera.position.lerp(this.view, 0.3),
				this.camera.lookAt(this.chassisMesh.position);
		}
		update() {
			this.chassisMesh &&
				(this.carModel.updateMeshPosition(this.chassisMesh, this.vehicle.chassisBody),
				this.chassisMesh.rotateX(-Math.PI / 2)),
				this.frontWheelMesh1 && this.carModel.updateMeshPosition(this.frontWheelMesh1, this.vehicle.wheelBodies[2]),
				this.frontWheelMesh2 && this.carModel.updateMeshPosition(this.frontWheelMesh2, this.vehicle.wheelBodies[3]),
				this.rearWheelMesh1 && this.carModel.updateMeshPosition(this.rearWheelMesh1, this.vehicle.wheelBodies[0]),
				this.rearWheelMesh2 && this.carModel.updateMeshPosition(this.rearWheelMesh2, this.vehicle.wheelBodies[1]),
				this.updateChaseCamera();
		}
	}
	class zp {
		constructor() {
			(this.experience = new Ym()),
				(this.scene = this.experience.scene),
				(this.resources = this.experience.resources),
				this.resources.on("ready", () => {
					(this.floor = new Rp()), (this.car = new Np()), (this.environment = new ic());
				});
		}
	}
	class Bp extends Za {
		constructor(t) {
			super(t),
				(this.dracoLoader = null),
				(this.ktx2Loader = null),
				(this.meshoptDecoder = null),
				(this.pluginCallbacks = []),
				this.register(function (t) {
					return new Vp(t);
				}),
				this.register(function (t) {
					return new Yp(t);
				}),
				this.register(function (t) {
					return new Zp(t);
				}),
				this.register(function (t) {
					return new Gp(t);
				}),
				this.register(function (t) {
					return new Wp(t);
				}),
				this.register(function (t) {
					return new jp(t);
				}),
				this.register(function (t) {
					return new qp(t);
				}),
				this.register(function (t) {
					return new Up(t);
				}),
				this.register(function (t) {
					return new Xp(t);
				}),
				this.register(function (t) {
					return new Hp(t);
				}),
				this.register(function (t) {
					return new $p(t);
				});
		}
		load(t, e, n, i) {
			const r = this;
			let s;
			(s = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : vl.extractUrlBase(t)),
				this.manager.itemStart(t);
			const o = function (e) {
					i ? i(e) : console.error(e), r.manager.itemError(t), r.manager.itemEnd(t);
				},
				a = new Ka(this.manager);
			a.setPath(this.path),
				a.setResponseType("arraybuffer"),
				a.setRequestHeader(this.requestHeader),
				a.setWithCredentials(this.withCredentials),
				a.load(
					t,
					function (n) {
						try {
							r.parse(
								n,
								s,
								function (n) {
									e(n), r.manager.itemEnd(t);
								},
								o
							);
						} catch (t) {
							o(t);
						}
					},
					n,
					o
				);
		}
		setDRACOLoader(t) {
			return (this.dracoLoader = t), this;
		}
		setDDSLoader() {
			throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
		}
		setKTX2Loader(t) {
			return (this.ktx2Loader = t), this;
		}
		setMeshoptDecoder(t) {
			return (this.meshoptDecoder = t), this;
		}
		register(t) {
			return -1 === this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.push(t), this;
		}
		unregister(t) {
			return (
				-1 !== this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this
			);
		}
		parse(t, e, n, i) {
			let r;
			const s = {},
				o = {};
			if ("string" == typeof t) r = t;
			else if (vl.decodeText(new Uint8Array(t, 0, 4)) === Kp) {
				try {
					s[Fp.KHR_BINARY_GLTF] = new Jp(t);
				} catch (t) {
					return void (i && i(t));
				}
				r = s[Fp.KHR_BINARY_GLTF].content;
			} else r = vl.decodeText(new Uint8Array(t));
			const a = JSON.parse(r);
			if (void 0 === a.asset || a.asset.version[0] < 2)
				return void (i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
			const l = new _m(a, {
				path: e || this.resourcePath || "",
				crossOrigin: this.crossOrigin,
				requestHeader: this.requestHeader,
				manager: this.manager,
				ktx2Loader: this.ktx2Loader,
				meshoptDecoder: this.meshoptDecoder,
			});
			l.fileLoader.setRequestHeader(this.requestHeader);
			for (let t = 0; t < this.pluginCallbacks.length; t++) {
				const e = this.pluginCallbacks[t](l);
				(o[e.name] = e), (s[e.name] = !0);
			}
			if (a.extensionsUsed)
				for (let t = 0; t < a.extensionsUsed.length; ++t) {
					const e = a.extensionsUsed[t],
						n = a.extensionsRequired || [];
					switch (e) {
						case Fp.KHR_MATERIALS_UNLIT:
							s[e] = new kp();
							break;
						case Fp.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
							s[e] = new nm();
							break;
						case Fp.KHR_DRACO_MESH_COMPRESSION:
							s[e] = new Qp(a, this.dracoLoader);
							break;
						case Fp.KHR_TEXTURE_TRANSFORM:
							s[e] = new tm();
							break;
						case Fp.KHR_MESH_QUANTIZATION:
							s[e] = new im();
							break;
						default:
							n.indexOf(e) >= 0 &&
								void 0 === o[e] &&
								console.warn('THREE.GLTFLoader: Unknown extension "' + e + '".');
					}
				}
			l.setExtensions(s), l.setPlugins(o), l.parse(n, i);
		}
		parseAsync(t, e) {
			const n = this;
			return new Promise(function (i, r) {
				n.parse(t, e, i, r);
			});
		}
	}
	function Op() {
		let t = {};
		return {
			get: function (e) {
				return t[e];
			},
			add: function (e, n) {
				t[e] = n;
			},
			remove: function (e) {
				delete t[e];
			},
			removeAll: function () {
				t = {};
			},
		};
	}
	const Fp = {
		KHR_BINARY_GLTF: "KHR_binary_glTF",
		KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
		KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
		KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
		KHR_MATERIALS_IOR: "KHR_materials_ior",
		KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
		KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
		KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
		KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
		KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
		KHR_MATERIALS_VOLUME: "KHR_materials_volume",
		KHR_TEXTURE_BASISU: "KHR_texture_basisu",
		KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
		KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
		KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
		EXT_TEXTURE_WEBP: "EXT_texture_webp",
		EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
	};
	class Hp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_LIGHTS_PUNCTUAL), (this.cache = { refs: {}, uses: {} });
		}
		_markDefs() {
			const t = this.parser,
				e = this.parser.json.nodes || [];
			for (let n = 0, i = e.length; n < i; n++) {
				const i = e[n];
				i.extensions &&
					i.extensions[this.name] &&
					void 0 !== i.extensions[this.name].light &&
					t._addNodeRef(this.cache, i.extensions[this.name].light);
			}
		}
		_loadLight(t) {
			const e = this.parser,
				n = "light:" + t;
			let i = e.cache.get(n);
			if (i) return i;
			const r = e.json,
				s = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[t];
			let o;
			const a = new pt(16777215);
			void 0 !== s.color && a.fromArray(s.color);
			const l = void 0 !== s.range ? s.range : 0;
			switch (s.type) {
				case "directional":
					(o = new ml(a)), o.target.position.set(0, 0, -1), o.add(o.target);
					break;
				case "point":
					(o = new dl(a)), (o.distance = l);
					break;
				case "spot":
					(o = new al(a)),
						(o.distance = l),
						(s.spot = s.spot || {}),
						(s.spot.innerConeAngle = void 0 !== s.spot.innerConeAngle ? s.spot.innerConeAngle : 0),
						(s.spot.outerConeAngle = void 0 !== s.spot.outerConeAngle ? s.spot.outerConeAngle : Math.PI / 4),
						(o.angle = s.spot.outerConeAngle),
						(o.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle),
						o.target.position.set(0, 0, -1),
						o.add(o.target);
					break;
				default:
					throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
			}
			return (
				o.position.set(0, 0, 0),
				(o.decay = 2),
				void 0 !== s.intensity && (o.intensity = s.intensity),
				(o.name = e.createUniqueName(s.name || "light_" + t)),
				(i = Promise.resolve(o)),
				e.cache.add(n, i),
				i
			);
		}
		createNodeAttachment(t) {
			const e = this,
				n = this.parser,
				i = n.json.nodes[t],
				r = ((i.extensions && i.extensions[this.name]) || {}).light;
			return void 0 === r
				? null
				: this._loadLight(r).then(function (t) {
						return n._getNodeRef(e.cache, r, t);
				  });
		}
	}
	class kp {
		constructor() {
			this.name = Fp.KHR_MATERIALS_UNLIT;
		}
		getMaterialType() {
			return Ue;
		}
		extendParams(t, e, n) {
			const i = [];
			(t.color = new pt(1, 1, 1)), (t.opacity = 1);
			const r = e.pbrMetallicRoughness;
			if (r) {
				if (Array.isArray(r.baseColorFactor)) {
					const e = r.baseColorFactor;
					t.color.fromArray(e), (t.opacity = e[3]);
				}
				void 0 !== r.baseColorTexture && i.push(n.assignTexture(t, "map", r.baseColorTexture, I));
			}
			return Promise.all(i);
		}
	}
	class Up {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_MATERIALS_EMISSIVE_STRENGTH);
		}
		extendMaterialParams(t, e) {
			const n = this.parser.json.materials[t];
			if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
			const i = n.extensions[this.name].emissiveStrength;
			return void 0 !== i && (e.emissiveIntensity = i), Promise.resolve();
		}
	}
	class Vp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_MATERIALS_CLEARCOAT);
		}
		getMaterialType(t) {
			const e = this.parser.json.materials[t];
			return e.extensions && e.extensions[this.name] ? Ma : null;
		}
		extendMaterialParams(t, e) {
			const n = this.parser,
				i = n.json.materials[t];
			if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
			const r = [],
				s = i.extensions[this.name];
			if (
				(void 0 !== s.clearcoatFactor && (e.clearcoat = s.clearcoatFactor),
				void 0 !== s.clearcoatTexture && r.push(n.assignTexture(e, "clearcoatMap", s.clearcoatTexture)),
				void 0 !== s.clearcoatRoughnessFactor && (e.clearcoatRoughness = s.clearcoatRoughnessFactor),
				void 0 !== s.clearcoatRoughnessTexture &&
					r.push(n.assignTexture(e, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)),
				void 0 !== s.clearcoatNormalTexture &&
					(r.push(n.assignTexture(e, "clearcoatNormalMap", s.clearcoatNormalTexture)),
					void 0 !== s.clearcoatNormalTexture.scale))
			) {
				const t = s.clearcoatNormalTexture.scale;
				e.clearcoatNormalScale = new Q(t, t);
			}
			return Promise.all(r);
		}
	}
	class Gp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_MATERIALS_SHEEN);
		}
		getMaterialType(t) {
			const e = this.parser.json.materials[t];
			return e.extensions && e.extensions[this.name] ? Ma : null;
		}
		extendMaterialParams(t, e) {
			const n = this.parser,
				i = n.json.materials[t];
			if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
			const r = [];
			(e.sheenColor = new pt(0, 0, 0)), (e.sheenRoughness = 0), (e.sheen = 1);
			const s = i.extensions[this.name];
			return (
				void 0 !== s.sheenColorFactor && e.sheenColor.fromArray(s.sheenColorFactor),
				void 0 !== s.sheenRoughnessFactor && (e.sheenRoughness = s.sheenRoughnessFactor),
				void 0 !== s.sheenColorTexture && r.push(n.assignTexture(e, "sheenColorMap", s.sheenColorTexture, I)),
				void 0 !== s.sheenRoughnessTexture && r.push(n.assignTexture(e, "sheenRoughnessMap", s.sheenRoughnessTexture)),
				Promise.all(r)
			);
		}
	}
	class Wp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_MATERIALS_TRANSMISSION);
		}
		getMaterialType(t) {
			const e = this.parser.json.materials[t];
			return e.extensions && e.extensions[this.name] ? Ma : null;
		}
		extendMaterialParams(t, e) {
			const n = this.parser,
				i = n.json.materials[t];
			if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
			const r = [],
				s = i.extensions[this.name];
			return (
				void 0 !== s.transmissionFactor && (e.transmission = s.transmissionFactor),
				void 0 !== s.transmissionTexture && r.push(n.assignTexture(e, "transmissionMap", s.transmissionTexture)),
				Promise.all(r)
			);
		}
	}
	class jp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_MATERIALS_VOLUME);
		}
		getMaterialType(t) {
			const e = this.parser.json.materials[t];
			return e.extensions && e.extensions[this.name] ? Ma : null;
		}
		extendMaterialParams(t, e) {
			const n = this.parser,
				i = n.json.materials[t];
			if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
			const r = [],
				s = i.extensions[this.name];
			(e.thickness = void 0 !== s.thicknessFactor ? s.thicknessFactor : 0),
				void 0 !== s.thicknessTexture && r.push(n.assignTexture(e, "thicknessMap", s.thicknessTexture)),
				(e.attenuationDistance = s.attenuationDistance || 0);
			const o = s.attenuationColor || [1, 1, 1];
			return (e.attenuationColor = new pt(o[0], o[1], o[2])), Promise.all(r);
		}
	}
	class qp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_MATERIALS_IOR);
		}
		getMaterialType(t) {
			const e = this.parser.json.materials[t];
			return e.extensions && e.extensions[this.name] ? Ma : null;
		}
		extendMaterialParams(t, e) {
			const n = this.parser.json.materials[t];
			if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
			const i = n.extensions[this.name];
			return (e.ior = void 0 !== i.ior ? i.ior : 1.5), Promise.resolve();
		}
	}
	class Xp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_MATERIALS_SPECULAR);
		}
		getMaterialType(t) {
			const e = this.parser.json.materials[t];
			return e.extensions && e.extensions[this.name] ? Ma : null;
		}
		extendMaterialParams(t, e) {
			const n = this.parser,
				i = n.json.materials[t];
			if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
			const r = [],
				s = i.extensions[this.name];
			(e.specularIntensity = void 0 !== s.specularFactor ? s.specularFactor : 1),
				void 0 !== s.specularTexture && r.push(n.assignTexture(e, "specularIntensityMap", s.specularTexture));
			const o = s.specularColorFactor || [1, 1, 1];
			return (
				(e.specularColor = new pt(o[0], o[1], o[2])),
				void 0 !== s.specularColorTexture && r.push(n.assignTexture(e, "specularColorMap", s.specularColorTexture, I)),
				Promise.all(r)
			);
		}
	}
	class Yp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.KHR_TEXTURE_BASISU);
		}
		loadTexture(t) {
			const e = this.parser,
				n = e.json,
				i = n.textures[t];
			if (!i.extensions || !i.extensions[this.name]) return null;
			const r = i.extensions[this.name],
				s = e.options.ktx2Loader;
			if (!s) {
				if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
					throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
				return null;
			}
			return e.loadTextureImage(t, r.source, s);
		}
	}
	class Zp {
		constructor(t) {
			(this.parser = t), (this.name = Fp.EXT_TEXTURE_WEBP), (this.isSupported = null);
		}
		loadTexture(t) {
			const e = this.name,
				n = this.parser,
				i = n.json,
				r = i.textures[t];
			if (!r.extensions || !r.extensions[e]) return null;
			const s = r.extensions[e],
				o = i.images[s.source];
			let a = n.textureLoader;
			if (o.uri) {
				const t = n.options.manager.getHandler(o.uri);
				null !== t && (a = t);
			}
			return this.detectSupport().then(function (r) {
				if (r) return n.loadTextureImage(t, s.source, a);
				if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0)
					throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
				return n.loadTexture(t);
			});
		}
		detectSupport() {
			return (
				this.isSupported ||
					(this.isSupported = new Promise(function (t) {
						const e = new Image();
						(e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
							(e.onload = e.onerror =
								function () {
									t(1 === e.height);
								});
					})),
				this.isSupported
			);
		}
	}
	class $p {
		constructor(t) {
			(this.name = Fp.EXT_MESHOPT_COMPRESSION), (this.parser = t);
		}
		loadBufferView(t) {
			const e = this.parser.json,
				n = e.bufferViews[t];
			if (n.extensions && n.extensions[this.name]) {
				const t = n.extensions[this.name],
					i = this.parser.getDependency("buffer", t.buffer),
					r = this.parser.options.meshoptDecoder;
				if (!r || !r.supported) {
					if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
						throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
					return null;
				}
				return Promise.all([i, r.ready]).then(function (e) {
					const n = t.byteOffset || 0,
						i = t.byteLength || 0,
						s = t.count,
						o = t.byteStride,
						a = new ArrayBuffer(s * o),
						l = new Uint8Array(e[0], n, i);
					return r.decodeGltfBuffer(new Uint8Array(a), s, o, l, t.mode, t.filter), a;
				});
			}
			return null;
		}
	}
	const Kp = "glTF";
	class Jp {
		constructor(t) {
			(this.name = Fp.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
			const e = new DataView(t, 0, 12);
			if (
				((this.header = {
					magic: vl.decodeText(new Uint8Array(t.slice(0, 4))),
					version: e.getUint32(4, !0),
					length: e.getUint32(8, !0),
				}),
				this.header.magic !== Kp)
			)
				throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
			if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
			const n = this.header.length - 12,
				i = new DataView(t, 12);
			let r = 0;
			for (; r < n; ) {
				const e = i.getUint32(r, !0);
				r += 4;
				const n = i.getUint32(r, !0);
				if (((r += 4), 1313821514 === n)) {
					const n = new Uint8Array(t, 12 + r, e);
					this.content = vl.decodeText(n);
				} else if (5130562 === n) {
					const n = 12 + r;
					this.body = t.slice(n, n + e);
				}
				r += e;
			}
			if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.");
		}
	}
	class Qp {
		constructor(t, e) {
			if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
			(this.name = Fp.KHR_DRACO_MESH_COMPRESSION), (this.json = t), (this.dracoLoader = e), this.dracoLoader.preload();
		}
		decodePrimitive(t, e) {
			const n = this.json,
				i = this.dracoLoader,
				r = t.extensions[this.name].bufferView,
				s = t.extensions[this.name].attributes,
				o = {},
				a = {},
				l = {};
			for (const t in s) {
				const e = um[t] || t.toLowerCase();
				o[e] = s[t];
			}
			for (const e in t.attributes) {
				const i = um[e] || e.toLowerCase();
				if (void 0 !== s[e]) {
					const r = n.accessors[t.attributes[e]],
						s = am[r.componentType];
					(l[i] = s), (a[i] = !0 === r.normalized);
				}
			}
			return e.getDependency("bufferView", r).then(function (t) {
				return new Promise(function (e) {
					i.decodeDracoFile(
						t,
						function (t) {
							for (const e in t.attributes) {
								const n = t.attributes[e],
									i = a[e];
								void 0 !== i && (n.normalized = i);
							}
							e(t);
						},
						o,
						l
					);
				});
			});
		}
	}
	class tm {
		constructor() {
			this.name = Fp.KHR_TEXTURE_TRANSFORM;
		}
		extendTexture(t, e) {
			return (
				void 0 !== e.texCoord &&
					console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'),
				(void 0 === e.offset && void 0 === e.rotation && void 0 === e.scale) ||
					((t = t.clone()),
					void 0 !== e.offset && t.offset.fromArray(e.offset),
					void 0 !== e.rotation && (t.rotation = e.rotation),
					void 0 !== e.scale && t.repeat.fromArray(e.scale),
					(t.needsUpdate = !0)),
				t
			);
		}
	}
	class em extends ba {
		constructor(t) {
			super(), (this.isGLTFSpecularGlossinessMaterial = !0);
			const e = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
				n = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
				i = [
					"vec3 specularFactor = specular;",
					"#ifdef USE_SPECULARMAP",
					"\tvec4 texelSpecular = texture2D( specularMap, vUv );",
					"\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
					"\tspecularFactor *= texelSpecular.rgb;",
					"#endif",
				].join("\n"),
				r = [
					"float glossinessFactor = glossiness;",
					"#ifdef USE_GLOSSINESSMAP",
					"\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
					"\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
					"\tglossinessFactor *= texelGlossiness.a;",
					"#endif",
				].join("\n"),
				s = [
					"PhysicalMaterial material;",
					"material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
					"vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
					"float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
					"material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
					"material.roughness += geometryRoughness;",
					"material.roughness = min( material.roughness, 1.0 );",
					"material.specularColor = specularFactor;",
				].join("\n"),
				o = {
					specular: { value: new pt().setHex(16777215) },
					glossiness: { value: 1 },
					specularMap: { value: null },
					glossinessMap: { value: null },
				};
			(this._extraUniforms = o),
				(this.onBeforeCompile = function (t) {
					for (const e in o) t.uniforms[e] = o[e];
					t.fragmentShader = t.fragmentShader
						.replace("uniform float roughness;", "uniform vec3 specular;")
						.replace("uniform float metalness;", "uniform float glossiness;")
						.replace("#include <roughnessmap_pars_fragment>", e)
						.replace("#include <metalnessmap_pars_fragment>", n)
						.replace("#include <roughnessmap_fragment>", i)
						.replace("#include <metalnessmap_fragment>", r)
						.replace("#include <lights_physical_fragment>", s);
				}),
				Object.defineProperties(this, {
					specular: {
						get: function () {
							return o.specular.value;
						},
						set: function (t) {
							o.specular.value = t;
						},
					},
					specularMap: {
						get: function () {
							return o.specularMap.value;
						},
						set: function (t) {
							(o.specularMap.value = t),
								t ? (this.defines.USE_SPECULARMAP = "") : delete this.defines.USE_SPECULARMAP;
						},
					},
					glossiness: {
						get: function () {
							return o.glossiness.value;
						},
						set: function (t) {
							o.glossiness.value = t;
						},
					},
					glossinessMap: {
						get: function () {
							return o.glossinessMap.value;
						},
						set: function (t) {
							(o.glossinessMap.value = t),
								t
									? ((this.defines.USE_GLOSSINESSMAP = ""), (this.defines.USE_UV = ""))
									: (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
						},
					},
				}),
				delete this.metalness,
				delete this.roughness,
				delete this.metalnessMap,
				delete this.roughnessMap,
				this.setValues(t);
		}
		copy(t) {
			return (
				super.copy(t),
				(this.specularMap = t.specularMap),
				this.specular.copy(t.specular),
				(this.glossinessMap = t.glossinessMap),
				(this.glossiness = t.glossiness),
				delete this.metalness,
				delete this.roughness,
				delete this.metalnessMap,
				delete this.roughnessMap,
				this
			);
		}
	}
	class nm {
		constructor() {
			(this.name = Fp.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS),
				(this.specularGlossinessParams = [
					"color",
					"map",
					"lightMap",
					"lightMapIntensity",
					"aoMap",
					"aoMapIntensity",
					"emissive",
					"emissiveIntensity",
					"emissiveMap",
					"bumpMap",
					"bumpScale",
					"normalMap",
					"normalMapType",
					"displacementMap",
					"displacementScale",
					"displacementBias",
					"specularMap",
					"specular",
					"glossinessMap",
					"glossiness",
					"alphaMap",
					"envMap",
					"envMapIntensity",
				]);
		}
		getMaterialType() {
			return em;
		}
		extendParams(t, e, n) {
			const i = e.extensions[this.name];
			(t.color = new pt(1, 1, 1)), (t.opacity = 1);
			const r = [];
			if (Array.isArray(i.diffuseFactor)) {
				const e = i.diffuseFactor;
				t.color.fromArray(e), (t.opacity = e[3]);
			}
			if (
				(void 0 !== i.diffuseTexture && r.push(n.assignTexture(t, "map", i.diffuseTexture, I)),
				(t.emissive = new pt(0, 0, 0)),
				(t.glossiness = void 0 !== i.glossinessFactor ? i.glossinessFactor : 1),
				(t.specular = new pt(1, 1, 1)),
				Array.isArray(i.specularFactor) && t.specular.fromArray(i.specularFactor),
				void 0 !== i.specularGlossinessTexture)
			) {
				const e = i.specularGlossinessTexture;
				r.push(n.assignTexture(t, "glossinessMap", e)), r.push(n.assignTexture(t, "specularMap", e, I));
			}
			return Promise.all(r);
		}
		createMaterial(t) {
			const e = new em(t);
			return (
				(e.fog = !0),
				(e.color = t.color),
				(e.map = void 0 === t.map ? null : t.map),
				(e.lightMap = null),
				(e.lightMapIntensity = 1),
				(e.aoMap = void 0 === t.aoMap ? null : t.aoMap),
				(e.aoMapIntensity = 1),
				(e.emissive = t.emissive),
				(e.emissiveIntensity = void 0 === t.emissiveIntensity ? 1 : t.emissiveIntensity),
				(e.emissiveMap = void 0 === t.emissiveMap ? null : t.emissiveMap),
				(e.bumpMap = void 0 === t.bumpMap ? null : t.bumpMap),
				(e.bumpScale = 1),
				(e.normalMap = void 0 === t.normalMap ? null : t.normalMap),
				(e.normalMapType = 0),
				t.normalScale && (e.normalScale = t.normalScale),
				(e.displacementMap = null),
				(e.displacementScale = 1),
				(e.displacementBias = 0),
				(e.specularMap = void 0 === t.specularMap ? null : t.specularMap),
				(e.specular = t.specular),
				(e.glossinessMap = void 0 === t.glossinessMap ? null : t.glossinessMap),
				(e.glossiness = t.glossiness),
				(e.alphaMap = null),
				(e.envMap = void 0 === t.envMap ? null : t.envMap),
				(e.envMapIntensity = 1),
				e
			);
		}
	}
	class im {
		constructor() {
			this.name = Fp.KHR_MESH_QUANTIZATION;
		}
	}
	class rm extends Ia {
		constructor(t, e, n, i) {
			super(t, e, n, i);
		}
		copySampleValue_(t) {
			const e = this.resultBuffer,
				n = this.sampleValues,
				i = this.valueSize,
				r = t * i * 3 + i;
			for (let t = 0; t !== i; t++) e[t] = n[r + t];
			return e;
		}
	}
	(rm.prototype.beforeStart_ = rm.prototype.copySampleValue_),
		(rm.prototype.afterEnd_ = rm.prototype.copySampleValue_),
		(rm.prototype.interpolate_ = function (t, e, n, i) {
			const r = this.resultBuffer,
				s = this.sampleValues,
				o = this.valueSize,
				a = 2 * o,
				l = 3 * o,
				c = i - e,
				h = (n - e) / c,
				u = h * h,
				d = u * h,
				p = t * l,
				m = p - l,
				f = -2 * d + 3 * u,
				g = d - u,
				v = 1 - f,
				y = g - u + h;
			for (let t = 0; t !== o; t++) {
				const e = s[m + t + o],
					n = s[m + t + a] * c,
					i = s[p + t + o],
					l = s[p + t] * c;
				r[t] = v * e + y * n + f * i + g * l;
			}
			return r;
		});
	const sm = new St();
	class om extends rm {
		interpolate_(t, e, n, i) {
			const r = super.interpolate_(t, e, n, i);
			return sm.fromArray(r).normalize().toArray(r), r;
		}
	}
	const am = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array },
		lm = { 9728: a, 9729: h, 9984: l, 9985: 1007, 9986: c, 9987: u },
		cm = { 33071: s, 33648: o, 10497: r },
		hm = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
		um = {
			POSITION: "position",
			NORMAL: "normal",
			TANGENT: "tangent",
			TEXCOORD_0: "uv",
			TEXCOORD_1: "uv2",
			COLOR_0: "color",
			WEIGHTS_0: "skinWeight",
			JOINTS_0: "skinIndex",
		},
		dm = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" },
		pm = { CUBICSPLINE: void 0, LINEAR: T, STEP: E };
	function mm(t, e, n) {
		for (const i in n.extensions)
			void 0 === t[i] &&
				((e.userData.gltfExtensions = e.userData.gltfExtensions || {}), (e.userData.gltfExtensions[i] = n.extensions[i]));
	}
	function fm(t, e) {
		void 0 !== e.extras &&
			("object" == typeof e.extras
				? Object.assign(t.userData, e.extras)
				: console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
	}
	function gm(t, e) {
		if ((t.updateMorphTargets(), void 0 !== e.weights))
			for (let n = 0, i = e.weights.length; n < i; n++) t.morphTargetInfluences[n] = e.weights[n];
		if (e.extras && Array.isArray(e.extras.targetNames)) {
			const n = e.extras.targetNames;
			if (t.morphTargetInfluences.length === n.length) {
				t.morphTargetDictionary = {};
				for (let e = 0, i = n.length; e < i; e++) t.morphTargetDictionary[n[e]] = e;
			} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
		}
	}
	function vm(t) {
		const e = t.extensions && t.extensions[Fp.KHR_DRACO_MESH_COMPRESSION];
		let n;
		return (
			(n = e
				? "draco:" + e.bufferView + ":" + e.indices + ":" + ym(e.attributes)
				: t.indices + ":" + ym(t.attributes) + ":" + t.mode),
			n
		);
	}
	function ym(t) {
		let e = "";
		const n = Object.keys(t).sort();
		for (let i = 0, r = n.length; i < r; i++) e += n[i] + ":" + t[n[i]] + ";";
		return e;
	}
	function xm(t) {
		switch (t) {
			case Int8Array:
				return 1 / 127;
			case Uint8Array:
				return 1 / 255;
			case Int16Array:
				return 1 / 32767;
			case Uint16Array:
				return 1 / 65535;
			default:
				throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
		}
	}
	class _m {
		constructor(t = {}, e = {}) {
			(this.json = t),
				(this.extensions = {}),
				(this.plugins = {}),
				(this.options = e),
				(this.cache = new Op()),
				(this.associations = new Map()),
				(this.primitiveCache = {}),
				(this.meshCache = { refs: {}, uses: {} }),
				(this.cameraCache = { refs: {}, uses: {} }),
				(this.lightCache = { refs: {}, uses: {} }),
				(this.sourceCache = {}),
				(this.textureCache = {}),
				(this.nodeNamesUsed = {});
			const n = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
				i = navigator.userAgent.indexOf("Firefox") > -1,
				r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
			"undefined" == typeof createImageBitmap || n || (i && r < 98)
				? (this.textureLoader = new tl(this.options.manager))
				: (this.textureLoader = new yl(this.options.manager)),
				this.textureLoader.setCrossOrigin(this.options.crossOrigin),
				this.textureLoader.setRequestHeader(this.options.requestHeader),
				(this.fileLoader = new Ka(this.options.manager)),
				this.fileLoader.setResponseType("arraybuffer"),
				"use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0);
		}
		setExtensions(t) {
			this.extensions = t;
		}
		setPlugins(t) {
			this.plugins = t;
		}
		parse(t, e) {
			const n = this,
				i = this.json,
				r = this.extensions;
			this.cache.removeAll(),
				this._invokeAll(function (t) {
					return t._markDefs && t._markDefs();
				}),
				Promise.all(
					this._invokeAll(function (t) {
						return t.beforeRoot && t.beforeRoot();
					})
				)
					.then(function () {
						return Promise.all([
							n.getDependencies("scene"),
							n.getDependencies("animation"),
							n.getDependencies("camera"),
						]);
					})
					.then(function (e) {
						const s = {
							scene: e[0][i.scene || 0],
							scenes: e[0],
							animations: e[1],
							cameras: e[2],
							asset: i.asset,
							parser: n,
							userData: {},
						};
						mm(r, s, i),
							fm(s, i),
							Promise.all(
								n._invokeAll(function (t) {
									return t.afterRoot && t.afterRoot(s);
								})
							).then(function () {
								t(s);
							});
					})
					.catch(e);
		}
		_markDefs() {
			const t = this.json.nodes || [],
				e = this.json.skins || [],
				n = this.json.meshes || [];
			for (let n = 0, i = e.length; n < i; n++) {
				const i = e[n].joints;
				for (let e = 0, n = i.length; e < n; e++) t[i[e]].isBone = !0;
			}
			for (let e = 0, i = t.length; e < i; e++) {
				const i = t[e];
				void 0 !== i.mesh &&
					(this._addNodeRef(this.meshCache, i.mesh), void 0 !== i.skin && (n[i.mesh].isSkinnedMesh = !0)),
					void 0 !== i.camera && this._addNodeRef(this.cameraCache, i.camera);
			}
		}
		_addNodeRef(t, e) {
			void 0 !== e && (void 0 === t.refs[e] && (t.refs[e] = t.uses[e] = 0), t.refs[e]++);
		}
		_getNodeRef(t, e, n) {
			if (t.refs[e] <= 1) return n;
			const i = n.clone(),
				r = (t, e) => {
					const n = this.associations.get(t);
					null != n && this.associations.set(e, n);
					for (const [n, i] of t.children.entries()) r(i, e.children[n]);
				};
			return r(n, i), (i.name += "_instance_" + t.uses[e]++), i;
		}
		_invokeOne(t) {
			const e = Object.values(this.plugins);
			e.push(this);
			for (let n = 0; n < e.length; n++) {
				const i = t(e[n]);
				if (i) return i;
			}
			return null;
		}
		_invokeAll(t) {
			const e = Object.values(this.plugins);
			e.unshift(this);
			const n = [];
			for (let i = 0; i < e.length; i++) {
				const r = t(e[i]);
				r && n.push(r);
			}
			return n;
		}
		getDependency(t, e) {
			const n = t + ":" + e;
			let i = this.cache.get(n);
			if (!i) {
				switch (t) {
					case "scene":
						i = this.loadScene(e);
						break;
					case "node":
						i = this.loadNode(e);
						break;
					case "mesh":
						i = this._invokeOne(function (t) {
							return t.loadMesh && t.loadMesh(e);
						});
						break;
					case "accessor":
						i = this.loadAccessor(e);
						break;
					case "bufferView":
						i = this._invokeOne(function (t) {
							return t.loadBufferView && t.loadBufferView(e);
						});
						break;
					case "buffer":
						i = this.loadBuffer(e);
						break;
					case "material":
						i = this._invokeOne(function (t) {
							return t.loadMaterial && t.loadMaterial(e);
						});
						break;
					case "texture":
						i = this._invokeOne(function (t) {
							return t.loadTexture && t.loadTexture(e);
						});
						break;
					case "skin":
						i = this.loadSkin(e);
						break;
					case "animation":
						i = this._invokeOne(function (t) {
							return t.loadAnimation && t.loadAnimation(e);
						});
						break;
					case "camera":
						i = this.loadCamera(e);
						break;
					default:
						throw new Error("Unknown type: " + t);
				}
				this.cache.add(n, i);
			}
			return i;
		}
		getDependencies(t) {
			let e = this.cache.get(t);
			if (!e) {
				const n = this,
					i = this.json[t + ("mesh" === t ? "es" : "s")] || [];
				(e = Promise.all(
					i.map(function (e, i) {
						return n.getDependency(t, i);
					})
				)),
					this.cache.add(t, e);
			}
			return e;
		}
		loadBuffer(t) {
			const e = this.json.buffers[t],
				n = this.fileLoader;
			if (e.type && "arraybuffer" !== e.type)
				throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
			if (void 0 === e.uri && 0 === t) return Promise.resolve(this.extensions[Fp.KHR_BINARY_GLTF].body);
			const i = this.options;
			return new Promise(function (t, r) {
				n.load(vl.resolveURL(e.uri, i.path), t, void 0, function () {
					r(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
				});
			});
		}
		loadBufferView(t) {
			const e = this.json.bufferViews[t];
			return this.getDependency("buffer", e.buffer).then(function (t) {
				const n = e.byteLength || 0,
					i = e.byteOffset || 0;
				return t.slice(i, i + n);
			});
		}
		loadAccessor(t) {
			const e = this,
				n = this.json,
				i = this.json.accessors[t];
			if (void 0 === i.bufferView && void 0 === i.sparse) return Promise.resolve(null);
			const r = [];
			return (
				void 0 !== i.bufferView ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null),
				void 0 !== i.sparse &&
					(r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
					r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
				Promise.all(r).then(function (t) {
					const r = t[0],
						s = hm[i.type],
						o = am[i.componentType],
						a = o.BYTES_PER_ELEMENT,
						l = a * s,
						c = i.byteOffset || 0,
						h = void 0 !== i.bufferView ? n.bufferViews[i.bufferView].byteStride : void 0,
						u = !0 === i.normalized;
					let d, p;
					if (h && h !== l) {
						const t = Math.floor(c / h),
							n = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + t + ":" + i.count;
						let l = e.cache.get(n);
						l || ((d = new o(r, t * h, (i.count * h) / a)), (l = new ws(d, h / a)), e.cache.add(n, l)),
							(p = new Ms(l, s, (c % h) / a, u));
					} else (d = null === r ? new o(i.count * s) : new o(r, c, i.count * s)), (p = new We(d, s, u));
					if (void 0 !== i.sparse) {
						const e = hm.SCALAR,
							n = am[i.sparse.indices.componentType],
							a = i.sparse.indices.byteOffset || 0,
							l = i.sparse.values.byteOffset || 0,
							c = new n(t[1], a, i.sparse.count * e),
							h = new o(t[2], l, i.sparse.count * s);
						null !== r && (p = new We(p.array.slice(), p.itemSize, p.normalized));
						for (let t = 0, e = c.length; t < e; t++) {
							const e = c[t];
							if (
								(p.setX(e, h[t * s]),
								s >= 2 && p.setY(e, h[t * s + 1]),
								s >= 3 && p.setZ(e, h[t * s + 2]),
								s >= 4 && p.setW(e, h[t * s + 3]),
								s >= 5)
							)
								throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
						}
					}
					return p;
				})
			);
		}
		loadTexture(t) {
			const e = this.json,
				n = this.options,
				i = e.textures[t].source,
				r = e.images[i];
			let s = this.textureLoader;
			if (r.uri) {
				const t = n.manager.getHandler(r.uri);
				null !== t && (s = t);
			}
			return this.loadTextureImage(t, i, s);
		}
		loadTextureImage(t, e, n) {
			const i = this,
				s = this.json,
				o = s.textures[t],
				a = s.images[e],
				l = (a.uri || a.bufferView) + ":" + o.sampler;
			if (this.textureCache[l]) return this.textureCache[l];
			const c = this.loadImageSource(e, n)
				.then(function (e) {
					(e.flipY = !1), o.name && (e.name = o.name);
					const n = (s.samplers || {})[o.sampler] || {};
					return (
						(e.magFilter = lm[n.magFilter] || h),
						(e.minFilter = lm[n.minFilter] || u),
						(e.wrapS = cm[n.wrapS] || r),
						(e.wrapT = cm[n.wrapT] || r),
						i.associations.set(e, { textures: t }),
						e
					);
				})
				.catch(function () {
					return null;
				});
			return (this.textureCache[l] = c), c;
		}
		loadImageSource(t, e) {
			const n = this.json,
				i = this.options;
			if (void 0 !== this.sourceCache[t]) return this.sourceCache[t].then((t) => t.clone());
			const r = n.images[t],
				s = self.URL || self.webkitURL;
			let o = r.uri || "",
				a = !1;
			if (void 0 !== r.bufferView)
				o = this.getDependency("bufferView", r.bufferView).then(function (t) {
					a = !0;
					const e = new Blob([t], { type: r.mimeType });
					return (o = s.createObjectURL(e)), o;
				});
			else if (void 0 === r.uri) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
			const l = Promise.resolve(o)
				.then(function (t) {
					return new Promise(function (n, r) {
						let s = n;
						!0 === e.isImageBitmapLoader &&
							(s = function (t) {
								const e = new xt(t);
								(e.needsUpdate = !0), n(e);
							}),
							e.load(vl.resolveURL(t, i.path), s, void 0, r);
					});
				})
				.then(function (t) {
					var e;
					return (
						!0 === a && s.revokeObjectURL(o),
						(t.userData.mimeType =
							r.mimeType ||
							((e = r.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/)
								? "image/jpeg"
								: e.search(/\.webp($|\?)/i) > 0 || 0 === e.search(/^data\:image\/webp/)
								? "image/webp"
								: "image/png")),
						t
					);
				})
				.catch(function (t) {
					throw (console.error("THREE.GLTFLoader: Couldn't load texture", o), t);
				});
			return (this.sourceCache[t] = l), l;
		}
		assignTexture(t, e, n, i) {
			const r = this;
			return this.getDependency("texture", n.index).then(function (s) {
				if (
					(void 0 === n.texCoord ||
						0 == n.texCoord ||
						("aoMap" === e && 1 == n.texCoord) ||
						console.warn(
							"THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + e + " not yet supported."
						),
					r.extensions[Fp.KHR_TEXTURE_TRANSFORM])
				) {
					const t = void 0 !== n.extensions ? n.extensions[Fp.KHR_TEXTURE_TRANSFORM] : void 0;
					if (t) {
						const e = r.associations.get(s);
						(s = r.extensions[Fp.KHR_TEXTURE_TRANSFORM].extendTexture(s, t)), r.associations.set(s, e);
					}
				}
				return void 0 !== i && (s.encoding = i), (t[e] = s), s;
			});
		}
		assignFinalMaterial(t) {
			const e = t.geometry;
			let n = t.material;
			const i = void 0 === e.attributes.tangent,
				r = void 0 !== e.attributes.color,
				s = void 0 === e.attributes.normal;
			if (t.isPoints) {
				const t = "PointsMaterial:" + n.uuid;
				let e = this.cache.get(t);
				e ||
					((e = new po()),
					ke.prototype.copy.call(e, n),
					e.color.copy(n.color),
					(e.map = n.map),
					(e.sizeAttenuation = !1),
					this.cache.add(t, e)),
					(n = e);
			} else if (t.isLine) {
				const t = "LineBasicMaterial:" + n.uuid;
				let e = this.cache.get(t);
				e || ((e = new eo()), ke.prototype.copy.call(e, n), e.color.copy(n.color), this.cache.add(t, e)), (n = e);
			}
			if (i || r || s) {
				let t = "ClonedMaterial:" + n.uuid + ":";
				n.isGLTFSpecularGlossinessMaterial && (t += "specular-glossiness:"),
					i && (t += "derivative-tangents:"),
					r && (t += "vertex-colors:"),
					s && (t += "flat-shading:");
				let e = this.cache.get(t);
				e ||
					((e = n.clone()),
					r && (e.vertexColors = !0),
					s && (e.flatShading = !0),
					i && (e.normalScale && (e.normalScale.y *= -1), e.clearcoatNormalScale && (e.clearcoatNormalScale.y *= -1)),
					this.cache.add(t, e),
					this.associations.set(e, this.associations.get(n))),
					(n = e);
			}
			n.aoMap && void 0 === e.attributes.uv2 && void 0 !== e.attributes.uv && e.setAttribute("uv2", e.attributes.uv),
				(t.material = n);
		}
		getMaterialType() {
			return ba;
		}
		loadMaterial(t) {
			const e = this,
				n = this.json,
				i = this.extensions,
				r = n.materials[t];
			let s;
			const o = {},
				a = r.extensions || {},
				l = [];
			if (a[Fp.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
				const t = i[Fp.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
				(s = t.getMaterialType()), l.push(t.extendParams(o, r, e));
			} else if (a[Fp.KHR_MATERIALS_UNLIT]) {
				const t = i[Fp.KHR_MATERIALS_UNLIT];
				(s = t.getMaterialType()), l.push(t.extendParams(o, r, e));
			} else {
				const n = r.pbrMetallicRoughness || {};
				if (((o.color = new pt(1, 1, 1)), (o.opacity = 1), Array.isArray(n.baseColorFactor))) {
					const t = n.baseColorFactor;
					o.color.fromArray(t), (o.opacity = t[3]);
				}
				void 0 !== n.baseColorTexture && l.push(e.assignTexture(o, "map", n.baseColorTexture, I)),
					(o.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1),
					(o.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1),
					void 0 !== n.metallicRoughnessTexture &&
						(l.push(e.assignTexture(o, "metalnessMap", n.metallicRoughnessTexture)),
						l.push(e.assignTexture(o, "roughnessMap", n.metallicRoughnessTexture))),
					(s = this._invokeOne(function (e) {
						return e.getMaterialType && e.getMaterialType(t);
					})),
					l.push(
						Promise.all(
							this._invokeAll(function (e) {
								return e.extendMaterialParams && e.extendMaterialParams(t, o);
							})
						)
					);
			}
			!0 === r.doubleSided && (o.side = 2);
			const c = r.alphaMode || "OPAQUE";
			if (
				("BLEND" === c
					? ((o.transparent = !0), (o.depthWrite = !1))
					: ((o.transparent = !1), "MASK" === c && (o.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : 0.5)),
				void 0 !== r.normalTexture &&
					s !== Ue &&
					(l.push(e.assignTexture(o, "normalMap", r.normalTexture)),
					(o.normalScale = new Q(1, 1)),
					void 0 !== r.normalTexture.scale))
			) {
				const t = r.normalTexture.scale;
				o.normalScale.set(t, t);
			}
			return (
				void 0 !== r.occlusionTexture &&
					s !== Ue &&
					(l.push(e.assignTexture(o, "aoMap", r.occlusionTexture)),
					void 0 !== r.occlusionTexture.strength && (o.aoMapIntensity = r.occlusionTexture.strength)),
				void 0 !== r.emissiveFactor && s !== Ue && (o.emissive = new pt().fromArray(r.emissiveFactor)),
				void 0 !== r.emissiveTexture && s !== Ue && l.push(e.assignTexture(o, "emissiveMap", r.emissiveTexture, I)),
				Promise.all(l).then(function () {
					let n;
					return (
						(n = s === em ? i[Fp.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : new s(o)),
						r.name && (n.name = r.name),
						fm(n, r),
						e.associations.set(n, { materials: t }),
						r.extensions && mm(i, n, r),
						n
					);
				})
			);
		}
		createUniqueName(t) {
			const e = Pl.sanitizeNodeName(t || "");
			let n = e;
			for (let t = 1; this.nodeNamesUsed[n]; ++t) n = e + "_" + t;
			return (this.nodeNamesUsed[n] = !0), n;
		}
		loadGeometries(t) {
			const e = this,
				n = this.extensions,
				i = this.primitiveCache;
			function r(t) {
				return n[Fp.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t, e).then(function (n) {
					return bm(n, t, e);
				});
			}
			const s = [];
			for (let n = 0, o = t.length; n < o; n++) {
				const o = t[n],
					a = vm(o),
					l = i[a];
				if (l) s.push(l.promise);
				else {
					let t;
					(t = o.extensions && o.extensions[Fp.KHR_DRACO_MESH_COMPRESSION] ? r(o) : bm(new en(), o, e)),
						(i[a] = { primitive: o, promise: t }),
						s.push(t);
				}
			}
			return Promise.all(s);
		}
		loadMesh(t) {
			const e = this,
				n = this.json,
				i = this.extensions,
				r = n.meshes[t],
				s = r.primitives,
				o = [];
			for (let t = 0, e = s.length; t < e; t++) {
				const e =
					void 0 === s[t].material
						? (void 0 === (a = this.cache).DefaultMaterial &&
								(a.DefaultMaterial = new ba({
									color: 16777215,
									emissive: 0,
									metalness: 1,
									roughness: 1,
									transparent: !1,
									depthTest: !0,
									side: 0,
								})),
						  a.DefaultMaterial)
						: this.getDependency("material", s[t].material);
				o.push(e);
			}
			var a;
			return (
				o.push(e.loadGeometries(s)),
				Promise.all(o).then(function (n) {
					const o = n.slice(0, n.length - 1),
						a = n[n.length - 1],
						l = [];
					for (let n = 0, c = a.length; n < c; n++) {
						const c = a[n],
							h = s[n];
						let u;
						const d = o[n];
						if (4 === h.mode || 5 === h.mode || 6 === h.mode || void 0 === h.mode)
							(u = !0 === r.isSkinnedMesh ? new Ws(c, d) : new _n(c, d)),
								!0 !== u.isSkinnedMesh || u.geometry.attributes.skinWeight.normalized || u.normalizeSkinWeights(),
								5 === h.mode
									? (u.geometry = Mm(u.geometry, 1))
									: 6 === h.mode && (u.geometry = Mm(u.geometry, 2));
						else if (1 === h.mode) u = new ho(c, d);
						else if (3 === h.mode) u = new ao(c, d);
						else if (2 === h.mode) u = new uo(c, d);
						else {
							if (0 !== h.mode) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + h.mode);
							u = new yo(c, d);
						}
						Object.keys(u.geometry.morphAttributes).length > 0 && gm(u, r),
							(u.name = e.createUniqueName(r.name || "mesh_" + t)),
							fm(u, r),
							h.extensions && mm(i, u, h),
							e.assignFinalMaterial(u),
							l.push(u);
					}
					for (let n = 0, i = l.length; n < i; n++) e.associations.set(l[n], { meshes: t, primitives: n });
					if (1 === l.length) return l[0];
					const c = new us();
					e.associations.set(c, { meshes: t });
					for (let t = 0, e = l.length; t < e; t++) c.add(l[t]);
					return c;
				})
			);
		}
		loadCamera(t) {
			let e;
			const n = this.json.cameras[t],
				i = n[n.type];
			if (i)
				return (
					"perspective" === n.type
						? (e = new Cn(J.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6))
						: "orthographic" === n.type && (e = new Jn(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
					n.name && (e.name = this.createUniqueName(n.name)),
					fm(e, n),
					Promise.resolve(e)
				);
			console.warn("THREE.GLTFLoader: Missing camera parameters.");
		}
		loadSkin(t) {
			const e = this.json.skins[t],
				n = { joints: e.joints };
			return void 0 === e.inverseBindMatrices
				? Promise.resolve(n)
				: this.getDependency("accessor", e.inverseBindMatrices).then(function (t) {
						return (n.inverseBindMatrices = t), n;
				  });
		}
		loadAnimation(t) {
			const e = this.json.animations[t],
				n = [],
				i = [],
				r = [],
				s = [],
				o = [];
			for (let t = 0, a = e.channels.length; t < a; t++) {
				const a = e.channels[t],
					l = e.samplers[a.sampler],
					c = a.target,
					h = void 0 !== c.node ? c.node : c.id,
					u = void 0 !== e.parameters ? e.parameters[l.input] : l.input,
					d = void 0 !== e.parameters ? e.parameters[l.output] : l.output;
				n.push(this.getDependency("node", h)),
					i.push(this.getDependency("accessor", u)),
					r.push(this.getDependency("accessor", d)),
					s.push(l),
					o.push(c);
			}
			return Promise.all([Promise.all(n), Promise.all(i), Promise.all(r), Promise.all(s), Promise.all(o)]).then(function (
				n
			) {
				const i = n[0],
					r = n[1],
					s = n[2],
					o = n[3],
					a = n[4],
					l = [];
				for (let t = 0, e = i.length; t < e; t++) {
					const e = i[t],
						n = r[t],
						c = s[t],
						h = o[t],
						u = a[t];
					if (void 0 === e) continue;
					let d;
					switch ((e.updateMatrix(), (e.matrixAutoUpdate = !0), dm[u.path])) {
						case dm.weights:
							d = Ha;
							break;
						case dm.rotation:
							d = Ua;
							break;
						default:
							d = Ga;
					}
					const p = e.name ? e.name : e.uuid,
						m = void 0 !== h.interpolation ? pm[h.interpolation] : T,
						f = [];
					dm[u.path] === dm.weights
						? e.traverse(function (t) {
								t.morphTargetInfluences && f.push(t.name ? t.name : t.uuid);
						  })
						: f.push(p);
					let g = c.array;
					if (c.normalized) {
						const t = xm(g.constructor),
							e = new Float32Array(g.length);
						for (let n = 0, i = g.length; n < i; n++) e[n] = g[n] * t;
						g = e;
					}
					for (let t = 0, e = f.length; t < e; t++) {
						const e = new d(f[t] + "." + dm[u.path], n.array, g, m);
						"CUBICSPLINE" === h.interpolation &&
							((e.createInterpolant = function (t) {
								return new (this instanceof Ua ? om : rm)(this.times, this.values, this.getValueSize() / 3, t);
							}),
							(e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0)),
							l.push(e);
					}
				}
				const c = e.name ? e.name : "animation_" + t;
				return new Wa(c, void 0, l);
			});
		}
		createNodeMesh(t) {
			const e = this.json,
				n = this,
				i = e.nodes[t];
			return void 0 === i.mesh
				? null
				: n.getDependency("mesh", i.mesh).then(function (t) {
						const e = n._getNodeRef(n.meshCache, i.mesh, t);
						return (
							void 0 !== i.weights &&
								e.traverse(function (t) {
									if (t.isMesh)
										for (let e = 0, n = i.weights.length; e < n; e++)
											t.morphTargetInfluences[e] = i.weights[e];
								}),
							e
						);
				  });
		}
		loadNode(t) {
			const e = this.json,
				n = this.extensions,
				i = this,
				r = e.nodes[t],
				s = r.name ? i.createUniqueName(r.name) : "";
			return (function () {
				const e = [],
					n = i._invokeOne(function (e) {
						return e.createNodeMesh && e.createNodeMesh(t);
					});
				return (
					n && e.push(n),
					void 0 !== r.camera &&
						e.push(
							i.getDependency("camera", r.camera).then(function (t) {
								return i._getNodeRef(i.cameraCache, r.camera, t);
							})
						),
					i
						._invokeAll(function (e) {
							return e.createNodeAttachment && e.createNodeAttachment(t);
						})
						.forEach(function (t) {
							e.push(t);
						}),
					Promise.all(e)
				);
			})().then(function (e) {
				let o;
				if (((o = !0 === r.isBone ? new js() : e.length > 1 ? new us() : 1 === e.length ? e[0] : new Ae()), o !== e[0]))
					for (let t = 0, n = e.length; t < n; t++) o.add(e[t]);
				if (
					(r.name && ((o.userData.name = r.name), (o.name = s)),
					fm(o, r),
					r.extensions && mm(n, o, r),
					void 0 !== r.matrix)
				) {
					const t = new ne();
					t.fromArray(r.matrix), o.applyMatrix4(t);
				} else void 0 !== r.translation && o.position.fromArray(r.translation), void 0 !== r.rotation && o.quaternion.fromArray(r.rotation), void 0 !== r.scale && o.scale.fromArray(r.scale);
				return i.associations.has(o) || i.associations.set(o, {}), (i.associations.get(o).nodes = t), o;
			});
		}
		loadScene(t) {
			const e = this.json,
				n = this.extensions,
				i = this.json.scenes[t],
				r = this,
				s = new us();
			i.name && (s.name = r.createUniqueName(i.name)), fm(s, i), i.extensions && mm(n, s, i);
			const o = i.nodes || [],
				a = [];
			for (let t = 0, n = o.length; t < n; t++) a.push(wm(o[t], s, e, r));
			return Promise.all(a).then(function () {
				return (
					(r.associations = ((t) => {
						const e = new Map();
						for (const [t, n] of r.associations) (t instanceof ke || t instanceof xt) && e.set(t, n);
						return (
							t.traverse((t) => {
								const n = r.associations.get(t);
								null != n && e.set(t, n);
							}),
							e
						);
					})(s)),
					s
				);
			});
		}
	}
	function wm(t, e, n, i) {
		const r = n.nodes[t];
		return i
			.getDependency("node", t)
			.then(function (t) {
				if (void 0 === r.skin) return t;
				let e;
				return i
					.getDependency("skin", r.skin)
					.then(function (t) {
						e = t;
						const n = [];
						for (let t = 0, r = e.joints.length; t < r; t++) n.push(i.getDependency("node", e.joints[t]));
						return Promise.all(n);
					})
					.then(function (n) {
						return (
							t.traverse(function (t) {
								if (!t.isMesh) return;
								const i = [],
									r = [];
								for (let t = 0, s = n.length; t < s; t++) {
									const s = n[t];
									if (s) {
										i.push(s);
										const n = new ne();
										void 0 !== e.inverseBindMatrices && n.fromArray(e.inverseBindMatrices.array, 16 * t),
											r.push(n);
									} else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[t]);
								}
								t.bind(new Zs(i, r), t.matrixWorld);
							}),
							t
						);
					});
			})
			.then(function (t) {
				e.add(t);
				const s = [];
				if (r.children) {
					const e = r.children;
					for (let r = 0, o = e.length; r < o; r++) {
						const o = e[r];
						s.push(wm(o, t, n, i));
					}
				}
				return Promise.all(s);
			});
	}
	function bm(t, e, n) {
		const i = e.attributes,
			r = [];
		function s(e, i) {
			return n.getDependency("accessor", e).then(function (e) {
				t.setAttribute(i, e);
			});
		}
		for (const e in i) {
			const n = um[e] || e.toLowerCase();
			n in t.attributes || r.push(s(i[e], n));
		}
		if (void 0 !== e.indices && !t.index) {
			const i = n.getDependency("accessor", e.indices).then(function (e) {
				t.setIndex(e);
			});
			r.push(i);
		}
		return (
			fm(t, e),
			(function (t, e, n) {
				const i = e.attributes,
					r = new Ct();
				if (void 0 === i.POSITION) return;
				{
					const t = n.json.accessors[i.POSITION],
						e = t.min,
						s = t.max;
					if (void 0 === e || void 0 === s)
						return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
					if ((r.set(new Et(e[0], e[1], e[2]), new Et(s[0], s[1], s[2])), t.normalized)) {
						const e = xm(am[t.componentType]);
						r.min.multiplyScalar(e), r.max.multiplyScalar(e);
					}
				}
				const s = e.targets;
				if (void 0 !== s) {
					const t = new Et(),
						e = new Et();
					for (let i = 0, r = s.length; i < r; i++) {
						const r = s[i];
						if (void 0 !== r.POSITION) {
							const i = n.json.accessors[r.POSITION],
								s = i.min,
								o = i.max;
							if (void 0 !== s && void 0 !== o) {
								if (
									(e.setX(Math.max(Math.abs(s[0]), Math.abs(o[0]))),
									e.setY(Math.max(Math.abs(s[1]), Math.abs(o[1]))),
									e.setZ(Math.max(Math.abs(s[2]), Math.abs(o[2]))),
									i.normalized)
								) {
									const t = xm(am[i.componentType]);
									e.multiplyScalar(t);
								}
								t.max(e);
							} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
						}
					}
					r.expandByVector(t);
				}
				t.boundingBox = r;
				const o = new Xt();
				r.getCenter(o.center), (o.radius = r.min.distanceTo(r.max) / 2), (t.boundingSphere = o);
			})(t, e, n),
			Promise.all(r).then(function () {
				return void 0 !== e.targets
					? (function (t, e, n) {
							let i = !1,
								r = !1,
								s = !1;
							for (let t = 0, n = e.length; t < n; t++) {
								const n = e[t];
								if (
									(void 0 !== n.POSITION && (i = !0),
									void 0 !== n.NORMAL && (r = !0),
									void 0 !== n.COLOR_0 && (s = !0),
									i && r && s)
								)
									break;
							}
							if (!i && !r && !s) return Promise.resolve(t);
							const o = [],
								a = [],
								l = [];
							for (let c = 0, h = e.length; c < h; c++) {
								const h = e[c];
								if (i) {
									const e =
										void 0 !== h.POSITION ? n.getDependency("accessor", h.POSITION) : t.attributes.position;
									o.push(e);
								}
								if (r) {
									const e = void 0 !== h.NORMAL ? n.getDependency("accessor", h.NORMAL) : t.attributes.normal;
									a.push(e);
								}
								if (s) {
									const e = void 0 !== h.COLOR_0 ? n.getDependency("accessor", h.COLOR_0) : t.attributes.color;
									l.push(e);
								}
							}
							return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l)]).then(function (e) {
								const n = e[0],
									o = e[1],
									a = e[2];
								return (
									i && (t.morphAttributes.position = n),
									r && (t.morphAttributes.normal = o),
									s && (t.morphAttributes.color = a),
									(t.morphTargetsRelative = !0),
									t
								);
							});
					  })(t, e.targets, n)
					: t;
			})
		);
	}
	function Mm(t, e) {
		let n = t.getIndex();
		if (null === n) {
			const e = [],
				i = t.getAttribute("position");
			if (void 0 === i)
				return (
					console.error(
						"THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
					),
					t
				);
			for (let t = 0; t < i.count; t++) e.push(t);
			t.setIndex(e), (n = t.getIndex());
		}
		const i = n.count - 2,
			r = [];
		if (2 === e) for (let t = 1; t <= i; t++) r.push(n.getX(0)), r.push(n.getX(t)), r.push(n.getX(t + 1));
		else
			for (let t = 0; t < i; t++)
				t % 2 == 0
					? (r.push(n.getX(t)), r.push(n.getX(t + 1)), r.push(n.getX(t + 2)))
					: (r.push(n.getX(t + 2)), r.push(n.getX(t + 1)), r.push(n.getX(t)));
		r.length / 3 !== i &&
			console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
		const s = t.clone();
		return s.setIndex(r), s;
	}
	const Sm = new WeakMap();
	class Em extends Za {
		constructor(t) {
			super(t),
				(this.decoderPath = ""),
				(this.decoderConfig = {}),
				(this.decoderBinary = null),
				(this.decoderPending = null),
				(this.workerLimit = 4),
				(this.workerPool = []),
				(this.workerNextTaskID = 1),
				(this.workerSourceURL = ""),
				(this.defaultAttributeIDs = { position: "POSITION", normal: "NORMAL", color: "COLOR", uv: "TEX_COORD" }),
				(this.defaultAttributeTypes = {
					position: "Float32Array",
					normal: "Float32Array",
					color: "Float32Array",
					uv: "Float32Array",
				});
		}
		setDecoderPath(t) {
			return (this.decoderPath = t), this;
		}
		setDecoderConfig(t) {
			return (this.decoderConfig = t), this;
		}
		setWorkerLimit(t) {
			return (this.workerLimit = t), this;
		}
		load(t, e, n, i) {
			const r = new Ka(this.manager);
			r.setPath(this.path),
				r.setResponseType("arraybuffer"),
				r.setRequestHeader(this.requestHeader),
				r.setWithCredentials(this.withCredentials),
				r.load(
					t,
					(t) => {
						const n = {
							attributeIDs: this.defaultAttributeIDs,
							attributeTypes: this.defaultAttributeTypes,
							useUniqueIDs: !1,
						};
						this.decodeGeometry(t, n).then(e).catch(i);
					},
					n,
					i
				);
		}
		decodeDracoFile(t, e, n, i) {
			const r = {
				attributeIDs: n || this.defaultAttributeIDs,
				attributeTypes: i || this.defaultAttributeTypes,
				useUniqueIDs: !!n,
			};
			this.decodeGeometry(t, r).then(e);
		}
		decodeGeometry(t, e) {
			for (const t in e.attributeTypes) {
				const n = e.attributeTypes[t];
				void 0 !== n.BYTES_PER_ELEMENT && (e.attributeTypes[t] = n.name);
			}
			const n = JSON.stringify(e);
			if (Sm.has(t)) {
				const e = Sm.get(t);
				if (e.key === n) return e.promise;
				if (0 === t.byteLength)
					throw new Error(
						"THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
					);
			}
			let i;
			const r = this.workerNextTaskID++,
				s = t.byteLength,
				o = this._getWorker(r, s)
					.then(
						(n) => (
							(i = n),
							new Promise((n, s) => {
								(i._callbacks[r] = { resolve: n, reject: s }),
									i.postMessage({ type: "decode", id: r, taskConfig: e, buffer: t }, [t]);
							})
						)
					)
					.then((t) => this._createGeometry(t.geometry));
			return (
				o
					.catch(() => !0)
					.then(() => {
						i && r && this._releaseTask(i, r);
					}),
				Sm.set(t, { key: n, promise: o }),
				o
			);
		}
		_createGeometry(t) {
			const e = new en();
			t.index && e.setIndex(new We(t.index.array, 1));
			for (let n = 0; n < t.attributes.length; n++) {
				const i = t.attributes[n],
					r = i.name,
					s = i.array,
					o = i.itemSize;
				e.setAttribute(r, new We(s, o));
			}
			return e;
		}
		_loadLibrary(t, e) {
			const n = new Ka(this.manager);
			return (
				n.setPath(this.decoderPath),
				n.setResponseType(e),
				n.setWithCredentials(this.withCredentials),
				new Promise((e, i) => {
					n.load(t, e, void 0, i);
				})
			);
		}
		preload() {
			return this._initDecoder(), this;
		}
		_initDecoder() {
			if (this.decoderPending) return this.decoderPending;
			const t = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
				e = [];
			return (
				t
					? e.push(this._loadLibrary("draco_decoder.js", "text"))
					: (e.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
					  e.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
				(this.decoderPending = Promise.all(e).then((e) => {
					const n = e[0];
					t || (this.decoderConfig.wasmBinary = e[1]);
					const i = Tm.toString(),
						r = [
							"/* draco decoder */",
							n,
							"",
							"/* worker */",
							i.substring(i.indexOf("{") + 1, i.lastIndexOf("}")),
						].join("\n");
					this.workerSourceURL = URL.createObjectURL(new Blob([r]));
				})),
				this.decoderPending
			);
		}
		_getWorker(t, e) {
			return this._initDecoder().then(() => {
				if (this.workerPool.length < this.workerLimit) {
					const t = new Worker(this.workerSourceURL);
					(t._callbacks = {}),
						(t._taskCosts = {}),
						(t._taskLoad = 0),
						t.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
						(t.onmessage = function (e) {
							const n = e.data;
							switch (n.type) {
								case "decode":
									t._callbacks[n.id].resolve(n);
									break;
								case "error":
									t._callbacks[n.id].reject(n);
									break;
								default:
									console.error('THREE.DRACOLoader: Unexpected message, "' + n.type + '"');
							}
						}),
						this.workerPool.push(t);
				} else
					this.workerPool.sort(function (t, e) {
						return t._taskLoad > e._taskLoad ? -1 : 1;
					});
				const n = this.workerPool[this.workerPool.length - 1];
				return (n._taskCosts[t] = e), (n._taskLoad += e), n;
			});
		}
		_releaseTask(t, e) {
			(t._taskLoad -= t._taskCosts[e]), delete t._callbacks[e], delete t._taskCosts[e];
		}
		debug() {
			console.log(
				"Task load: ",
				this.workerPool.map((t) => t._taskLoad)
			);
		}
		dispose() {
			for (let t = 0; t < this.workerPool.length; ++t) this.workerPool[t].terminate();
			return (this.workerPool.length = 0), this;
		}
	}
	function Tm() {
		let t, e;
		function n(t, e, n, i, r, s) {
			const o = s.num_components(),
				a = n.num_points() * o,
				l = a * r.BYTES_PER_ELEMENT,
				c = (function (t, e) {
					switch (e) {
						case Float32Array:
							return t.DT_FLOAT32;
						case Int8Array:
							return t.DT_INT8;
						case Int16Array:
							return t.DT_INT16;
						case Int32Array:
							return t.DT_INT32;
						case Uint8Array:
							return t.DT_UINT8;
						case Uint16Array:
							return t.DT_UINT16;
						case Uint32Array:
							return t.DT_UINT32;
					}
				})(t, r),
				h = t._malloc(l);
			e.GetAttributeDataArrayForAllPoints(n, s, c, l, h);
			const u = new r(t.HEAPF32.buffer, h, a).slice();
			return t._free(h), { name: i, array: u, itemSize: o };
		}
		onmessage = function (i) {
			const r = i.data;
			switch (r.type) {
				case "init":
					(t = r.decoderConfig),
						(e = new Promise(function (e) {
							(t.onModuleLoaded = function (t) {
								e({ draco: t });
							}),
								DracoDecoderModule(t);
						}));
					break;
				case "decode":
					const i = r.buffer,
						s = r.taskConfig;
					e.then((t) => {
						const e = t.draco,
							o = new e.Decoder(),
							a = new e.DecoderBuffer();
						a.Init(new Int8Array(i), i.byteLength);
						try {
							const t = (function (t, e, i, r) {
									const s = r.attributeIDs,
										o = r.attributeTypes;
									let a, l;
									const c = e.GetEncodedGeometryType(i);
									if (c === t.TRIANGULAR_MESH) (a = new t.Mesh()), (l = e.DecodeBufferToMesh(i, a));
									else {
										if (c !== t.POINT_CLOUD) throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
										(a = new t.PointCloud()), (l = e.DecodeBufferToPointCloud(i, a));
									}
									if (!l.ok() || 0 === a.ptr)
										throw new Error("THREE.DRACOLoader: Decoding failed: " + l.error_msg());
									const h = { index: null, attributes: [] };
									for (const i in s) {
										const l = self[o[i]];
										let c, u;
										if (r.useUniqueIDs) (u = s[i]), (c = e.GetAttributeByUniqueId(a, u));
										else {
											if (((u = e.GetAttributeId(a, t[s[i]])), -1 === u)) continue;
											c = e.GetAttribute(a, u);
										}
										h.attributes.push(n(t, e, a, i, l, c));
									}
									return (
										c === t.TRIANGULAR_MESH &&
											(h.index = (function (t, e, n) {
												const i = 3 * n.num_faces(),
													r = 4 * i,
													s = t._malloc(r);
												e.GetTrianglesUInt32Array(n, r, s);
												const o = new Uint32Array(t.HEAPF32.buffer, s, i).slice();
												return t._free(s), { array: o, itemSize: 1 };
											})(t, e, a)),
										t.destroy(a),
										h
									);
								})(e, o, a, s),
								i = t.attributes.map((t) => t.array.buffer);
							t.index && i.push(t.index.array.buffer),
								self.postMessage({ type: "decode", id: r.id, geometry: t }, i);
						} catch (t) {
							console.error(t), self.postMessage({ type: "error", id: r.id, error: t.message });
						} finally {
							e.destroy(a), e.destroy(o);
						}
					});
			}
		};
	}
	class Am extends Xl {
		constructor(t) {
			super(),
				(this.sources = t),
				(this.items = {}),
				(this.toLoad = this.sources.length),
				(this.loaded = 0),
				(this.loadingManager = new Xa(() => {
					const t = document.getElementById("loading-screen");
					t.classList.add("fade-out"), t.addEventListener("transitionend", this.onTransitionEnd);
				})),
				this.setLoaders(),
				this.startLoading();
		}
		onTransitionEnd(t) {
			t.target.remove();
		}
		setLoaders() {
			(this.loaders = {}),
				(this.loaders.dracoLoader = new Em()),
				this.loaders.dracoLoader.setDecoderPath("/draco/"),
				(this.loaders.gltfLoader = new Bp(this.loadingManager)),
				this.loaders.gltfLoader.setDRACOLoader(this.dracoLoader),
				(this.loaders.textureLoader = new tl(this.loadingManager));
		}
		startLoading() {
			for (const t of this.sources)
				"gltfModel" === t.type
					? this.loaders.gltfLoader.load(t.path, (e) => {
							this.sourceLoaded(t, e);
					  })
					: "texture" === t.type &&
					  this.loaders.textureLoader.load(t.path, (e) => {
							this.sourceLoaded(t, e);
					  });
		}
		sourceLoaded(t, e) {
			(this.items[t.name] = e), this.loaded++, this.loaded === this.toLoad && this.trigger("ready");
		}
	}
	class Cm {
		constructor(t, e, n, i, r = "div") {
			(this.parent = t),
				(this.object = e),
				(this.property = n),
				(this._disabled = !1),
				(this.initialValue = this.getValue()),
				(this.domElement = document.createElement("div")),
				this.domElement.classList.add("controller"),
				this.domElement.classList.add(i),
				(this.$name = document.createElement("div")),
				this.$name.classList.add("name"),
				(Cm.nextNameID = Cm.nextNameID || 0),
				(this.$name.id = "lil-gui-name-" + ++Cm.nextNameID),
				(this.$widget = document.createElement(r)),
				this.$widget.classList.add("widget"),
				(this.$disable = this.$widget),
				this.domElement.appendChild(this.$name),
				this.domElement.appendChild(this.$widget),
				this.parent.children.push(this),
				this.parent.controllers.push(this),
				this.parent.$children.appendChild(this.domElement),
				(this._listenCallback = this._listenCallback.bind(this)),
				this.name(n);
		}
		name(t) {
			return (this._name = t), (this.$name.innerHTML = t), this;
		}
		onChange(t) {
			return (this._onChange = t), this;
		}
		_callOnChange() {
			this.parent._callOnChange(this),
				void 0 !== this._onChange && this._onChange.call(this, this.getValue()),
				(this._changed = !0);
		}
		onFinishChange(t) {
			return (this._onFinishChange = t), this;
		}
		_callOnFinishChange() {
			this._changed &&
				(this.parent._callOnFinishChange(this),
				void 0 !== this._onFinishChange && this._onFinishChange.call(this, this.getValue())),
				(this._changed = !1);
		}
		reset() {
			return this.setValue(this.initialValue), this._callOnFinishChange(), this;
		}
		enable(t = !0) {
			return this.disable(!t);
		}
		disable(t = !0) {
			return (
				t === this._disabled ||
					((this._disabled = t),
					this.domElement.classList.toggle("disabled", t),
					this.$disable.toggleAttribute("disabled", t)),
				this
			);
		}
		options(t) {
			const e = this.parent.add(this.object, this.property, t);
			return e.name(this._name), this.destroy(), e;
		}
		min(t) {
			return this;
		}
		max(t) {
			return this;
		}
		step(t) {
			return this;
		}
		listen(t = !0) {
			return (
				(this._listening = t),
				void 0 !== this._listenCallbackID &&
					(cancelAnimationFrame(this._listenCallbackID), (this._listenCallbackID = void 0)),
				this._listening && this._listenCallback(),
				this
			);
		}
		_listenCallback() {
			this._listenCallbackID = requestAnimationFrame(this._listenCallback);
			const t = this.save();
			t !== this._listenPrevValue && this.updateDisplay(), (this._listenPrevValue = t);
		}
		getValue() {
			return this.object[this.property];
		}
		setValue(t) {
			return (this.object[this.property] = t), this._callOnChange(), this.updateDisplay(), this;
		}
		updateDisplay() {
			return this;
		}
		load(t) {
			return this.setValue(t), this._callOnFinishChange(), this;
		}
		save() {
			return this.getValue();
		}
		destroy() {
			this.listen(!1),
				this.parent.children.splice(this.parent.children.indexOf(this), 1),
				this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
				this.parent.$children.removeChild(this.domElement);
		}
	}
	class Rm extends Cm {
		constructor(t, e, n) {
			super(t, e, n, "boolean", "label"),
				(this.$input = document.createElement("input")),
				this.$input.setAttribute("type", "checkbox"),
				this.$input.setAttribute("aria-labelledby", this.$name.id),
				this.$widget.appendChild(this.$input),
				this.$input.addEventListener("change", () => {
					this.setValue(this.$input.checked), this._callOnFinishChange();
				}),
				(this.$disable = this.$input),
				this.updateDisplay();
		}
		updateDisplay() {
			return (this.$input.checked = this.getValue()), this;
		}
	}
	function Lm(t) {
		let e, n;
		return (
			(e = t.match(/(#|0x)?([a-f0-9]{6})/i))
				? (n = e[2])
				: (e = t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
				? (n =
						parseInt(e[1]).toString(16).padStart(2, 0) +
						parseInt(e[2]).toString(16).padStart(2, 0) +
						parseInt(e[3]).toString(16).padStart(2, 0))
				: (e = t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (n = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
			!!n && "#" + n
		);
	}
	const Pm = { isPrimitive: !0, match: (t) => "string" == typeof t, fromHexString: Lm, toHexString: Lm },
		Im = {
			isPrimitive: !0,
			match: (t) => "number" == typeof t,
			fromHexString: (t) => parseInt(t.substring(1), 16),
			toHexString: (t) => "#" + t.toString(16).padStart(6, 0),
		},
		Dm = {
			isPrimitive: !1,
			match: Array.isArray,
			fromHexString(t, e, n = 1) {
				const i = Im.fromHexString(t);
				(e[0] = (((i >> 16) & 255) / 255) * n), (e[1] = (((i >> 8) & 255) / 255) * n), (e[2] = ((255 & i) / 255) * n);
			},
			toHexString: ([t, e, n], i = 1) => Im.toHexString(((t * (i = 255 / i)) << 16) ^ ((e * i) << 8) ^ ((n * i) << 0)),
		},
		Nm = {
			isPrimitive: !1,
			match: (t) => Object(t) === t,
			fromHexString(t, e, n = 1) {
				const i = Im.fromHexString(t);
				(e.r = (((i >> 16) & 255) / 255) * n), (e.g = (((i >> 8) & 255) / 255) * n), (e.b = ((255 & i) / 255) * n);
			},
			toHexString: ({ r: t, g: e, b: n }, i = 1) =>
				Im.toHexString(((t * (i = 255 / i)) << 16) ^ ((e * i) << 8) ^ ((n * i) << 0)),
		},
		zm = [Pm, Im, Dm, Nm];
	class Bm extends Cm {
		constructor(t, e, n, i) {
			var r;
			super(t, e, n, "color"),
				(this.$input = document.createElement("input")),
				this.$input.setAttribute("type", "color"),
				this.$input.setAttribute("tabindex", -1),
				this.$input.setAttribute("aria-labelledby", this.$name.id),
				(this.$text = document.createElement("input")),
				this.$text.setAttribute("type", "text"),
				this.$text.setAttribute("spellcheck", "false"),
				this.$text.setAttribute("aria-labelledby", this.$name.id),
				(this.$display = document.createElement("div")),
				this.$display.classList.add("display"),
				this.$display.appendChild(this.$input),
				this.$widget.appendChild(this.$display),
				this.$widget.appendChild(this.$text),
				(this._format = ((r = this.initialValue), zm.find((t) => t.match(r)))),
				(this._rgbScale = i),
				(this._initialValueHexString = this.save()),
				(this._textFocused = !1),
				this.$input.addEventListener("input", () => {
					this._setValueFromHexString(this.$input.value);
				}),
				this.$input.addEventListener("blur", () => {
					this._callOnFinishChange();
				}),
				this.$text.addEventListener("input", () => {
					const t = Lm(this.$text.value);
					t && this._setValueFromHexString(t);
				}),
				this.$text.addEventListener("focus", () => {
					(this._textFocused = !0), this.$text.select();
				}),
				this.$text.addEventListener("blur", () => {
					(this._textFocused = !1), this.updateDisplay(), this._callOnFinishChange();
				}),
				(this.$disable = this.$text),
				this.updateDisplay();
		}
		reset() {
			return this._setValueFromHexString(this._initialValueHexString), this;
		}
		_setValueFromHexString(t) {
			if (this._format.isPrimitive) {
				const e = this._format.fromHexString(t);
				this.setValue(e);
			} else this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
		}
		save() {
			return this._format.toHexString(this.getValue(), this._rgbScale);
		}
		load(t) {
			return this._setValueFromHexString(t), this._callOnFinishChange(), this;
		}
		updateDisplay() {
			return (
				(this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale)),
				this._textFocused || (this.$text.value = this.$input.value.substring(1)),
				(this.$display.style.backgroundColor = this.$input.value),
				this
			);
		}
	}
	class Om extends Cm {
		constructor(t, e, n) {
			super(t, e, n, "function"),
				(this.$button = document.createElement("button")),
				this.$button.appendChild(this.$name),
				this.$widget.appendChild(this.$button),
				this.$button.addEventListener("click", (t) => {
					t.preventDefault(), this.getValue().call(this.object);
				}),
				this.$button.addEventListener("touchstart", () => {}, { passive: !0 }),
				(this.$disable = this.$button);
		}
	}
	class Fm extends Cm {
		constructor(t, e, n, i, r, s) {
			super(t, e, n, "number"), this._initInput(), this.min(i), this.max(r);
			const o = void 0 !== s;
			this.step(o ? s : this._getImplicitStep(), o), this.updateDisplay();
		}
		min(t) {
			return (this._min = t), this._onUpdateMinMax(), this;
		}
		max(t) {
			return (this._max = t), this._onUpdateMinMax(), this;
		}
		step(t, e = !0) {
			return (this._step = t), (this._stepExplicit = e), this;
		}
		updateDisplay() {
			const t = this.getValue();
			if (this._hasSlider) {
				let e = (t - this._min) / (this._max - this._min);
				(e = Math.max(0, Math.min(e, 1))), (this.$fill.style.width = 100 * e + "%");
			}
			return this._inputFocused || (this.$input.value = t), this;
		}
		_initInput() {
			(this.$input = document.createElement("input")),
				this.$input.setAttribute("type", "number"),
				this.$input.setAttribute("step", "any"),
				this.$input.setAttribute("aria-labelledby", this.$name.id),
				this.$widget.appendChild(this.$input),
				(this.$disable = this.$input);
			const t = (t) => {
				const e = parseFloat(this.$input.value);
				isNaN(e) || (this._snapClampSetValue(e + t), (this.$input.value = this.getValue()));
			};
			let e,
				n,
				i,
				r,
				s,
				o = !1;
			const a = (t) => {
					if (o) {
						const i = t.clientX - e,
							r = t.clientY - n;
						Math.abs(r) > 5
							? (t.preventDefault(), this.$input.blur(), (o = !1), this._setDraggingStyle(!0, "vertical"))
							: Math.abs(i) > 5 && l();
					}
					if (!o) {
						const e = t.clientY - i;
						(s -= e * this._step * this._arrowKeyMultiplier(t)),
							r + s > this._max ? (s = this._max - r) : r + s < this._min && (s = this._min - r),
							this._snapClampSetValue(r + s);
					}
					i = t.clientY;
				},
				l = () => {
					this._setDraggingStyle(!1, "vertical"),
						this._callOnFinishChange(),
						window.removeEventListener("mousemove", a),
						window.removeEventListener("mouseup", l);
				};
			this.$input.addEventListener("input", () => {
				const t = parseFloat(this.$input.value);
				isNaN(t) || this.setValue(this._clamp(t));
			}),
				this.$input.addEventListener("keydown", (e) => {
					"Enter" === e.code && this.$input.blur(),
						"ArrowUp" === e.code && (e.preventDefault(), t(this._step * this._arrowKeyMultiplier(e))),
						"ArrowDown" === e.code && (e.preventDefault(), t(this._step * this._arrowKeyMultiplier(e) * -1));
				}),
				this.$input.addEventListener(
					"wheel",
					(e) => {
						this._inputFocused && (e.preventDefault(), t(this._step * this._normalizeMouseWheel(e)));
					},
					{ passive: !1 }
				),
				this.$input.addEventListener("mousedown", (t) => {
					(e = t.clientX),
						(n = i = t.clientY),
						(o = !0),
						(r = this.getValue()),
						(s = 0),
						window.addEventListener("mousemove", a),
						window.addEventListener("mouseup", l);
				}),
				this.$input.addEventListener("focus", () => {
					this._inputFocused = !0;
				}),
				this.$input.addEventListener("blur", () => {
					(this._inputFocused = !1), this.updateDisplay(), this._callOnFinishChange();
				});
		}
		_initSlider() {
			(this._hasSlider = !0),
				(this.$slider = document.createElement("div")),
				this.$slider.classList.add("slider"),
				(this.$fill = document.createElement("div")),
				this.$fill.classList.add("fill"),
				this.$slider.appendChild(this.$fill),
				this.$widget.insertBefore(this.$slider, this.$input),
				this.domElement.classList.add("hasSlider");
			const t = (t) => {
					const e = this.$slider.getBoundingClientRect();
					let n = ((t, e, n, i, r) => ((t - e) / (n - e)) * (this._max - i) + i)(t, e.left, e.right, this._min);
					this._snapClampSetValue(n);
				},
				e = (e) => {
					t(e.clientX);
				},
				n = () => {
					this._callOnFinishChange(),
						this._setDraggingStyle(!1),
						window.removeEventListener("mousemove", e),
						window.removeEventListener("mouseup", n);
				};
			let i,
				r,
				s = !1;
			const o = (e) => {
					e.preventDefault(), this._setDraggingStyle(!0), t(e.touches[0].clientX), (s = !1);
				},
				a = (e) => {
					if (s) {
						const t = e.touches[0].clientX - i,
							n = e.touches[0].clientY - r;
						Math.abs(t) > Math.abs(n)
							? o(e)
							: (window.removeEventListener("touchmove", a), window.removeEventListener("touchend", l));
					} else e.preventDefault(), t(e.touches[0].clientX);
				},
				l = () => {
					this._callOnFinishChange(),
						this._setDraggingStyle(!1),
						window.removeEventListener("touchmove", a),
						window.removeEventListener("touchend", l);
				},
				c = this._callOnFinishChange.bind(this);
			let h;
			this.$slider.addEventListener("mousedown", (i) => {
				this._setDraggingStyle(!0),
					t(i.clientX),
					window.addEventListener("mousemove", e),
					window.addEventListener("mouseup", n);
			}),
				this.$slider.addEventListener(
					"touchstart",
					(t) => {
						t.touches.length > 1 ||
							(this._hasScrollBar ? ((i = t.touches[0].clientX), (r = t.touches[0].clientY), (s = !0)) : o(t),
							window.addEventListener("touchmove", a),
							window.addEventListener("touchend", l));
					},
					{ passive: !1 }
				),
				this.$slider.addEventListener(
					"wheel",
					(t) => {
						if (Math.abs(t.deltaX) < Math.abs(t.deltaY) && this._hasScrollBar) return;
						t.preventDefault();
						const e = this._normalizeMouseWheel(t) * this._step;
						this._snapClampSetValue(this.getValue() + e),
							(this.$input.value = this.getValue()),
							clearTimeout(h),
							(h = setTimeout(c, 400));
					},
					{ passive: !1 }
				);
		}
		_setDraggingStyle(t, e = "horizontal") {
			this.$slider && this.$slider.classList.toggle("active", t),
				document.body.classList.toggle("lil-gui-dragging", t),
				document.body.classList.toggle(`lil-gui-${e}`, t);
		}
		_getImplicitStep() {
			return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
		}
		_onUpdateMinMax() {
			!this._hasSlider &&
				this._hasMin &&
				this._hasMax &&
				(this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
		}
		_normalizeMouseWheel(t) {
			let { deltaX: e, deltaY: n } = t;
			return (
				Math.floor(t.deltaY) !== t.deltaY &&
					t.wheelDelta &&
					((e = 0), (n = -t.wheelDelta / 120), (n *= this._stepExplicit ? 1 : 10)),
				e + -n
			);
		}
		_arrowKeyMultiplier(t) {
			let e = this._stepExplicit ? 1 : 10;
			return t.shiftKey ? (e *= 10) : t.altKey && (e /= 10), e;
		}
		_snap(t) {
			const e = Math.round(t / this._step) * this._step;
			return parseFloat(e.toPrecision(15));
		}
		_clamp(t) {
			return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
		}
		_snapClampSetValue(t) {
			this.setValue(this._clamp(this._snap(t)));
		}
		get _hasScrollBar() {
			const t = this.parent.root.$children;
			return t.scrollHeight > t.clientHeight;
		}
		get _hasMin() {
			return void 0 !== this._min;
		}
		get _hasMax() {
			return void 0 !== this._max;
		}
	}
	class Hm extends Cm {
		constructor(t, e, n, i) {
			super(t, e, n, "option"),
				(this.$select = document.createElement("select")),
				this.$select.setAttribute("aria-labelledby", this.$name.id),
				(this.$display = document.createElement("div")),
				this.$display.classList.add("display"),
				(this._values = Array.isArray(i) ? i : Object.values(i)),
				(this._names = Array.isArray(i) ? i : Object.keys(i)),
				this._names.forEach((t) => {
					const e = document.createElement("option");
					(e.innerHTML = t), this.$select.appendChild(e);
				}),
				this.$select.addEventListener("change", () => {
					this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
				}),
				this.$select.addEventListener("focus", () => {
					this.$display.classList.add("focus");
				}),
				this.$select.addEventListener("blur", () => {
					this.$display.classList.remove("focus");
				}),
				this.$widget.appendChild(this.$select),
				this.$widget.appendChild(this.$display),
				(this.$disable = this.$select),
				this.updateDisplay();
		}
		updateDisplay() {
			const t = this.getValue(),
				e = this._values.indexOf(t);
			return (this.$select.selectedIndex = e), (this.$display.innerHTML = -1 === e ? t : this._names[e]), this;
		}
	}
	class km extends Cm {
		constructor(t, e, n) {
			super(t, e, n, "string"),
				(this.$input = document.createElement("input")),
				this.$input.setAttribute("type", "text"),
				this.$input.setAttribute("aria-labelledby", this.$name.id),
				this.$input.addEventListener("input", () => {
					this.setValue(this.$input.value);
				}),
				this.$input.addEventListener("keydown", (t) => {
					"Enter" === t.code && this.$input.blur();
				}),
				this.$input.addEventListener("blur", () => {
					this._callOnFinishChange();
				}),
				this.$widget.appendChild(this.$input),
				(this.$disable = this.$input),
				this.updateDisplay();
		}
		updateDisplay() {
			return (this.$input.value = this.getValue()), this;
		}
	}
	let Um = !1;
	class Vm {
		constructor({
			parent: t,
			autoPlace: e = void 0 === t,
			container: n,
			width: i,
			title: r = "Controls",
			injectStyles: s = !0,
			touchStyles: o = !0,
		} = {}) {
			if (
				((this.parent = t),
				(this.root = t ? t.root : this),
				(this.children = []),
				(this.controllers = []),
				(this.folders = []),
				(this._closed = !1),
				(this._hidden = !1),
				(this.domElement = document.createElement("div")),
				this.domElement.classList.add("lil-gui"),
				(this.$title = document.createElement("div")),
				this.$title.classList.add("title"),
				this.$title.setAttribute("role", "button"),
				this.$title.setAttribute("aria-expanded", !0),
				this.$title.setAttribute("tabindex", 0),
				this.$title.addEventListener("click", () => this.openAnimated(this._closed)),
				this.$title.addEventListener("keydown", (t) => {
					("Enter" !== t.code && "Space" !== t.code) || (t.preventDefault(), this.$title.click());
				}),
				this.$title.addEventListener("touchstart", () => {}, { passive: !0 }),
				(this.$children = document.createElement("div")),
				this.$children.classList.add("children"),
				this.domElement.appendChild(this.$title),
				this.domElement.appendChild(this.$children),
				this.title(r),
				o && this.domElement.classList.add("allow-touch-styles"),
				this.parent)
			)
				return (
					this.parent.children.push(this),
					this.parent.folders.push(this),
					void this.parent.$children.appendChild(this.domElement)
				);
			this.domElement.classList.add("root"),
				!Um &&
					s &&
					((function (t) {
						const e = document.createElement("style");
						e.innerHTML =
							'.lil-gui {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  --background-color: #1f1f1f;\n  --text-color: #ebebeb;\n  --title-background-color: #111111;\n  --title-text-color: #ebebeb;\n  --widget-color: #424242;\n  --hover-color: #4f4f4f;\n  --focus-color: #595959;\n  --number-color: #2cc9ff;\n  --string-color: #a2db3c;\n  --font-size: 11px;\n  --input-font-size: 11px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;\n  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;\n  --padding: 4px;\n  --spacing: 4px;\n  --widget-height: 20px;\n  --name-width: 45%;\n  --slider-knob-width: 2px;\n  --slider-input-width: 27%;\n  --color-input-width: 27%;\n  --slider-input-min-width: 45px;\n  --color-input-min-width: 45px;\n  --folder-indent: 7px;\n  --widget-padding: 0 0 0 3px;\n  --widget-border-radius: 2px;\n  --checkbox-size: calc(0.75 * var(--widget-height));\n  --scrollbar-width: 5px;\n}\n.lil-gui, .lil-gui * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.lil-gui.root {\n  width: var(--width, 245px);\n  display: flex;\n  flex-direction: column;\n}\n.lil-gui.root > .title {\n  background: var(--title-background-color);\n  color: var(--title-text-color);\n}\n.lil-gui.root > .children {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.lil-gui.root > .children::-webkit-scrollbar {\n  width: var(--scrollbar-width);\n  height: var(--scrollbar-width);\n  background: var(--background-color);\n}\n.lil-gui.root > .children::-webkit-scrollbar-thumb {\n  border-radius: var(--scrollbar-width);\n  background: var(--focus-color);\n}\n@media (pointer: coarse) {\n  .lil-gui.allow-touch-styles {\n    --widget-height: 28px;\n    --padding: 6px;\n    --spacing: 6px;\n    --font-size: 13px;\n    --input-font-size: 16px;\n    --folder-indent: 10px;\n    --scrollbar-width: 7px;\n    --slider-input-min-width: 50px;\n    --color-input-min-width: 65px;\n  }\n}\n.lil-gui.force-touch-styles {\n  --widget-height: 28px;\n  --padding: 6px;\n  --spacing: 6px;\n  --font-size: 13px;\n  --input-font-size: 16px;\n  --folder-indent: 10px;\n  --scrollbar-width: 7px;\n  --slider-input-min-width: 50px;\n  --color-input-min-width: 65px;\n}\n.lil-gui.autoPlace {\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  right: 15px;\n  z-index: 1001;\n}\n\n.lil-gui .controller {\n  display: flex;\n  align-items: center;\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n}\n.lil-gui .controller.disabled {\n  opacity: 0.5;\n}\n.lil-gui .controller.disabled, .lil-gui .controller.disabled * {\n  pointer-events: none !important;\n}\n.lil-gui .controller > .name {\n  min-width: var(--name-width);\n  flex-shrink: 0;\n  white-space: pre;\n  padding-right: var(--spacing);\n  line-height: var(--widget-height);\n}\n.lil-gui .controller .widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: var(--widget-height);\n}\n.lil-gui .controller.string input {\n  color: var(--string-color);\n}\n.lil-gui .controller.boolean .widget {\n  cursor: pointer;\n}\n.lil-gui .controller.color .display {\n  width: 100%;\n  height: var(--widget-height);\n  border-radius: var(--widget-border-radius);\n  position: relative;\n}\n@media (hover: hover) {\n  .lil-gui .controller.color .display:hover:before {\n    content: " ";\n    display: block;\n    position: absolute;\n    border-radius: var(--widget-border-radius);\n    border: 1px solid #fff9;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n.lil-gui .controller.color input[type=color] {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.lil-gui .controller.color input[type=text] {\n  margin-left: var(--spacing);\n  font-family: var(--font-family-mono);\n  min-width: var(--color-input-min-width);\n  width: var(--color-input-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.option select {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n}\n.lil-gui .controller.option .display {\n  position: relative;\n  pointer-events: none;\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  line-height: var(--widget-height);\n  max-width: 100%;\n  overflow: hidden;\n  word-break: break-all;\n  padding-left: 0.55em;\n  padding-right: 1.75em;\n  background: var(--widget-color);\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .display.focus {\n    background: var(--focus-color);\n  }\n}\n.lil-gui .controller.option .display.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.option .display:after {\n  font-family: "lil-gui";\n  content: "↕";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding-right: 0.375em;\n}\n.lil-gui .controller.option .widget,\n.lil-gui .controller.option select {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .widget:hover .display {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number input {\n  color: var(--number-color);\n}\n.lil-gui .controller.number.hasSlider input {\n  margin-left: var(--spacing);\n  width: var(--slider-input-width);\n  min-width: var(--slider-input-min-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.number .slider {\n  width: 100%;\n  height: var(--widget-height);\n  background-color: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  padding-right: var(--slider-knob-width);\n  overflow: hidden;\n  cursor: ew-resize;\n  touch-action: pan-y;\n}\n@media (hover: hover) {\n  .lil-gui .controller.number .slider:hover {\n    background-color: var(--hover-color);\n  }\n}\n.lil-gui .controller.number .slider.active {\n  background-color: var(--focus-color);\n}\n.lil-gui .controller.number .slider.active .fill {\n  opacity: 0.95;\n}\n.lil-gui .controller.number .fill {\n  height: 100%;\n  border-right: var(--slider-knob-width) solid var(--number-color);\n  box-sizing: content-box;\n}\n\n.lil-gui-dragging .lil-gui {\n  --hover-color: var(--widget-color);\n}\n.lil-gui-dragging * {\n  cursor: ew-resize !important;\n}\n\n.lil-gui-dragging.lil-gui-vertical * {\n  cursor: ns-resize !important;\n}\n\n.lil-gui .title {\n  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);\n  height: var(--title-height);\n  line-height: calc(var(--title-height) - 4px);\n  font-weight: 600;\n  padding: 0 var(--padding);\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  outline: none;\n  text-decoration-skip: objects;\n}\n.lil-gui .title:before {\n  font-family: "lil-gui";\n  content: "▾";\n  padding-right: 2px;\n  display: inline-block;\n}\n.lil-gui .title:active {\n  background: var(--title-background-color);\n  opacity: 0.75;\n}\n@media (hover: hover) {\n  body:not(.lil-gui-dragging) .lil-gui .title:hover {\n    background: var(--title-background-color);\n    opacity: 0.85;\n  }\n  .lil-gui .title:focus {\n    text-decoration: underline var(--focus-color);\n  }\n}\n.lil-gui.root > .title:focus {\n  text-decoration: none !important;\n}\n.lil-gui.closed > .title:before {\n  content: "▸";\n}\n.lil-gui.closed > .children {\n  transform: translateY(-7px);\n  opacity: 0;\n}\n.lil-gui.closed:not(.transition) > .children {\n  display: none;\n}\n.lil-gui.transition > .children {\n  transition-duration: 300ms;\n  transition-property: height, opacity, transform;\n  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);\n  overflow: hidden;\n  pointer-events: none;\n}\n.lil-gui .children:empty:before {\n  content: "Empty";\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n  display: block;\n  height: var(--widget-height);\n  font-style: italic;\n  line-height: var(--widget-height);\n  opacity: 0.5;\n}\n.lil-gui.root > .children > .lil-gui > .title {\n  border: 0 solid var(--widget-color);\n  border-width: 1px 0;\n  transition: border-color 300ms;\n}\n.lil-gui.root > .children > .lil-gui.closed > .title {\n  border-bottom-color: transparent;\n}\n.lil-gui + .controller {\n  border-top: 1px solid var(--widget-color);\n  margin-top: 0;\n  padding-top: var(--spacing);\n}\n.lil-gui .lil-gui .lil-gui > .title {\n  border: none;\n}\n.lil-gui .lil-gui .lil-gui > .children {\n  border: none;\n  margin-left: var(--folder-indent);\n  border-left: 2px solid var(--widget-color);\n}\n.lil-gui .lil-gui .controller {\n  border: none;\n}\n\n.lil-gui input {\n  -webkit-tap-highlight-color: transparent;\n  border: 0;\n  outline: none;\n  font-family: var(--font-family);\n  font-size: var(--input-font-size);\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  background: var(--widget-color);\n  color: var(--text-color);\n  width: 100%;\n}\n@media (hover: hover) {\n  .lil-gui input:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui input:active {\n    background: var(--focus-color);\n  }\n}\n.lil-gui input:disabled {\n  opacity: 1;\n}\n.lil-gui input[type=text],\n.lil-gui input[type=number] {\n  padding: var(--widget-padding);\n}\n.lil-gui input[type=text]:focus,\n.lil-gui input[type=number]:focus {\n  background: var(--focus-color);\n}\n.lil-gui input::-webkit-outer-spin-button,\n.lil-gui input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.lil-gui input[type=number] {\n  -moz-appearance: textfield;\n}\n.lil-gui input[type=checkbox] {\n  appearance: none;\n  -webkit-appearance: none;\n  height: var(--checkbox-size);\n  width: var(--checkbox-size);\n  border-radius: var(--widget-border-radius);\n  text-align: center;\n  cursor: pointer;\n}\n.lil-gui input[type=checkbox]:checked:before {\n  font-family: "lil-gui";\n  content: "✓";\n  font-size: var(--checkbox-size);\n  line-height: var(--checkbox-size);\n}\n@media (hover: hover) {\n  .lil-gui input[type=checkbox]:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button {\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  width: 100%;\n  height: var(--widget-height);\n  text-transform: none;\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  border: 1px solid var(--widget-color);\n  text-align: center;\n  line-height: calc(var(--widget-height) - 4px);\n}\n@media (hover: hover) {\n  .lil-gui button:hover {\n    background: var(--hover-color);\n    border-color: var(--hover-color);\n  }\n  .lil-gui button:focus {\n    border-color: var(--focus-color);\n  }\n}\n.lil-gui button:active {\n  background: var(--focus-color);\n}\n\n@font-face {\n  font-family: "lil-gui";\n  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");\n}';
						const n = document.querySelector("head link[rel=stylesheet], head style");
						n ? document.head.insertBefore(e, n) : document.head.appendChild(e);
					})(),
					(Um = !0)),
				n
					? n.appendChild(this.domElement)
					: e && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)),
				i && this.domElement.style.setProperty("--width", i + "px"),
				this.domElement.addEventListener("keydown", (t) => t.stopPropagation()),
				this.domElement.addEventListener("keyup", (t) => t.stopPropagation());
		}
		add(t, e, n, i, r) {
			if (Object(n) === n) return new Hm(this, t, e, n);
			const s = t[e];
			switch (typeof s) {
				case "number":
					return new Fm(this, t, e, n, i, r);
				case "boolean":
					return new Rm(this, t, e);
				case "string":
					return new km(this, t, e);
				case "function":
					return new Om(this, t, e);
			}
			console.error("gui.add failed\n\tproperty:", e, "\n\tobject:", t, "\n\tvalue:", s);
		}
		addColor(t, e, n = 1) {
			return new Bm(this, t, e, n);
		}
		addFolder(t) {
			return new Vm({ parent: this, title: t });
		}
		load(t, e = !0) {
			return (
				t.controllers &&
					this.controllers.forEach((e) => {
						e instanceof Om || (e._name in t.controllers && e.load(t.controllers[e._name]));
					}),
				e &&
					t.folders &&
					this.folders.forEach((e) => {
						e._title in t.folders && e.load(t.folders[e._title]);
					}),
				this
			);
		}
		save(t = !0) {
			const e = { controllers: {}, folders: {} };
			return (
				this.controllers.forEach((t) => {
					if (!(t instanceof Om)) {
						if (t._name in e.controllers) throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);
						e.controllers[t._name] = t.save();
					}
				}),
				t &&
					this.folders.forEach((t) => {
						if (t._title in e.folders) throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);
						e.folders[t._title] = t.save();
					}),
				e
			);
		}
		open(t = !0) {
			return (
				(this._closed = !t),
				this.$title.setAttribute("aria-expanded", !this._closed),
				this.domElement.classList.toggle("closed", this._closed),
				this
			);
		}
		close() {
			return this.open(!1);
		}
		show(t = !0) {
			return (this._hidden = !t), (this.domElement.style.display = this._hidden ? "none" : ""), this;
		}
		hide() {
			return this.show(!1);
		}
		openAnimated(t = !0) {
			return (
				(this._closed = !t),
				this.$title.setAttribute("aria-expanded", !this._closed),
				requestAnimationFrame(() => {
					const e = this.$children.clientHeight;
					(this.$children.style.height = e + "px"), this.domElement.classList.add("transition");
					const n = (t) => {
						t.target === this.$children &&
							((this.$children.style.height = ""),
							this.domElement.classList.remove("transition"),
							this.$children.removeEventListener("transitionend", n));
					};
					this.$children.addEventListener("transitionend", n);
					const i = t ? this.$children.scrollHeight : 0;
					this.domElement.classList.toggle("closed", !t),
						requestAnimationFrame(() => {
							this.$children.style.height = i + "px";
						});
				}),
				this
			);
		}
		title(t) {
			return (this._title = t), (this.$title.innerHTML = t), this;
		}
		reset(t = !0) {
			return (t ? this.controllersRecursive() : this.controllers).forEach((t) => t.reset()), this;
		}
		onChange(t) {
			return (this._onChange = t), this;
		}
		_callOnChange(t) {
			this.parent && this.parent._callOnChange(t),
				void 0 !== this._onChange &&
					this._onChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
		}
		onFinishChange(t) {
			return (this._onFinishChange = t), this;
		}
		_callOnFinishChange(t) {
			this.parent && this.parent._callOnFinishChange(t),
				void 0 !== this._onFinishChange &&
					this._onFinishChange.call(this, {
						object: t.object,
						property: t.property,
						value: t.getValue(),
						controller: t,
					});
		}
		destroy() {
			this.parent &&
				(this.parent.children.splice(this.parent.children.indexOf(this), 1),
				this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
				this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement),
				Array.from(this.children).forEach((t) => t.destroy());
		}
		controllersRecursive() {
			let t = Array.from(this.controllers);
			return (
				this.folders.forEach((e) => {
					t = t.concat(e.controllersRecursive());
				}),
				t
			);
		}
		foldersRecursive() {
			let t = Array.from(this.folders);
			return (
				this.folders.forEach((e) => {
					t = t.concat(e.foldersRecursive());
				}),
				t
			);
		}
	}
	class Gm {
		constructor() {
			(this.active = "#debug" === window.location.hash), this.active && (this.gui = new Vm());
		}
	}
	const Wm = [
		{ name: "carModel", type: "gltfModel", path: "/models/vintage_racing_car/vintage_car_light_fixed.glb" },
		{ name: "occlusionTexture", type: "texture", path: "/textures/Stone_Floor_006_SD/Stone_Floor_006_ambientOcclusion.jpg" },
		{ name: "baseTexture", type: "texture", path: "/textures/Stone_Floor_006_SD/Stone_Floor_006_basecolor.jpg" },
		{ name: "heightTexture", type: "texture", path: "/textures/Stone_Floor_006_SD/Stone_Floor_006_height.png" },
		{ name: "normalTexture", type: "texture", path: "/textures/Stone_Floor_006_SD/Stone_Floor_006_normal.jpg" },
		{ name: "roughnessTexture", type: "texture", path: "/textures/Stone_Floor_006_SD/Stone_Floor_006_roughness.jpg" },
	];
	function jm(t, e, n) {
		let { color: i = 65280, scale: r = 1, onInit: s, onUpdate: o } = void 0 === n ? {} : n;
		const a = [],
			l = new Ue({ color: null != i ? i : 65280, wireframe: !0 }),
			c = new oc(),
			h = new oc(),
			u = new oc(),
			d = new fc(),
			p = new xa(1),
			m = new bn(1, 1, 1),
			f = new Vn(10, 10, 10, 10);
		function g(e, n) {
			let i = a[e],
				s = !1;
			return (
				(function (t, e) {
					if (!t) return !1;
					const { geometry: n } = t;
					return (
						(n instanceof xa && e.type === yc.types.SPHERE) ||
						(n instanceof bn && e.type === yc.types.BOX) ||
						(n instanceof Vn && e.type === yc.types.PLANE) ||
						(n.id === e.geometryId && e.type === yc.types.CYLINDER) ||
						(n.id === e.geometryId && e.type === yc.types.CONVEXPOLYHEDRON) ||
						(n.id === e.geometryId && e.type === yc.types.TRIMESH) ||
						(n.id === e.geometryId && e.type === yc.types.HEIGHTFIELD)
					);
				})(i, n) ||
					(i && t.remove(i),
					(a[e] = i =
						(function (e) {
							let n = new _n();
							const {
								SPHERE: i,
								BOX: r,
								PLANE: s,
								CYLINDER: o,
								CONVEXPOLYHEDRON: a,
								TRIMESH: d,
								HEIGHTFIELD: g,
							} = yc.types;
							switch (e.type) {
								case i:
									n = new _n(p, l);
									break;
								case r:
									n = new _n(m, l);
									break;
								case s:
									n = new _n(f, l);
									break;
								case o: {
									const t = new Uo(e.radiusTop, e.radiusBottom, e.height, e.numSegments);
									(n = new _n(t, l)), (e.geometryId = t.id);
									break;
								}
								case a: {
									const t = (function (t) {
										const e = new en(),
											n = [];
										for (let e = 0; e < t.vertices.length; e++) {
											const i = t.vertices[e];
											n.push(i.x, i.y, i.z);
										}
										e.setAttribute("position", new Xe(n, 3));
										const i = [];
										for (let e = 0; e < t.faces.length; e++) {
											const n = t.faces[e],
												r = n[0];
											for (let t = 1; t < n.length - 1; t++) {
												const e = n[t],
													s = n[t + 1];
												i.push(r, e, s);
											}
										}
										return e.setIndex(i), e.computeBoundingSphere(), e.computeVertexNormals(), e;
									})(e);
									(n = new _n(t, l)), (e.geometryId = t.id);
									break;
								}
								case d: {
									const t = (function (t) {
										const e = new en(),
											n = [],
											i = c,
											r = h,
											s = u;
										for (let e = 0; e < t.indices.length / 3; e++)
											t.getTriangleVertices(e, i, r, s),
												n.push(i.x, i.y, i.z),
												n.push(r.x, r.y, r.z),
												n.push(s.x, s.y, s.z);
										return (
											e.setAttribute("position", new Xe(n, 3)),
											e.computeBoundingSphere(),
											e.computeVertexNormals(),
											e
										);
									})(e);
									(n = new _n(t, l)), (e.geometryId = t.id);
									break;
								}
								case g: {
									const t = (function (t) {
										const e = new en(),
											n = t.elementSize || 1,
											i = t.data.flatMap((t, e) => t.flatMap((t, i) => [e * n, i * n, t])),
											r = [];
										for (let e = 0; e < t.data.length - 1; e++)
											for (let n = 0; n < t.data[e].length - 1; n++) {
												const i = t.data[e].length,
													s = e * i + n;
												r.push(s + 1, s + i, s + i + 1), r.push(s + i, s + 1, s);
											}
										return (
											e.setIndex(r),
											e.setAttribute("position", new Xe(i, 3)),
											e.computeBoundingSphere(),
											e.computeVertexNormals(),
											e
										);
									})(e);
									(n = new _n(t, l)), (e.geometryId = t.id);
									break;
								}
							}
							return t.add(n), n;
						})(n)),
					(s = !0)),
				(function (t, e) {
					const {
						SPHERE: n,
						BOX: i,
						PLANE: s,
						CYLINDER: o,
						CONVEXPOLYHEDRON: a,
						TRIMESH: l,
						HEIGHTFIELD: c,
					} = yc.types;
					switch (e.type) {
						case n: {
							const { radius: n } = e;
							t.scale.set(n * r, n * r, n * r);
							break;
						}
						case i:
							t.scale.copy(e.halfExtents), t.scale.multiplyScalar(2 * r);
							break;
						case s:
							break;
						case o:
						case a:
							t.scale.set(1 * r, 1 * r, 1 * r);
							break;
						case l:
							t.scale.copy(e.scale).multiplyScalar(r);
							break;
						case c:
							t.scale.set(1 * r, 1 * r, 1 * r);
					}
				})(i, n),
				s
			);
		}
		return (
			f.translate(0, 0, 1e-4),
			{
				update: function () {
					const n = a,
						i = c,
						r = d;
					let l = 0;
					for (const t of e.bodies)
						for (let e = 0; e !== t.shapes.length; e++) {
							const a = t.shapes[e],
								c = g(l, a),
								h = n[l];
							h &&
								(t.quaternion.vmult(t.shapeOffsets[e], i),
								t.position.vadd(i, i),
								t.quaternion.mult(t.shapeOrientations[e], r),
								h.position.copy(i),
								h.quaternion.copy(r),
								c && s instanceof Function && s(t, h, a),
								!c && o instanceof Function && o(t, h, a)),
								l++;
						}
					for (let e = l; e < n.length; e++) {
						const i = n[e];
						i && t.remove(i);
					}
					n.length = l;
				},
			}
		);
	}
	class qm {
		constructor(t, e) {
			this.setWorldPhysics(t, e);
		}
		setWorldPhysics(t, e) {
			(this.instance = new pp()),
				this.instance.gravity.set(0, -9.82, 0),
				(this.instance.broadphase = new Ih(this.instance)),
				(this.instance.allowSleep = !0),
				(this.instance.solver.iterations = 10);
			const n = new hu("default"),
				i = new cu(n, n, { friction: 0.4, restitution: 0 });
			this.instance.addContactMaterial(i),
				(this.instance.defaultContactMaterial = i),
				t.active && (this.cannonDebugger = new jm(e, this.instance));
		}
		update() {
			this.instance.fixedStep(), this.cannonDebugger && this.cannonDebugger.update();
		}
	}
	let Xm = null;
	class Ym {
		constructor(t) {
			if (Xm) return Xm;
			(Xm = this),
				(window.experience = this),
				(this.canvas = t),
				(this.debug = new Gm()),
				(this.sizes = new Yl()),
				(this.time = new Zl()),
				(this.scene = new _s()),
				(this.worldPhysics = new qm(this.debug, this.scene)),
				(this.resources = new Am(Wm)),
				(this.camera = new tc()),
				(this.renderer = new ec()),
				(this.world = new zp()),
				this.world.resources.on("ready", () => {
					this.car = this.world.car;
				}),
				this.sizes.on("resize", () => {
					this.resize();
				}),
				this.time.on("tick", () => {
					this.update();
				});
		}
		resize() {
			this.camera.resize(), this.renderer.resize();
		}
		update() {
			this.renderer.update(), this.worldPhysics.update(), this.car && this.car.update();
		}
		destroy() {
			this.sizes.off("resize"),
				this.time.off("tick"),
				this.scene.traverse((t) => {
					if (t instanceof _n) {
						t.geometry.dispose();
						for (const e in t.material) {
							const n = t.material[e];
							n && "function" == typeof n.dispose && n.dispose();
						}
					}
				}),
				this.camera.controls.dispose(),
				this.renderer.instance.dispose(),
				this.debug.active && this.debug.gui.destroy();
		}
	}
	new Ym(document.querySelector("canvas.webgl"));
})();
//# sourceMappingURL=bundle.5d18370673e89cf3.js.map
