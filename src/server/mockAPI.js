const json = {
  "status": {
    "code": "0",
    "msg": "OK",
    "credits": "1"
  },
  "model": "general_en",
  "score_tag": "P+",
  "agreement": "AGREEMENT",
  "subjectivity": "OBJECTIVE",
  "confidence": "100",
  "irony": "NONIRONIC",
  "sentence_list": [
    {
      "text": "The restaurant was great even though it’s not near Madrid.",
      "inip": "0",
      "endp": "57",
      "bop": "y",
      "confidence": "100",
      "score_tag": "P+",
      "agreement": "AGREEMENT",
      "segment_list": [
        {
          "text": "The restaurant was great even though it’s not near Madrid",
          "segment_type": "main",
          "inip": "0",
          "endp": "56",
          "confidence": "100",
          "score_tag": "P+",
          "agreement": "AGREEMENT",
          "polarity_term_list": [
            {
              "text": "great",
              "inip": "19",
              "endp": "23",
              "confidence": "100",
              "score_tag": "P+",
              "sentimented_concept_list": [
                {
                  "form": "restaurant",
                  "id": "4d5e117421",
                  "variant": "restaurant",
                  "inip": "4",
                  "endp": "13",
                  "type": "Top>Location>Facility",
                  "score_tag": "P+"
                }
              ]
            }
          ],
          "sentimented_entity_list": [
            {
              "form": "Madrid",
              "id": "3d0a16c68d",
              "variant": "Madrid",
              "inip": "51",
              "endp": "56",
              "type": "Top>Location>GeoPoliticalEntity>City",
              "score_tag": "NONE"
            }
          ]
        }
      ],
      "sentimented_entity_list": [
        {
          "form": "Madrid",
          "id": "3d0a16c68d",
          "type": "Top>Location>GeoPoliticalEntity>City",
          "score_tag": "NONE"
        }
      ],
      "sentimented_concept_list": [
        {
          "form": "restaurant",
          "id": "4d5e117421",
          "type": "Top>Location>Facility",
          "score_tag": "P+"
        }
      ]
    }
  ],
  "sentimented_entity_list": [
    {
      "form": "Madrid",
      "id": "3d0a16c68d",
      "type": "Top>Location>GeoPoliticalEntity>City",
      "score_tag": "NONE"
    }
  ],
  "sentimented_concept_list": [
    {
      "form": "restaurant",
      "id": "4d5e117421",
      "type": "Top>Location>Facility",
      "score_tag": "P+"
    }
  ]
};

module.exports = json;
