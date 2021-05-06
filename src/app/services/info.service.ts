import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getInsuranceOptions() {
    return [
      {
        title: 'ביטוח רכב',
        description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר',
        icon: 'drive_eta'
      },
      {
        title: 'ביטוח דירה',
        description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר',
        icon: 'home'
      },
      {
        title: 'ביטוח חיים',
        description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר',
        icon: 'healing'
      },
      {
        title: 'ביטוח לעסקים',
        description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר',
        icon: 'store'
      },
      {
        title: 'ביטוח בריאות',
        description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר',
        icon: 'spa'
      }
    ]
  }

  getCompaniesImg() {
    return [
      { path: './assets/imgs/ayalon.png' },
      { path: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.18169-9/20264692_1497520173640284_3163159117058264403_n.png?_nc_cat=111&ccb=1-3&_nc_sid=9267fe&_nc_ohc=3wlzt5N-X3UAX-oRkvs&_nc_ht=scontent.ftlv2-1.fna&oh=efb4362092af0fe2cb940e2e95606dca&oe=60ABB2A4' },
      { path: './assets/imgs/clal.png' },
      { path: 'http://www.igudbit.org.il/_uploads/extraimg/btlogo.png' },
      { path: './assets/imgs/haphenix.png' },
      { path: './assets/imgs/harel.png' },
      { path: './assets/imgs/menora.png' },
      { path: './assets/imgs/migdal.png' },
      { path: 'https://selam.co.il/wp-content/themes/sela/img/logos/logo1.png' },
      { path: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.6435-9/101539101_266215744732517_4576659748379688960_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lzu712LuhlwAX9oKYQX&_nc_ht=scontent.ftlv2-1.fna&oh=79d6872f03904dee8f14bab5b251bac5&oe=60AC18FD' },
    ]
  }
  getAdvantages() {
    return [
      {
        title: 'שירות אישי ומהיר',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABENSURBVHic7Z17rF1Vncc/v9Pbin2ItMVStUXF1j5kIlgg0jbhlvZiYqoGRSJE/zFDjAkNJGQIEkscJLSEhMnEEBNjNDGtDAkwiFGpfRApaNurtALS3oqOndLHQIHLW0vvb/74rdOe3p6z1tp7r332Obfnm6zcpmfv9Xvu9fyt3xJVZaxBRM4G5rgyFzgPmApMASa7v/V/A7wBvO5K/d8vA88DQ8BeYK+qvtg+KdoD6XYHEJEzgaVAP7AE+ARwZknkhoE9wFZgC/C4qg6XRKst6DoHEJHxwOXAMszoFwDjKmLnGPAU5gybgU2qerQiXnKhaxxARBYD1wJfAaZVzE4rHAHuB9ap6hNVMxODjnYAEZkLfA0z/EcrZicr/gasA36qqkNVM9MKHekAInIxcAvwBUAqZqcoFHgYuFNVt1fNzGh0lAOIyHLM8Muq5qUkbMYcYWPVjNTREQ4gIgPAHcCikkiMAIc4dar3hvu9PjVsnCKeA9RK4mcQuFVVN5RUfzQqdQARmQ3cA1yZqEoFngWeBnY3lCFVfScjb2dgawjzGsr5wELSdUsPAjeq6r5E9WVGJQ4gIhOAm4BbgYkFq3sOm4ZtAR5T1ZcK1ueFiEwHLsOmoP3A/IJVvoW1fner6j8L1pUdqtrWAizHVte0QBkEVgEz281/E3lmOl4GC8o0BCxvO/9tVFQfsBbrj/MoaD+wBlhQtdE9Mi5wPO7PKeOI01HfmHIAYBbwRE6l7ASuAmpVGziDvDXH886cMj8BzBoTDgCsxFbIsiphG7CyamMmkn9bDvmPtEP+MgUX15xlFXwXsKJqw5WgjxVOtqz6WIsbrHeNAwDjsWXQLIIOAzcA46o2VolOMM7JOJxRN+uA8V3hAMAk4NEcAlY+om+jI8zM8YE8CkzqaAcApgPbMwh1cCw29xn0tcLpIFZf24HpHekAwGwsWCJWmI3AjKqNUHUBZjhdxOptDzC7oxzAffmxxj8GrKaLpnVtcIKa08mxDE6QpCUovBQsIpOwZdiLIh5/BfiSqm4pRHSMQkT6gQeAsyIe3wH0q+qbRWgW2u1y4VkPEmf8F4ClPeO3htPNUkxXIVwEPOhskBu5HUBEBPgJMBDx+B5gsao+m5fe6QKno8WYzkIYAH7ibJELRVqANcA1Ec8NAktU9e8FaJ1WcLpagukuhGswW+RCrjGAiKwEfh7x6CCwTFVfz0ykB0RkChZFFBMo83lVfSQzjawOICKzsE2OqYFH92Bffqn782MdLv5gK3bewYeXgU+p6v9mqT9TFyAifcB9hI3/AnBFz/jF4XR4BeGB4VTgPmejaGQdA9wBXBp45hXM+L0+PxGcLq/AdOvDpZiNohHdBbiI3Q344+FGsKiW3lSvBLh1go34P1wFBjQy8jiqBXAxfPcSDob8bs/45cHp9ruBxwS419ksiNgu4CbspK0Pm4DvRdbXQ358D9O1D3MwmwUR7AJc6PZz+KN3D2Ej0MMxRHsoBhGZgc3EzvE89hYwXwMh5zEtwD2EQ7e/3jN+++B0/fXAYxMx23nhdQB3Yid0aGO9qv4mRKiHtHA6Xx947Epnw5bwdgEisgP/KtRrwDxVPRhgpIcSICIzsZNP7/M8NqiqLTfrWrYAbtoXWoK8rWf86uB0f1vgsUXOlk3RsgUQkU34T+n+CbhQVY+FGO2hPIjIOOCPwL94Htusqpc3+6FpC+DO54eOaN/UM371cDYITfmWOZueglZdwC2BCrf3Bn6dA2eLUPKJpjY9pQtwaVl241/1y7X12EN5iNiiV2zAflK6mmYtwNfwG39Xz/idB2eTXZ5HBLPtSWjmANcGaGXabeqhrQjZ5hTbntQFuFRsWz0VvIDFpI/kYs8DF9f2KSzhwgddeQc44Mo2VY0JlqwcIvIh4BJOyHEGJ+R4DtipRcOxm9OtAfuAD3keW6KNKexGxaffiz8efU0JMfFLgB865YTi4Z8Cbgc+XHUsfxM5Pux4eypCjgNO5iUl8LEmQPvek55veHE88FLg5WTJGbCv/ZcRympW3gbuBqZ1gOGnOV7ezinLL7GNtFT8LAjQe4mGg6aNL3428OJgIgYF29POmymksRyhgrQqDbIsJ1/ug9FlxOkkyTFwwulqPtvMAe4KvLQqAWOTgYcSKKyxvAvcUIHxb3C0U8ryEDA5AW+rAnTuauYAOwIvFTq+jX35WQ5BZi3Xt9H415cox0YKtgTY8XMfjR0nOQCWXt3nzX9OoLQvlqg0Bd4EJrbB+BMdrTJl+WICPv/sqf9d4ExVPb4OsBR/yvUtnt9icUmCOnyYiCVyLBvnUzy3YQgpdOWz2TjM5tRjyPsLVBaLmDMCg8Aj2O7WH7GW6ULg09gixgcS0CiKGBr/h2UA+QMmxzAmx4VY0qjQNvuRIgw6bAG+5fm9H/hFvbnwZbEaIcFZdCxQ8Z0WNN4CbsSTMwCbbq338DlIicmUGvgQ/KPs9Ximp9jq641O5mbvvwPMScDndPwzrW2NY4BXPQ8+nVB532jiBL/NIjA2lhi9aPQ/wMKyjd/Aw0JHs5GHA2Tou90H8dsmxv9GQj6f9tj1VVVFgLOxJqsVfqaqMaeAoyAic7B7AKZhLc/D6rjNUMf7gauBj2M7l/+lqm/430oLEZnseJgH/MXx8GrGOgTTxSVYs/+wqu5NyON64KueRz4g2HEi3/Umt6nqv6diqof2QURW4z9IsrhG+MDH7nQs9dBmhGw3p4blxC9SSQ+di5Dt5tawSxVbYQRLY95Dd2IIs2ErnFfDf9b/kGa8aaOHzoGz3SHPI1Nr2P04rdBL7dL98NlwSo0T9+dmfbmH7oDPhpNDLUBb59Y9lAKfDaf0uoCxj0JdQK8F6H74bDi5rIsRe+gS1Ah4SLsY6aE0eFv4PqyPaLUW4Bsf5IaInIUtQfdaIMMIsFdVQ2ng8sA7xqs7QCskbQFcvqEfEpdg+rSDiGwA/lXTXiXrneaHuoBkLYCIvAf4FT3j+zAA/MrpKhW80/wagWlCQka+jB1a6MGPBZiuUsHbBdSwJMOtcI67RTsFLkhUz+mAJLpytvOlknu5BjzveSBmuzgWvTWFeKTS1Vz8A+3na4S3e+clYqYrTvZ2CFLpKmS7oRoQikFL5QAHEtVzOiCVrkK229tH+xwg5NU/Iu6KlLGARViEdCu0qwXY26eqL4rIMHYIoxlSnbYJefVhVf1BIlodDREJZfJI1QL4bDesqi/WBwi+G6oWumtLiuJF4Kjn988koNEt8Ml6FNNVITibLfQ8sgdOjBB9aWEEuKwoQy7235dV9CKX9HBMw8nou2fxYNZzEi1wGf5kX1vhhAOEzv6Fzg7G4mnPb5OBTyai08n4JP7lWZ+OsiDqvGfdAR7H7q3NW1ksHg78HrqPaCwgJGNIR7Hw2ewYZnNzAFUdxpIbtcJ8l5m6KB7BzqW1wil57MYgfDIqpqNCcLaa73nkKWfzk1aJQt3AVUUZU9VDwO89j3xGRC4sSqdT4WTzDQB/73RUFCFbHbd1owNsDrwUuqEiFqEm7vpEdDoRIdlSNf8hW52wdcNR4rakicMWJ3w03iZBPoJOK9h5/VAquXkJ6GRKE3e8BVDVo8D9BT0rCFXdjX/d4QzguqJ0OhDXYbK1wh6nm6II2eh+Z2vDKO9ZjN979uPJ4pHBS28O0Hkd+EjVX23Cr/8jTiafzDcnoFNzNvLRWXzSO00q+WuggqsSMPreCEYLp0vrhEJcerz9wHsT0LoqQOevo99ptle8rsn/NeLWwO9BqOrbwOrAY5czNrqC6zBZfFjtdFIUIducatsmXjSXcBrXlYmaq2cCdF7DspNX/iXnlHG2k8En4zOk6VZXBuiMAHNPea9FZaF0rtsSKehzAToK/A6YVLUxc8g2yfEeku9ziej5Mr0p8FDT91pUdnEE4ysSMf5YBK0NwISqjZpBpgmO55BcjyWityKC1sXRDuAq3RSocBcwLgHzi7At0JAAD6Sg1wbjj3O8huQ5CixKRG9XgNamlu97Kl4eIUSSLN3ANyNoKfBjOnhmgI34fxwpyzcT0bwhglbLlPqhykMZxIcpmEW8gdb3IxX338DUqo3dhP+pjrcYGb6fiOZMZwMfrR3eOgIEBiKEWZdImD7C3U697GPUgkbFxl/seIrhfRPQl4juugh6A7kdwBGJ6c9SDQinYkGqMYp8F5v3Fp5CFeC35niIvThib6rWi7iB3wPBeiIIzSacH/8gMCORYPMjmrXG8iQVXBuDjZGezMDnMDA/Ee0ZTuc+em8SsYYSS/DbEQJuTPU1YlEzhzMoV7F0t97mLhFvA45WFt4OA5cmol8j7uaVb0fVF0l0AnaCKER0dUJFzwZ2ZlS0Yosv15BwoIh1TdcQt7AzuuyM+RIz8LI6guYQkesmWQgvJ7xEfAzoTyjsJOLGIK14eRL4DrbWED19xKZzi9y7T7q68vDwAAlXMbE4vxAvI2ToEk+5PNoHEVkL/FvgsVeApar6bHTFfpr1a+a+U7Cq17ADF4dHFbA+tbF8EHhfQXq3Y5nW4xXsgYgsxAI5zwo8epeq3hxdcUYP7COu/9sPnJvK8x3tq8k2OKyqDANXJ5b9XMLb5+psk2mKmYeZWcRdlribxKFdWFjVfwD/6ABDjy7/cLyVIfPuCPpHgFmZ68/JVGjrsV52AFNSKsTR/xjwM9LcPlq0jDhePlaCnFMIr8bWS64t+iLMrc3gBKUEeWIDtc0VGn8zCTZ0Wsg2PYPx1+amU4BBIW4pUrEm7NwyFOV4WQr8J/HLsUXKPkdraYnynEtcs6/OBrk3yIoyOh54NJLR/bThZi/sjsHbCUcbZSnPuDo/3Qb+FxI34FOn+/FF6GWaBjaDiEzCTpr4TrzW8QrwJVXdUohoJETk49it6LOxqd3Mhr+j8yEMY8urBxr+7gN+rap/aRO//djaQWiqB9Y99Kvqm4WIJvLa6Visf4zXHsNWsyrbxHE8T8SuyzmPNtw5HOCl5nQSu+C0h0TjqpRCzM7gBIqtZyfZQOrmgi08ZblVfQ8pl5YTCzMd2J5BmIMk2kruxoJt6YZ29RrL9lRffikO4ISaRPzAsHEkmySyqBsKNgaJnUE1DviSR0eXJeD4HAIOY/FtHR/4WUAv45yMWZe011FwtN9WB3DCCvGLRY1l11jsFlxzH4rebVbWUmIgbDsEX0nc3sHoso0EJ5CqLk7+0KGNZuVIO+RvlxJmkT2Kpl52YoceK502ZpS35njOE9CiTleZN3Y61gGcUvpcc5Z3A2c/sIYESSpKlHGB4zF2JW90GXE6ShI13FEO0KCk5cSFl/nKILCKDpg5YCP6VY6nIjINUUFwa+Gl4DwQkQnATVhI9cSC1T2HLUVvwc7avVSwPi9cBs7LsPCsfvzZuGLwFnAHcLeq/rNgXZlRiQMcJ253CN0DXJmoSgWexZIt7m4oQ5rxEmx32cJcLKdRvZyPbdb4MnBmwYPAjZr2jqBMqNQBjjMhMoB9BYtKIjGC3aL9uitvNPwFy9w5peHvFOymjbJuNRsEblXVDSXVH42OcIA6RGQ5cAuwrGpeSsJm4E5V3Vg1I3V0lAPUISIXY47wBdI1t1VBsfx/d6rq9qqZGY2OdIA6RGQullr1WuCjFbOTFX/DlnB/qqqha3kqQ0c7QCNEZDHmCF8BplXMTiscwXItrlPVJ6pmJgZd4wB1iMh4LOvWMmwadgG2yVIFjmFJtrdg/fsmbUzC2AXoOgcYDRE5EwsK7QeWAJ+g9fU3RTGMBWRsxYz+uLqs292KrneAZhCRs7HLqedgc/nzsAOeo6d69Ysb6tPCxiniy9idikPYuf69qlr4KpdOw/8D/jRttotXYvwAAAAASUVORK5CYII=',
        description: 'איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט'
      },
      {
        title: 'רכב חלופי ',
        icon: './assets/imgs/icons/icon1.svg',
        description: 'איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט'
      },
      {
        title: 'המחיר הכי זול בשוק',
        icon: './assets/imgs/icons/money-bag.svg',
        description: 'איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט'
      },
      {
        title: 'עוד משהו על ביטוח',
        icon: './assets/imgs/icons/icon1.svg',
        description: 'איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט'
      },
    ]
  }
}
